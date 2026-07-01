import { NextResponse } from "next/server";
import { guardAdminRequest, cleanText } from "@/lib/adminGuard";
import { getServerSupabaseKey, supabaseRest } from "@/lib/supabaseRest";

const allowedStatuses = new Set(["draft", "published", "archived"]);

type BlogPostPayload = {
  id?: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  featuredImageUrl?: string;
  author?: string;
  tags?: string[];
  status?: string;
  readTime?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
};

export async function GET(request: Request) {
  const authError = guardAdminRequest();
  if (authError) return authError;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const query = id
    ? `select=*&id=eq.${encodeURIComponent(id)}&limit=1`
    : "select=id,created_at,updated_at,title,slug,excerpt,author,tags,status,read_time,seo_title,seo_description,seo_keywords,published_at&order=updated_at.desc";

  try {
    const posts = await supabaseRest("blog_posts", {
      key: getServerSupabaseKey(),
      query
    });

    return NextResponse.json(id ? { post: Array.isArray(posts) ? posts[0] ?? null : null } : { posts });
  } catch (error) {
    console.error("Failed to load blog posts", error);
    return NextResponse.json({ error: "Could not load blog posts." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const authError = guardAdminRequest();
  if (authError) return authError;

  const body = (await request.json().catch(() => null)) as BlogPostPayload | null;
  const validationError = validatePost(body);
  if (validationError) return validationError;

  const status = normalizeStatus(body?.status);
  const now = new Date().toISOString();

  try {
    const posts = await supabaseRest("blog_posts", {
      key: getServerSupabaseKey(),
      method: "POST",
      body: {
        ...toPostRecord(body),
        status,
        published_at: status === "published" ? now : null
      },
      prefer: "return=representation"
    });

    return NextResponse.json({ post: Array.isArray(posts) ? posts[0] : posts });
  } catch (error) {
    console.error("Failed to create blog post", error);
    return NextResponse.json({ error: "Could not create blog post." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const authError = guardAdminRequest();
  if (authError) return authError;

  const body = (await request.json().catch(() => null)) as BlogPostPayload | null;
  if (!body?.id) {
    return NextResponse.json({ error: "Post id is required." }, { status: 400 });
  }

  const update: Record<string, unknown> = {
    updated_at: new Date().toISOString()
  };

  if (body.title !== undefined || body.slug !== undefined || body.content !== undefined) {
    const validationError = validatePost(body, true);
    if (validationError) return validationError;
    Object.assign(update, toPostRecord(body));
  } else {
    Object.assign(update, toPartialPostRecord(body));
  }

  if (body.status !== undefined) {
    const status = normalizeStatus(body.status);
    update.status = status;
    update.published_at = status === "published" ? new Date().toISOString() : null;
  }

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
    console.error("Failed to update blog post", error);
    return NextResponse.json({ error: "Could not update blog post." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const authError = guardAdminRequest();
  if (authError) return authError;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Post id is required." }, { status: 400 });
  }

  try {
    await supabaseRest<null>("blog_posts", {
      key: getServerSupabaseKey(),
      method: "DELETE",
      query: `id=eq.${encodeURIComponent(id)}`,
      prefer: "return=minimal"
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to delete blog post", error);
    return NextResponse.json({ error: "Could not delete blog post." }, { status: 500 });
  }
}

function validatePost(body: BlogPostPayload | null, partial = false) {
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if ((!partial || body.title !== undefined) && !cleanText(body.title, 140)) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }

  if ((!partial || body.slug !== undefined) && !cleanText(body.slug, 180)) {
    return NextResponse.json({ error: "Slug is required." }, { status: 400 });
  }

  if ((!partial || body.content !== undefined) && !cleanText(body.content, 40000)) {
    return NextResponse.json({ error: "Content is required." }, { status: 400 });
  }

  if (body.status !== undefined && !allowedStatuses.has(body.status)) {
    return NextResponse.json({ error: "Unsupported post status." }, { status: 400 });
  }

  return null;
}

function normalizeStatus(value: unknown) {
  const status = String(value || "draft");
  return allowedStatuses.has(status) ? status : "draft";
}

function toPostRecord(body: BlogPostPayload | null) {
  return {
    title: cleanText(body?.title, 140),
    slug: cleanSlug(body?.slug),
    excerpt: cleanText(body?.excerpt, 1200),
    content: cleanText(body?.content, 40000),
    featured_image_url: cleanText(body?.featuredImageUrl, 1000),
    author: cleanText(body?.author, 120) ?? "Fundamental Co.",
    tags: normalizeTags(body?.tags),
    read_time: cleanText(body?.readTime, 40),
    seo_title: cleanText(body?.seoTitle, 120),
    seo_description: cleanText(body?.seoDescription, 180),
    seo_keywords: cleanText(body?.seoKeywords, 300)
  };
}

function toPartialPostRecord(body: BlogPostPayload) {
  const update: Record<string, unknown> = {};
  const mapping: Array<[keyof BlogPostPayload, string, number]> = [
    ["title", "title", 140],
    ["slug", "slug", 180],
    ["excerpt", "excerpt", 1200],
    ["content", "content", 40000],
    ["featuredImageUrl", "featured_image_url", 1000],
    ["author", "author", 120],
    ["readTime", "read_time", 40],
    ["seoTitle", "seo_title", 120],
    ["seoDescription", "seo_description", 180],
    ["seoKeywords", "seo_keywords", 300]
  ];

  mapping.forEach(([field, column, maxLength]) => {
    if (body[field] !== undefined) {
      update[column] = field === "slug" ? cleanSlug(body[field]) : cleanText(body[field], maxLength);
    }
  });

  if (body.tags !== undefined) {
    update.tags = normalizeTags(body.tags);
  }

  return update;
}

function normalizeTags(tags: unknown) {
  if (!Array.isArray(tags)) return [];
  return tags.map((tag) => String(tag).trim()).filter(Boolean).slice(0, 12);
}

function cleanSlug(value: unknown) {
  const text = cleanText(value, 180);
  if (!text) return null;
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
