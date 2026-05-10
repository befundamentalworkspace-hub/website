import { Link } from "react-router-dom";

export default function PipelineOffer() {
  const multiplierItems = [
    {
      number: "01",
      title: "Revenue Leak Diagnosis",
      text: "We identify which stage is most likely costing your clinic booked consultations and lost patient revenue.",
    },
    {
      number: "02",
      title: "Enquiry-to-Consultation Review",
      text: "We review whether your current enquiries are being converted into serious consultation opportunities.",
    },
    {
      number: "03",
      title: "Trust Gap Analysis",
      text: "We identify where the clinic fails to create enough confidence before the patient reaches out.",
    },
    {
      number: "04",
      title: "Follow-up Leakage Review",
      text: "We check whether leads are being lost because of slow replies, weak scripts, unclear next steps, or poor reactivation.",
    },
    {
      number: "05",
      title: "Consultation Conversion Review",
      text: "We review whether patients enter consultations with enough clarity, trust, and decision confidence.",
    },
    {
      number: "06",
      title: "Revenue Multiplier Roadmap",
      text: "You get a ranked list of what to fix first, so the clinic can recover more value from the attention and enquiries it already has.",
    },
    {
      number: "07",
      title: "Service Recommendation After Diagnosis",
      text: "We do not recommend SEO, ads, content, website changes, or follow-up fixes until we know what is actually leaking.",
    },
  ];

  return (
    <section className="relative px-6 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.025] p-8 md:p-12 lg:p-16">
          {/* Background atmosphere */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_86%_76%,rgba(255,255,255,0.05),transparent_36%)]" />
          <div className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-white/[0.035]" />
          <div className="pointer-events-none absolute bottom-[-110px] right-[14%] h-0 w-0 border-l-[130px] border-r-[130px] border-b-[230px] border-l-transparent border-r-transparent border-b-white/[0.025]" />

          <div className="relative z-10 grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left copy */}
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
                The offer
              </p>

              <h2 className="max-w-4xl text-4xl font-semibold uppercase tracking-[-0.06em] text-white md:text-6xl">
                The Clinic Revenue Multiplier Plan
              </h2>

              <p className="mt-8 max-w-2xl text-2xl font-medium leading-9 tracking-[-0.04em] text-white/78 md:text-3xl md:leading-[1.15]">
                You may not need more leads. You may need to stop losing
                revenue from the ones you already have.
              </p>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/58">
                We do not multiply clinic revenue by adding random marketing.
                We multiply revenue potential by finding and fixing the stages
                where attention, trust, enquiries, follow-up, consultations, and
                conversion are leaking.
              </p>

              <div className="mt-10 border-l border-white/20 pl-6">
                <p className="max-w-3xl text-lg font-medium leading-8 tracking-[-0.03em] text-white/72">
                  If your clinic is already spending on content, ads, website,
                  staff, or follow-up — but you still cannot clearly see where
                  patients are dropping off — this gives you the clarity another
                  month of random marketing cannot.
                </p>
              </div>

              {/* Risk reversal */}
              <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-black/35 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                  Risk reversal
                </p>

                <p className="mt-4 text-base leading-7 text-white/66">
                  If we cannot show you where your current pipeline is leaking
                  consultations, we will not recommend our services.
                </p>
              </div>

              {/* Qualification */}
              <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                  Limited review capacity
                </p>

                <p className="mt-4 text-base leading-7 text-white/54">
                  This is for clinics already receiving enquiries, running
                  marketing, or actively trying to improve consultation
                  bookings. Every review requires manual pipeline diagnosis.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/request-audit"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
                >
                  Find My Revenue Leaks
                </Link>

                <a
                  href="#services-faq"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/[0.04]"
                >
                  Read FAQ
                </a>
              </div>
            </div>

            {/* Right offer stack */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/45 p-5 md:p-6">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(255,255,255,0.07),transparent_30%)]" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                        What you get
                      </p>

                      <p className="mt-2 text-sm leading-6 text-white/48">
                        A practical diagnosis of the patient journey from first
                        attention to booked revenue.
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

                  <div className="mt-5 grid gap-3">
                    {multiplierItems.map((item) => (
                      <div
                        key={item.title}
                        className="group rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition hover:border-white/22 hover:bg-white/[0.045]"
                      >
                        <div className="flex gap-4">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 text-xs font-semibold text-white/45 transition group-hover:border-white/28 group-hover:text-white">
                            {item.number}
                          </span>

                          <div>
                            <h3 className="text-sm font-semibold tracking-[-0.02em] text-white">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-white/48">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                      The point
                    </p>

                    <p className="mt-3 text-sm leading-7 text-white/50">
                      The goal is not to sell a random service. The goal is to
                      find the stage that is weakening trust, enquiries,
                      consultations, or conversion first — then fix the highest
                      leverage leak.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="relative z-10 mt-14 border-t border-white/10 pt-8">
            <p className="max-w-4xl text-2xl font-semibold uppercase leading-tight tracking-[-0.055em] text-white md:text-4xl">
              Do not buy more marketing until you know where the revenue is
              leaking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}