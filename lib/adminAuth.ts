import { createHash } from "crypto";
import { cookies } from "next/headers";

export const ADMIN_SESSION_COOKIE = "fundamental_admin_session";

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_PANEL_TOKEN);
}

export function getAdminSessionValue() {
  const token = process.env.ADMIN_PANEL_TOKEN;
  if (!token) return "";
  return createHash("sha256").update(token).digest("hex");
}

export function isAdminRequest() {
  const session = cookies().get(ADMIN_SESSION_COOKIE)?.value;
  return Boolean(session && session === getAdminSessionValue());
}
