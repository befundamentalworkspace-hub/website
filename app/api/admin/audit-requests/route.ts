import { NextResponse } from "next/server";
import { guardAdminRequest, cleanText } from "@/lib/adminGuard";
import { getServerSupabaseKey, supabaseRest } from "@/lib/supabaseRest";

const allowedStatuses = new Set(["new", "reviewed", "contacted", "qualified", "not_fit"]);

type AuditUpdate = {
  id?: string;
  status?: string;
  internalNotes?: string;
};

export async function GET() {
  const authError = guardAdminRequest();
  if (authError) return authError;

  try {
    const requests = await supabaseRest("request_audits", {
      key: getServerSupabaseKey(),
      query:
        "select=id,created_at,name,clinic_name,city,specialty,website,instagram,monthly_enquiries,main_problem,budget_range,preferred_contact,notes,status,source,internal_notes&order=created_at.desc"
    });

    return NextResponse.json({ requests });
  } catch (error) {
    console.error("Failed to load audit requests", error);
    return NextResponse.json({ error: "Could not load audit requests." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const authError = guardAdminRequest();
  if (authError) return authError;

  const body = (await request.json().catch(() => null)) as AuditUpdate | null;
  if (!body?.id) {
    return NextResponse.json({ error: "Request id is required." }, { status: 400 });
  }

  const update: Record<string, string | null> = {};

  if (body.status !== undefined) {
    if (!allowedStatuses.has(body.status)) {
      return NextResponse.json({ error: "Unsupported status." }, { status: 400 });
    }
    update.status = body.status;
  }

  if (body.internalNotes !== undefined) {
    update.internal_notes = cleanText(body.internalNotes, 3000);
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "Nothing to update." }, { status: 400 });
  }

  try {
    await supabaseRest<null>("request_audits", {
      key: getServerSupabaseKey(),
      method: "PATCH",
      query: `id=eq.${encodeURIComponent(body.id)}`,
      body: update,
      prefer: "return=minimal"
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to update audit request", error);
    return NextResponse.json({ error: "Could not update audit request." }, { status: 500 });
  }
}
