import { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getBlogContent } from "@/lib/cms";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Clinic Growth Blog | Trust, Marketing and Patient Acquisition",
  description:
    "Editorial clinic growth articles about patient trust, doctor authority, website conversion, follow-up systems, ads, and patient acquisition.",
  path: "/blog"
});

export default async function BlogPage() {
  const { articles, categories } = await getBlogContent();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <>
      <Section className="pt-16 lg:pt-24">
        <Container>
          <div className="max-w-4xl">
            <Badge>Clinic growth blog</Badge>
            <h1 className="display-text mt-6 text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
              Clear thinking on trust, marketing, and patient acquisition.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
              Editorial resources for clinics that want serious enquiries, not
              more noise.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[360px_1fr] lg:items-start">
            <label className="relative block">
              <span className="sr-only">Search articles</span>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} aria-hidden="true" />
              <input
                className="min-h-12 w-full rounded-full border border-hairline bg-card py-3 pl-11 pr-4 text-primary outline-none transition focus:border-primary"
                placeholder="Search clinic growth topics"
                type="search"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="rounded-full border border-hairline bg-card px-4 py-2 text-sm font-semibold text-muted transition hover:border-primary hover:text-primary"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <article className="grid overflow-hidden rounded-panel border border-hairline bg-card shadow-soft lg:grid-cols-[1fr_0.95fr]">
            <div className="flex min-h-[340px] items-end bg-primary p-8 text-white sm:p-10">
              <div>
                <p className="section-label text-white/52">Featured article</p>
                <h2 className="display-text mt-4 text-4xl leading-tight text-white sm:text-5xl">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <p className="section-label">{featured.category}</p>
              <p className="mt-5 text-lg leading-8 text-body">{featured.excerpt}</p>
              <p className="mt-8 text-sm font-semibold text-muted">{featured.readTime}</p>
              <Link className="mt-6 inline-flex text-sm font-semibold text-primary" href={`/blog/${featured.slug}`}>
                Read article
              </Link>
            </div>
          </article>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <Card key={article.slug} as="article">
                <p className="section-label">{article.category}</p>
                <h2 className="mt-4 text-xl font-semibold leading-7 text-primary">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="mt-4 text-sm leading-6 text-body">{article.excerpt}</p>
                <p className="mt-6 text-sm font-semibold text-muted">{article.readTime}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Want the audit behind the articles?"
        copy="Request a Pipeline Audit and we will review where your clinic's current patient journey may be leaking serious demand."
      />
    </>
  );
}
