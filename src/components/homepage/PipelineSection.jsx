import { useEffect, useMemo, useRef, useState } from "react";
import logoMark from "../../assets/fundamental-mark.png";

const stages = [
  {
    number: "01",
    title: "Attention",
    description: "Get the right people to notice your clinic for the right reason.",
    coreIdea: "Attention should create relevance, not vanity reach.",
    leakFixed: "Wrong audience. Vanity reach. Low-intent attention.",
    asset: "Hooks, content angles, ad creatives, landing entry points.",
    metric: "Reach, CTR, website visits",
  },
  {
    number: "02",
    title: "Trust",
    description: "Make the clinic credible before the enquiry happens.",
    coreIdea: "Patients compare before they contact.",
    leakFixed: "Doubt. Weak authority. Price comparison.",
    asset: "Doctor profile, proof library, trust-first website sections.",
    metric: "Website-to-enquiry rate",
  },
  {
    number: "03",
    title: "Enquiry",
    description: "Turn interest into a clear, low-friction next step.",
    coreIdea: "Trust must turn into action.",
    leakFixed: "Confusing CTA. Weak forms. Unclear WhatsApp flow.",
    asset: "Landing pages, CTA system, enquiry form, WhatsApp flow.",
    metric: "Qualified enquiries",
  },
  {
    number: "04",
    title: "Follow-up",
    description: "Stop serious leads from going cold after first contact.",
    coreIdea: "Many leads are not dead. They are unguided.",
    leakFixed: "Slow replies. No tracking. Weak scripts. Ghosting.",
    asset: "Follow-up scripts, enquiry tracker, lead temperature system.",
    metric: "Reply rate, booking rate",
  },
  {
    number: "05",
    title: "Consultation",
    description: "Prepare the patient before the doctor conversation begins.",
    coreIdea: "Consultations convert better when trust already exists.",
    leakFixed: "Poor expectation-setting. No-shows. Unprepared patients.",
    asset: "Pre-consultation messages, FAQs, proof, consultation framing.",
    metric: "Show-up rate",
  },
  {
    number: "06",
    title: "Conversion",
    description: "Turn serious consultation interest into a confident decision.",
    coreIdea: "Conversion is the result of the entire journey.",
    leakFixed: "Weak offer framing. Price resistance. No clear next step.",
    asset: "Offer clarity, recommendation structure, post-consultation follow-up.",
    metric: "Close rate, revenue",
  },
];

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function FundamentalLogoMark({ active = false }) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-[0.75rem] border bg-black transition-all duration-500 ${
        active
          ? "border-white/55 opacity-100"
          : "border-white/10 opacity-20"
      }`}
    >
      <img
        src={logoMark}
        alt="Fundamental.co mark"
        className="h-8 w-8 object-contain"
      />
    </div>
  );
}

export default function PipelineSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const totalStages = stages.length;

  useEffect(() => {
    function updateProgress() {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) {
        setProgress(0);
        return;
      }

      const rawProgress = -rect.top / scrollableDistance;
      setProgress(clamp(rawProgress, 0, 1));
    }

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const stageProgress = progress * totalStages;
  const activeIndex = clamp(Math.floor(stageProgress), 0, totalStages - 1);
  const localProgress = clamp(stageProgress - activeIndex, 0, 1);
  const activeStage = useMemo(() => stages[activeIndex], [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[620vh] border-b border-white/10"
    >
      <div className="sticky top-16 flex min-h-[calc(100vh-4rem)] items-start px-6 py-8 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          {/* Section header */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                The Fundamental.co Pipeline
              </p>

              <h2 className="mt-4 max-w-4xl text-4xl font-semibold uppercase leading-[1.02] tracking-[-0.05em] text-white md:text-5xl">
                From attention to trusted consultation.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:flex lg:justify-end">
              <p className="max-w-xl text-base leading-7 text-white/55">
                Each stage of the pipe represents a part of the clinic growth
                journey. Scroll to see what breaks there and what we build to
                fix it.
              </p>
            </div>
          </div>

          {/* Pipeline */}
          <div className="mt-12">
            {/* Stage labels */}
            <div className="grid grid-cols-6 gap-3">
              {stages.map((stage, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    key={stage.title}
                    className="flex flex-col items-center text-center"
                  >
                    <p
                      className={`text-[11px] uppercase tracking-[0.22em] transition duration-500 ${
                        isActive ? "text-white/70" : "text-white/15"
                      }`}
                    >
                      {stage.number}
                    </p>

                    <p
                      className={`mt-2 text-[11px] uppercase tracking-[0.28em] transition duration-500 ${
                        isActive ? "text-white" : "text-white/18"
                      }`}
                    >
                      {stage.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Segment pipe */}
            <div className="relative mt-6">
              <div className="grid grid-cols-6 gap-2">
                {stages.map((stage, index) => {
                  const isActive = index === activeIndex;
                  const fill =
                    index < activeIndex
                      ? 0
                      : index === activeIndex
                        ? localProgress * 100
                        : 0;

                  return (
                    <div
                      key={stage.title}
                      className="relative h-[30px] rounded-full bg-white/[0.08]"
                    >
                      <div
                        className="absolute left-0 top-0 h-full rounded-full bg-white transition-[width] duration-300 ease-out"
                        style={{ width: `${fill}%` }}
                      />

                      {index !== 0 && (
                        <div
                          className={`absolute left-[-9px] top-1/2 z-20 h-4 w-4 -translate-y-1/2 rounded-full border transition duration-500 ${
                            isActive && localProgress > 0.12
                              ? "border-white/50 bg-white"
                              : "border-white/10 bg-black"
                          }`}
                        />
                      )}

                      {index !== stages.length - 1 && (
                        <div
                          className={`absolute right-[-9px] top-1/2 z-20 h-4 w-4 -translate-y-1/2 rounded-full border transition duration-500 ${
                            isActive && localProgress > 0.88
                              ? "border-white/50 bg-white"
                              : "border-white/10 bg-black"
                          }`}
                        />
                      )}

                      <div
                        className={`absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-75 opacity-0"
                        }`}
                      >
                        <FundamentalLogoMark active={isActive} />
                      </div>

                      <div
                        className={`absolute left-1/2 top-[29px] z-10 h-10 w-2 -translate-x-1/2 rounded-full bg-white/35 transition-all duration-500 ${
                          isActive
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-2 opacity-0"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Explainer card */}
            <div className="mt-12">
              <div className="premium-card mx-auto max-w-5xl rounded-[2rem] border border-white/15 bg-white/[0.03] p-6 md:p-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-7">
                    <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                      {activeStage.number} / 06
                    </p>

                    <h3 className="mt-4 text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] text-white md:text-5xl">
                      {activeStage.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-lg leading-7 text-white/70">
                      {activeStage.description}
                    </p>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                        Core Idea
                      </p>

                      <p className="mt-4 text-sm leading-7 text-white/65">
                        {activeStage.coreIdea}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                        Leak Fixed
                      </p>

                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {activeStage.leakFixed}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                        Asset We Build
                      </p>

                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {activeStage.asset}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                        Metric
                      </p>

                      <p className="mt-3 text-sm leading-6 text-white/65">
                        {activeStage.metric}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-xs uppercase tracking-[0.35em] text-white/25">
                Scroll to move through the pipe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}