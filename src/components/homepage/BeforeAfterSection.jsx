const beforeSignals = [
  {
    label: "Content",
    value: "Posting without authority",
  },
  {
    label: "Enquiries",
    value: "Price shoppers and low intent",
  },
  {
    label: "Website",
    value: "Present, but not persuasive",
  },
  {
    label: "Follow-up",
    value: "Unstructured and inconsistent",
  },
];

const afterSignals = [
  {
    label: "Positioning",
    value: "Doctor understood clearly",
  },
  {
    label: "Trust",
    value: "Proof visible before enquiry",
  },
  {
    label: "Journey",
    value: "Patient guided stage by stage",
  },
  {
    label: "Conversion",
    value: "Consultations become warmer",
  },
];

export default function BeforeAfterSection() {
  return (
    <section
      id="transformation"
      className="scroll-mt-24 border-b border-white/10 relative bg-transparent px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.45em] text-white/35">
              Transformation
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[1.02] tracking-[-0.05em] text-white md:text-7xl">
              From visible
              <br />
              to trusted.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-xl text-lg leading-8 text-white/60">
              The goal is not to make the clinic look busier online. The goal
              is to make the clinic easier to understand, easier to trust, and
              easier to choose.
            </p>
          </div>
        </div>

        {/* Main visual transformation */}
        <div className="mt-20 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_120px_1fr] lg:items-stretch">
          {/* Before panel */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.018] p-8 md:p-10">
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/5" />
            <div className="absolute bottom-8 left-8 h-px w-40 bg-white/10" />

            <p className="text-xs uppercase tracking-[0.4em] text-white/25">
              Before
            </p>

            <h3 className="mt-8 max-w-xl text-5xl font-semibold uppercase leading-[0.98] tracking-[-0.05em] text-white/45 md:text-6xl">
              Visible,
              <br />
              but replaceable.
            </h3>

            <p className="mt-8 max-w-md text-base leading-7 text-white/45">
              The clinic may be active online, but the patient still cannot
              clearly tell why this doctor, this clinic, and this consultation
              are worth choosing.
            </p>

            <div className="mt-12 space-y-3">
              {beforeSignals.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 gap-3 border-t border-white/10 pt-4 md:grid-cols-12"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-white/25 md:col-span-4">
                    {item.label}
                  </p>

                  <p className="text-sm leading-6 text-white/45 md:col-span-8">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Middle bridge */}
          <div className="flex items-center justify-center py-8 lg:py-0">
            <div className="flex flex-row items-center gap-4 lg:flex-col">
              <div className="h-px w-16 bg-white/15 lg:h-24 lg:w-px" />

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/[0.025]">
                <span className="text-2xl text-white/65">→</span>
              </div>

              <div className="h-px w-16 bg-white/15 lg:h-24 lg:w-px" />
            </div>
          </div>

          {/* After panel */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/[0.045] p-8 md:p-10">
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-white/15" />
            <div className="absolute bottom-8 left-8 h-px w-40 bg-white/25" />

            <p className="text-xs uppercase tracking-[0.4em] text-white/45">
              After
            </p>

            <h3 className="mt-8 max-w-xl text-5xl font-semibold uppercase leading-[0.98] tracking-[-0.05em] text-white md:text-6xl">
              Trusted,
              <br />
              then chosen.
            </h3>

            <p className="mt-8 max-w-md text-base leading-7 text-white/70">
              The patient sees a connected journey: clear positioning, proof,
              useful education, easy enquiry, structured follow-up, and a
              consultation that feels serious.
            </p>

            <div className="mt-12 space-y-3">
              {afterSignals.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-1 gap-3 border-t border-white/10 pt-4 md:grid-cols-12"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-white/35 md:col-span-4">
                    {item.label}
                  </p>

                  <p className="text-sm leading-6 text-white/75 md:col-span-8">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom visual statement */}
        <div className="premium-card mt-20 rounded-[2rem] border border-white/15 bg-white/[0.03] p-8 md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                The shift
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white md:text-5xl">
                The clinic stops looking like another option.
                <br />
                It starts becoming the obvious choice.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
                <div className="rounded-full border border-white/10 px-5 py-4 text-center text-xs uppercase tracking-[0.22em] text-white/50">
                  Clearer positioning
                </div>

                <div className="rounded-full border border-white/10 px-5 py-4 text-center text-xs uppercase tracking-[0.22em] text-white/50">
                  Stronger trust
                </div>

                <div className="rounded-full border border-white/10 px-5 py-4 text-center text-xs uppercase tracking-[0.22em] text-white/50">
                  Better enquiries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}