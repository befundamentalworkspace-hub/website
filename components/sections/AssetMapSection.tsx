import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { assetMap } from "@/lib/siteData";

export function AssetMapSection() {
  return (
    <Section className="bg-canvas-soft/70">
      <Container>
        <div className="max-w-3xl">
          <p className="section-label">What we build</p>
          <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
            Every asset is mapped to a pipeline stage.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {assetMap.map(([stage, assets]) => (
            <Card key={stage}>
              <p className="section-label">{stage}</p>
              <ul className="mt-5 space-y-3 text-body">
                {assets.map((asset) => (
                  <li key={asset} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {asset}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
