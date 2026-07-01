import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteData";

export const metadata: Metadata = pageMetadata({
  title: "Contact Fundamental.co | Clinic Growth and Pipeline Audits",
  description:
    "Contact Fundamental.co for clinic growth, patient acquisition, pipeline audits, and trust-first marketing systems.",
  path: "/contact"
});

const contactItems = [
  {
    label: "Business email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: Mail
  },
  {
    label: "Phone / WhatsApp",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.whatsapp || undefined,
    icon: Phone
  },
  {
    label: "Service area",
    value: siteConfig.contact.serviceArea,
    href: undefined,
    icon: MapPin
  },
  {
    label: "Preferred first step",
    value: "Request a Pipeline Audit",
    href: "/request-audit",
    icon: MessageCircle
  }
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-16 lg:pt-24">
        <Container>
          <div className="max-w-4xl">
            <Badge>Contact</Badge>
            <h1 className="display-text mt-6 text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
              Talk to Fundamental.co about your clinic growth system.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
              The clearest first step is a Pipeline Audit. If there is a fit,
              we can review the patient journey, identify where trust is
              leaking, and outline the right next move.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <Card className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-canvas-soft">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <p className="section-label mt-6">{item.label}</p>
                  <p className="mt-3 text-lg font-semibold text-primary">{item.value}</p>
                </Card>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="border-primary bg-primary p-8 text-white sm:p-10">
            <p className="section-label text-white/52">Best next step</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-white sm:text-5xl">
              Send the context once, then we can diagnose the pipeline.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/76">
              The audit form captures your clinic, specialty, current channels,
              patient acquisition problem, budget range, and preferred contact
              method so the first conversation is more useful.
            </p>
            <div className="mt-7">
              <Button href="/request-audit" variant="dark">
                Request Pipeline Audit
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    </>
  );
}
