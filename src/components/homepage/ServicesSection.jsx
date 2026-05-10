const pipelineAssets = [
  {
    stage: "Attention",
    purpose: "Get the right people to notice the clinic for the right reason.",
    assets: ["Social media content", "Ad creatives", "Hook bank"],
  },
  {
    stage: "Trust",
    purpose: "Make the clinic credible before the patient enquires.",
    assets: ["Website sections", "Doctor authority", "Proof assets"],
  },
  {
    stage: "Enquiry",
    purpose: "Turn trust into a clear, low-friction next step.",
    assets: ["Landing pages", "CTA system", "WhatsApp flow"],
  },
  {
    stage: "Follow-up",
    purpose: "Stop serious leads from going cold after first contact.",
    assets: ["Scripts", "Enquiry tracker", "Follow-up SOP"],
  },
  {
    stage: "Conversion",
    purpose: "Help the clinic turn serious enquiries into revenue.",
    assets: ["Consultation framing", "Offer clarity", "Reporting"],
  },
];

const serviceList = [
  "Social Media Marketing",
  "SEO",
  "Website Development",
  "Performance Marketing",
  "Pipeline Optimization",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-b border-white/10 relative bg-transparent px-6 py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.45em] text-white/35">
              What we build
            </p>

            <h2 className="mt-6 max-w-5xl text-5xl font-semibold uppercase leading-[1.02] tracking-[-0.05em] text-white md:text-7xl">
              Services are not the product.
              <br />
              The pipeline is.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-xl text-lg leading-8 text-white/60">
              Social media, SEO, websites, ads, and follow-up systems only
              matter when they move the patient journey forward.
            </p>
          </div>
        </div>

        {/* Services as raw materials */}
        <div className="mt-16 flex flex-wrap gap-3 border-y border-white/10 py-6">
          {serviceList.map((service) => (
            <div
              key={service}
              className="rounded-full border border-white/15 bg-white/[0.025] px-5 py-3 text-xs uppercase tracking-[0.22em] text-white/55"
            >
              {service}
            </div>
          ))}
        </div>

        {/* Pipeline asset map */}
        <div className="mt-20">
          <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                Asset map
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="max-w-3xl text-2xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Every stage needs assets.
                <br />
                Every asset exists to reduce leakage.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {pipelineAssets.map((item, index) => (
              <article
                key={item.stage}
                className="group relative grid grid-cols-1 gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-white/25 hover:bg-white/[0.045] lg:grid-cols-12 lg:items-center"
              >
                {/* Number */}
                <div className="lg:col-span-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>

                {/* Stage */}
                <div className="lg:col-span-3">
                  <h3 className="text-3xl font-semibold uppercase leading-none tracking-[-0.04em] text-white md:text-4xl">
                    {item.stage}
                  </h3>
                </div>

                {/* Purpose */}
                <div className="lg:col-span-4">
                  <p className="max-w-md text-sm leading-7 text-white/60">
                    {item.purpose}
                  </p>
                </div>

                {/* Assets */}
                <div className="lg:col-span-4">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    {item.assets.map((asset) => (
                      <div
                        key={asset}
                        className="flex min-h-[88px] items-center justify-center rounded-full border border-white/10 bg-black/40 px-5 py-4 text-center text-xs uppercase leading-[1.4] tracking-[0.18em] text-white/55 transition group-hover:border-white/20 group-hover:text-white/75"
                      >
                        <span className="block max-w-[120px]">
                          {asset}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* subtle connector */}
                {index !== pipelineAssets.length - 1 && (
                  <div className="absolute -bottom-[18px] left-1/2 hidden h-8 w-px bg-white/10 lg:block" />
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="premium-card mt-24 rounded-[2rem] border border-white/15 bg-white/[0.035] p-8 md:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/35">
                The difference
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="text-3xl font-semibold uppercase leading-tight tracking-[-0.04em] text-white md:text-5xl">
                A normal agency delivers tasks.
                <br />
                Fundamental.co builds the system those tasks belong to.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
                We do not ask what should be posted next. We ask which stage is
                leaking, what asset is missing, who owns it, and what metric
                proves it is fixed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}