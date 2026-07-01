import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

const disconnected = ["Social media", "Ads", "Website", "WhatsApp", "Follow-up", "Consultation"];
const connected = [
  "Positioned attention",
  "Visible authority",
  "Clear enquiry path",
  "Fast follow-up",
  "Prepared consultation",
  "Confident decision"
];

export function ProblemSection() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <p className="section-label">The problem</p>
          <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
            Your clinic does not need more noise.
          </h2>
          <p className="mt-5 text-lg leading-8 text-body">
            Most clinics treat marketing as separate tasks. Patients experience
            all of it as one connected journey. When those pieces do not talk to
            each other, attention leaks before it becomes revenue.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <Card className="bg-canvas-soft">
            <p className="section-label">Disconnected marketing</p>
            <h3 className="display-text mt-3 text-3xl text-ink">Activity without continuity.</h3>
            <div className="mt-6 grid gap-3">
              {disconnected.map((item) => (
                <div key={item} className="rounded-2xl border border-hairline bg-card px-4 py-3 text-body">
                  {item}
                </div>
              ))}
            </div>
          </Card>
          <Card className="border-primary bg-primary text-white">
            <p className="section-label text-white/58">Connected patient journey</p>
            <h3 className="display-text mt-3 text-3xl text-white">A system that compounds trust.</h3>
            <div className="mt-6 grid gap-3">
              {connected.map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/8 px-4 py-3 text-white/82">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
