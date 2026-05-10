export default function Footer() {
  return (
    <footer className="relative bg-transparent px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
              Fundamental.co
            </p>

            <p className="mt-5 max-w-md text-base leading-7 text-white/55">
              We help doctor-led clinics turn attention into trusted
              consultations through a complete attention-to-conversion pipeline.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              Navigate
            </p>

            <div className="mt-5 grid gap-3 text-sm text-white/55">
              <a href="#pipeline" className="transition hover:text-white">
                Pipeline
              </a>
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#audit" className="transition hover:text-white">
                Audit
              </a>
              <a href="#belief" className="transition hover:text-white">
                Belief
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              Contact
            </p>

            <div className="mt-5 grid gap-3 text-sm text-white/55">
              <a
                href="mailto:befundamentalworkspace@gmail.com"
                className="transition hover:text-white"
              >
                befundamentalworkspace@gmail.com
              </a>

              <a href="tel:+9190828211893" className="transition hover:text-white">
                +91 90828 211893
              </a>

              <a
                href="https://built-to-convert.emergent.host/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-white"
              >
                built-to-convert.emergent.host
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 text-xs uppercase tracking-[0.25em] text-white/30 md:flex-row">
          <p>© 2026 Fundamental.co</p>
          <p>Most clinics are visible. Very few are trusted.</p>
        </div>
      </div>
    </footer>
  );
}