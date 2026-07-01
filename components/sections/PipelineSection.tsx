"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/Card";
import { pipelineStages } from "@/lib/siteData";
import { cn } from "@/lib/utils";

export function PipelineSection() {
  const [active, setActive] = useState(0);
  const stage = pipelineStages[active];

  return (
    <Section id="pipeline">
      <Container>
        <div className="max-w-3xl">
          <p className="section-label">The Fundamental.co pipeline</p>
          <h2 className="display-text mt-3 text-4xl leading-tight text-ink sm:text-5xl">
            Attention -&gt; Trust -&gt; Enquiry -&gt; Follow-up -&gt; Consultation -&gt; Conversion
          </h2>
          <p className="mt-5 text-lg leading-8 text-body">
            Services are not the product. The pipeline is. Each stage has a job,
            a leak to fix, assets to build, and a metric that tells us whether
            the patient journey is becoming stronger.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[330px_1fr]">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="grid gap-2 rounded-panel border border-hairline bg-card p-2">
              {pipelineStages.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={cn(
                    "rounded-2xl px-4 py-4 text-left transition",
                    active === index ? "bg-primary text-white" : "text-primary hover:bg-canvas-soft"
                  )}
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] opacity-60">
                    Stage {index + 1}
                  </span>
                  <span className="mt-1 block font-semibold">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          <Card className="min-h-[460px] overflow-hidden bg-card p-0">
            <div className="grid min-h-[460px] lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-panel border-b border-hairline bg-primary p-7 text-white lg:border-b-0 lg:border-r lg:border-white/10 sm:p-9">
                <p className="section-label text-white/50">Active stage</p>
                <h3 className="display-text mt-4 text-5xl leading-tight text-white sm:text-6xl">
                  {stage.name}
                </h3>
                <p className="mt-6 text-lg leading-8 text-white/78">{stage.idea}</p>
              </div>
              <div className="grid gap-4 p-6 sm:p-8">
                {[
                  ["Leak fixed", stage.leak],
                  ["Assets built", stage.assets],
                  ["Metric improved", stage.metric]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-panel border border-hairline bg-canvas-soft p-5">
                    <p className="section-label">{label}</p>
                    <p className="mt-3 text-lg leading-7 text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
