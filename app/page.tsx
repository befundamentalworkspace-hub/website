import { AssetMapSection } from "@/components/sections/AssetMapSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneyBreaksSection } from "@/components/sections/JourneyBreaksSection";
import { PipelineSection } from "@/components/sections/PipelineSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ResultsPreview } from "@/components/sections/ResultsPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <JourneyBreaksSection />
      <PipelineSection />
      <AssetMapSection />
      <BeforeAfterSection />
      <ServicesPreview />
      <ResultsPreview />
      <CTASection
        heading="Before you spend more on marketing, find what is leaking."
        copy="Request a Pipeline Audit and we will review where your clinic is losing trust, enquiries, consultations, and revenue."
      />
      <div className="fixed inset-x-4 bottom-4 z-40 sm:hidden">
        <a
          href="/request-audit"
          className="flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lift"
        >
          Request Pipeline Audit
        </a>
      </div>
    </>
  );
}
