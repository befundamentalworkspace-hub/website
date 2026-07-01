import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { journeyBreaks } from "@/lib/siteData";

export function JourneyBreaksSection() {
  return (
    <Section className="bg-canvas-soft/60">
      <Container>
        <div className="max-w-3xl">
          <p className="section-label">Where the journey breaks</p>
          <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
            Most leakage is invisible until you map the whole journey.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {journeyBreaks.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.stage} as="article">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-canvas-soft">
                  <Icon size={19} aria-hidden="true" />
                </div>
                <p className="section-label mt-5">{item.stage}</p>
                <h3 className="display-text mt-2 text-3xl text-ink">{item.statement}</h3>
                <div className="mt-5 space-y-4 text-sm leading-6 text-body">
                  <p>
                    <strong className="text-primary">What it costs:</strong> {item.cost}
                  </p>
                  <p>
                    <strong className="text-primary">What Fundamental.co fixes:</strong> {item.fix}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
