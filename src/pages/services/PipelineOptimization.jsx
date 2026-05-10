import { Link } from "react-router-dom";
import SEO from "../../components/SEO.jsx";

const serviceLinks = [
  {
    name: "Social Media Marketing",
    path: "/services/social-media-marketing",
  },
  {
    name: "SEO",
    path: "/services/seo",
  },
  {
    name: "Website Development",
    path: "/services/website-development",
  },
  {
    name: "Performance Marketing",
    path: "/services/performance-marketing",
  },
  {
    name: "Video Editing",
    path: "/services/video-editing",
  },
];

const pipelineAssets = [
  "Pipeline audit",
  "Revenue leak diagnosis",
  "Enquiry path review",
  "Follow-up SOP",
  "WhatsApp script direction",
  "CTA optimization",
  "Landing page recommendations",
  "Trust asset recommendations",
  "Consultation journey review",
  "Monthly optimization plan",
  "Revenue recovery roadmap",
  "Service priority mapping",
];

const faqs = [
  {
    question: "Do you provide clinic pipeline optimization in Lucknow?",
    answer:
      "Yes. Fundamental.co provides clinic pipeline optimization for doctors, clinics, aesthetic clinics, dermatologists, dentists, and healthcare businesses in Lucknow and across India.",
  },
  {
    question: "What does pipeline optimization mean?",
    answer:
      "Pipeline optimization means finding and fixing the weak points between attention, trust, enquiry, follow-up, consultation, conversion, and optimization. It helps the clinic understand where serious patients are dropping off.",
  },
  {
    question: "Is this different from digital marketing?",
    answer:
      "Yes. Digital marketing usually focuses on execution such as ads, content, SEO, or websites. Pipeline optimization focuses on the full patient journey and identifies which stage should be fixed first.",
  },
  {
    question: "Can pipeline optimization improve revenue?",
    answer:
      "It can improve revenue potential by identifying the stages where the clinic is losing enquiries, consultations, or conversions. We do not treat more leads as the default answer. We first find the leak.",
  },
  {
    question: "Who is this best suited for?",
    answer:
      "It is best suited for clinics that are already getting attention, enquiries, or leads but are not seeing enough serious consultations, patient quality, or conversion from their current marketing.",
  },
];

export default function PipelineOptimization() {
  <SEO
    title="Clinic Pipeline Optimization| Fundamental.co"
    description="Diagnose and fix the stages where clinics lose enquiries, follow-up, consultations, and revenue."
    path="/services/pipeline-optimization"
  />
  return (
    <main className="relative min-h-screen bg-black text-white">
      <BackgroundTexture />

      <div className="relative z-10">
        <Hero />
        <Problem />
        <PipelineFit />
        <WhatWeBuild />
        <WhyDifferent />
        <LocationSEO />
        <RelatedServices />
        <FAQ />
        <CTA />
      </div>
    </main>
  );
}

function BackgroundTexture() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[8%] top-[14%] h-72 w-72 rounded-full border border-white/[0.04]" />
      <div className="absolute right-[10%] top-[24%] h-96 w-96 rounded-full border border-white/[0.035]" />
      <div className="absolute bottom-[10%] left-[18%] h-80 w-80 rounded-full border border-white/[0.03]" />

      <div className="absolute left-[72%] top-[48%] h-0 w-0 border-l-[90px] border-r-[90px] border-b-[150px] border-l-transparent border-r-transparent border-b-white/[0.025]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:42px_42px] opacity-[0.16]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pb-24 pt-36 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
            Clinic Pipeline Optimization in Lucknow
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase tracking-[-0.06em] text-white md:text-7xl">
            Clinic pipeline optimization that finds where revenue is leaking.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We help doctor-led clinics in Lucknow and across India identify and
            fix the weak points between visibility, trust, enquiries, follow-up,
            consultations, and conversion.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/request-audit"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
            >
              Find My Revenue Leaks
            </Link>

            <a
              href="#pipeline-fit"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white/35 hover:bg-white/[0.04]"
            >
              See Pipeline Fit
            </a>
          </div>
        </div>

        <div className="relative hidden min-h-[520px] lg:block">
          <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/[0.025]" />

          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />

          <div className="absolute left-1/2 top-[53%] h-0 w-0 -translate-x-1/2 border-l-[95px] border-r-[95px] border-b-[165px] border-l-transparent border-r-transparent border-b-white/[0.035]" />

          <div className="absolute inset-x-10 bottom-10 rounded-[2rem] border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
              Core role
            </p>
            <p className="mt-4 text-2xl font-semibold uppercase leading-tight tracking-[-0.05em] text-white">
              Find the leak before adding more marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    "Weak trust before enquiry",
    "Unclear CTAs",
    "Slow follow-up",
    "Poor WhatsApp handling",
    "Cold consultations",
    "Patients delaying or disappearing",
  ];

  return (
    <section className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
            The problem
          </p>

          <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
            Most clinics do not have one marketing problem.
            <span className="block text-white/45">
              They have a patient journey problem.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/58">
            Attention comes in. Trust is weak. Enquiries are unclear. Follow-up
            is slow. Consultations start cold. Patients delay, disappear, or
            compare on price. More marketing does not fix a broken pipeline.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5"
            >
              <p className="text-sm leading-6 text-white/58">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PipelineFit() {
  const stages = [
    {
      title: "Attention",
      text: "Is the clinic attracting the right people or just creating visibility?",
    },
    {
      title: "Trust",
      text: "Does the patient believe the doctor is credible before reaching out?",
    },
    {
      title: "Enquiry",
      text: "Is the next step clear, easy, and worth taking?",
    },
    {
      title: "Follow-up",
      text: "Are serious leads being guided or left to go cold?",
    },
    {
      title: "Consultation",
      text: "Does the patient enter the consultation informed and confident?",
    },
    {
      title: "Conversion",
      text: "Is the clinic helping serious patients make a clear decision?",
    },
    {
      title: "Optimization",
      text: "Is the system improving based on data, diagnosis, and monthly review?",
    },
  ];

  return (
    <section
      id="pipeline-fit"
      className="relative px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
              Pipeline fit
            </p>

            <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
              Pipeline optimization connects every stage of clinic growth.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
              It answers the question most clinics avoid: where are serious
              patients actually dropping off?
            </p>
          </div>

          <div className="grid gap-4">
            {stages.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[-0.05em] text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
            What we build
          </p>

          <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
            A diagnostic system for finding what should be fixed first.
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/58">
            If you do not know where the clinic is leaking, every service
            becomes guesswork. Pipeline optimization shows whether the next fix
            should be content, website, ads, follow-up, consultation framing, or
            conversion infrastructure.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {pipelineAssets.map((asset) => (
            <span
              key={asset}
              className="rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-xs uppercase tracking-[0.16em] text-white/55"
            >
              {asset}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyDifferent() {
  return (
    <section className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
            Normal agencies ask
          </p>
          <h3 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
            Which service do you want to buy?
          </h3>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
            Fundamental.co asks
          </p>
          <h3 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
            Which stage is leaking revenue first?
          </h3>
        </div>
      </div>
    </section>
  );
}

function LocationSEO() {
  return (
    <section className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.025] p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_30%)]" />

          <div className="relative z-10 max-w-4xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
              Lucknow + India
            </p>

            <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
              Clinic pipeline optimization in Lucknow and across India.
            </h2>

            <p className="mt-8 text-base leading-8 text-white/58">
              Fundamental.co provides pipeline optimization for doctors,
              clinics, and healthcare businesses in Lucknow, while also working
              with doctor-led clinics across India.
            </p>

            <p className="mt-6 text-base leading-8 text-white/58">
              If your clinic is in Lucknow and you are already getting
              attention, enquiries, or leads but not enough serious
              consultations, the problem may not be visibility. The problem may
              be a leak between trust, enquiry, follow-up, consultation, and
              conversion.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Aesthetic clinics",
                "Dermatology clinics",
                "Dental clinics",
                "Hair transplant clinics",
                "Plastic surgery clinics",
                "Orthopaedic clinics",
                "Ayurvedic clinics",
                "Multi-specialty clinics",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.15em] text-white/48"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedServices() {
  return (
    <section className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
          Explore the system
        </p>

        <h2 className="max-w-4xl text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
          Pipeline optimization decides which service actually matters next.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/55">
          You may need better content, a stronger website, SEO, performance
          marketing, video editing, or follow-up infrastructure. Pipeline
          optimization shows what should be fixed first.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceLinks.map((service) => (
            <Link
              key={service.name}
              to={service.path}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.045]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold text-white">
                  {service.name}
                </h3>
                <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
              FAQ
            </p>

            <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
              Questions about clinic pipeline optimization.
            </h2>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {faq.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative px-6 pb-32 pt-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.025] p-8 text-center md:p-14 lg:p-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.09),transparent_28%)]" />

          <div className="relative z-10">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
              Before you buy another service
            </p>

            <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase tracking-[-0.06em] text-white md:text-6xl">
              Find where the patient journey is leaking.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/58">
              Pipeline optimization helps you stop guessing. Request the Clinic
              Revenue Multiplier Plan and find the highest-leverage leak first.
            </p>

            <div className="mt-10">
              <Link
                to="/request-audit"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
              >
                Find My Revenue Leaks
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}