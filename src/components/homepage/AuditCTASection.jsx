const auditStages = [
  {
    number: "01",
    title: "Attention",
    question: "Are the right people noticing you?",
  },
  {
    number: "02",
    title: "Trust",
    question: "Do they believe you are worth contacting?",
  },
  {
    number: "03",
    title: "Enquiry",
    question: "Is the next step clear and easy?",
  },
  {
    number: "04",
    title: "Follow-up",
    question: "Are serious leads being guided properly?",
  },
  {
    number: "05",
    title: "Consultation",
    question: "Are patients ready to make a decision?",
  },
];

function DiagnosticVisual() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.025] p-8">
      {/* Background system lines */}
      <div className="absolute left-10 top-10 h-[calc(100%-80px)] w-px bg-white/10" />
      <div className="absolute right-10 top-10 h-[calc(100%-80px)] w-px bg-white/5" />
      <div className="absolute left-10 right-10 top-1/2 h-px bg-white/10" />

      {/* Main diagnostic card */}
      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.4em] text-white/35">
          Diagnostic view
        </p>

        <h3 className="mt-6 max-w-xl text-4xl font-semibold uppercase leading-[1] tracking-[-0.05em] text-white md:text-5xl">
          Find the leak before buying more traffic.
        </h3>
      </div>

      {/* Pipeline scan */}
      <div className="relative z-10 mt-14 space-y-3">
        {auditStages.map((stage, index) => (
          <div
            key={stage.title}
            className="grid grid-cols-12 items-center gap-4 rounded-2xl border border-white/10 bg-black/50 p-4"
          >
            <div className="col-span-2">
              <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                {stage.number}
              </p>
            </div>

            <div className="col-span-4">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
                {stage.title}
              </p>
            </div>

            <div className="col-span-5">
              <p className="text-sm leading-6 text-white/55">
                {stage.question}
              </p>
            </div>

            <div className="col-span-1 flex justify-end">
              <div
                className={`h-3 w-3 rounded-full ${
                  index === 2 ? "bg-white" : "bg-white/20"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="relative z-10 mt-10 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
        <p className="text-xs uppercase tracking-[0.3em] text-white/35">
          Audit output
        </p>

        <p className="mt-4 text-lg font-semibold uppercase leading-tight tracking-[-0.03em] text-white">
          One clear bottleneck.
          <br />
          One priority fix.
          <br />
          One next action.
        </p>
      </div>
    </div>
  );
}

export default function AuditCTASection() {
  return (
    <section
      id="audit"
      className="scroll-mt-24 border-b border-white/10 relative bg-transparent px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section top */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.45em] text-white/35">
              Pipeline Audit
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[1.02] tracking-[-0.05em] text-white md:text-7xl">
              Do not buy more traffic before you know where trust is leaking.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Most clinics ask for more leads before understanding why current
              leads are not turning into consultations. The audit finds the
              weak stage first.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#request-audit"
                className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Request a Pipeline Audit
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                See What We Build
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <DiagnosticVisual />
          </div>
        </div>

        {/* Audit logic */}
        <div className="mt-24 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/35">
              Step 01
            </p>

            <h3 className="mt-8 text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white">
              We review the journey.
            </h3>

            <p className="mt-5 text-base leading-7 text-white/60">
              Website, social presence, ads, enquiry flow, WhatsApp handling,
              and consultation readiness.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/35">
              Step 02
            </p>

            <h3 className="mt-8 text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white">
              We identify the leak.
            </h3>

            <p className="mt-5 text-base leading-7 text-white/60">
              The issue may not be lead volume. It may be weak trust,
              unclear CTAs, slow follow-up, or poor consultation framing.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-white/35">
              Step 03
            </p>

            <h3 className="mt-8 text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white">
              We define the first fix.
            </h3>

            <p className="mt-5 text-base leading-7 text-white/60">
              You get a priority order instead of a random list of marketing
              suggestions.
            </p>
          </div>
        </div>

        {/* Bottom close */}
        <div className="premium-card mt-20 rounded-[2rem] border border-white/15 bg-white/[0.035] p-8 md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                The audit principle
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white md:text-5xl">
                If the journey is leaking, more visibility only creates more
                waste.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
                The audit exists to diagnose before prescribing. First find the
                weak stage. Then build the missing asset.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}