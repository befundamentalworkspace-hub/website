import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, getAdminSessionValue, isAdminConfigured } from "@/lib/adminAuth";

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return NextResponse.json({ error: "Admin token is not configured." }, { status: 500 });
  }

  const body = (await request.json().catch(() => null)) as { token?: string } | null;

  if (!body?.token || body.token !== process.env.ADMIN_PANEL_TOKEN) {
    return NextResponse.json({ error: "Invalid admin token." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, getAdminSessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });

  return response;
}
