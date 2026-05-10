import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Archive, ExternalLink, Pencil, Plus, Search, Trash2 } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

export default function AdminBlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [archivingId, setArchivingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchPosts() {
    setLoading(true);
    setErrorMessage("");

    const { data, error } = await supabase
      .from("blog_posts")
      .select(
        "id, title, slug, status, created_at, updated_at, published_at, read_time, author"
      )
      .order("created_at", { ascending: false });

    if (error) {
      setErrorMessage(error.message);
      setPosts([]);
    } else {
      setPosts(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        post.title?.toLowerCase().includes(search) ||
        post.slug?.toLowerCase().includes(search) ||
        post.author?.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "all" ? true : post.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [posts, searchTerm, statusFilter]);

  const totalPublished = posts.filter((post) => post.status === "published").length;
  const totalDrafts = posts.filter((post) => post.status === "draft").length;
  const totalArchived = posts.filter((post) => post.status === "archived").length;

  async function handleArchivePost(postId) {
    const confirmed = window.confirm(
      "Archive this post? It will be hidden from the public website."
    );

    if (!confirmed) return;

    setArchivingId(postId);

    const { error } = await supabase
      .from("blog_posts")
      .update({ status: "archived" })
      .eq("id", postId);

    if (error) {
      alert(error.message);
    } else {
      await fetchPosts();
    }

    setArchivingId(null);
  }

  async function handleDeletePost(postId) {
    const confirmed = window.confirm(
      "Delete this post permanently? Only admin users can do this."
    );

    if (!confirmed) return;

    setDeletingId(postId);

    const { error } = await supabase.from("blog_posts").delete().eq("id", postId);

    if (error) {
      alert(error.message);
    } else {
      await fetchPosts();
    }

    setDeletingId(null);
  }

  function formatDate(dateValue) {
    if (!dateValue) return "—";

    return new Date(dateValue).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  function getStatusClass(status) {
    if (status === "published") {
      return "border-white bg-white text-black";
    }

    if (status === "draft") {
      return "border-white/25 bg-white/[0.03] text-white";
    }

    return "border-white/10 bg-white/[0.06] text-white/45";
  }

  return (
    <section className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Content Management
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Blog Posts
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">
              Create, edit, draft, publish, and archive SEO-focused articles for
              Fundamental.co.
            </p>
          </div>

          <Link
            to="/admin/blog/new"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white/85"
          >
            <Plus size={16} />
            New Post
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <StatCard label="Total Posts" value={posts.length} />
          <StatCard label="Published" value={totalPublished} />
          <StatCard label="Drafts" value={totalDrafts} />
          <StatCard label="Archived" value={totalArchived} />
        </div>

        {/* Filters */}
        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_220px]">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
            <Search size={17} className="text-white/35" />
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search title, slug, or author..."
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none"
          >
            <option value="all" className="bg-black text-white">
              All statuses
            </option>
            <option value="published" className="bg-black text-white">
              Published
            </option>
            <option value="draft" className="bg-black text-white">
              Draft
            </option>
            <option value="archived" className="bg-black text-white">
              Archived
            </option>
          </select>
        </div>

        {/* Error */}
        {errorMessage && (
          <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm text-red-200">
            {errorMessage}
          </div>
        )}

        {/* Desktop Table */}
        <div className="mt-8 hidden overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] md:block">
          <div className="grid grid-cols-[1.7fr_160px_160px_160px_180px] border-b border-white/10 px-8 py-5 text-xs uppercase tracking-[0.28em] text-white/45">
            <div>Title</div>
            <div>Status</div>
            <div>Created</div>
            <div>Read Time</div>
            <div>Actions</div>
          </div>

          {loading ? (
            <div className="px-8 py-12 text-sm text-white/45">
              Loading blog posts...
            </div>
          ) : filteredPosts.length === 0 ? (
            <EmptyState />
          ) : (
            filteredPosts.map((post) => (
              <div
                key={post.id}
                className="grid grid-cols-[1.7fr_160px_160px_160px_180px] items-center border-b border-white/10 px-8 py-6 last:border-b-0 transition hover:bg-white/[0.035]"
              >
                <div className="pr-8">
                  <h2 className="line-clamp-1 text-base font-semibold text-white">
                    {post.title}
                  </h2>

                  <p className="mt-1 line-clamp-1 text-sm text-white/40">
                    /{post.slug}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/30">
                    {post.author || "Fundamental Co."}
                  </p>
                </div>

                <div>
                  <span
                    className={`inline-flex rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] ${getStatusClass(
                      post.status
                    )}`}
                  >
                    {post.status || "draft"}
                  </span>
                </div>

                <div className="text-sm text-white/45">
                  {formatDate(post.created_at)}
                </div>

                <div className="text-sm text-white/45">
                  {post.read_time || "—"}
                </div>

                <div className="flex items-center gap-4">
                  {post.status === "published" && (
                    <Link
                      to={`/blog/${post.slug}`}
                      target="_blank"
                      title="View public post"
                      className="text-white/45 transition hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  )}

                  <Link
                    to={`/admin/blog/edit/${post.id}`}
                    title="Edit post"
                    className="text-white/45 transition hover:text-white"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() => handleArchivePost(post.id)}
                    disabled={archivingId === post.id}
                    title="Archive post"
                    className="text-white/45 transition hover:text-white disabled:opacity-30"
                  >
                    <Archive size={18} />
                  </button>

                  <button
                    onClick={() => handleDeletePost(post.id)}
                    disabled={deletingId === post.id}
                    title="Delete post"
                    className="text-white/45 transition hover:text-red-300 disabled:opacity-30"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Mobile Cards */}
        <div className="mt-8 grid gap-4 md:hidden">
          {loading ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-8 text-sm text-white/45">
              Loading blog posts...
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-8">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                No posts found.
              </h2>
              <p className="mt-2 text-sm text-white/45">
                Create your first blog post or adjust the filters.
              </p>
            </div>
          ) : (
            filteredPosts.map((post) => (
              <article
                key={post.id}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold tracking-[-0.03em] text-white">
                      {post.title}
                    </h2>
                    <p className="mt-1 text-sm text-white/40">/{post.slug}</p>
                  </div>

                  <span
                    className={`shrink-0 rounded-full border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] ${getStatusClass(
                      post.status
                    )}`}
                  >
                    {post.status || "draft"}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 text-sm text-white/45">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                      Created
                    </p>
                    <p className="mt-1">{formatDate(post.created_at)}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                      Read Time
                    </p>
                    <p className="mt-1">{post.read_time || "—"}</p>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-5">
                  {post.status === "published" && (
                    <Link
                      to={`/blog/${post.slug}`}
                      target="_blank"
                      className="text-white/45 transition hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </Link>
                  )}

                  <Link
                    to={`/admin/blog/edit/${post.id}`}
                    className="text-white/45 transition hover:text-white"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() => handleArchivePost(post.id)}
                    disabled={archivingId === post.id}
                    className="text-white/45 transition hover:text-white disabled:opacity-30"
                  >
                    <Archive size={18} />
                  </button>

                  <button
                    onClick={() => handleDeletePost(post.id)}
                    disabled={deletingId === post.id}
                    className="text-white/45 transition hover:text-red-300 disabled:opacity-30"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
      <p className="text-xs uppercase tracking-[0.24em] text-white/35">
        {label}
      </p>
      <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white">
        {value}
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="px-8 py-14">
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white">
        No posts found.
      </h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-white/45">
        Create your first blog post or adjust the filters.
      </p>
    </div>
  );
}