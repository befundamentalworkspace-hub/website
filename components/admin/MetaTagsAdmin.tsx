"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";

type BlogPostMeta = {
  id: string;
  title: string;
  slug: string;
  status: string | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  updated_at: string | null;
};

type DraftMeta = {
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
};

export function MetaTagsAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [posts, setPosts] = useState<BlogPostMeta[]>([]);
  const [drafts, setDrafts] = useState<Record<string, DraftMeta>>({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState("");

  useEffect(() => {
    loadPosts();
  }, []);

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setLoading(true);

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      setLoading(false);
      setMessage(body.error ?? "The admin credentials were not accepted.");
      return;
    }

    setUsername("");
    setPassword("");
    await loadPosts();
  }

  async function loadPosts() {
    setLoading(true);
    const response = await fetch("/api/admin/meta-tags", { cache: "no-store" });

    if (response.status === 401) {
      setIsAuthenticated(false);
      setLoading(false);
      return;
    }

    if (!response.ok) {
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      setMessage(body.error ?? "Could not load posts.");
      setLoading(false);
      return;
    }

    const body = (await response.json()) as { posts: BlogPostMeta[] };
    setPosts(body.posts);
    setDrafts(
      Object.fromEntries(
        body.posts.map((post) => [
          post.id,
          {
            seoTitle: post.seo_title ?? "",
            seoDescription: post.seo_description ?? "",
            seoKeywords: post.seo_keywords ?? ""
          }
        ])
      )
    );
    setIsAuthenticated(true);
    setLoading(false);
  }

  async function save(postId: string) {
    setSavingId(postId);
    setMessage("");

    const response = await fetch("/api/admin/meta-tags", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: postId, ...drafts[postId] })
    });

    setSavingId("");

    if (!response.ok) {
      setMessage("Could not save meta tags.");
      return;
    }

    setMessage("Meta tags updated.");
    await loadPosts();
  }

  function updateDraft(postId: string, field: keyof DraftMeta, value: string) {
    setDrafts((current) => ({
      ...current,
      [postId]: {
        ...current[postId],
        [field]: value
      }
    }));
  }

  if (!isAuthenticated) {
    return (
      <form className="max-w-md rounded-panel border border-hairline bg-card p-6 shadow-soft" onSubmit={login}>
        <h1 className="display-text text-4xl text-ink">Meta tag admin</h1>
        <p className="mt-3 text-sm leading-6 text-body">
          Enter the admin credentials to edit blog SEO title, description, and keywords.
        </p>
        <Input
          className="mt-6"
          label="Username or email"
          name="adminUsername"
          type="text"
          value={username}
          autoComplete="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          className="mt-4"
          label="Password"
          name="adminPassword"
          type="password"
          value={password}
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
        />
        {message ? <p className="mt-4 text-sm text-red-700">{message}</p> : null}
        <Button className="mt-5" type="submit" disabled={loading}>
          {loading ? "Checking..." : "Open admin"}
        </Button>
      </form>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">Blog CMS</p>
          <h1 className="display-text mt-3 text-5xl text-ink">Update meta tags.</h1>
          <p className="mt-4 max-w-2xl text-body">
            Edit SEO fields saved in Supabase on each `blog_posts` record.
          </p>
        </div>
        <Button variant="secondary" onClick={loadPosts} disabled={loading}>
          Refresh
        </Button>
      </div>

      {message ? <p className="mt-6 rounded-2xl border border-hairline bg-card px-4 py-3 text-sm text-body">{message}</p> : null}

      <div className="mt-8 space-y-5">
        {posts.map((post) => {
          const draft = drafts[post.id] ?? { seoTitle: "", seoDescription: "", seoKeywords: "" };

          return (
            <article key={post.id} className="rounded-panel border border-hairline bg-card p-5 shadow-soft">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">{post.status ?? "draft"}</p>
                  <h2 className="mt-2 text-xl font-semibold text-primary">{post.title}</h2>
                  <p className="mt-1 text-sm text-muted">/{post.slug}</p>
                </div>
                <Button onClick={() => save(post.id)} disabled={savingId === post.id}>
                  {savingId === post.id ? "Saving..." : "Save meta"}
                </Button>
              </div>

              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <Input
                  label="SEO title"
                  name={`seoTitle-${post.id}`}
                  value={draft.seoTitle}
                  maxLength={120}
                  onChange={(event) => updateDraft(post.id, "seoTitle", event.target.value)}
                />
                <Input
                  label="SEO keywords"
                  name={`seoKeywords-${post.id}`}
                  value={draft.seoKeywords}
                  maxLength={300}
                  onChange={(event) => updateDraft(post.id, "seoKeywords", event.target.value)}
                />
                <Textarea
                  className="lg:col-span-2"
                  label="SEO description"
                  name={`seoDescription-${post.id}`}
                  value={draft.seoDescription}
                  maxLength={180}
                  onChange={(event) => updateDraft(post.id, "seoDescription", event.target.value)}
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
