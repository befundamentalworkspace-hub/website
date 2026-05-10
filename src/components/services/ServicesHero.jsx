import { Link } from "react-router-dom";

export default function ServicesHero() {
  const pipelineItems = [
    "Attention",
    "Trust",
    "Enquiry",
    "Follow-up",
    "Consultation",
    "Conversion",
    "Optimization",
  ];

  return (
    <section className="relative min-h-[92vh] overflow-hidden px-6 pt-36 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left content */}
        <div className="relative z-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/45">
            Services
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase tracking-[-0.06em] text-white md:text-7xl lg:text-8xl">
            Services are not the product.
            <span className="block text-white/45">The pipeline is.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
            We help doctor-led clinics turn visibility into trusted
            consultations by building the full journey: attention, trust,
            enquiry, follow-up, consultation, conversion, and optimization.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/request-audit"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
            >
              Request a Pipeline Audit
            </Link>

            <a
              href="#pipeline"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/[0.04]"
            >
              See the Pipeline
            </a>
          </div>
        </div>

        {/* Right-side pipeline preview */}
        <div className="relative hidden min-h-[620px] overflow-visible lg:block">
          {/* Background brand circle */}
          <div className="absolute left-[58%] top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

          {/* Background brand triangle */}
          <div className="absolute left-[58%] top-[48%] h-0 w-0 -translate-x-1/2 border-l-[105px] border-r-[105px] border-b-[180px] border-l-transparent border-r-transparent border-b-white/[0.035]" />

          {/* Pipeline container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[560px] w-full max-w-[560px]">
              {/* Straight vertical rail */}
              <div
                className="absolute left-1/2 top-[36px] h-[488px] w-px -translate-x-1/2 bg-white/20"
                style={{
                  boxShadow:
                    "0 0 18px rgba(255,255,255,0.32), 0 0 42px rgba(255,255,255,0.14)",
                }}
              />

              {/* Rows */}
              <div className="relative z-10 h-full">
                {pipelineItems.map((item, index) => {
                  const top = `${index * (100 / (pipelineItems.length - 1))}%`;

                  return (
                    <div
                      key={item}
                      className="absolute left-0 w-full"
                      style={{ top }}
                    >
                      {/* Node */}
                      <div
                        className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black"
                        style={{
                          boxShadow:
                            "0 0 20px rgba(255,255,255,0.22), 0 0 52px rgba(255,255,255,0.12)",
                        }}
                      >
                        {/* Outer glow */}
                        <div
                          className="absolute inset-[-22px] rounded-full"
                          style={{
                            background:
                              "radial-gradient(circle, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.07) 38%, rgba(255,255,255,0) 72%)",
                            filter: "blur(12px)",
                          }}
                        />

                        {/* Ring highlight */}
                        <div
                          className="absolute inset-0 rounded-full border border-white/25"
                          style={{
                            boxShadow:
                              "inset 0 0 20px rgba(255,255,255,0.08)",
                          }}
                        />

                        {/* Inner dot */}
                        <div
                          className="relative h-3 w-3 rounded-full bg-white"
                          style={{
                            boxShadow:
                              "0 0 12px rgba(255,255,255,1), 0 0 28px rgba(255,255,255,0.8)",
                          }}
                        />
                      </div>

                      {/* Label — right side of the circle */}
                      <p className="absolute left-[calc(50%+54px)] top-1/2 -translate-y-1/2 whitespace-nowrap text-left text-sm uppercase leading-none tracking-[0.24em] text-white/60">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}