import { Link } from "react-router-dom";
import founderHero from "../assets/founder-hero.png";
import doctorHero from "../assets/doctor-hero.png";
import founderAbout from "../assets/founder-about.png";

const doItems = [
  "Clarify the clinic’s positioning.",
  "Build trust before the enquiry.",
  "Capture demand through better assets.",
  "Structure follow-up so leads do not leak.",
  "Track the journey so growth becomes measurable.",
];

const dontItems = [
  "No random posting.",
  "No cheap lead generation.",
  "No vanity metric reporting.",
  "No generic clinic websites.",
  "No discount-led positioning.",
  "No ads without trust infrastructure.",
  "No marketing activity without a pipeline reason.",
];

const howSteps = [
  {
    number: "01",
    title: "Positioning Diagnosis",
    description:
      "We first identify why the clinic is not being chosen clearly enough. That means reviewing the market, competitors, patient perception, current messaging, offer clarity, and where the existing journey is leaking.",
    owner: "Vikas Pandey",
    role: "Founder / Strategy",
    owns: "Positioning, pipeline diagnosis, strategic direction",
    belief:
      "Most clinics do not need louder marketing. They need a clearer reason to be trusted.",
    image: founderAbout,
    initials: "VP",
  },
  {
    number: "02",
    title: "Trust Infrastructure",
    description:
      "We build the assets that make the clinic credible before the patient enquires. This includes website sections, doctor authority, proof assets, FAQs, case studies, treatment education, and visual consistency.",
    owner: "Brand / Website Lead",
    role: "Trust Infrastructure",
    owns: "Website perception, doctor authority assets, proof structure, brand consistency",
    belief:
      "Patients trust what feels clear, specific, and professionally structured.",
    image: null,
    initials: "BW",
  },
  {
    number: "03",
    title: "Attention and Demand Capture",
    description:
      "We create content and campaigns that attract the right kind of attention. The goal is not reach for its own sake. The goal is to make the right patient notice the clinic for the right reason.",
    owner: "Content / Performance Lead",
    role: "Attention and Demand Capture",
    owns: "Social content, ad angles, SEO visibility, retargeting, qualified demand",
    belief:
      "Bad attention creates price shoppers. Good attention creates trust potential.",
    image: null,
    initials: "CP",
  },
  {
    number: "04",
    title: "Enquiry and Follow-up System",
    description:
      "We structure what happens after a patient shows interest. This includes CTA flow, form logic, WhatsApp opening scripts, response-time standards, lead tracking, and follow-up sequences.",
    owner: "CRM / Follow-up Lead",
    role: "Enquiry Conversion",
    owns: "WhatsApp flow, enquiry tracking, response scripts, follow-up discipline",
    belief:
      "Many leads are not dead. They are simply unguided.",
    image: null,
    initials: "CF",
  },
  {
    number: "05",
    title: "Conversion and Optimization",
    description:
      "We track what happens across the journey and improve the weakest stage. The goal is not to change everything every month. The goal is to identify the bottleneck, fix the asset, and move the metric.",
    owner: "Growth / Reporting Lead",
    role: "Pipeline Optimization",
    owns: "Lead quality tracking, enquiry-to-consultation metrics, conversion reporting, monthly optimization",
    belief:
      "Growth becomes predictable when every leak has a metric.",
    image: null,
    initials: "GR",
  },
];

function TeamImage({ step }) {
  return (
    <div className="mb-8 overflow-hidden rounded-3xl border border-white/10 bg-black">
      {step.image ? (
        <img
          src={step.image}
          alt={step.owner}
          className="h-72 w-full object-cover object-top grayscale md:h-80"
        />
      ) : (
        <div className="flex h-72 w-full flex-col items-center justify-center bg-white/[0.025] md:h-80">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-black">
            <div className="relative h-11 w-11">
              <div className="absolute left-0 top-1 h-6 w-6 rounded-full border border-white/75" />
              <div className="absolute bottom-0 right-0 h-0 w-0 border-l-[19px] border-r-[19px] border-b-[32px] border-l-transparent border-r-transparent border-b-white/75" />
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-white/35">
            Image Pending
          </p>

          <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white/70">
            {step.initials}
          </p>
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO / OPENING BELIEF */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* LEFT SIDE */}
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-white/45">
                About Fundamental.co
              </p>

              <h1 className="max-w-5xl text-5xl font-semibold uppercase leading-[0.95] tracking-[-0.06em] text-white md:text-7xl lg:text-[6.15rem]">
                The marketing agency for doctor-led clinics in India built to turn
                visibility into trusted consultations.
              </h1>

              <p className="mt-8 max-w-3xl text-xl font-light leading-9 text-white/65">
                Skilled doctors should not lose patients to weaker clinics that
                simply look more trustworthy online.
              </p>

              <div className="mt-10 max-w-2xl border-l border-white/15 pl-6">
                <p className="text-lg font-light leading-8 text-white/60">
                  Patients often cannot tell the difference between a serious clinic
                  and a generic one. That gap creates price shoppers, weak trust,
                  poor enquiries, delayed decisions, and lost consultations.
                </p>

                <p className="mt-6 text-2xl font-medium leading-snug text-white md:text-3xl">
                  Fundamental.co exists to fix that gap.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE — DOCTOR IMAGE */}
            <div className="relative">
              <div className="premium-card overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                <img
                  src={doctorHero}
                  alt="Doctor-led clinic growth system by Fundamental.co"
                  className="h-[520px] w-full object-cover object-center grayscale lg:h-[680px]"
                />
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                    Built for doctor-led clinics
                  </p>

                  <p className="mt-2 max-w-md text-base leading-7 text-white/65">
                    For clinics that want to be chosen through trust, clarity, and
                    consultation confidence — not noise or discount-led marketing.
                  </p>
                </div>

                <div className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black md:flex">
                  <div className="relative h-7 w-7">
                    <div className="absolute left-0 top-1 h-4 w-4 rounded-full border border-white/75" />
                    <div className="absolute bottom-0 right-0 h-0 w-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-white/75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-[-140px] top-16 h-[420px] w-[420px] rounded-full border border-white/8" />
        <div className="pointer-events-none absolute bottom-[-120px] left-[-60px] h-0 w-0 border-l-[180px] border-r-[180px] border-b-[300px] border-l-transparent border-r-transparent border-b-white/[0.03]" />
      </section>

      {/* WHAT WE DO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/45">
                What We Do
              </p>

              <h2 className="max-w-xl text-4xl font-semibold uppercase leading-none tracking-[-0.05em] md:text-6xl">
                We make clinics easier to trust and easier to choose.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-xl font-light leading-9 text-white/65">
                We build the marketing and conversion infrastructure that turns
                attention into serious consultations. That includes positioning,
                content, websites, ads, enquiry systems, follow-up structure,
                and conversion tracking.
              </p>

              <div className="mt-10 grid gap-3">
                {doItems.map((item, index) => (
                  <div
                    key={item}
                    className="premium-card flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-5"
                  >
                    <span className="text-xs font-medium tracking-[0.25em] text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-base text-white/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO NOT DO */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="mb-14 max-w-4xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/45">
              What We Do Not Do
            </p>

            <h2 className="text-5xl font-semibold uppercase leading-none tracking-[-0.055em] md:text-7xl">
              We do not sell noise.
            </h2>

            <p className="mt-8 max-w-3xl text-xl font-light leading-9 text-white/65">
              Most clinics are told they need more posting, more reach, more
              ads, or more leads. But more visibility does not fix weak trust.
              If the patient journey is unclear, more traffic only creates more
              leakage.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dontItems.map((item) => (
              <div
                key={item}
                className="premium-card min-h-[120px] rounded-2xl border border-white/10 bg-white/[0.025] p-6"
              >
                <p className="text-lg font-medium leading-7 text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DO IT */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/45">
                How We Do It
              </p>

              <h2 className="text-5xl font-semibold uppercase leading-none tracking-[-0.055em] md:text-7xl">
                Every part of the patient journey has an owner.
              </h2>
            </div>

            <p className="max-w-2xl text-xl font-light leading-9 text-white/65">
              Every clinic growth problem belongs to a stage in the journey.
              So every stage needs a clear asset, a clear owner, and a clear
              metric.
            </p>
          </div>

          <div className="space-y-6">
            {howSteps.map((step) => (
              <div
                key={step.number}
                className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] lg:grid-cols-[1.1fr_0.9fr]"
              >
                {/* Step Explanation */}
                <div className="p-7 md:p-10 lg:p-12">
                  <div className="mb-10 flex items-center justify-between gap-6 border-b border-white/10 pb-6">
                    <span className="text-sm font-medium tracking-[0.3em] text-white/35">
                      {step.number}
                    </span>

                    <span className="h-px flex-1 bg-white/10" />

                    <span className="text-xs uppercase tracking-[0.25em] text-white/35">
                      System Step
                    </span>
                  </div>

                  <h3 className="max-w-2xl text-3xl font-semibold uppercase leading-none tracking-[-0.04em] text-white md:text-5xl">
                    {step.title}
                  </h3>

                  <p className="mt-8 max-w-2xl text-lg font-light leading-8 text-white/65">
                    {step.description}
                  </p>
                </div>

                {/* Team Card */}
                <div className="border-t border-white/10 bg-white/[0.035] p-7 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-white/35">
                    Responsible Owner
                  </p>

                  <TeamImage step={step} />

                  <h4 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                    {step.owner}
                  </h4>

                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/40">
                    {step.role}
                  </p>

                  <div className="mt-8 space-y-6">
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/35">
                        Owns
                      </p>

                      <p className="text-base leading-7 text-white/70">
                        {step.owns}
                      </p>
                    </div>

                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-white/35">
                        Belief
                      </p>

                      <p className="text-lg font-light leading-8 text-white">
                        “{step.belief}”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
          <div className="premium-card-strong rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/45">
                  Start With Diagnosis
                </p>

                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-none tracking-[-0.05em] md:text-6xl">
                  Before you buy more marketing, find where the patient journey
                  is leaking.
                </h2>
              </div>

              <div>
                <p className="mb-8 max-w-xl text-lg font-light leading-8 text-white/65">
                  Request a Pipeline Audit and we will review where attention,
                  trust, enquiry, follow-up, or consultation quality is breaking
                  down.
                </p>

                <Link
                  to="/request-audit"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
                >
                  Request a Pipeline Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}