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