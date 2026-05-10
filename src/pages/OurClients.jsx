import SEO from "../components/SEO.jsx";

export default function OurClients() {
  return (
    <>
      <SEO
        title="Our Clients | Clinics & Doctor-Led Businesses We Support"
        description="See the types of clinics, doctors, and healthcare businesses Fundamental.co helps with marketing and conversion systems."
        path="/our-clients"
         schema={{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Our Clients",
    url: "https://website-navy-alpha-71.vercel.app/our-clients",
    description:
      "Clinics, doctors, and healthcare businesses supported by Fundamental.co through marketing and conversion systems.",
    publisher: {
      "@type": "Organization",
      name: "Fundamental.co",
      url: "https://website-navy-alpha-71.vercel.app/",
    },
  }}
      />

      <section className="px-6 py-24 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
            Our Clients
          </p>

          <h1 className="mt-8 max-w-6xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl">
            We work with clinics that care about trust, perception, and patient quality.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
            This page will showcase client categories, selected work, clinic
            transformations, and proof assets.
          </p>
        </div>
      </section>
    </>
  );
}