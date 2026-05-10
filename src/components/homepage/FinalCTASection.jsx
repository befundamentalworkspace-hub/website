export default function FinalCTASection() {
  return (
    <section
      id="request-audit"
      className="border-b border-white/10 bg-black px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-white/15 bg-white/[0.035] px-8 py-16 md:px-12 md:py-20 lg:px-16">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-xs uppercase tracking-[0.45em] text-white/35">
                Request Audit
              </p>

              <h2 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[1.02] tracking-[-0.05em] md:text-7xl">
                Before you spend more on marketing, find what is leaking.
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="text-lg leading-8 text-white/65">
                We will review your clinic’s attention, trust, enquiry,
                follow-up, and consultation flow — then identify what should be
                fixed first.
              </p>

              <a
                href="mailto:befundamentalworkspace@gmail.com?subject=Pipeline Audit Request"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-white/85"
              >
                Request a Pipeline Audit
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                For
              </p>
              <p className="mt-3 text-base leading-7 text-white/70">
                Doctor-led clinics, aesthetic clinics, hospitals, and medical
                practices.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                Outcome
              </p>
              <p className="mt-3 text-base leading-7 text-white/70">
                Clear diagnosis of the weakest stage in your growth pipeline.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                Next step
              </p>
              <p className="mt-3 text-base leading-7 text-white/70">
                Send your clinic details. We review the system before proposing
                any solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}