import { Link } from "react-router-dom";

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
    name: "Pipeline Optimization",
    path: "/services/pipeline-optimization",
  },
  {
    name: "Video Editing",
    path: "/services/video-editing",
  },
];

const performanceAssets = [
  "Paid campaign strategy",
  "Ad creatives",
  "Landing page direction",
  "Retargeting structure",
  "Lead quality tracking",
  "CTA testing",
  "Audience testing",
  "Offer angle testing",
  "Ad copy",
  "Funnel improvement recommendations",
  "Reporting",
  "Conversion path review",
];

const faqs = [
  {
    question: "Do you provide performance marketing for clinics in Lucknow?",
    answer:
      "Yes. Fundamental.co provides performance marketing for doctors, clinics, aesthetic clinics, dermatologists, dentists, and healthcare businesses in Lucknow and across India.",
  },
  {
    question: "How is performance marketing different from just running ads?",
    answer:
      "Running ads is only one part of performance marketing. For clinics, the ad must connect with trust assets, landing pages, enquiry flow, follow-up, retargeting, and consultation conversion. Otherwise, campaigns may generate leads without serious patient quality.",
  },
  {
    question: "Can ads bring high-quality patient enquiries?",
    answer:
      "Ads can bring qualified demand when the campaign is built around the right audience, message, trust assets, landing page, and follow-up process. If the pipeline is weak, ads often create price shoppers, ghosting, and low consultation booking rates.",
  },
  {
    question: "Do you create landing pages for ad campaigns?",
    answer:
      "Yes. We help with landing page direction, copy structure, CTA clarity, offer angle, trust sections, and enquiry flow so the campaign does not send traffic into a weak page.",
  },
  {
    question: "Do you track lead quality?",
    answer:
      "Yes. We focus on enquiry quality, consultation booking rate, follow-up performance, and conversion path issues — not just cost per lead.",
  },
];

export default function PerformanceMarketing() {
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
            Performance Marketing for Clinics in Lucknow
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase tracking-[-0.06em] text-white md:text-7xl">
            Performance marketing for clinics that focuses on better patient
            quality.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We help doctor-led clinics in Lucknow and across India use paid
            campaigns as part of a trust-first pipeline built for qualified
            enquiries and booked consultations.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/request-audit"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
            >
              Find My Revenue Leaks
            </Link>

            <a
              href="#performance-pipeline"
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
              Turn paid attention into serious consultations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    "Low-intent enquiries",
    "Price shoppers",
    "Ghosting after enquiry",
    "Weak consultation booking rates",
    "Wasted ad spend",
    "Leads without trust",
  ];

  return (
    <section className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
            The problem
          </p>

          <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
            Running ads is easy.
            <span className="block text-white/45">
              Generating serious patient enquiries is harder.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/58">
            Most clinic ads fail because they send traffic into a weak trust
            system, unclear landing page, poor follow-up process, or
            low-confidence consultation journey. The problem is not always the
            campaign. Often, the problem is what happens before and after the
            click.
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
  return (
    <section
      id="performance-pipeline"
      className="relative px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
              Pipeline fit
            </p>

            <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
              Performance marketing fits inside Attention, Enquiry, Follow-up,
              and Conversion.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
              Ads create demand, but the pipeline determines whether that demand
              converts. Paid campaigns must connect with landing pages, trust
              assets, retargeting, WhatsApp flow, follow-up, and conversion
              tracking.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Attention",
                text: "Bring targeted demand from patients who are likely to care about the clinic’s offer.",
              },
              {
                title: "Enquiry",
                text: "Send traffic to pages and CTAs that make the next step clear and credible.",
              },
              {
                title: "Follow-up",
                text: "Support retargeting, reactivation, and structured response after first enquiry.",
              },
              {
                title: "Conversion",
                text: "Track whether campaigns are creating serious consultation opportunities, not just cheap leads.",
              },
            ].map((item, index) => (
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
            Paid systems designed around patient quality, not vanity leads.
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/58">
            Every campaign should support a commercial outcome: better patient
            quality, clearer enquiry paths, stronger follow-up, and more serious
            consultation opportunities.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {performanceAssets.map((asset) => (
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
            How many leads did we generate?
          </h3>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
            Fundamental.co asks
          </p>
          <h3 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
            How many serious enquiries became consultations?
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
              Performance marketing for clinics in Lucknow and across India.
            </h2>

            <p className="mt-8 text-base leading-8 text-white/58">
              Fundamental.co provides performance marketing for doctors,
              clinics, and healthcare businesses in Lucknow, while also working
              with doctor-led clinics across India. Our campaigns are built for
              clinics where trust, patient quality, and consultation conversion
              matter more than cheap leads.
            </p>

            <p className="mt-6 text-base leading-8 text-white/58">
              If your clinic is in Lucknow and your ads are generating leads but
              not enough serious consultations, the issue may not be ad spend.
              The issue may be weak trust, weak landing pages, poor follow-up,
              or a broken enquiry-to-consultation path.
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
          Performance marketing works best when connected to the full clinic
          pipeline.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/55">
          Ads can create demand, but trust, website conversion, follow-up, and
          consultation framing decide whether that demand becomes revenue.
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
              Questions about performance marketing for clinics.
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
              Before you spend more on ads
            </p>

            <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase tracking-[-0.06em] text-white md:text-6xl">
              Find where the patient journey is leaking.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/58">
              Performance marketing can help — but only if it fixes the right
              stage of the patient journey. Request the Clinic Revenue
              Multiplier Plan and find the highest-leverage leak first.
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