import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar, Search } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("all");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      setErrorMessage("");

      const { data, error } = await supabase
        .from("blog_posts")
        .select(
          "id, title, slug, excerpt, author, tags, read_time, published_at, created_at, featured_image_url"
        )
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (error) {
        setErrorMessage(error.message);
        setPosts([]);
      } else {
        setPosts(data || []);
      }

      setLoading(false);
    }

    fetchPosts();
  }, []);

  useEffect(() => {
    document.title = "Blog | Fundamental.co";

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute(
      "content",
      "Insights from Fundamental.co on clinic marketing, doctor authority, patient trust, SEO, enquiries, follow-up, and consultation conversion."
    );
  }, []);

  const allTags = useMemo(() => {
    const tagSet = new Set();

    posts.forEach((post) => {
      if (Array.isArray(post.tags)) {
        post.tags.forEach((tag) => tagSet.add(tag));
      }
    });

    return ["all", ...Array.from(tagSet)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        post.title?.toLowerCase().includes(search) ||
        post.excerpt?.toLowerCase().includes(search) ||
        post.author?.toLowerCase().includes(search);

      const matchesTag =
        activeTag === "all"
          ? true
          : Array.isArray(post.tags) && post.tags.includes(activeTag);

      return matchesSearch && matchesTag;
    });
  }, [posts, searchTerm, activeTag]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  function formatDate(dateValue) {
    if (!dateValue) return "—";

    return new Date(dateValue).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="px-6 pb-16 pt-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">
            Fundamental.co Insights
          </p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
                Clinic growth is not a content problem. It is a trust system.
              </h1>
            </div>

            <p className="max-w-xl text-base leading-7 text-white/55 md:text-lg">
              Practical writing on doctor authority, aesthetic clinic marketing,
              SEO, enquiry quality, follow-up leakage, and consultation
              conversion.
            </p>
          </div>
        </div>
      </section>

      {/* Search + Tags */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-6">
          <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-4">
              <Search size={17} className="text-white/35" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search articles..."
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"
              />
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full border px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                    activeTag === tag
                      ? "border-white bg-white text-black"
                      : "border-white/10 text-white/45 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          {errorMessage && (
            <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-5 py-4 text-sm text-red-200">
              {errorMessage}
            </div>
          )}

          {loading ? (
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 text-sm uppercase tracking-[0.22em] text-white/40">
              Loading articles...
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10">
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                No articles found.
              </h2>
              <p className="mt-3 max-w-xl text-white/50">
                No published posts match this search or tag.
              </p>
            </div>
          ) : (
            <>
              {featuredPost && (
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="group block overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] transition hover:border-white/25 hover:bg-white/[0.05]"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="min-h-[320px] border-b border-white/10 bg-white/[0.04] lg:border-b-0 lg:border-r">
                      {featuredPost.featured_image_url ? (
                        <img
                          src={featuredPost.featured_image_url}
                          alt={featuredPost.title}
                          className="h-full w-full object-cover opacity-80 grayscale transition group-hover:opacity-100"
                        />
                      ) : (
                        <div className="flex h-full min-h-[320px] items-center justify-center px-8">
                          <div className="text-center">
                            <div className="mx-auto h-16 w-16 rounded-full border border-white/15" />
                            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-white/35">
                              Featured Article
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-8 md:p-10">
                      <div className="flex flex-wrap gap-3">
                        {Array.isArray(featuredPost.tags) &&
                          featuredPost.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/15 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/45"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>

                      <h2 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-white md:text-6xl">
                        {featuredPost.title}
                      </h2>

                      {featuredPost.excerpt && (
                        <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
                          {featuredPost.excerpt}
                        </p>
                      )}

                      <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-white/40">
                        <span>{featuredPost.author || "Fundamental Co."}</span>
                        <span className="inline-flex items-center gap-2">
                          <Calendar size={15} />
                          {formatDate(
                            featuredPost.published_at ||
                              featuredPost.created_at
                          )}
                        </span>
                        <span>{featuredPost.read_time || "—"}</span>
                      </div>

                      <div className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                        Read Article
                        <ArrowUpRight
                          size={16}
                          className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {remainingPosts.length > 0 && (
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {remainingPosts.map((post) => (
                    <BlogCard
                      key={post.id}
                      post={post}
                      formatDate={formatDate}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
}

function BlogCard({ post, formatDate }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex min-h-[420px] flex-col justify-between rounded-[32px] border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.05]"
    >
      <div>
        {post.featured_image_url ? (
          <div className="mb-6 overflow-hidden rounded-[24px] border border-white/10">
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="h-44 w-full object-cover opacity-80 grayscale transition group-hover:opacity-100"
            />
          </div>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {Array.isArray(post.tags) &&
            post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/40"
              >
                {tag}
              </span>
            ))}
        </div>

        <h3 className="mt-6 text-2xl font-semibold leading-[1.05] tracking-[-0.04em] text-white">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/50">
            {post.excerpt}
          </p>
        )}
      </div>

      <div className="mt-8 border-t border-white/10 pt-5">
        <div className="flex items-center justify-between gap-4 text-xs text-white/35">
          <span>{formatDate(post.published_at || post.created_at)}</span>
          <span>{post.read_time || "—"}</span>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
          Read
          <ArrowUpRight size={15} />
        </div>
      </div>
    </Link>
  );
}