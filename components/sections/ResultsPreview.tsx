import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { proofCards } from "@/lib/siteData";

export function ResultsPreview() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="section-label">Proof-ready results</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
              Proof should show the system, not just the screenshot.
            </h2>
          </div>
          <Button href="/results" variant="secondary">
            View Results
          </Button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {proofCards.map((card) => (
            <Card key={card.title} as="article">
              <p className="section-label">{card.type}</p>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-primary">{card.title}</h3>
              <p className="mt-4 text-sm leading-6 text-body">
                <strong className="text-primary">Pipeline leak:</strong> {card.leak}
              </p>
              <p className="mt-5 inline-flex rounded-full border border-hairline bg-canvas-soft px-3 py-1 text-xs font-semibold text-muted">
                {card.status}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
