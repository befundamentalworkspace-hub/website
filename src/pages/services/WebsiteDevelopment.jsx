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

const websiteAssets = [
  "Clinic website structure",
  "Doctor authority sections",
  "Treatment pages",
  "Trust-building homepage",
  "Proof sections",
  "FAQ sections",
  "Landing pages",
  "CTA system",
  "Request audit / enquiry forms",
  "WhatsApp enquiry flow",
  "Conversion-focused copy",
  "Basic SEO structure",
  "Mobile-first layouts",
];

const faqs = [
  {
    question: "Do you build websites for doctors in Lucknow?",
    answer:
      "Yes. Fundamental.co builds websites for doctors, clinics, aesthetic clinics, dermatologists, dentists, and healthcare businesses in Lucknow and across India.",
  },
  {
    question: "How is a clinic website different from a normal business website?",
    answer:
      "A clinic website has to build trust before it asks for an enquiry. Patients need to understand the doctor, treatment, proof, process, safety, and next step before they feel confident enough to contact the clinic.",
  },
  {
    question: "Can a website increase patient enquiries?",
    answer:
      "A website can improve enquiries when it removes doubt, builds authority, explains treatments clearly, and gives patients a simple next step through calls, forms, or WhatsApp.",
  },
  {
    question: "Do you write the website copy too?",
    answer:
      "Yes. We structure and write conversion-focused website copy for doctor-led clinics, including homepage copy, treatment pages, doctor authority sections, proof sections, FAQs, and CTA copy.",
  },
  {
    question: "Will the website be SEO ready?",
    answer:
      "Yes. We build the basic SEO structure into the website, including page hierarchy, metadata direction, treatment page structure, internal linking logic, and location relevance where required.",
  },
];

export default function WebsiteDevelopment()
 {
  <>
    <SEO
      title="Website Development for Doctors| Fundamental.co"
      description="Premium clinic websites built to convert patient attention into trusted enquiries and consultation requests."
      path="/services/website-development"
      schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Website Development for Doctors",
    serviceType: "Healthcare Website Development",
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
      "Premium clinic websites built to convert patient attention into trusted enquiries and consultation requests.",
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
            Website Development for Doctors in Lucknow
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold uppercase tracking-[-0.06em] text-white md:text-7xl">
            Website development for doctors that converts trust into enquiries.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
            We build websites for doctor-led clinics in Lucknow and across
            India that help patients understand the doctor, trust the clinic,
            and take the next step with confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/request-audit"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
            >
              Find My Revenue Leaks
            </Link>

            <a
              href="#website-pipeline"
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
              Turn website visitors into confident enquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const problems = [
    "Generic brochure-style pages",
    "Weak doctor authority",
    "No clear treatment explanation",
    "No proof or trust structure",
    "Unclear enquiry path",
    "Poor mobile experience",
  ];

  return (
    <section className="relative px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
            The problem
          </p>

          <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
            Most clinic websites look presentable.
            <span className="block text-white/45">
              But they do not build enough trust to make patients enquire.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/58">
            A good-looking website can still fail if it does not answer the
            patient’s real decision questions: Who is the doctor? Why should I
            trust this clinic? What treatment is right for me? What happens
            after I enquire? What proof exists?
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
      id="website-pipeline"
      className="relative px-6 py-24 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
              Pipeline fit
            </p>

            <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
              Website development fits inside Trust, Enquiry, and Consultation.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
              The website is where attention becomes belief. It should move the
              patient from “I found this clinic” to “this clinic feels credible
              enough to contact.”
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                title: "Trust",
                text: "Build doctor authority, treatment clarity, proof, safety, and confidence before the patient enquires.",
              },
              {
                title: "Enquiry",
                text: "Make the next step obvious through clear CTAs, forms, WhatsApp flows, and conversion-focused copy.",
              },
              {
                title: "Consultation",
                text: "Educate patients before they book so they enter the consultation with more clarity and confidence.",
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
            Websites designed to turn patient attention into serious enquiries.
          </h2>

          <p className="mt-8 max-w-3xl text-base leading-8 text-white/58">
            Every page, section, CTA, and proof element exists to reduce doubt,
            increase patient confidence, and help the visitor take the next
            step.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {websiteAssets.map((asset) => (
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
            Normal website development asks
          </p>
          <h3 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
            Does the website look good?
          </h3>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
            Fundamental.co asks
          </p>
          <h3 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.05em] text-white">
            Does the website make the patient confident enough to enquire?
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
              Website development for doctors in Lucknow and clinics across
              India.
            </h2>

            <p className="mt-8 text-base leading-8 text-white/58">
              Fundamental.co builds websites for doctors, clinics, and
              healthcare businesses in Lucknow, while also working with
              doctor-led clinics across India. Our websites are built for
              clinics where trust matters before enquiry.
            </p>

            <p className="mt-6 text-base leading-8 text-white/58">
              If your clinic is in Lucknow and your website looks fine but does
              not bring serious patient enquiries, the problem may not be
              design. The problem may be weak trust structure, poor copy, weak
              proof, unclear CTAs, or a broken enquiry path.
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
          A clinic website works best when connected to the full patient
          pipeline.
        </h2>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/55">
          Website development can improve trust and enquiry conversion, but the
          rest of the pipeline still matters: attention, follow-up,
          consultation, conversion, and optimization.
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
              Questions about website development for doctors and clinics.
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
              Before you rebuild your website
            </p>

            <h2 className="mx-auto max-w-5xl text-4xl font-semibold uppercase tracking-[-0.06em] text-white md:text-6xl">
              Find where the patient journey is leaking.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/58">
              A website can help — but only if it fixes the right stage of the
              patient journey. Request the Clinic Revenue Multiplier Plan and
              find the highest-leverage leak first.
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