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
    name: "Pipeline Optimization",
    path: "/services/pipeline-optimization",
  },
];

const videoAssets = [
  "Doctor authority reels",
  "Treatment explanation videos",
  "Patient education videos",
  "Clinic proof videos",
  "Before / after context videos",
  "Myth-busting videos",
  "FAQ videos",
  "Consultation preparation videos",
  "Ad creatives",
  "Retargeting videos",
  "Doctor POV videos",
];

const faqs = [
  {
    question: "Do you provide video editing for doctors in Lucknow?",
    answer:
      "Yes. Fundamental.co provides video editing for doctors, clinics, aesthetic clinics, dermatologists, dentists, and healthcare businesses in Lucknow and across India.",
  },
  {
    question: "Is this only reel editing?",
    answer:
      "No. We edit reels, educational videos, proof-led videos, treatment explainers, ad creatives, FAQ videos, and consultation preparation videos. The goal is not just aesthetics. The goal is trust and patient confidence.",
  },
  {
    question: "Can video editing improve patient enquiries?",
    answer:
      "Video editing alone does not guarantee enquiries. But when the content answers patient doubts, builds doctor authority, and fits inside the clinic pipeline, it can improve the quality of attention and enquiries.",
  },
  {
    question: "Do you also help with scripts?",
    answer:
      "Yes. We can help with video structure, hooks, scripts, patient objections, treatment explanation angles, and doctor POV content.",
  },
];

export default function VideoEditing() {
  <SEO
    title="Video Editing for Doctors| Fundamental.co"
    description="Professional video editing services for doctors, clinics, and healthcare businesses in Lucknow and across India."
    path="/services/video-editing"
    schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Video Editing For Doctors",
    serviceType: "Video Editing for Doctors",
    provider: {
      "@type": "Organization",
      name: "Fundamental.co",
      url: "https://website-navy-alpha-71.vercel.app/",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Doctors and clinics",
    },
    description:
      "Diagnose and fix the stages where clinics lose enquiries, follow-up, consultations, and revenue.",
  }}
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
            Video Editing for Doctors in Lucknow
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase tracking-[-0.06em] text-white md:text-7xl">
            Video editing for doctors that builds trust before the consultation.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We turn raw doctor expertise, treatment explanations, patient
            education, and clinic proof into video assets that help patients
            understand, trust, and enquire.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/request-audit"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
            >
              Find My Revenue Leaks
            </Link>

            <a
              href="#video-pipeline"
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
              Turn expertise into patient confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
            The problem
          </p>

          <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
            Most doctor videos do not fail because they are poorly edited.
            <span className="block text-white/45">
              They fail because they are edited without strategy.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/58">
            A clinic can post reels every week and still attract low-intent
            patients if the videos do not answer the real patient questions:
            Can I trust this doctor? Does this treatment make sense for me? Is
            this clinic serious? Will I feel safe booking a consultation here?
          </p>
        </div>
      </div>
    </section>
  );
}

function PipelineFit() {
  return (
    <section
      id="video-pipeline"
      className="relative px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
              Pipeline fit
            </p>

            <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
              Video editing fits inside Attention, Trust, and Enquiry.
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Attention",
                text: "Make the right patients stop and pay attention for the right reason.",
              },
              {
                title: "Trust",
                text: "Turn doctor expertise into clear, credible, useful content.",
              },
              {
                title: "Enquiry",
                text: "Make the patient warmer before they click, message, call, or book.",
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
            Video assets designed to move patients closer to trust.
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {videoAssets.map((asset) => (
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
            Normal video editing asks
          </p>
          <h3 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
            How do we make this video look better?
          </h3>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
            Fundamental.co asks
          </p>
          <h3 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
            What does this video need to make the patient trust the doctor more?
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
              Video editing for doctors in Lucknow and clinics across India.
            </h2>

            <p className="mt-8 text-base leading-8 text-white/58">
              Fundamental.co provides video editing for doctors, clinics, and
              healthcare businesses in Lucknow, while also working with
              doctor-led clinics across India. Our work is built for clinics
              where trust matters before enquiry: aesthetic clinics,
              dermatology clinics, dental clinics, hair transplant clinics,
              plastic surgery clinics, orthopaedic clinics, Ayurvedic clinics,
              and multi-specialty clinics.
            </p>

            <p className="mt-6 text-base leading-8 text-white/58">
              If your clinic is in Lucknow and already creating content, but the
              videos are not bringing serious patient enquiries, the problem may
              not be video quality. The problem may be weak trust design.
            </p>
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
          Video editing works best when connected to the full clinic pipeline.
        </h2>

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
              Questions about video editing for clinics.
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
              Before you make more videos
            </p>

            <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase tracking-[-0.06em] text-white md:text-6xl">
              Find where the patient journey is leaking.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/58">
              A video editing system can help — but only if it fixes the right
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