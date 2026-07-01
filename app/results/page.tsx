import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/metadata";
import { proofCards, resultCategories } from "@/lib/siteData";

export const metadata: Metadata = pageMetadata({
  title: "Clinic Growth Results | Pipeline Audits and Conversion Transformations",
  description:
    "Proof-ready results, transformations, and case study templates for clinic patient acquisition systems.",
  path: "/results"
});

export default function ResultsPage() {
  return (
    <>
      <Section className="pt-16 lg:pt-24">
        <Container>
          <div className="max-w-4xl">
            <Badge>Results without fake numbers</Badge>
            <h1 className="display-text mt-6 text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
              Proof should show the system, not just the screenshot.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
              This page is designed to hold audits, before-after transformations,
              campaign breakdowns, and clinic pipeline improvements.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resultCategories.map((category) => (
              <Card key={category}>
                <p className="section-label">Result category</p>
                <h2 className="mt-4 text-xl font-semibold text-primary">{category}</h2>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="section-label">Case study template cards</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
              Ready for real clinic proof when the data is available.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {proofCards.map((card) => (
              <Card key={card.title} as="article">
                <p className="section-label">{card.type}</p>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-primary">{card.title}</h3>
                <dl className="mt-5 space-y-3 text-sm leading-6 text-body">
                  <div>
                    <dt className="font-semibold text-primary">Clinic type</dt>
                    <dd>Clinic proof slot</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary">Problem</dt>
                    <dd>{card.leak}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary">Pipeline leak</dt>
                    <dd>{card.type}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary">What was changed</dt>
                    <dd>Implementation summary ready for real data.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-primary">Result type</dt>
                    <dd>Before-after transformation</dd>
                  </div>
                </dl>
                <p className="mt-5 inline-flex rounded-full border border-hairline bg-canvas-soft px-3 py-1 text-xs font-semibold text-muted">
                  {card.status}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="Request your clinic's pipeline audit."
        copy="Find the specific stages where trust, enquiry quality, follow-up, or consultation conversion may be leaking."
      />
    </>
  );
}
