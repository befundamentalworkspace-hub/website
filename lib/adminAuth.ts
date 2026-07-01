import { createHash, createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "fundamental_admin_session";

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

type AdminCredentials = {
  username?: string;
  password?: string;
  token?: string;
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

export function isAdminConfigured() {
  return Boolean(getPasswordHash());
}

export function getAdminConfigError() {
  return isAdminConfigured() ? "" : "Admin authentication is not configured.";
}

export function getAdminSessionMaxAge() {
  return SESSION_MAX_AGE_SECONDS;
}

export function getAdminSessionValue() {
  const expiresAt = Date.now() + SESSION_MAX_AGE_SECONDS * 1000;
  const signature = createHmac("sha256", getSessionSecret()).update(String(expiresAt)).digest("hex");

  return `${expiresAt}.${signature}`;
}

export function verifyAdminCredentials({ username, password, token }: AdminCredentials) {
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
