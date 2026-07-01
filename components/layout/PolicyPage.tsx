import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

type PolicySection = {
  title: string;
  body: string[];
};

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: PolicySection[];
};

export function PolicyPage({ eyebrow, title, intro, updated, sections }: PolicyPageProps) {
  return (
    <>
      <Section className="pt-16 lg:pt-24">
        <Container>
          <div className="max-w-4xl">
            <Badge>{eyebrow}</Badge>
            <h1 className="display-text mt-6 text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-body">{intro}</p>
            <p className="mt-5 text-sm font-semibold text-muted">Last updated: {updated}</p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5">
            {sections.map((section) => (
              <Card key={section.title} className="p-6 sm:p-8">
                <h2 className="display-text text-3xl text-ink sm:text-4xl">{section.title}</h2>
                <div className="mt-4 space-y-4 text-sm leading-7 text-body sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
