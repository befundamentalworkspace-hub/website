import { NextResponse } from "next/server";
import { getPublicSupabaseKey, getServerSupabaseKey, supabaseRest } from "@/lib/supabaseRest";

const requiredFields = ["fullName", "clinicName", "city", "specialty", "contactDetail", "mainProblem", "preferredContact"] as const;

type AuditRequestPayload = {
  fullName?: string;
  clinicName?: string;
  city?: string;
  specialty?: string;
  contactDetail?: string;
  website?: string;
  instagram?: string;
  monthlyEnquiries?: string;
  mainProblem?: string;
  budgetRange?: string;
  preferredContact?: string;
  notes?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  landingPage?: string;
  firstLandingPage?: string;
  timestamp?: string;
};

export async function POST(request: Request) {
  const supabaseKey = getServerSupabaseKey() || getPublicSupabaseKey();

  if (!supabaseKey) {
    return NextResponse.json({ error: "Supabase key is not configured." }, { status: 500 });
  }

  const payload = (await request.json().catch(() => null)) as AuditRequestPayload | null;
  if (!payload) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const missing = requiredFields.filter((field) => !clean(payload[field]));
  if (missing.length > 0) {
    return NextResponse.json({ error: "Required fields are missing.", fields: missing }, { status: 400 });
  }

  if (payload.website && !isUrl(payload.website)) {
    return NextResponse.json({ error: "Website must be a full URL." }, { status: 400 });
  }

  if (payload.instagram && !isUrl(payload.instagram)) {
    return NextResponse.json({ error: "Instagram must be a full URL." }, { status: 400 });
  }

  const record = {
    name: clean(payload.fullName),
    clinic_name: clean(payload.clinicName),
    city: clean(payload.city),
    specialty: clean(payload.specialty),
    preferred_contact: clean(payload.preferredContact),
    website: clean(payload.website),
    instagram: clean(payload.instagram),
    monthly_enquiries: clean(payload.monthlyEnquiries),
    main_problem: clean(payload.mainProblem),
    budget_range: clean(payload.budgetRange),
    notes: buildNotes(payload),
    source: "website_audit_form"
  };

  try {
    await supabaseRest<null>("request_audits", {
      key: supabaseKey,
      method: "POST",
      body: record,
      prefer: "return=minimal"
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to save audit request", error);
    return NextResponse.json({ error: "Could not save audit request." }, { status: 500 });
  }
}

function buildNotes(payload: AuditRequestPayload) {
  const lines = [
    `Contact detail: ${clean(payload.contactDetail)}`,
    payload.notes ? `Notes: ${clean(payload.notes)}` : null,
    payload.utmSource ? `UTM source: ${clean(payload.utmSource)}` : null,
    payload.utmMedium ? `UTM medium: ${clean(payload.utmMedium)}` : null,
    payload.utmCampaign ? `UTM campaign: ${clean(payload.utmCampaign)}` : null,
    payload.utmTerm ? `UTM term: ${clean(payload.utmTerm)}` : null,
    payload.utmContent ? `UTM content: ${clean(payload.utmContent)}` : null,
    payload.gclid ? `Google click id: ${clean(payload.gclid)}` : null,
    payload.fbclid ? `Meta click id: ${clean(payload.fbclid)}` : null,
    payload.referrer ? `Referrer: ${clean(payload.referrer)}` : null,
    payload.landingPage ? `Landing page: ${clean(payload.landingPage)}` : null,
    payload.firstLandingPage ? `First landing page: ${clean(payload.firstLandingPage)}` : null,
    payload.timestamp ? `Submitted at: ${clean(payload.timestamp)}` : null
  ];

  return lines.filter(Boolean).join("\n");
}

function clean(value: unknown) {
  if (value === undefined || value === null) return null;
  const text = String(value).trim();
  return text.length > 0 ? text.slice(0, 1500) : null;
}

function isUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
