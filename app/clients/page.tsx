import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/metadata";
import { clientCategories, clientProofCards } from "@/lib/siteData";

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
              Real client proof, structured around the pipeline each business needed to strengthen.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {clientProofCards.map((client) => {
              return (
                <Card key={client.name} as="article" className="flex h-full flex-col">
                  <div
                    className={`relative flex h-32 items-center justify-center overflow-hidden rounded-card border border-hairline ${client.logoFrameClass}`}
                  >
                    <Image
                      src={client.logo}
                      alt={client.logoAlt}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="section-label">Client proof</p>
                    <p className="mt-3 text-sm font-semibold text-muted">{client.name}</p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-primary">{client.headline}</h3>
                  </div>
                  <dl className="mt-5 flex flex-1 flex-col gap-4 text-sm leading-6 text-body">
                    {[
                      ["Business type", client.businessType],
                      ["Problem", client.problem],
                      ["What we fixed", client.fixed],
                      ["Pipeline strengthened", client.pipeline],
                      ["Outcome", client.outcome],
                      ["Verification", client.verification]
                    ].map(([label, value]) => (
                      <div key={label}>
                        <dt className="font-semibold text-primary">{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
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
