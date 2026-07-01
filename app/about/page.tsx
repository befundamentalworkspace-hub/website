import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About Fundamental.co | Trust-First Growth for Doctor-Led Clinics",
  description:
    "Learn why Fundamental.co builds trust-first patient acquisition systems for doctor-led clinics that refuse to look replaceable.",
  path: "/about"
});

const whatWeDo = [
  "Positioning diagnosis",
  "Content systems",
  "Website trust infrastructure",
  "Landing pages",
  "Ads",
  "WhatsApp enquiry flows",
  "Follow-up SOPs",
  "Consultation conversion support",
  "Monthly optimization"
];

const whatWeDoNotDo = [
  "Random posting",
  "Cheap lead generation",
  "Vanity metric reporting",
  "Generic clinic websites",
  "Discount-led positioning",
  "Ads without trust infrastructure",
  "Marketing activity without pipeline logic"
];

const principles = [
  "Diagnose before building",
  "Trust before traffic",
  "Positioning before content",
  "Follow-up before scaling ads",
  "Systems before campaigns",
  "Clarity before conversion"
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-16 lg:pt-24">
        <Container>
          <div className="max-w-4xl">
            <Badge>About Fundamental.co</Badge>
            <h1 className="display-text mt-6 text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl">
              The marketing agency for doctor-led clinics that refuse to look replaceable.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
              Fundamental.co exists because skilled doctors should not lose
              patients to weaker clinics that simply look more trustworthy online.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-label">Core belief</p>
              <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
                Visibility without trust does not create revenue.
              </h2>
            </div>
            <p className="text-lg leading-8 text-body">
              Patients do not choose clinics only because they see ads. They
              choose when they understand the doctor, trust the expertise, and
              feel confident about the next step. That is why we build patient
              acquisition systems around trust before traffic.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <Card>
              <p className="section-label">What we do</p>
              <ul className="mt-6 grid gap-3 text-body sm:grid-cols-2">
                {whatWeDo.map((item) => (
                  <li key={item} className="rounded-2xl border border-hairline bg-canvas-soft px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <p className="section-label">What we do not do</p>
              <ul className="mt-6 grid gap-3 text-body sm:grid-cols-2">
                {whatWeDoNotDo.map((item) => (
                  <li key={item} className="rounded-2xl border border-hairline bg-canvas-soft px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-canvas-soft/70">
        <Container>
          <div className="max-w-3xl">
            <p className="section-label">Operating principles</p>
            <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
              The system matters because the patient journey is connected.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <Card key={principle}>
                <h3 className="text-xl font-semibold text-primary">{principle}</h3>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        heading="The best doctors should not look replaceable."
        copy="If your clinic has skill, reputation, and patient value, the online journey should make that visible before a patient ever enquires."
      />
    </>
  );
}
