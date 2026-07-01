import { NextResponse } from "next/server";
import { getAdminConfigError, isAdminConfigured, isAdminRequest } from "@/lib/adminAuth";
import { getServerSupabaseKey, supabaseRest } from "@/lib/supabaseRest";

type MetaTagUpdate = {
  id?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
};

export async function GET() {
  const authError = guardAdminRequest();
  if (authError) return authError;

  try {
    const posts = await supabaseRest("blog_posts", {
      key: getServerSupabaseKey(),
      query:
        "select=id,title,slug,status,seo_title,seo_description,seo_keywords,published_at,updated_at&order=updated_at.desc"
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Failed to load admin meta tags", error);
    return NextResponse.json({ error: "Could not load blog meta tags." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const authError = guardAdminRequest();
  if (authError) return authError;

  const body = (await request.json().catch(() => null)) as MetaTagUpdate | null;
  if (!body?.id) {
    return NextResponse.json({ error: "Post id is required." }, { status: 400 });
  }

  const update = {
    seo_title: clean(body.seoTitle, 120),
    seo_description: clean(body.seoDescription, 180),
    seo_keywords: clean(body.seoKeywords, 300),
    updated_at: new Date().toISOString()
  };

  try {
    await supabaseRest<null>("blog_posts", {
      key: getServerSupabaseKey(),
      method: "PATCH",
      query: `id=eq.${encodeURIComponent(body.id)}`,
      body: update,
      prefer: "return=minimal"
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to update blog meta tags", error);
    return NextResponse.json({ error: "Could not update meta tags." }, { status: 500 });
  }
}

function guardAdminRequest() {
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

function clean(value: unknown, maxLength: number) {
  if (value === undefined || value === null) return null;
  const text = String(value).trim();
  return text.length ? text.slice(0, maxLength) : null;
}
