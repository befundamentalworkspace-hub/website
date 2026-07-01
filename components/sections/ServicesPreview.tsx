import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { services } from "@/lib/siteData";

export function ServicesPreview() {
  return (
    <Section className="bg-canvas-soft/70">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label">Services are not the product</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
              The pipeline is.
            </h2>
            <p className="mt-5 text-lg leading-8 text-body">
              We may build content, websites, ads, landing pages, WhatsApp flows,
              and follow-up systems. But those are not random deliverables. They
              are parts of one patient acquisition system.
            </p>
            <div className="mt-7">
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="p-5">
                  <Icon size={20} aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-primary">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-body">{service.matters}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
