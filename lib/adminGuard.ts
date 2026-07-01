import { NextResponse } from "next/server";
import { getAdminConfigError, isAdminConfigured, isAdminRequest } from "@/lib/adminAuth";
import { getServerSupabaseKey } from "@/lib/supabaseRest";

export function guardAdminRequest() {
  if (!isAdminConfigured()) {
    return NextResponse.json({ error: getAdminConfigError() }, { status: 500 });
  }

  if (!getServerSupabaseKey()) {
    return NextResponse.json({ error: "Supabase server key is not configured." }, { status: 500 });
  }

  if (!isAdminRequest()) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  return null;
}

export function cleanText(value: unknown, maxLength = 1500) {
  if (value === undefined || value === null) return null;
  const text = String(value).trim();
  return text.length ? text.slice(0, maxLength) : null;
}
