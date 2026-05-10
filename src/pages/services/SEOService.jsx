import { Link } from "react-router-dom";
import SEO from "../../components/SEO.jsx";

const serviceLinks = [
  {
    name: "Social Media Marketing",
    path: "/services/social-media-marketing",
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
  {
    name: "Video Editing",
    path: "/services/video-editing",
  },
];

const seoAssets = [
  "Local SEO strategy",
  "Clinic service pages",
  "Treatment pages",
  "Doctor authority pages",
  "Location pages",
  "FAQ content",
  "Search-intent blog content",
  "Google Business Profile direction",
  "Internal linking structure",
  "On-page SEO",
  "Technical SEO basics",
  "Conversion-focused SEO content",
];

const faqs = [
  {
    question: "Do you provide SEO for doctors in Lucknow?",
    answer:
      "Yes. Fundamental.co provides SEO for doctors, clinics, aesthetic clinics, dermatologists, dentists, and healthcare businesses in Lucknow and across India.",
  },
  {
    question: "How is clinic SEO different from normal SEO?",
    answer:
      "Clinic SEO is not only about traffic. Patients need confidence before they enquire. So SEO for doctors must combine search intent, doctor authority, treatment clarity, proof, local relevance, FAQs, and conversion paths.",
  },
  {
    question: "Can SEO bring patient enquiries?",
    answer:
      "SEO can bring high-intent visitors who are already searching for treatments, doctors, and clinics. But the page still needs to build enough trust for those visitors to enquire or book a consultation.",
  },
  {
    question: "Do you write treatment pages and blog content?",
    answer:
      "Yes. We help structure and write treatment pages, service pages, location pages, FAQs, and search-intent blog content that supports trust and enquiries.",
  },
  {
    question: "How long does SEO take for clinics?",
    answer:
      "SEO compounds over time. Some improvements can come from better structure, local pages, and stronger conversion paths, but ranking and organic growth usually require consistent execution over months.",
  },
];

export default function SEOService() 
{
  <>
    <SEO
      title="SEO for Doctors & Clinics in India | Fundamental.co"
      description="SEO systems for doctor-led clinics that want to capture high-intent patients searching on Google."
      path="/services/seo"
      schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    name: "SEO for Doctors and Clinics",
    serviceType: "Healthcare SEO",
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
      "SEO systems for doctor-led clinics that want to capture high-intent patients searching on Google.",
  }}
    />
  </>
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
            SEO for Doctors in Lucknow
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase tracking-[-0.06em] text-white md:text-7xl">
            SEO for doctors that brings high-intent patients, not just traffic.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We help doctor-led clinics in Lucknow and across India rank for
            high-intent searches, build trust before enquiry, and turn organic
            visibility into serious consultation opportunities.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/request-audit"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
            >
              Find My Revenue Leaks
            </Link>

            <a
              href="#seo-pipeline"
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
              Turn search visibility into patient trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    "Blog posts without conversion paths",
    "Service pages without trust signals",
    "Keyword rankings without enquiry intent",
    "Location pages without authority",
    "Traffic without consultation bookings",
  ];

  return (
    <section className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
            The problem
          </p>

          <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
            Most clinic SEO gets rankings.
            <span className="block text-white/45">
              But rankings alone do not grow a clinic.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/58">
            Most clinics rank for keywords but fail to convert search traffic
            into serious enquiries because the SEO strategy is disconnected
            from the patient journey.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
      id="seo-pipeline"
      className="relative px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
              Pipeline fit
            </p>

            <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
              SEO fits inside Attention, Trust, and Enquiry.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
              SEO brings patients who are already searching. But once they land
              on the website, the page has to answer the deeper question: why
              should I trust this doctor or clinic?
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Attention",
                text: "Capture patients already searching for treatments, doctors, and clinic options in Lucknow.",
              },
              {
                title: "Trust",
                text: "Build authority through treatment clarity, doctor positioning, proof, FAQs, and local relevance.",
              },
              {
                title: "Enquiry",
                text: "Guide high-intent visitors toward WhatsApp, forms, calls, or consultation booking paths.",
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
            SEO assets designed to turn search intent into trust.
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/58">
            Every SEO asset is built to support a commercial outcome: more
            qualified discovery, more trust before enquiry, and more serious
            consultation opportunities.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {seoAssets.map((asset) => (
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
            Normal SEO asks
          </p>
          <h3 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
            How do we rank this page?
          </h3>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
            Fundamental.co asks
          </p>
          <h3 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
            Will this page make the patient trust the clinic enough to enquire?
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
              SEO for doctors in Lucknow and clinics across India.
            </h2>

            <p className="mt-8 text-base leading-8 text-white/58">
              If your clinic is in Lucknow, SEO can help you appear when
              patients search for treatments, doctors, clinics, and local
              medical solutions. But competition is increasing. Patients compare
              multiple clinics before enquiring.
            </p>

            <p className="mt-6 text-base leading-8 text-white/58">
              Fundamental.co builds SEO for clinics in Lucknow and across India
              with one focus: turning search visibility into patient trust and
              qualified enquiries.
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
          SEO works best when connected to the full clinic pipeline.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/55">
          SEO can bring high-intent patients to the website, but trust,
          messaging, follow-up, and conversion infrastructure decide whether
          that search traffic becomes revenue.
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
              Questions about SEO for doctors and clinics.
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
              Before you buy SEO
            </p>

            <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase tracking-[-0.06em] text-white md:text-6xl">
              Find where the patient journey is leaking.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/58">
              SEO can help — but only if it fixes the right stage of the patient
              journey. Request the Clinic Revenue Multiplier Plan and find the
              highest-leverage leak first.
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