import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/metadata";
import { clientCategories, pipelineStages } from "@/lib/siteData";

export const metadata: Metadata = pageMetadata({
  title: "Clients | Fundamental.co",
  description:
    "Fundamental.co is built for clinics and high-trust businesses where credibility decides conversion.",
  path: "/clients"
});

export default function ClientsPage() {
  return (
    <>
      <Section className="pt-16 lg:pt-24">
        <Container>
          <div className="max-w-4xl">
            <Badge>Our clients</Badge>
            <h1 className="display-text mt-6 text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
              Built for clinics and high-trust businesses where credibility decides conversion.
            </h1>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label">Client categories</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
              Designed for businesses where trust is the sale.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {clientCategories.map((category) => (
              <Card key={category}>
                <h3 className="text-xl font-semibold text-primary">{category}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="section-label">Client proof grid</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
              Placeholder-ready proof, without invented logos or testimonials.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, index) => {
              const stage = pipelineStages[index % pipelineStages.length];
              return (
                <Card key={stage.name + index} as="article">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-hairline-strong bg-canvas-soft text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Logo
                  </div>
                  <p className="section-label mt-6">Client proof slot</p>
                  <h3 className="mt-4 text-xl font-semibold text-primary">Case study coming soon</h3>
                  <dl className="mt-5 space-y-3 text-sm leading-6 text-body">
                    <div>
                      <dt className="font-semibold text-primary">Category</dt>
                      <dd>{clientCategories[index]}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-primary">Work done</dt>
                      <dd>Available on request</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-primary">Pipeline stage improved</dt>
                      <dd>{stage.name}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-primary">Result summary</dt>
                      <dd>Ready for verified client proof.</dd>
                    </div>
                  </dl>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Want to know where your clinic is leaking revenue?"
        copy="Request a Pipeline Audit and we will inspect the trust, enquiry, follow-up, consultation, and conversion stages of your patient journey."
        cta="Request Pipeline Audit"
      />
    </>
  );
}
