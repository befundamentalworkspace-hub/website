import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientOrb } from "@/components/ui/GradientOrb";
import { pipelineStages } from "@/lib/siteData";

export function HeroSection() {
  const markers = [
    "Built for doctor-led clinics",
    "Trust-first marketing system",
    "From attention to conversion"
  ];

  return (
    <section className="relative overflow-hidden pb-16 pt-16 sm:pt-20 lg:pb-24 lg:pt-24">
      <GradientOrb tone="mint" className="-left-24 top-12" />
      <GradientOrb tone="peach" className="right-0 top-0" />
      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <Badge>Clinic growth, rebuilt around trust</Badge>
          <h1 className="display-text mt-6 max-w-3xl text-[3rem] leading-[0.96] text-ink sm:text-[4.2rem] lg:text-[5rem]">
            Most clinics are visible. Very few are trusted.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-body">
            We help doctor-led clinics turn attention into trusted consultations
            through a complete attention-to-conversion pipeline.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/request-audit">Request a Pipeline Audit</Button>
            <Button href="#pipeline" variant="secondary">
              See the Pipeline
            </Button>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-primary sm:grid-cols-3">
            {markers.map((marker) => (
              <li key={marker} className="flex items-center gap-2">
                <CheckCircle2 size={16} aria-hidden="true" />
                {marker}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[470px] overflow-hidden rounded-panel border border-hairline bg-card p-5 shadow-soft">
          <div className="absolute inset-0 hairline-grid opacity-55" aria-hidden="true" />
          <GradientOrb tone="lavender" className="left-10 top-16 h-44 w-44" />
          <GradientOrb tone="sky" className="bottom-6 right-10 h-48 w-48" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-6">
            <div className="rounded-panel border border-hairline bg-canvas-soft/90 p-5">
              <p className="section-label">Patient acquisition pipeline</p>
              <p className="display-text mt-3 text-3xl leading-tight text-ink">
                Attention becomes revenue only when every step protects trust.
              </p>
            </div>
            <div className="grid gap-3">
              {pipelineStages.map((stage, index) => (
                <div
                  key={stage.name}
                  className="group flex items-center gap-3 rounded-full border border-hairline bg-white/92 p-2 pr-4 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1 text-sm font-semibold text-primary">{stage.name}</span>
                  <span className="hidden text-xs text-muted sm:block">{stage.metric}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-hairline bg-white/88 p-4 text-sm leading-6 text-body">
              More noise does not fix a leaking patient journey. Diagnose the
              stage first, then build the assets that move patients forward.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
