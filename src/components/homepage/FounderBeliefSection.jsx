import founderHero from "../../assets/founder-new.png";

const beliefs = [
  {
    number: "01",
    title: "Visibility is not the win.",
    description:
      "If the clinic looks generic, more visibility only exposes more people to weak positioning.",
  },
  {
    number: "02",
    title: "Patients do not choose skill by default.",
    description:
      "They choose the doctor they understand, trust, and feel confident enough to contact.",
  },
  {
    number: "03",
    title: "Cheap leads create expensive problems.",
    description:
      "Low-quality enquiries waste time, weaken positioning, and push clinics toward price comparison.",
  },
  {
    number: "04",
    title: "Trust has to be engineered.",
    description:
      "Authority, proof, website clarity, content, follow-up, and consultation flow all shape patient confidence.",
  },
];

export default function FounderBeliefSection() {
  return (
    <section
      id="belief"
      className="scroll-mt-24 border-b border-white/10 relative bg-transparent px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Top label */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.45em] text-white/35">
            Founder Belief
          </p>
        </div>

        {/* Top */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start">
          {/* Image side */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/[0.025]">
              <img
                src={founderHero}
                alt="Founder of Fundamental.co"
                className="h-full min-h-[620px] w-full object-cover grayscale"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                  Founder POV
                </p>

                <p className="mt-4 max-w-sm text-2xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white">
                  The best doctors should not look replaceable.
                </p>
              </div>
            </div>
          </div>

          {/* Statement side */}
          <div className="lg:col-span-7">
            <h2 className="max-w-5xl text-5xl font-semibold uppercase leading-[1.02] tracking-[-0.05em] text-white md:text-7xl">
              Skilled doctors should not lose patients to weaker clinics that
              simply look more trustworthy online.
            </h2>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/65">
              Fundamental.co was built around a simple observation: many good
              clinics are not losing because they lack skill. They are losing
              because their marketing fails to create trust before the patient
              enquires.
            </p>

            {/* Refusal strip */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                What we refuse
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white/45">
                  Vanity metrics
                </span>

                <span className="rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white/45">
                  Random posting
                </span>

                <span className="rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white/45">
                  Cheap leads
                </span>
              </div>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-white/65">
                We are not here to make clinics look busy online. We are here to build
                the system that makes serious patients trust, enquire, show up, and
                decide.
              </p>
            </div>
          </div>
        </div>

        {/* Belief cards */}
        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {beliefs.map((belief) => (
            <article
              key={belief.title}
              className="min-h-[310px] rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.045]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                {belief.number}
              </p>

              <h3 className="mt-10 text-2xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white">
                {belief.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-white/60">
                {belief.description}
              </p>
            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="premium-card mt-24 rounded-[2rem] border border-white/15 bg-white/[0.035] p-8 md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                The standard
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white md:text-5xl">
                The best doctors should not just be seen.
                <br />
                They should be chosen.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
                That is the standard Fundamental.co is building toward: not more
                marketing activity, but a better patient decision journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}