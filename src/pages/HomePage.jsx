import Navbar from "../components/homepage/Navbar";
import HeroSection from "../components/homepage/HeroSection";
import ProblemSection from "../components/homepage/ProblemSection";
import PipelineSection from "../components/homepage/PipelineSection";
import ServicesSection from "../components/homepage/ServicesSection";
import BeforeAfterSection from "../components/homepage/BeforeAfterSection";
import AuditCTASection from "../components/homepage/AuditCTASection";
import FounderBeliefSection from "../components/homepage/FounderBeliefSection";
import FinalCTASection from "../components/homepage/FinalCTASection";
import Footer from "../components/homepage/Footer";
import BackgroundTexture from "../components/homepage/BackgroundTexture";
import SEO from "../components/SEO.jsx";

export default function HomePage() {
  return (
    <>
      <SEO
        title="Fundamental.co | Marketing Agency for Doctors & Clinics in India"
        description="Fundamental.co helps doctor-led clinics turn visibility into trusted consultations through SEO, websites, performance marketing, and conversion systems."
        path="/"
         schema={{
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fundamental.co",
    url: "https://website-navy-alpha-71.vercel.app/",
    logo: "https://website-navy-alpha-71.vercel.app/fundamental-mark.png",
    description:
      "Fundamental.co helps doctor-led clinics turn visibility into trusted consultations through SEO, websites, performance marketing, and conversion systems.",
    email: "befundamentalworkspace@gmail.com",
    telephone: "+91-90828211893",
    founder: {
      "@type": "Person",
      name: "Vikas Pandey",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "SEO for doctors",
      "Website development for doctors",
      "Performance marketing for doctors",
      "Social media marketing for doctors",
      "Clinic marketing systems",
      "Pipeline optimization for clinics",
    ],
  }}

      />

      <main id="top" className="relative min-h-screen bg-black text-white">
        <BackgroundTexture />

        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <ProblemSection />

          <div id="pipeline" className="scroll-mt-24" />

          <PipelineSection />
          <ServicesSection />
          <BeforeAfterSection />
          <AuditCTASection />
          <FounderBeliefSection />
          <FinalCTASection />
          <Footer />
        </div>
      </main>
    </>
  );
}