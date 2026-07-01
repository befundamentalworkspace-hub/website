import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ServicePage, servicePages } from "@/lib/servicePages";

type ServiceDetailPageProps = {
  page: ServicePage;
};

export function ServiceDetailPage({ page }: ServiceDetailPageProps) {
  const Icon = page.icon;
  const relatedPages = page.related
    .map((slug) => servicePages.find((servicePage) => servicePage.slug === slug))
    .filter((servicePage): servicePage is ServicePage => Boolean(servicePage));

  return (
    <>
      <Section className="pt-16 lg:pt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div className="max-w-4xl">
              <Badge>{page.eyebrow}</Badge>
              <h1 className="display-text mt-6 text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-body">{page.description}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/request-audit">Request Pipeline Audit</Button>
                <Button href="/services" variant="secondary">
                  View Service System
                </Button>
              </div>
            </div>
            <Card className="bg-primary p-7 text-white hover:translate-y-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <Icon size={22} aria-hidden="true" />
              </div>
              <p className="section-label mt-6 text-white/52">Primary outcome</p>
              <p className="mt-3 text-lg leading-8 text-white/78">{page.primaryOutcome}</p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <Card>
              <p className="section-label">Best fit</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-body">
                {page.whoItsFor.map((item) => (
                  <li key={item} className="rounded-2xl border border-hairline bg-canvas-soft px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <p className="section-label">When this is the right problem to solve</p>
              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {page.symptoms.map((symptom) => (
                  <p key={symptom} className="rounded-2xl border border-hairline bg-canvas-soft p-4 text-sm leading-6 text-body">
                    {symptom}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="section-label">What we build</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
              The deliverable only matters when it strengthens the patient journey.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {page.whatWeBuild.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-body">{item.copy}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="section-label">Process</p>
              <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
                Diagnose, build, then optimize by the stage that is leaking.
              </h2>
            </div>
            <div className="grid gap-4">
              {page.process.map((item) => (
                <Card key={item.step} className="p-0 hover:translate-y-0">
                  <div className="grid gap-0 sm:grid-cols-[96px_1fr]">
                    <div className="border-b border-hairline bg-card p-6 sm:border-b-0 sm:border-r">
                      <p className="display-text text-4xl text-primary">{item.step}</p>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-body">{item.copy}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Card>
              <p className="section-label">Typical deliverables</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-body sm:grid-cols-2">
                {page.deliverables.map((item) => (
                  <li key={item} className="rounded-2xl border border-hairline bg-canvas-soft px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <p className="section-label">What we watch</p>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-body sm:grid-cols-2">
                {page.metrics.map((item) => (
                  <li key={item} className="rounded-2xl border border-hairline bg-canvas-soft px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {relatedPages.length > 0 ? (
        <Section className="bg-canvas-soft/70">
          <Container>
            <div className="max-w-3xl">
              <p className="section-label">Related services</p>
              <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
                Connected parts of the same clinic growth system.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {relatedPages.map((relatedPage) => (
                <Link key={relatedPage.href} href={relatedPage.href} className="group">
                  <Card className="h-full">
                    <p className="section-label">{relatedPage.eyebrow}</p>
                    <h3 className="mt-4 text-xl font-semibold leading-7 text-primary group-hover:text-ink">
                      {relatedPage.label}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-body">{relatedPage.metaDescription}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CTASection heading={page.ctaHeading} copy={page.ctaCopy} />
    </>
  );
}
