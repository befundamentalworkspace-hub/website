import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SEO from "../components/SEO.jsx";
import { supabase } from "../lib/supabaseClient";

export default function BlogPost() {
  const { slug } = useParams();

  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [relatedLoading, setRelatedLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const blogPostSchema = post
  ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.seo_title || post.title,
      description:
        post.seo_description ||
        post.excerpt ||
        "Read Fundamental.co insights on doctor marketing, clinic SEO, patient acquisition, and conversion systems.",
      image:
        post.featured_image_url ||
        "https://justfundamental.com/fundamental-og-image.png",
      author: {
        "@type": "Organization",
        name: post.author || "Fundamental.co",
      },
      publisher: {
        "@type": "Organization",
        name: "Fundamental.co",
        logo: {
          "@type": "ImageObject",
          url: "https://justfundamental.com/fundamental-mark.png",
        },
      },
      datePublished: post.published_at || post.created_at,
      dateModified: post.updated_at || post.published_at || post.created_at,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://justfundamental.com/blog/${post.slug}`,
      },
    }
  : null;

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      setErrorMessage("");

      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (error || !data) {
        setErrorMessage("This article is not available.");
        setPost(null);
      } else {
        setPost(data);
      }

      setLoading(false);
    }

    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (!post) return;

    async function fetchRelatedPosts() {
      setRelatedLoading(true);

      let query = supabase
        .from("blog_posts")
        .select(
          "id, title, slug, excerpt, author, tags, read_time, published_at, created_at, featured_image_url"
        )
        .eq("status", "published")
        .neq("id", post.id)
        .order("published_at", { ascending: false })
        .limit(6);

      const { data, error } = await query;

      if (error) {
        setRelatedPosts([]);
        setRelatedLoading(false);
        return;
      }

      const currentTags = Array.isArray(post.tags) ? post.tags : [];

      const scoredPosts = (data || [])
        .map((item) => {
          const itemTags = Array.isArray(item.tags) ? item.tags : [];

          const matchingTags = itemTags.filter((tag) =>
            currentTags.includes(tag)
          );

          return {
            ...item,
            matchScore: matchingTags.length,
          };
        })
        .sort((a, b) => {
          if (b.matchScore !== a.matchScore) {
            return b.matchScore - a.matchScore;
          }

          return (
            new Date(b.published_at || b.created_at).getTime() -
            new Date(a.published_at || a.created_at).getTime()
          );
        })
        .slice(0, 3);

      setRelatedPosts(scoredPosts);
      setRelatedLoading(false);
    }

    fetchRelatedPosts();
  }, [post]);

  useEffect(() => {
    if (!post) return;

    document.title = post.seo_title || `${post.title} | Fundamental.co`;

    const description =
      post.seo_description ||
      post.excerpt ||
      "Insights on clinic marketing, patient trust, enquiries, follow-up, and consultation conversion.";

    setMetaTag("description", description);

    if (post.seo_keywords) {
      setMetaTag("keywords", post.seo_keywords);
    }

    setPropertyTag("og:title", post.seo_title || post.title);
    setPropertyTag("og:description", description);
    setPropertyTag("og:type", "article");
    setPropertyTag("og:url", window.location.href);
    setPropertyTag("og:site_name", "Fundamental.co");

    if (post.featured_image_url) {
      setPropertyTag("og:image", post.featured_image_url);
    }

    setCanonicalUrl(window.location.href);
  }, [post]);

  const publishedDate = useMemo(() => {
    if (!post) return "";
    return formatDate(post.published_at || post.created_at, "long");
  }, [post]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black px-6 py-28 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">
            Loading article...
          </p>
        </div>
      </main>
    );
  }

  if (errorMessage || !post) {
    return (
      <main className="min-h-screen bg-black px-6 py-28 text-white">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/45 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            Back to blog
          </Link>

          <h1 className="mt-10 text-5xl font-semibold tracking-[-0.04em]">
            Article not found.
          </h1>

          <p className="mt-5 max-w-xl text-white/55">
            This post may be unpublished, archived, or removed.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {post && (
        <SEO
          title={post.seo_title || `${post.title} | Fundamental.co`}
          description={
            post.seo_description ||
            post.excerpt ||
            "Read Fundamental.co insights on doctor marketing, clinic SEO, patient acquisition, and conversion systems."
          }
          path={`/blog/${post.slug}`}
          image={
            post.featured_image_url ||
            "https://justfundamental.com/fundamental-og-image.png"
          }
          type="article"
          schema={blogPostSchema}
        />
      )}
      <article className="px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/45 transition hover:text-white"
          >
            <ArrowLeft size={15} />
            Back to blog
          </Link>

          <header className="mt-12 border-b border-white/10 pb-12">
            <div className="flex flex-wrap gap-3">
              {Array.isArray(post.tags) &&
                post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-white/45"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white md:text-7xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-8 max-w-3xl text-lg leading-8 text-white/60 md:text-xl">
                {post.excerpt}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/40">
              <span>{post.author || "Fundamental Co."}</span>

              <span className="inline-flex items-center gap-2">
                <Calendar size={15} />
                {publishedDate}
              </span>

              <span className="inline-flex items-center gap-2">
                <Clock size={15} />
                {post.read_time || "—"}
              </span>
            </div>
          </header>

          {post.featured_image_url && (
            <div className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03]">
              <img
                src={post.featured_image_url}
                alt={post.title}
                className="h-auto w-full object-cover grayscale"
              />
            </div>
          )}

          <div className="mt-14">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          <BlogPostCTA />
        </div>
      </article>

      <RelatedPostsSection
        posts={relatedPosts}
        loading={relatedLoading}
      />
    </main>
  );
}

function BlogPostCTA() {
  return (
    <section className="mt-20 rounded-[36px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.32em] text-white/40">
        Clinic Growth Diagnostic
      </p>

      <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.05em] text-white md:text-5xl">
        Your clinic may not need more content. It may need to find where the
        patient journey is leaking.
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
        Fundamental.co reviews how attention, trust, enquiries, follow-up, and
        consultation flow work together before recommending more marketing.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="/request-audit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white/85"
        >
          Request a Pipeline Audit
          <ArrowUpRight size={15} />
        </Link>

        <Link
          to="/services"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:border-white/35 hover:bg-white/[0.04]"
        >
          See the System
        </Link>
      </div>
    </section>
  );
}

function RelatedPostsSection({ posts, loading }) {
  if (loading) {
    return (
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.28em] text-white/40">
            Loading related articles...
          </p>
        </div>
      </section>
    );
  }

  if (!posts.length) {
    return null;
  }

  return (
    
    
    <section className="border-t border-white/10 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-white/40">
              Continue Reading
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Related articles
            </h2>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/55 transition hover:text-white"
          >
            View all articles
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <RelatedPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedPostCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex min-h-[390px] flex-col justify-between rounded-[32px] border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.05]"
    >
      <div>
        {post.featured_image_url && (
          <div className="mb-6 overflow-hidden rounded-[24px] border border-white/10">
            <img
              src={post.featured_image_url}
              alt={post.title}
              className="h-40 w-full object-cover opacity-80 grayscale transition group-hover:opacity-100"
            />
          </div>
        )}

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
          <span>{formatDate(post.published_at || post.created_at, "short")}</span>
          <span>{post.read_time || "—"}</span>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">
          Read
          <ArrowUpRight
            size={15}
            className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </Link>
  );
}

const markdownComponents = {
  h1: ({ children }) => (
    <h2 className="mt-14 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] text-white md:text-5xl">
      {children}
    </h2>
  ),

  h2: ({ children }) => (
    <h2 className="mt-14 text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-white md:text-4xl">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-white">
      {children}
    </h3>
  ),

  h4: ({ children }) => (
    <h4 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-white">
      {children}
    </h4>
  ),

  p: ({ children }) => (
    <p className="mt-5 text-base leading-8 text-white/62 md:text-lg">
      {children}
    </p>
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),

  em: ({ children }) => <em className="text-white/75">{children}</em>,

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="border-b border-white/35 text-white transition hover:border-white"
    >
      {children}
    </a>
  ),

  ul: ({ children }) => (
    <ul className="mt-5 space-y-3 pl-6 text-white/62">{children}</ul>
  ),

  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-3 pl-6 text-white/62">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="pl-1 text-base leading-8 md:text-lg">{children}</li>
  ),

  blockquote: ({ children }) => (
    <blockquote className="mt-8 border-l border-white/25 pl-6 text-xl leading-8 text-white/75">
      {children}
    </blockquote>
  ),

  hr: () => <hr className="my-12 border-white/10" />,

  code: ({ inline, children }) => {
    if (inline) {
      return (
        <code className="rounded-md border border-white/10 bg-white/[0.06] px-1.5 py-0.5 text-sm text-white/80">
          {children}
        </code>
      );
    }

    return (
      <code className="block overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-sm leading-7 text-white/70">
        {children}
      </code>
    );
  },

  pre: ({ children }) => <pre className="mt-6">{children}</pre>,

  table: ({ children }) => (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full border-collapse text-left text-sm text-white/60">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }) => (
    <thead className="border-b border-white/10 bg-white/[0.04] text-white">
      {children}
    </thead>
  ),

  th: ({ children }) => (
    <th className="min-w-[180px] px-5 py-4 text-xs uppercase tracking-[0.16em] text-white/70">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="border-t border-white/10 px-5 py-4 text-white/55">
      {children}
    </td>
  ),

  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt || ""}
      className="mt-8 w-full rounded-[28px] border border-white/10 grayscale"
    />
  ),
};

function formatDate(dateValue, style = "short") {
  if (!dateValue) return "—";

  if (style === "long") {
    return new Date(dateValue).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  return new Date(dateValue).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function setMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setPropertyTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

function setCanonicalUrl(url) {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", url);
}