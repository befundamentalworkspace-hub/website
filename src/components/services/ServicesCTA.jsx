import { Link } from "react-router-dom";

export default function ServicesCTA() {
  return (
    <section className="relative px-6 pb-32 pt-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.025] p-8 text-center md:p-14 lg:p-20">
          {/* Background atmosphere */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.09),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.045),transparent_34%)]" />

          {/* Brand shapes */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

          <div className="pointer-events-none absolute left-1/2 top-[58%] h-0 w-0 -translate-x-1/2 border-l-[120px] border-r-[120px] border-b-[210px] border-l-transparent border-r-transparent border-b-white/[0.025]" />

          <div className="relative z-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
              Next step
            </p>

            <h2 className="mx-auto max-w-6xl text-4xl font-semibold uppercase tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
              Before you buy more marketing,
              <span className="block text-white/45">
                find where the revenue is leaking.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/58 md:text-lg">
              Most clinics do not need more random execution. They need to know
              which stage is weakening trust, hurting enquiries, delaying
              follow-up, or leaking consultation revenue.
            </p>

            <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-white/10 bg-black/35 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                The rule
              </p>

              <p className="mt-4 text-lg font-medium leading-8 tracking-[-0.03em] text-white/72">
                Do not add another service until you know which part of the
                patient journey is broken.
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/request-audit"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
              >
                Find My Revenue Leaks
              </Link>

              <a
                href="#pipeline"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/[0.04]"
              >
                Review the Pipeline
              </a>
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/42">
              We will not recommend SEO, ads, social media, website changes, or
              follow-up systems until the pipeline leak is clear.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}