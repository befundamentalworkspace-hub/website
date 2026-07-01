"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  Archive,
  ExternalLink,
  FilePenLine,
  LayoutDashboard,
  Loader2,
  Plus,
  Search,
  Trash2
} from "lucide-react";
import { cn } from "@/lib/utils";

type AdminView = "dashboard" | "audit" | "blog" | "blog-new" | "blog-edit";

type AuditStatus = "new" | "reviewed" | "contacted" | "qualified" | "not_fit";
type BlogStatus = "draft" | "published" | "archived";

type AuditRequest = {
  id: string;
  created_at: string | null;
  name: string;
  clinic_name: string;
  city: string;
  specialty: string;
  website: string | null;
  instagram: string | null;
  monthly_enquiries: string | null;
  main_problem: string;
  budget_range: string | null;
  preferred_contact: string | null;
  notes: string | null;
  status: AuditStatus | null;
  source: string | null;
  internal_notes: string | null;
};

type BlogPost = {
  id: string;
  created_at: string | null;
  updated_at: string | null;
  title: string;
  slug: string;
  excerpt: string | null;
  content?: string | null;
  featured_image_url?: string | null;
  author: string | null;
  tags: string[] | null;
  status: BlogStatus | null;
  read_time: string | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  published_at: string | null;
};

type BlogDraft = {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImageUrl: string;
  author: string;
  tags: string;
  readTime: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
};

const emptyDraft: BlogDraft = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  featuredImageUrl: "",
  author: "Fundamental Co.",
  tags: "SEO, Clinics, Trust",
  readTime: "5 min read",
  seoTitle: "",
  seoDescription: "",
  seoKeywords: ""
};

const auditStatuses: AuditStatus[] = ["new", "reviewed", "contacted", "qualified", "not_fit"];
const blogStatuses: BlogStatus[] = ["draft", "published", "archived"];

export function AdminPanel({ view, postId }: { view: AdminView; postId?: string }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [requests, setRequests] = useState<AuditRequest[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedRequestId, setSelectedRequestId] = useState("");
  const [requestFilter, setRequestFilter] = useState("all");
  const [postFilter, setPostFilter] = useState("all");
  const [postSearch, setPostSearch] = useState("");
  const [savingId, setSavingId] = useState("");
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    void loadCurrentView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view, postId]);

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

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
    await loadCurrentView();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setIsAuthenticated(false);
  }

  async function loadCurrentView() {
    setLoading(true);
    setMessage("");

    if (view === "blog-new") {
      const ok = await checkAuth();
      setLoading(false);
      if (ok) setIsAuthenticated(true);
      return;
    }

    if (view === "blog-edit" && postId) {
      await loadSinglePost(postId);
      setLoading(false);
      return;
    }

    const [requestsOk, postsOk] = await Promise.all([
      view === "blog" ? Promise.resolve(true) : loadRequests(),
      view === "audit" || view === "dashboard" ? loadPosts() : loadPosts()
    ]);

    setIsAuthenticated(requestsOk && postsOk);
    setLoading(false);
  }

  async function checkAuth() {
    const response = await fetch("/api/admin/blog-posts", { cache: "no-store" });
    if (response.status === 401) return false;
    if (!response.ok) {
      await showError(response, "Could not verify the admin session.");
      return false;
    }
    return true;
  }

  async function loadRequests() {
    const response = await fetch("/api/admin/audit-requests", { cache: "no-store" });
    if (response.status === 401) return false;
    if (!response.ok) {
      await showError(response, "Could not load audit requests.");
      return false;
    }

    const body = (await response.json()) as { requests: AuditRequest[] };
    setRequests(body.requests);
    setSelectedRequestId((current) => current || body.requests[0]?.id || "");
    return true;
  }

  async function loadPosts() {
    const response = await fetch("/api/admin/blog-posts", { cache: "no-store" });
    if (response.status === 401) return false;
    if (!response.ok) {
      await showError(response, "Could not load blog posts.");
      return false;
    }

    const body = (await response.json()) as { posts: BlogPost[] };
    setPosts(body.posts);
    return true;
  }

  async function loadSinglePost(id: string) {
    const response = await fetch(`/api/admin/blog-posts?id=${encodeURIComponent(id)}`, { cache: "no-store" });
    if (response.status === 401) {
      setIsAuthenticated(false);
      return;
    }
    if (!response.ok) {
      await showError(response, "Could not load this blog post.");
      setIsAuthenticated(false);
      return;
    }

    const body = (await response.json()) as { post: BlogPost | null };
    setEditingPost(body.post);
    setIsAuthenticated(true);
  }

  async function showError(response: Response, fallback: string) {
    const body = (await response.json().catch(() => ({}))) as { error?: string };
    setMessage(body.error ?? fallback);
  }

  if (!isAuthenticated) {
    return (
      <AdminFrame view={view} onLogout={logout} locked>
        <form className="mx-auto max-w-md rounded-panel border border-hairline bg-card p-7 shadow-soft" onSubmit={login}>
          <p className="section-label">Fundamental Admin</p>
          <h1 className="display-text mt-3 text-5xl text-ink">Sign in.</h1>
          <p className="mt-4 text-sm leading-6 text-body">
            Enter the admin credentials to manage audit requests, blog posts, and page metadata.
          </p>
          <label className="mt-6 block" htmlFor="admin-username">
            <span className="mb-2 block text-sm font-semibold text-primary">Username or email</span>
            <input
              id="admin-username"
              autoComplete="username"
              className="min-h-12 w-full rounded-2xl border border-hairline bg-canvas-soft px-4 text-primary outline-none transition focus:border-primary focus:bg-white"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </label>
          <label className="mt-4 block" htmlFor="admin-password">
            <span className="mb-2 block text-sm font-semibold text-primary">Password</span>
            <input
              id="admin-password"
              autoComplete="current-password"
              className="min-h-12 w-full rounded-2xl border border-hairline bg-canvas-soft px-4 text-primary outline-none transition focus:border-primary focus:bg-white"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          {message ? <p className="mt-4 text-sm text-red-700">{message}</p> : null}
          <button className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink disabled:opacity-60" disabled={loading} type="submit">
            {loading ? "Checking..." : "Open admin"}
          </button>
        </form>
      </AdminFrame>
    );
  }

  return (
    <AdminFrame view={view} onLogout={logout}>
      {message ? <StatusMessage>{message}</StatusMessage> : null}
      {loading ? (
        <div className="flex min-h-80 items-center justify-center rounded-panel border border-hairline bg-card text-muted">
          <Loader2 className="mr-2 animate-spin" size={18} />
          Loading admin data...
        </div>
      ) : null}
      {!loading && view === "dashboard" ? (
        <DashboardView
          posts={posts}
          requests={requests}
          selectedRequestId={selectedRequestId}
          onSelectRequest={setSelectedRequestId}
          onRefresh={loadCurrentView}
          onUpdateStatus={updateRequestStatus}
        />
      ) : null}
      {!loading && view === "audit" ? (
        <AuditInbox
          requests={requests}
          filter={requestFilter}
          selectedRequestId={selectedRequestId}
          onFilter={setRequestFilter}
          onSelectRequest={setSelectedRequestId}
          onRefresh={loadCurrentView}
          onUpdateStatus={updateRequestStatus}
          onSaveNotes={saveInternalNotes}
        />
      ) : null}
      {!loading && view === "blog" ? (
        <BlogList
          posts={posts}
          filter={postFilter}
          search={postSearch}
          savingId={savingId}
          onFilter={setPostFilter}
          onSearch={setPostSearch}
          onRefresh={loadCurrentView}
          onUpdateStatus={updatePostStatus}
          onDelete={deletePost}
        />
      ) : null}
      {!loading && view === "blog-new" ? <BlogEditor mode="new" onSubmit={saveBlogPost} /> : null}
      {!loading && view === "blog-edit" ? (
        editingPost ? (
          <BlogEditor mode="edit" post={editingPost} onSubmit={saveBlogPost} />
        ) : (
          <StatusMessage>This blog post could not be found.</StatusMessage>
        )
      ) : null}
    </AdminFrame>
  );

  async function updateRequestStatus(id: string, status: AuditStatus) {
    setSavingId(id);
    const response = await fetch("/api/admin/audit-requests", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status })
    });
    setSavingId("");
    if (!response.ok) {
      await showError(response, "Could not update request status.");
      return;
    }
    await loadRequests();
  }

  async function saveInternalNotes(id: string, internalNotes: string) {
    setSavingId(id);
    const response = await fetch("/api/admin/audit-requests", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, internalNotes })
    });
    setSavingId("");
    if (!response.ok) {
      await showError(response, "Could not save internal notes.");
      return;
    }
    await loadRequests();
    setMessage("Internal notes saved.");
  }

  async function updatePostStatus(id: string, status: BlogStatus) {
    setSavingId(id);
    const response = await fetch("/api/admin/blog-posts", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status })
    });
    setSavingId("");
    if (!response.ok) {
      await showError(response, "Could not update post status.");
      return;
    }
    await loadPosts();
  }

  async function deletePost(id: string) {
    if (!window.confirm("Delete this blog post permanently?")) return;
    setSavingId(id);
    const response = await fetch(`/api/admin/blog-posts?id=${encodeURIComponent(id)}`, {
      method: "DELETE"
    });
    setSavingId("");
    if (!response.ok) {
      await showError(response, "Could not delete post.");
      return;
    }
    await loadPosts();
  }

  async function saveBlogPost(draft: BlogDraft, status: BlogStatus, id?: string) {
    const payload = {
      id,
      title: draft.title,
      slug: draft.slug,
      excerpt: draft.excerpt,
      content: draft.content,
      featuredImageUrl: draft.featuredImageUrl,
      author: draft.author,
      tags: draft.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      readTime: draft.readTime,
      seoTitle: draft.seoTitle,
      seoDescription: draft.seoDescription,
      seoKeywords: draft.seoKeywords,
      status
    };

    const response = await fetch("/api/admin/blog-posts", {
      method: id ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      await showError(response, "Could not save blog post.");
      return;
    }

    window.location.href = "/admin/blog";
  }
}

function AdminFrame({
  children,
  view,
  locked,
  onLogout
}: {
  children: React.ReactNode;
  view: AdminView;
  locked?: boolean;
  onLogout: () => void;
}) {
  return (
    <div className="min-h-screen pb-16">
      <header className="sticky top-0 z-20 border-b border-hairline bg-canvas/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link className="text-xs font-black uppercase tracking-[0.34em] text-primary" href="/admin/dashboard">
            Fundamental Admin
          </Link>
          <nav className="hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.18em] text-muted md:flex">
            <NavLink active={view === "dashboard"} href="/admin/dashboard">Dashboard</NavLink>
            <NavLink active={view === "audit"} href="/admin/audit-requests">Audit Requests</NavLink>
            <NavLink active={view === "blog" || view === "blog-new" || view === "blog-edit"} href="/admin/blog">Blog CMS</NavLink>
            <NavLink active={false} href="/" external>Public Site</NavLink>
            {!locked ? (
              <button className="rounded-full border border-hairline px-4 py-2 text-primary transition hover:border-primary" onClick={onLogout} type="button">
                Sign out
              </button>
            ) : null}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 pt-12 lg:pt-16">{children}</main>
    </div>
  );
}

function NavLink({ active, href, children, external }: { active: boolean; href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <Link className={cn("transition hover:text-primary", active ? "text-primary" : "text-muted")} href={href} target={external ? "_blank" : undefined}>
      {children}
    </Link>
  );
}

function PageHeading({
  eyebrow,
  title,
  description,
  action
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="border-b border-hairline pb-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-label">{eyebrow}</p>
          <h1 className="display-text mt-4 text-5xl text-ink sm:text-6xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-body">{description}</p>
        </div>
        {action}
      </div>
    </div>
  );
}

function DashboardView({
  requests,
  posts,
  selectedRequestId,
  onSelectRequest,
  onRefresh,
  onUpdateStatus
}: {
  requests: AuditRequest[];
  posts: BlogPost[];
  selectedRequestId: string;
  onSelectRequest: (id: string) => void;
  onRefresh: () => void;
  onUpdateStatus: (id: string, status: AuditStatus) => void;
}) {
  const selected = requests.find((request) => request.id === selectedRequestId) ?? requests[0];
  return (
    <>
      <PageHeading
        eyebrow="Admin Dashboard"
        title="Operating overview."
        description="Track incoming audit requests, lead status, content inventory, and next actions."
        action={<AdminButton onClick={onRefresh}>Refresh</AdminButton>}
      />
      <StatsGrid requests={requests} posts={posts} />
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <RequestList requests={requests.slice(0, 6)} selectedId={selected?.id} onSelect={onSelectRequest} title="Recent requests" />
        <RequestDetail request={selected} onUpdateStatus={onUpdateStatus} />
      </div>
    </>
  );
}

function AuditInbox({
  requests,
  filter,
  selectedRequestId,
  onFilter,
  onSelectRequest,
  onRefresh,
  onUpdateStatus,
  onSaveNotes
}: {
  requests: AuditRequest[];
  filter: string;
  selectedRequestId: string;
  onFilter: (filter: string) => void;
  onSelectRequest: (id: string) => void;
  onRefresh: () => void;
  onUpdateStatus: (id: string, status: AuditStatus) => void;
  onSaveNotes: (id: string, notes: string) => void;
}) {
  const visible = filter === "all" ? requests : requests.filter((request) => (request.status ?? "new") === filter);
  const selected = visible.find((request) => request.id === selectedRequestId) ?? visible[0] ?? requests[0];
  return (
    <>
      <PageHeading
        eyebrow="Admin"
        title="Request audit inbox."
        description="Review incoming clinic audit requests, diagnose fit, and move each lead through the first stage of the pipeline."
        action={<AdminButton onClick={onRefresh}>Refresh</AdminButton>}
      />
      <StatsGrid requests={requests} />
      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="section-label">Incoming requests</p>
              <p className="mt-1 text-sm text-muted">{visible.length} requests visible</p>
            </div>
            <select className="rounded-full border border-hairline bg-card px-4 py-3 text-sm text-primary" value={filter} onChange={(event) => onFilter(event.target.value)}>
              <option value="all">All statuses</option>
              {auditStatuses.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}
            </select>
          </div>
          <RequestList requests={visible} selectedId={selected?.id} onSelect={onSelectRequest} />
        </div>
        <RequestDetail request={selected} onUpdateStatus={onUpdateStatus} onSaveNotes={onSaveNotes} />
      </div>
    </>
  );
}

function StatsGrid({ requests, posts = [] }: { requests: AuditRequest[]; posts?: BlogPost[] }) {
  const stats = [
    ["Total", requests.length],
    ["New", countAudit(requests, "new")],
    ["Reviewed", countAudit(requests, "reviewed")],
    ["Contacted", countAudit(requests, "contacted")],
    ["Qualified", countAudit(requests, "qualified")]
  ];

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {stats.map(([label, value]) => (
        <div key={label} className="rounded-card border border-hairline bg-card p-5 shadow-soft">
          <p className="section-label">{label}</p>
          <p className="mt-4 text-3xl font-black text-primary">{String(value).padStart(2, "0")}</p>
        </div>
      ))}
      {posts.length ? (
        <div className="rounded-card border border-hairline bg-primary p-5 text-white shadow-soft lg:col-span-5">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">Content pulse</p>
          <p className="mt-3 text-sm text-white/75">
            {posts.filter((post) => post.status === "published").length} published posts, {posts.filter((post) => post.status === "draft").length} drafts, {posts.filter((post) => post.status === "archived").length} archived.
          </p>
        </div>
      ) : null}
    </div>
  );
}

function RequestList({ requests, selectedId, onSelect, title }: { requests: AuditRequest[]; selectedId?: string; onSelect: (id: string) => void; title?: string }) {
  return (
    <div className="rounded-panel border border-hairline bg-card p-5 shadow-soft">
      {title ? <p className="section-label mb-4">{title}</p> : null}
      <div className="space-y-3">
        {requests.length ? requests.map((request) => (
          <button
            key={request.id}
            className={cn(
              "w-full rounded-card border p-4 text-left transition",
              selectedId === request.id ? "border-primary bg-surface-strong" : "border-hairline bg-canvas-soft hover:border-hairline-strong"
            )}
            onClick={() => onSelect(request.id)}
            type="button"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-bold text-primary">{request.clinic_name}</p>
                <p className="mt-1 text-sm text-muted">{request.name} / {request.city}</p>
              </div>
              <StatusPill status={request.status ?? "new"} />
            </div>
            <p className="mt-3 text-sm text-body">{request.main_problem}</p>
            <p className="mt-4 text-xs text-muted">Submitted {formatDate(request.created_at)}</p>
          </button>
        )) : (
          <EmptyState>No audit requests match this view yet.</EmptyState>
        )}
      </div>
    </div>
  );
}

function RequestDetail({
  request,
  onUpdateStatus,
  onSaveNotes
}: {
  request?: AuditRequest;
  onUpdateStatus: (id: string, status: AuditStatus) => void;
  onSaveNotes?: (id: string, notes: string) => void;
}) {
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setNotes(request?.internal_notes ?? "");
  }, [request?.id, request?.internal_notes]);

  if (!request) {
    return <EmptyState>No request selected.</EmptyState>;
  }

  return (
    <div className="rounded-panel border border-hairline bg-card p-6 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="section-label">Request details</p>
          <h2 className="display-text mt-4 text-4xl text-ink">{request.clinic_name}</h2>
          <p className="mt-2 text-sm text-muted">{request.name} / {request.city}</p>
        </div>
        <StatusPill status={request.status ?? "new"} />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <InfoTile label="Specialty" value={request.specialty} />
        <InfoTile label="Monthly enquiries" value={request.monthly_enquiries} />
        <InfoTile label="Budget range" value={request.budget_range} />
        <InfoTile label="Preferred contact" value={request.preferred_contact} />
        <InfoTile label="Website" value={request.website} href={request.website} />
        <InfoTile label="Instagram" value={request.instagram} href={request.instagram} />
      </div>

      <div className="mt-7 border-t border-hairline pt-6">
        <p className="section-label">Main problem</p>
        <p className="mt-3 text-xl font-bold text-primary">{request.main_problem}</p>
        <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-body">{request.notes || "No additional notes were submitted."}</p>
      </div>

      <div className="mt-7 border-t border-hairline pt-6">
        <p className="section-label">Admin actions</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {auditStatuses.filter((status) => status !== "new").map((status) => (
            <AdminButton key={status} onClick={() => onUpdateStatus(request.id, status)}>
              {statusLabel(status)}
            </AdminButton>
          ))}
        </div>
      </div>

      {onSaveNotes ? (
        <div className="mt-7 border-t border-hairline pt-6">
          <label className="block">
            <span className="section-label">Internal notes</span>
            <textarea className="mt-3 min-h-28 w-full rounded-2xl border border-hairline bg-canvas-soft px-4 py-3 text-primary outline-none transition focus:border-primary focus:bg-white" value={notes} onChange={(event) => setNotes(event.target.value)} />
          </label>
          <AdminButton className="mt-4" onClick={() => onSaveNotes(request.id, notes)}>Save notes</AdminButton>
        </div>
      ) : null}
    </div>
  );
}

function BlogList({
  posts,
  filter,
  search,
  savingId,
  onFilter,
  onSearch,
  onRefresh,
  onUpdateStatus,
  onDelete
}: {
  posts: BlogPost[];
  filter: string;
  search: string;
  savingId: string;
  onFilter: (filter: string) => void;
  onSearch: (search: string) => void;
  onRefresh: () => void;
  onUpdateStatus: (id: string, status: BlogStatus) => void;
  onDelete: (id: string) => void;
}) {
  const visible = useMemo(() => {
    const term = search.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesStatus = filter === "all" || post.status === filter;
      const matchesSearch = !term || [post.title, post.slug, post.author ?? ""].join(" ").toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    });
  }, [posts, filter, search]);

  return (
    <>
      <PageHeading
        eyebrow="Content management"
        title="Blog posts."
        description="Create, edit, draft, publish, archive, and optimize SEO-focused articles for Fundamental.co."
        action={<Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-ink" href="/admin/blog/new"><Plus size={16} /> New post</Link>}
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <BlogStat label="Total posts" value={posts.length} />
        <BlogStat label="Published" value={posts.filter((post) => post.status === "published").length} />
        <BlogStat label="Drafts" value={posts.filter((post) => post.status === "draft").length} />
        <BlogStat label="Archived" value={posts.filter((post) => post.status === "archived").length} />
      </div>
      <div className="mt-6 flex flex-col gap-3 lg:flex-row">
        <label className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
          <input className="min-h-12 w-full rounded-2xl border border-hairline bg-card pl-12 pr-4 text-primary outline-none transition focus:border-primary" placeholder="Search title, slug, or author..." value={search} onChange={(event) => onSearch(event.target.value)} />
        </label>
        <select className="min-h-12 rounded-2xl border border-hairline bg-card px-4 text-primary" value={filter} onChange={(event) => onFilter(event.target.value)}>
          <option value="all">All statuses</option>
          {blogStatuses.map((status) => <option key={status} value={status}>{statusLabel(status)}</option>)}
        </select>
        <AdminButton onClick={onRefresh}>Refresh</AdminButton>
      </div>
      <div className="mt-6 overflow-hidden rounded-panel border border-hairline bg-card shadow-soft">
        <div className="grid grid-cols-[1.5fr_0.55fr_0.5fr_0.45fr] gap-4 border-b border-hairline px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-muted max-lg:hidden">
          <span>Title</span>
          <span>Status</span>
          <span>Updated</span>
          <span>Actions</span>
        </div>
        {visible.length ? visible.map((post) => (
          <div key={post.id} className="grid gap-4 border-b border-hairline px-5 py-5 last:border-b-0 lg:grid-cols-[1.5fr_0.55fr_0.5fr_0.45fr] lg:items-center">
            <div>
              <p className="font-bold text-primary">{post.title}</p>
              <p className="mt-1 text-sm text-muted">/{post.slug}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-muted">{post.author ?? "Fundamental Co."}</p>
            </div>
            <StatusPill status={post.status ?? "draft"} />
            <p className="text-sm text-muted">{formatDate(post.updated_at)}</p>
            <div className="flex flex-wrap gap-2 text-muted">
              <IconLink href={`/blog/${post.slug}`} label="Open public post"><ExternalLink size={17} /></IconLink>
              <IconLink href={`/admin/blog/${post.id}`} label="Edit post"><FilePenLine size={17} /></IconLink>
              <IconButton label={post.status === "archived" ? "Move to draft" : "Archive"} disabled={savingId === post.id} onClick={() => onUpdateStatus(post.id, post.status === "archived" ? "draft" : "archived")}><Archive size={17} /></IconButton>
              <IconButton label="Delete" disabled={savingId === post.id} onClick={() => onDelete(post.id)}><Trash2 size={17} /></IconButton>
            </div>
          </div>
        )) : <EmptyState>No posts match this view.</EmptyState>}
      </div>
    </>
  );
}

function BlogEditor({ mode, post, onSubmit }: { mode: "new" | "edit"; post?: BlogPost; onSubmit: (draft: BlogDraft, status: BlogStatus, id?: string) => void }) {
  const [draft, setDraft] = useState<BlogDraft>(() => post ? postToDraft(post) : emptyDraft);
  const [saving, setSaving] = useState<BlogStatus | "">("");
  const title = mode === "new" ? "Create blog post." : "Edit blog post.";

  function update(field: keyof BlogDraft, value: string) {
    setDraft((current) => ({
      ...current,
      [field]: value,
      slug: field === "title" && !current.slug ? slugify(value) : current.slug
    }));
  }

  async function submit(status: BlogStatus) {
    setSaving(status);
    await onSubmit(draft, status, post?.id);
    setSaving("");
  }

  return (
    <>
      <PageHeading
        eyebrow="Blog CMS"
        title={title}
        description="Write, optimize, draft, and publish articles into the blog_posts table."
        action={<Link className="inline-flex min-h-11 items-center justify-center rounded-full border border-hairline bg-card px-5 py-3 text-sm font-bold text-primary transition hover:border-primary" href="/admin/blog">Back to posts</Link>}
      />
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.56fr]">
        <div className="rounded-panel border border-hairline bg-card p-6 shadow-soft">
          <p className="section-label">Core article</p>
          <div className="mt-6 grid gap-5">
            <AdminInput label="Title" value={draft.title} onChange={(value) => update("title", value)} />
            <AdminInput label="Slug" value={draft.slug} onChange={(value) => update("slug", slugify(value))} />
            <AdminTextarea label="Excerpt" rows={4} value={draft.excerpt} onChange={(value) => update("excerpt", value)} />
            <AdminTextarea label="Content" rows={18} value={draft.content} onChange={(value) => update("content", value)} />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-panel border border-hairline bg-card p-6 shadow-soft">
            <p className="section-label">Publishing</p>
            <div className="mt-5 grid gap-5">
              <AdminInput label="Author" value={draft.author} onChange={(value) => update("author", value)} />
              <AdminInput label="Read time" value={draft.readTime} onChange={(value) => update("readTime", value)} />
              <AdminInput label="Tags" value={draft.tags} onChange={(value) => update("tags", value)} />
              <AdminInput label="Featured image URL" value={draft.featuredImageUrl} onChange={(value) => update("featuredImageUrl", value)} />
            </div>
            <div className="mt-6 grid gap-3">
              <AdminButton disabled={Boolean(saving)} onClick={() => submit("draft")}>{saving === "draft" ? "Saving..." : "Save draft"}</AdminButton>
              <AdminButton disabled={Boolean(saving)} variant="dark" onClick={() => submit("published")}>{saving === "published" ? "Publishing..." : "Publish"}</AdminButton>
            </div>
          </div>
          <div className="rounded-panel border border-hairline bg-card p-6 shadow-soft">
            <p className="section-label">Meta tags</p>
            <div className="mt-5 grid gap-5">
              <AdminInput label="SEO title" value={draft.seoTitle} onChange={(value) => update("seoTitle", value)} />
              <AdminTextarea label="SEO description" rows={4} value={draft.seoDescription} onChange={(value) => update("seoDescription", value)} />
              <AdminInput label="SEO keywords" value={draft.seoKeywords} onChange={(value) => update("seoKeywords", value)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AdminInput({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="section-label">{label}</span>
      <input className="mt-2 min-h-12 w-full rounded-2xl border border-hairline bg-canvas-soft px-4 text-primary outline-none transition focus:border-primary focus:bg-white" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function AdminTextarea({ label, value, rows, onChange }: { label: string; value: string; rows: number; onChange: (value: string) => void }) {
  return (
    <label className="block">
      <span className="section-label">{label}</span>
      <textarea className="mt-2 w-full rounded-2xl border border-hairline bg-canvas-soft px-4 py-3 text-primary outline-none transition focus:border-primary focus:bg-white" rows={rows} value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function BlogStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-card border border-hairline bg-card p-5 shadow-soft">
      <p className="section-label">{label}</p>
      <p className="mt-4 text-3xl font-black text-primary">{value}</p>
    </div>
  );
}

function InfoTile({ label, value, href }: { label: string; value?: string | null; href?: string | null }) {
  const content = value || "Not provided";
  return (
    <div className="rounded-card border border-hairline bg-canvas-soft p-4">
      <p className="section-label">{label}</p>
      {href ? (
        <a className="mt-3 block truncate text-sm font-semibold text-primary underline-offset-4 hover:underline" href={href} rel="noreferrer" target="_blank">{content}</a>
      ) : (
        <p className="mt-3 text-sm font-semibold text-primary">{content}</p>
      )}
    </div>
  );
}

function AdminButton({ children, onClick, className, disabled, variant = "light" }: { children: React.ReactNode; onClick?: () => void; className?: string; disabled?: boolean; variant?: "light" | "dark" }) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-full border px-5 py-3 text-sm font-bold transition disabled:cursor-not-allowed disabled:opacity-60",
        variant === "dark" ? "border-primary bg-primary text-white hover:bg-ink" : "border-hairline bg-card text-primary hover:border-primary",
        className
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function IconButton({ children, label, onClick, disabled }: { children: React.ReactNode; label: string; onClick: () => void; disabled?: boolean }) {
  return (
    <button aria-label={label} className="rounded-full border border-hairline p-2 transition hover:border-primary hover:text-primary disabled:opacity-50" disabled={disabled} onClick={onClick} title={label} type="button">
      {children}
    </button>
  );
}

function IconLink({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  return (
    <Link aria-label={label} className="rounded-full border border-hairline p-2 transition hover:border-primary hover:text-primary" href={href} title={label}>
      {children}
    </Link>
  );
}

function StatusPill({ status }: { status: string }) {
  return (
    <span className="inline-flex w-fit rounded-full border border-hairline-strong bg-card px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-primary">
      {statusLabel(status)}
    </span>
  );
}

function StatusMessage({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 rounded-2xl border border-hairline bg-card px-4 py-3 text-sm text-body shadow-soft">{children}</p>;
}

function EmptyState({ children }: { children: React.ReactNode }) {
  return <div className="rounded-card border border-dashed border-hairline bg-canvas-soft p-6 text-sm text-muted">{children}</div>;
}

function countAudit(requests: AuditRequest[], status: AuditStatus) {
  return requests.filter((request) => (request.status ?? "new") === status).length;
}

function statusLabel(status: string) {
  return status.replace(/_/g, " ");
}

function formatDate(value?: string | null) {
  if (!value) return "Not recorded";
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function postToDraft(post: BlogPost): BlogDraft {
  return {
    title: post.title ?? "",
    slug: post.slug ?? "",
    excerpt: post.excerpt ?? "",
    content: post.content ?? "",
    featuredImageUrl: post.featured_image_url ?? "",
    author: post.author ?? "Fundamental Co.",
    tags: post.tags?.join(", ") ?? "",
    readTime: post.read_time ?? "5 min read",
    seoTitle: post.seo_title ?? "",
    seoDescription: post.seo_description ?? "",
    seoKeywords: post.seo_keywords ?? ""
  };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
