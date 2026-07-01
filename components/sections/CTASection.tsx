import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { GradientOrb } from "@/components/ui/GradientOrb";

type CTASectionProps = {
  eyebrow?: string;
  heading: string;
  copy: string;
  cta?: string;
};

export function CTASection({
  eyebrow = "Pipeline audit",
  heading,
  copy,
  cta = "Request a Pipeline Audit"
}: CTASectionProps) {
  return (
    <Section className="relative overflow-hidden">
      <GradientOrb tone="rose" className="left-4 top-10" />
      <GradientOrb tone="mint" className="bottom-0 right-8" />
      <Container>
        <div className="relative overflow-hidden rounded-panel border border-white/10 bg-ink px-6 py-12 text-white shadow-soft sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute inset-0 hairline-grid opacity-[0.06]" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="section-label text-white/52">{eyebrow}</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-white sm:text-5xl">
              {heading}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">{copy}</p>
            <div className="mt-8">
              <Button href="/request-audit" variant="dark">
                {cta}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
