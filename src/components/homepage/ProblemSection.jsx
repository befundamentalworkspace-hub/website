const diagnosticItems = [
  {
    number: "01",
    title: "Attention",
    line: "People see the clinic.",
    equation: "seen ≠ understood",
  },
  {
    number: "02",
    title: "Trust",
    line: "The clinic looks active.",
    equation: "active ≠ credible",
  },
  {
    number: "03",
    title: "Enquiry",
    line: "Patients ask questions.",
    equation: "interest ≠ intent",
  },
  {
    number: "04",
    title: "Follow-up",
    line: "Leads come in.",
    equation: "delay kills demand",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="scroll-mt-24 border-b border-white/10 relative bg-transparent px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left side */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.45em] text-white/35">
              The real issue
            </p>

            <h2 className="mt-6 max-w-3xl text-5xl font-semibold uppercase leading-[0.98] tracking-[-0.05em] text-white md:text-7xl">
              Your clinic
              <br />
              does not need
              <br />
              more noise.
            </h2>

            <div className="mt-10 max-w-xl space-y-6 text-lg leading-8 text-white/65">
              <p>
                Most clinic marketing breaks because every part is handled
                separately.
              </p>

              <p className="text-white">
                Content. Ads. Website. WhatsApp. Consultation.
              </p>

              <p>
                But patients do not experience them separately. They experience
                one connected journey.
              </p>
            </div>

            {/* Visual note */}
            <div className="mt-14">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-white" />
                <span className="h-px w-16 bg-white/45" />
                <span className="text-lg font-medium leading-none text-white/45">
                  ×
                </span>
                <span className="h-px w-16 bg-white/30" />
                <span className="text-lg font-medium leading-none text-white/35">
                  ×
                </span>
                <span className="h-px w-16 bg-white/20" />
                <span className="text-lg font-medium leading-none text-white/25">
                  ×
                </span>
                <span className="h-px w-16 bg-white/10" />
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/35">
                Leakage starts before the consultation
              </p>
            </div>
          </div>

          {/* Right side */}
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-white/15 bg-white/[0.025] p-6 md:p-8">
              <div className="mb-8 flex items-center justify-between gap-6 border-b border-white/10 pb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">
                  Patient Journey Diagnostic
                </p>

                <p className="hidden text-xs uppercase tracking-[0.3em] text-white/20 md:block">
                  Leaks
                </p>
              </div>

              <div className="space-y-3">
                {diagnosticItems.map((item) => (
                  <div
                    key={item.title}
                    className="group grid grid-cols-1 gap-5 rounded-[1.25rem] border border-white/10 bg-black/40 p-5 transition duration-300 hover:border-white/25 hover:bg-white/[0.04] md:grid-cols-12 md:items-center"
                  >
                    <div className="md:col-span-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                        {item.number}
                      </p>
                    </div>

                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-semibold uppercase tracking-[-0.04em] text-white">
                        {item.title}
                      </h3>
                    </div>

                    <div className="md:col-span-3">
                      <p className="text-sm leading-6 text-white/65">
                        {item.line}
                      </p>
                    </div>

                    <div className="md:col-span-4">
                      <div className="rounded-full border border-white/10 px-4 py-3 text-center transition group-hover:border-white/25">
                        <p className="text-sm tracking-[-0.01em] text-white/65">
                          {item.equation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-7">
                <p className="max-w-3xl text-2xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white md:text-3xl">
                  More noise does not fix a leaking journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bridge into pipeline */}
        <div className="premium-card mt-24 rounded-[2rem] border border-white/15 bg-white/[0.035] p-8 md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                The diagnosis
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white md:text-5xl">
                Most clinics do not have one marketing problem.
                <br />
                They have a pipeline problem.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
                The next section shows how Fundamental.co breaks that journey
                into stages, identifies where trust is leaking, and builds the
                assets needed to move patients toward consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}