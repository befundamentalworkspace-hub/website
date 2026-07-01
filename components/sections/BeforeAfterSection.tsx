import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";

const before = [
  "Visible, but replaceable",
  "Posting, but not positioned",
  "Getting enquiries, but not serious patients",
  "Running ads, but leaking revenue",
  "Staff replying inconsistently",
  "Doctor rebuilding trust from zero"
];

const after = [
  "Clearly positioned specialist clinic",
  "Doctor authority visible before enquiry",
  "High-intent patients understand the value",
  "Follow-up system protects serious leads",
  "Consultations start with trust already built",
  "Growth becomes measurable and repeatable"
];

export function BeforeAfterSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="bg-canvas-soft">
            <p className="section-label">Before</p>
            <h2 className="display-text mt-3 text-4xl text-ink">Activity with leakage.</h2>
            <ul className="mt-6 space-y-3 text-body">
              {before.map((item) => (
                <li key={item} className="rounded-2xl border border-hairline bg-card px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-primary bg-primary text-white">
            <p className="section-label text-white/52">After</p>
            <h2 className="display-text mt-3 text-4xl text-white">A trusted patient journey.</h2>
            <ul className="mt-6 space-y-3 text-white/82">
              {after.map((item) => (
                <li key={item} className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
