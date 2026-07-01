import { createHash, createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { getPublicSupabaseKey, getServerSupabaseKey, getSupabaseUrl, supabaseRest } from "@/lib/supabaseRest";

export const ADMIN_SESSION_COOKIE = "fundamental_admin_session";

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;
const SUPABASE_AUTH_PROVIDER = "supabase";

type AdminCredentials = {
  username?: string;
  password?: string;
  token?: string;
};

type SupabaseAuthResponse = {
  user?: {
    email?: string | null;
  } | null;
};

type AdminUserRow = {
  email: string;
  is_active: boolean | null;
};

function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function safeCompare(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

function getExpectedUsername() {
  return process.env.ADMIN_USERNAME || process.env.ADMIN_EMAIL || "";
}

function getAdminAuthProvider() {
  const configuredProvider = (process.env.ADMIN_AUTH_PROVIDER || "").toLowerCase();

  if (configuredProvider === SUPABASE_AUTH_PROVIDER) {
    return SUPABASE_AUTH_PROVIDER;
  }

  return "env";
}

function getPasswordHash() {
  const configuredHash =
    process.env.ADMIN_PASSWORD_SHA256 ||
    process.env.ADMIN_PASSWORD_HASH ||
    process.env.ADMIN_PANEL_TOKEN_SHA256 ||
    process.env.ADMIN_PANEL_TOKEN_HASH;

  if (configuredHash) {
    return configuredHash.toLowerCase();
  }

  const rawSecret = process.env.ADMIN_PASSWORD || process.env.ADMIN_PANEL_TOKEN || "";
  return rawSecret ? sha256(rawSecret) : "";
}

function getSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || getPasswordHash();
}

function isSupabaseAdminConfigured() {
  return Boolean(getPublicSupabaseKey() && getServerSupabaseKey() && getSessionSecret());
}

export function isAdminConfigured() {
  if (getAdminAuthProvider() === SUPABASE_AUTH_PROVIDER) {
    return isSupabaseAdminConfigured();
  }

  return Boolean(getPasswordHash());
}

export function getAdminConfigError() {
  if (isAdminConfigured()) {
    return "";
  }

  if (getAdminAuthProvider() === SUPABASE_AUTH_PROVIDER) {
    return "Supabase admin authentication is not configured.";
  }

  return "Admin authentication is not configured.";
}

export function getAdminSessionMaxAge() {
  return SESSION_MAX_AGE_SECONDS;
}

export function getAdminSessionValue() {
  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const signature = createHmac("sha256", getSessionSecret()).update(String(expiresAt)).digest("hex");

  return `${expiresAt}.${signature}`;
}

function getAllowedAdminEmails() {
  const emails = process.env.ADMIN_EMAILS || process.env.ADMIN_EMAIL || "";
  return emails
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

async function isAllowedSupabaseAdmin(email: string) {
  const allowedEmails = getAllowedAdminEmails();
  if (allowedEmails.length > 0) {
    return allowedEmails.includes(email.toLowerCase());
  }

  const query = new URLSearchParams({
    select: "email,is_active",
    email: `eq.${email}`,
    is_active: "eq.true",
    limit: "1"
  }).toString();

  const rows = await supabaseRest<AdminUserRow[]>("admin_users", {
    key: getServerSupabaseKey(),
    query,
    cache: "no-store"
  });

  return rows.some((row) => row.email.toLowerCase() === email.toLowerCase() && row.is_active === true);
}

async function verifySupabaseAdminCredentials({ username, password, token }: AdminCredentials) {
  if (!isSupabaseAdminConfigured()) {
    return false;
  }

  const email = (username || "").trim().toLowerCase();
  const submittedSecret = password || token || "";

  if (!email || !submittedSecret) {
    return false;
  }

  const publicKey = getPublicSupabaseKey();
  const url = new URL("/auth/v1/token", getSupabaseUrl());
  url.searchParams.set("grant_type", "password");

  const response = await fetch(url, {
    method: "POST",
    cache: "no-store",
    headers: {
      apikey: publicKey,
      Authorization: `Bearer ${publicKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password: submittedSecret })
  });

  if (!response.ok) {
    return false;
  }

  const body = (await response.json().catch(() => null)) as SupabaseAuthResponse | null;
  const authenticatedEmail = (body?.user?.email || email).toLowerCase();

  return isAllowedSupabaseAdmin(authenticatedEmail);
}

function verifyEnvAdminCredentials({ username, password, token }: AdminCredentials) {
  if (!isAdminConfigured()) {
    return false;
  }

  const expectedUsername = getExpectedUsername();
  if (expectedUsername && !safeCompare((username || "").trim(), expectedUsername)) {
    return false;
  }

  const submittedSecret = password || token || "";
  if (!submittedSecret) {
    return false;
  }

  return safeCompare(sha256(submittedSecret), getPasswordHash());
}

export async function verifyAdminCredentials(credentials: AdminCredentials) {
  if (getAdminAuthProvider() === SUPABASE_AUTH_PROVIDER) {
    return verifySupabaseAdminCredentials(credentials);
  }

  return verifyEnvAdminCredentials(credentials);
}

export function isAdminRequest() {
  const session = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  if (!session || !isAdminConfigured()) {
    return false;
  }

  const [expiresAt, signature] = session.split(".");
  const expires = Number(expiresAt);

  if (!expires || expires < Date.now() || !signature) {
    return false;
  }

  const expectedSignature = createHmac("sha256", getSessionSecret()).update(expiresAt).digest("hex");
  return safeCompare(signature, expectedSignature);
}
