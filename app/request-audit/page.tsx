import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { AuditForm } from "@/components/sections/AuditForm";
import { Accordion } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/metadata";
import { faqs } from "@/lib/siteData";

export const metadata: Metadata = pageMetadata({
  title: "Request a Pipeline Audit | Fundamental.co",
  description:
    "Request a Fundamental.co Pipeline Audit to find where your clinic is losing trust, enquiries, consultations, and revenue.",
  path: "/request-audit"
});

export default function RequestAuditPage() {
  return (
    <>
      <Section className="pt-16 lg:pt-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <Badge>Request audit</Badge>
              <h1 className="display-text mt-6 text-5xl leading-tight text-ink sm:text-6xl">
                Find where your clinic is losing trust, enquiries, consultations, and revenue.
              </h1>
              <p className="mt-6 text-lg leading-8 text-body">
                Request a Pipeline Audit and we will review the stages where
                your patient journey may be leaking.
              </p>
              <Card className="mt-8 bg-canvas-soft">
                <p className="section-label">What we review</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-body">
                  <li>Positioning and attention quality</li>
                  <li>Doctor authority and website trust infrastructure</li>
                  <li>Enquiry path, forms, CTAs, and WhatsApp flow</li>
                  <li>Follow-up speed, structure, and recovery logic</li>
                  <li>Consultation and conversion support assets</li>
                </ul>
              </Card>
            </div>
            <AuditForm />
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="section-label">FAQ</p>
              <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
                Common questions before requesting an audit.
              </h2>
            </div>
            <Accordion items={faqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
