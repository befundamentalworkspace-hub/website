import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const pipelineStages = [
  {
    number: "01",
    title: "Attention",
    subtitle: "Get noticed by the right people for the right reason.",
    leak: "The clinic is visible, but the content does not create authority or relevance.",
    builds: [
      "Social media content",
      "Hook bank",
      "Ad creatives",
      "Short-form video assets",
      "Doctor POV content",
    ],
    metric: "Qualified attention",
    services: [
      {
        name: "Social Media Marketing",
        path: "/services/social-media-marketing",
        description: "Builds authority-led visibility.",
      },
      {
        name: "Performance Marketing",
        path: "/services/performance-marketing",
        description: "Creates paid demand and retargeting.",
      },
      {
        name: "Video Editing",
        path: "/services/video-editing",
        description: "Turns doctor expertise into attention assets.",
      },
    ],
  },
  {
    number: "02",
    title: "Trust",
    subtitle: "Make the clinic credible before the patient enquires.",
    leak: "The clinic looks active, but not authoritative.",
    builds: [
      "Website trust sections",
      "Doctor authority profile",
      "Case study assets",
      "FAQ bank",
      "Proof structure",
      "Educational content",
    ],
    metric: "Trust signals consumed before enquiry",
    services: [
      {
        name: "Website Development",
        path: "/services/website-development",
        description: "Creates credibility before enquiry.",
      },
      {
        name: "Social Media Marketing",
        path: "/services/social-media-marketing",
        description: "Builds repeated authority signals.",
      },
      {
        name: "SEO",
        path: "/services/seo",
        description: "Captures high-intent searchers and educates them.",
      },
      {
        name: "Video Editing",
        path: "/services/video-editing",
        description: "Turns proof and expertise into trust assets.",
      },
    ],
  },
  {
    number: "03",
    title: "Enquiry",
    subtitle: "Turn trust into a clear, low-friction next step.",
    leak: "The patient is interested but does not know what to do next.",
    builds: [
      "Landing pages",
      "CTA system",
      "Request forms",
      "WhatsApp flow",
      "Thank-you page",
      "Confirmation copy",
    ],
    metric: "Enquiry conversion rate",
    services: [
      {
        name: "Website Development",
        path: "/services/website-development",
        description: "Turns interest into action.",
      },
      {
        name: "Pipeline Optimization",
        path: "/services/pipeline-optimization",
        description: "Finds and fixes enquiry friction.",
      },
      {
        name: "Performance Marketing",
        path: "/services/performance-marketing",
        description: "Sends qualified demand to the right next step.",
      },
    ],
  },
  {
    number: "04",
    title: "Follow-up",
    subtitle: "Stop serious leads from going cold after first contact.",
    leak: "The clinic receives leads but responds late, vaguely, or inconsistently.",
    builds: [
      "WhatsApp scripts",
      "Missed-call recovery",
      "Lead temperature system",
      "Follow-up SOP",
      "Objection replies",
      "Re-engagement messages",
    ],
    metric: "Lead-to-consultation booking rate",
    services: [
      {
        name: "Pipeline Optimization",
        path: "/services/pipeline-optimization",
        description: "Creates follow-up systems that reduce leakage.",
      },
      {
        name: "Performance Marketing",
        path: "/services/performance-marketing",
        description: "Retargets warm leads and unfinished decisions.",
      },
    ],
  },
  {
    number: "05",
    title: "Consultation",
    subtitle: "Make the patient enter the consultation already educated.",
    leak: "The consultation starts from zero, so the doctor has to rebuild trust manually.",
    builds: [
      "Pre-consultation education",
      "Doctor profile assets",
      "Consultation expectation copy",
      "Relevant proof",
      "Objection handling assets",
      "Decision guidance",
    ],
    metric: "Consultation quality",
    services: [
      {
        name: "Pipeline Optimization",
        path: "/services/pipeline-optimization",
        description: "Improves the pre-consultation journey.",
      },
      {
        name: "Website Development",
        path: "/services/website-development",
        description: "Sets expectations before the patient arrives.",
      },
      {
        name: "Video Editing",
        path: "/services/video-editing",
        description: "Creates education and confidence assets.",
      },
      {
        name: "Social Media Marketing",
        path: "/services/social-media-marketing",
        description: "Warms patients before the consultation.",
      },
    ],
  },
  {
    number: "06",
    title: "Conversion",
    subtitle: "Turn serious consultations into revenue.",
    leak: "The patient understands the treatment but does not feel enough confidence to decide.",
    builds: [
      "Offer clarity",
      "Proof reinforcement",
      "Post-consultation follow-up",
      "Decision support messages",
      "Pricing/value framing",
      "Reporting",
    ],
    metric: "Consultation-to-conversion rate",
    services: [
      {
        name: "Pipeline Optimization",
        path: "/services/pipeline-optimization",
        description: "Improves the decision path after consultation.",
      },
      {
        name: "Performance Marketing",
        path: "/services/performance-marketing",
        description: "Keeps serious prospects warm through retargeting.",
      },
      {
        name: "Website Development",
        path: "/services/website-development",
        description: "Supports conversion with proof and clarity.",
      },
    ],
  },
  {
    number: "07",
    title: "Optimization",
    subtitle: "Improve the system every month.",
    leak: "The clinic keeps buying more marketing without knowing what stage is leaking.",
    builds: [
      "Monthly pipeline review",
      "Leak diagnosis",
      "Metric tracking",
      "Funnel improvement plan",
      "Creative testing",
      "Website updates",
      "Follow-up improvements",
    ],
    metric: "Pipeline improvement over time",
    services: [
      {
        name: "Pipeline Optimization",
        path: "/services/pipeline-optimization",
        description: "Finds what is broken and prioritizes fixes.",
      },
      {
        name: "SEO",
        path: "/services/seo",
        description: "Compounds high-intent demand over time.",
      },
      {
        name: "Website Development",
        path: "/services/website-development",
        description: "Improves trust and enquiry conversion.",
      },
      {
        name: "Performance Marketing",
        path: "/services/performance-marketing",
        description: "Tests demand, angles, audiences, and retargeting.",
      },
    ],
  },
];

export default function VerticalPipelineExperience() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pinState, setPinState] = useState("before");

  useEffect(() => {
    let ticking = false;

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function updateActiveStage() {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const fixedTop = 112;
      const fixedBottom = 80;

      const panelHeight = viewportHeight - fixedTop - fixedBottom;
      const scrollableDistance = rect.height - panelHeight;
      const scrolledPastPin = fixedTop - rect.top;

      const progress = clamp(
        scrolledPastPin / Math.max(scrollableDistance, 1),
        0,
        0.999
      );

      const nextIndex = Math.min(
        pipelineStages.length - 1,
        Math.floor(progress * pipelineStages.length)
      );

      setActiveIndex(nextIndex);

      if (rect.top > fixedTop) {
        setPinState("before");
      } else if (rect.bottom <= viewportHeight - fixedBottom) {
        setPinState("after");
      } else {
        setPinState("pinned");
      }
    }

    function onScroll() {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        updateActiveStage();
        ticking = false;
      });
    }

    updateActiveStage();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveStage);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveStage);
    };
  }, []);

  const activeStage = pipelineStages[activeIndex];

  const PipelineView = (
    <div className="grid h-full min-h-0 gap-14 lg:grid-cols-[0.68fr_1fr]">
      <PipelineRail activeIndex={activeIndex} />

      <div className="relative h-full min-h-0 transition-all duration-500">
        <StageCard key={activeStage.title} stage={activeStage} />
      </div>
    </div>
  );

  return (
    <section id="pipeline" className="relative px-6 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
            The pipeline
          </p>

          <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            One system.
            <span className="block text-white/45">
              Seven places a clinic can leak.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/55">
            Each stage has a job. Each stage can leak. Each service exists only
            because it helps move the patient journey forward.
          </p>
        </div>

        {/* Desktop scroll-controlled track */}
        <div
          ref={trackRef}
          className="relative hidden lg:block"
          style={{
            height: `${pipelineStages.length * 70}vh`,
          }}
        >
          {/* Before pinned */}
          {pinState === "before" && (
            <div className="absolute left-0 right-0 top-0 h-[calc(100vh-7rem-80px)]">
              {PipelineView}
            </div>
          )}

          {/* Fixed while active */}
          {pinState === "pinned" && (
            <div
              className="fixed left-0 right-0 z-30 px-6 md:px-10 lg:px-16"
              style={{
                top: 112,
                bottom: 80,
              }}
            >
              <div className="mx-auto h-full max-w-7xl">{PipelineView}</div>
            </div>
          )}

          {/* After pinned */}
          {pinState === "after" && (
            <div className="absolute bottom-0 left-0 right-0 h-[calc(100vh-7rem-80px)]">
              {PipelineView}
            </div>
          )}
        </div>

        {/* Mobile fallback */}
        <div className="grid gap-8 lg:hidden">
          {pipelineStages.map((stage, index) => (
            <MobileStageCard key={stage.title} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PipelineRail({ activeIndex }) {
  return (
    <div className="relative h-full min-h-0">
      <div className="absolute left-[88px] top-0 h-full w-px bg-white/10" />

      <div
        className="absolute left-[88px] top-0 w-px bg-white/70 transition-all duration-500"
        style={{
          height: `${((activeIndex + 1) / pipelineStages.length) * 100}%`,
          boxShadow:
            "0 0 16px rgba(255,255,255,0.45), 0 0 40px rgba(255,255,255,0.18)",
        }}
      />

      <div className="absolute inset-0 flex flex-col justify-between">
        {pipelineStages.map((stage, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;

          return (
            <div
              key={stage.title}
              className="flex items-center transition-all duration-500"
              style={{
                transform: isActive ? "translateX(-12px)" : "translateX(0px)",
              }}
            >
              <div
                className={[
                  "relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border bg-black transition-all duration-500",
                  isActive
                    ? "border-white text-white"
                    : isPast
                      ? "border-white/35 text-white/50"
                      : "border-white/15 text-white/25",
                ].join(" ")}
                style={
                  isActive
                    ? {
                        boxShadow:
                          "0 0 20px rgba(255,255,255,0.22), 0 0 52px rgba(255,255,255,0.12)",
                      }
                    : undefined
                }
              >
                {isActive && (
                  <div
                    className="absolute inset-[-18px] rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 42%, rgba(255,255,255,0) 72%)",
                      filter: "blur(12px)",
                    }}
                  />
                )}

                <span className="relative text-sm font-semibold tracking-[0.2em]">
                  {stage.number}
                </span>
              </div>

              <div className="ml-8">
                <p
                  className={[
                    "text-sm font-semibold uppercase tracking-[0.26em] transition-all duration-500",
                    isActive
                      ? "text-white"
                      : isPast
                        ? "text-white/45"
                        : "text-white/25",
                  ].join(" ")}
                >
                  {stage.title}
                </p>

                {isActive && (
                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/45">
                    {stage.subtitle}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StageCard({ stage }) {
  return (
    <div className="relative h-full min-h-0 overflow-hidden rounded-[2rem] border border-white/10 bg-black/70 p-8 backdrop-blur-xl transition-all duration-500">
      {/* Soft inner atmosphere */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.09),transparent_26%),radial-gradient(circle_at_20%_85%,rgba(255,255,255,0.035),transparent_34%)]" />

      {/* Subtle border highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-white/[0.04]" />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/30">
              {stage.number}
            </p>

            <h3 className="mt-3 text-4xl font-semibold uppercase tracking-[-0.06em] text-white md:text-5xl">
              {stage.title}
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/58">
              {stage.subtitle}
            </p>
          </div>

          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.025] md:flex">
            <div
              className="h-3 w-3 rounded-full bg-white"
              style={{
                boxShadow:
                  "0 0 12px rgba(255,255,255,1), 0 0 28px rgba(255,255,255,0.75)",
              }}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="my-7 h-px w-full bg-white/10" />

        {/* Main body */}
        <div className="min-h-0 overflow-y-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left diagnostic */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/30">
                  What breaks
                </p>

                <p className="mt-4 text-base leading-7 text-white/62">
                  {stage.leak}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/30">
                  Metric
                </p>

                <p className="mt-4 text-base leading-7 text-white/62">
                  {stage.metric}
                </p>
              </div>
            </div>

            {/* Right build assets */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/30">
                What we build
              </p>

              <div className="mt-4 flex flex-wrap gap-2.5">
                {stage.builds.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-white/52"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/30">
              Services involved
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {stage.services.map((service) => (
                <ServiceLinkCard key={service.name} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileStageCard({ stage, index }) {
  return (
    <div className="rounded-[2rem] border border-white/12 bg-white/[0.025] p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/35">
        {String(index + 1).padStart(2, "0")}
      </p>

      <h3 className="mt-4 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
        {stage.title}
      </h3>

      <p className="mt-5 text-base leading-7 text-white/60">
        {stage.subtitle}
      </p>

      <div className="mt-6 grid gap-4">
        <InfoBox label="What breaks" text={stage.leak} />
        <InfoBox label="Metric" text={stage.metric} />
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
          What we build
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {stage.builds.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/55"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-7 grid gap-3">
        {stage.services.map((service) => (
          <ServiceLinkCard key={service.name} service={service} />
        ))}
      </div>
    </div>
  );
}

function InfoBox({ label, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/30">
        {label}
      </p>
      <p className="mt-3 text-sm leading-6 text-white/58">{text}</p>
    </div>
  );
}

function ServiceLinkCard({ service }) {
  return (
    <Link
      to={service.path}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.045]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_34%)]" />
      </div>

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold tracking-[-0.02em] text-white">
            {service.name}
          </h4>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/48">
            {service.description}
          </p>
        </div>

        <span className="mt-0.5 text-white/30 transition group-hover:translate-x-1 group-hover:text-white">
          →
        </span>
      </div>
    </Link>
  );
}