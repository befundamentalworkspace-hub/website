import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { getBlogPost } from "@/lib/cms";
import { siteConfig } from "@/lib/siteData";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Article not found | Fundamental.co"
    };
  }

  const title = post.seoTitle || `${post.title} | Fundamental.co`;
  const description = post.seoDescription || post.excerpt;

  return {
    title,
    description,
    keywords: post.seoKeywords ? post.seoKeywords.split(",").map((keyword) => keyword.trim()).filter(Boolean) : undefined,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteConfig.url}/blog/${post.slug}`
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Section className="pt-16 lg:pt-24">
        <Container>
          <div className="max-w-3xl">
            <Link className="text-sm font-semibold text-muted transition hover:text-primary" href="/blog">
              Back to blog
            </Link>
            <div className="mt-8">
              <Badge>{post.category}</Badge>
            </div>
            <h1 className="display-text mt-6 text-5xl leading-tight text-ink sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-body">{post.excerpt}</p>
            <p className="mt-6 text-sm font-semibold text-muted">{post.readTime}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <article className="max-w-3xl text-lg leading-8 text-body">
            {post.content.split(/\n{2,}/).map((paragraph) => (
              <p className="mb-6" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </article>
        </Container>
      </Section>

      <CTASection
        heading="Want this thinking applied to your clinic?"
        copy="Request a Pipeline Audit and we will review where your clinic's current patient journey may be leaking serious demand."
      />
    </>
  );
}
