import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  getAdminConfigError,
  getAdminSessionMaxAge,
  getAdminSessionValue,
  isAdminConfigured,
  verifyAdminCredentials
} from "@/lib/adminAuth";

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json({ error: getAdminConfigError() }, { status: 500 });
  }

  const body = (await request.json().catch(() => null)) as {
    username?: string;
    password?: string;
    token?: string;
  } | null;

  if (!body || !(await verifyAdminCredentials(body))) {
    return NextResponse.json({ error: "Invalid admin credentials." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, getAdminSessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: getAdminSessionMaxAge()
  });

  return response;
}
