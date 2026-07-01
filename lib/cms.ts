import { blogArticles, blogCategories } from "@/lib/siteData";
import { getPublicSupabaseKey, supabaseRest } from "@/lib/supabaseRest";

export type CmsArticle = {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  readTime: string;
  featured: boolean;
};

export type CmsPost = CmsArticle & {
  content: string;
  seoTitle: string | null;
  seoDescription: string | null;
  seoKeywords: string | null;
  publishedAt: string | null;
};

type CmsPostRow = {
  title: string;
  slug: string;
  excerpt: string | null;
  content?: string | null;
  read_time: string | null;
  tags: string[] | null;
  published_at: string | null;
  seo_title?: string | null;
  seo_description?: string | null;
  seo_keywords?: string | null;
};

export async function getBlogContent() {
  if (!getPublicSupabaseKey()) {
    return fallbackBlogContent();
  }

  try {
    const posts = await supabaseRest<CmsPostRow[]>("blog_posts", {
      query: "select=title,slug,excerpt,read_time,tags,published_at&status=eq.published&order=published_at.desc",
      next: { revalidate: 300 }
    });

    if (!posts.length) {
      return fallbackBlogContent();
    }

    return {
      articles: posts.map((post, index) => mapPost(post, index)),
      categories: categoriesFromPosts(posts)
    };
  } catch (error) {
    console.error("Failed to load Supabase CMS content", error);
    return fallbackBlogContent();
  }
}

export async function getBlogPost(slug: string) {
  if (!getPublicSupabaseKey()) {
    return fallbackPost(slug);
  }

  try {
    const posts = await supabaseRest<CmsPostRow[]>("blog_posts", {
      query: `select=title,slug,excerpt,content,read_time,tags,published_at,seo_title,seo_description,seo_keywords&status=eq.published&slug=eq.${encodeURIComponent(slug)}&limit=1`,
      next: { revalidate: 300 }
    });

    if (!posts.length) {
      return fallbackPost(slug);
    }

    return mapPostDetail(posts[0]);
  } catch (error) {
    console.error("Failed to load Supabase blog post", error);
    return fallbackPost(slug);
  }
}

function mapPost(row: CmsPostRow, index: number): CmsArticle {
  return {
    title: row.title,
    slug: row.slug,
    category: row.tags?.[0] ?? "Clinic Marketing",
    excerpt: row.excerpt ?? "",
    readTime: row.read_time ?? "5 min read",
    featured: index === 0
  };
}

function mapPostDetail(row: CmsPostRow): CmsPost {
  const article = mapPost(row, 0);

  return {
    ...article,
    featured: false,
    content: row.content ?? row.excerpt ?? "",
    seoTitle: row.seo_title ?? null,
    seoDescription: row.seo_description ?? null,
    seoKeywords: row.seo_keywords ?? null,
    publishedAt: row.published_at
  };
}

function categoriesFromPosts(posts: CmsPostRow[]) {
  const categories = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => categories.add(tag));
  });

  return categories.size ? Array.from(categories) : blogCategories;
}

function fallbackBlogContent() {
  return {
    articles: blogArticles.map((article, index) => ({
      ...article,
      slug: slugify(article.title),
      featured: index === 0
    })),
    categories: blogCategories
  };
}

function fallbackPost(slug: string) {
  const article = fallbackBlogContent().articles.find((item) => item.slug === slug);
  if (!article) return null;

  return {
    ...article,
    content: article.excerpt,
    seoTitle: null,
    seoDescription: null,
    seoKeywords: null,
    publishedAt: null
  };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
