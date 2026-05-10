import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background brand geometry */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[18%] h-40 w-40 rounded-full border border-white/10" />
        <div className="absolute right-[10%] top-[22%] h-0 w-0 border-l-[70px] border-r-[70px] border-b-[120px] border-l-transparent border-r-transparent border-b-white/[0.04]" />
        <div className="absolute bottom-[12%] left-[18%] h-24 w-24 rounded-full border border-white/[0.06]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_32%)]" />
      </div>

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-white/45">
              Error 404
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              This page is leaking.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/62 sm:text-lg">
              The page you are looking for does not exist, has moved, or was
              never built into the system.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/45">
              Return to the main website or request a pipeline audit if you want
              to see what is leaking inside your clinic’s growth journey.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/85"
              >
                Back to Homepage
              </Link>

              <Link
                to="/request-audit"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/[0.04]"
              >
                Request a Pipeline Audit
              </Link>
            </div>
          </div>

          {/* Right diagnostic card */}
          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/45">
                  Broken Route Diagnostic
                </p>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/45">
                  404
                </span>
              </div>

              <div className="space-y-5">
                {[
                  {
                    stage: "01",
                    title: "Attention",
                    status: "Visitor arrived",
                  },
                  {
                    stage: "02",
                    title: "Trust",
                    status: "Page not found",
                  },
                  {
                    stage: "03",
                    title: "Enquiry",
                    status: "Next step unclear",
                  },
                  {
                    stage: "04",
                    title: "Recovery",
                    status: "Redirect needed",
                  },
                ].map((item) => (
                  <div
                    key={item.stage}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs text-white/55">
                      {item.stage}
                    </div>

                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <h2 className="text-sm font-medium text-white">
                          {item.title}
                        </h2>
                        <span className="text-xs text-white/35">
                          {item.status}
                        </span>
                      </div>

                      <div className="mt-3 h-px w-full bg-white/10">
                        <div
                          className={`h-px bg-white ${
                            item.stage === "01"
                              ? "w-full"
                              : item.stage === "02"
                                ? "w-1/2"
                                : "w-1/4"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-7 text-white/55">
                  Every broken journey needs a recovery path. This one has two:
                  return home or move directly to the audit request page.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 rounded-full border border-white/[0.07] lg:block" />
          </div>
        </div>
      </section>
    </main>
  );
}