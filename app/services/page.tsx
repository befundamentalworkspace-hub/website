import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/metadata";
import { servicePageSummaries } from "@/lib/servicePages";
import { services } from "@/lib/siteData";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Clinic Marketing Services | Websites, Ads, SEO and Conversion Systems",
  description:
    "Explore Fundamental.co's trust-first clinic growth services, mapped to the full attention-to-conversion pipeline.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-16 lg:pt-24">
        <Container>
          <div className="max-w-4xl">
            <Badge>Services mapped to pipeline stages</Badge>
            <h1 className="display-text mt-6 text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
              Services are not the product. The pipeline is.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
              Every asset we build is connected to one goal: turning attention
              into trusted consultations.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="grid gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="p-0">
                  <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="border-b border-hairline bg-card p-6 lg:border-b-0 lg:border-r sm:p-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-hairline bg-canvas-soft">
                        <Icon size={20} aria-hidden="true" />
                      </div>
                      <p className="section-label mt-6">Stage {index + 1}</p>
                      <h2 className="display-text mt-3 text-4xl text-ink">{service.title}</h2>
                      <p className="mt-5 text-body">{service.matters}</p>
                    </div>
                    <div className="grid gap-4 p-6 sm:p-8 md:grid-cols-3">
                      <div>
                        <p className="section-label">What breaks</p>
                        <p className="mt-3 text-sm leading-6 text-body">{service.breaks}</p>
                      </div>
                      <div>
                        <p className="section-label">What we build</p>
                        <p className="mt-3 text-sm leading-6 text-body">{service.build}</p>
                      </div>
                      <div>
                        <p className="section-label">Typical assets</p>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-body">
                          {service.assets.map((asset) => (
                            <li key={asset}>{asset}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="border-primary bg-primary p-8 text-white sm:p-10">
            <p className="section-label text-white/52">Offer system</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-white sm:text-5xl">
              The Clinic Revenue Multiplier Plan
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/76">
              This is not a package of disconnected services. It is a monthly
              operating system for clinic growth: diagnose the pipeline, build
              the missing trust and conversion assets, and optimize where the
              patient journey is leaking.
            </p>
          </Card>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label">Individual service pages</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
              Explore the spokes inside the clinic growth system.
            </h2>
            <p className="mt-5 text-lg leading-8 text-body">
              Each page explains one part of the system while keeping it connected
              to the full patient journey.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {servicePageSummaries.map((servicePage) => (
              <Link key={servicePage.href} href={servicePage.href} className="group">
                <Card className="h-full">
                  <p className="section-label">Service page</p>
                  <h3 className="mt-4 text-xl font-semibold leading-7 text-primary group-hover:text-ink">
                    {servicePage.label}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-body">{servicePage.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="More traffic only helps when the patient journey can hold it."
        copy="Request a Pipeline Audit before you add more spend to a system that may already be leaking trust and enquiries."
      />
    </>
  );
}
