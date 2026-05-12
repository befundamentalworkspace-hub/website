import ServicesHero from "../components/services/ServicesHero.jsx";
import ServicesProblem from "../components/services/ServicesProblem.jsx";
import VerticalPipelineExperience from "../components/services/VerticalPipelineExperience.jsx";
import PipelineOffer from "../components/services/PipelineOffer.jsx";
import ServicesFAQ from "../components/services/ServicesFAQ.jsx";
import ServicesCTA from "../components/services/ServicesCTA.jsx";
import SEO from "../components/SEO.jsx";

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | Fundamental.co"
        description="Explore our specialized services designed to help doctor-led clinics in India increase visibility, build trust, and convert consultations. From SEO and website development to performance marketing and pipeline optimization, we offer comprehensive solutions tailored for the healthcare industry."
        path="/services"
         schema={{
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing and Conversion Systems for Doctors",
    serviceType: "Doctor and Clinic Marketing Services",
    provider: {
      "@type": "Organization",
      name: "Fundamental.co",
      url: "https://justfundamental.com/",
      logo: "https://justfundamental.com/fundamental-mark.png",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Doctors, clinics, aesthetic clinics, hospitals, and healthcare businesses",
    },
    description:
      "Fundamental.co builds SEO, websites, social media, performance marketing, and conversion systems for doctor-led clinics.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fundamental.co Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO for Doctors",
            description:
              "SEO systems for doctor-led clinics that want to capture high-intent patients searching on Google.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development for Doctors",
            description:
              "Clinic websites built to convert patient attention into trusted enquiries and consultation requests.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Performance Marketing for Doctors",
            description:
              "Paid advertising and retargeting systems for clinics that want better patient quality, not just more leads.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing for Doctors",
            description:
              "Social media systems that build doctor authority, trust, and patient confidence.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Clinic Pipeline Optimization",
            description:
              "Diagnosis and optimization of the stages where clinics lose enquiries, follow-up, consultations, and revenue.",
          },
        },
      ],
    },
  }}
      />
    <main className="relative min-h-screen bg-black text-white">
      <BackgroundTexture />

      <div className="relative z-10">
        <ServicesHero />
        <ServicesProblem />
        <VerticalPipelineExperience />
        <PipelineOffer />
        <ServicesFAQ />
        <ServicesCTA />
      </div>
    </main>
    </>
  );
}

function BackgroundTexture() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute left-[8%] top-[14%] h-72 w-72 rounded-full border border-white/[0.045]" />
      <div className="absolute right-[10%] top-[20%] h-96 w-96 rounded-full border border-white/[0.035]" />
      <div className="absolute bottom-[12%] left-[16%] h-80 w-80 rounded-full border border-white/[0.035]" />

      <div className="absolute left-[72%] top-[44%] h-0 w-0 border-l-[90px] border-r-[90px] border-b-[150px] border-l-transparent border-r-transparent border-b-white/[0.025]" />
      <div className="absolute left-[6%] top-[62%] h-0 w-0 rotate-12 border-l-[70px] border-r-[70px] border-b-[120px] border-l-transparent border-r-transparent border-b-white/[0.025]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:42px_42px] opacity-[0.18]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    </div>
  );
}