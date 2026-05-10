export default function ServicesProblem() {
  const problems = [
    {
      title: "Content is posted.",
      text: "But authority is not built.",
    },
    {
      title: "Ads are running.",
      text: "But lead quality stays weak.",
    },
    {
      title: "The website exists.",
      text: "But trust does not increase.",
    },
    {
      title: "Enquiries come in.",
      text: "But follow-up leaks serious patients.",
    },
  ];

  return (
    <section className="relative px-6 py-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
            The problem
          </p>

          <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl lg:text-7xl">
            Most clinics do not have a service problem.
            <span className="block text-white/45">
              They have a disconnected journey.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 transition hover:border-white/25 hover:bg-white/[0.045]"
            >
              <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                {problem.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/55">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-l border-white/15 pl-6">
          <p className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.04em] text-white/70 md:text-3xl">
            When every service is handled separately, the patient journey
            breaks.
          </p>
        </div>
      </div>
    </section>
  );
}