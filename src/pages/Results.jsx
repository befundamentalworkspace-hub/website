import SEO from "../components/SEO.jsx";

export default function Results() {
  return (
    <>
      <SEO
        title="Results | Clinic Marketing Case Studies & Growth Systems"
        description="Explore how Fundamental.co diagnoses clinic marketing leaks and builds systems that improve trust, enquiries, consultations, and conversion."
        path="/results"
        schema={{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Clinic Marketing Results",
    url: "https://justfundamental.com/results",
    description:
      "Clinic marketing audits, case studies, and growth system examples from Fundamental.co.",
    publisher: {
      "@type": "Organization",
      name: "Fundamental.co",
      url: "https://justfundamental.com/",
    },
  }}
      />
    <section className="px-6 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
          Results
        </p>

        <h1 className="mt-8 max-w-6xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
          The result is not more noise. It is better patient decision quality.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
          This page will hold audits, before-after transformations, campaign
          breakdowns, and clinic pipeline improvements.
        </p>
      </div>
    </section>
  </>
  );
}
