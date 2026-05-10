const faqs = [
  {
    question: "What exactly is a Pipeline Audit?",
    answer:
      "A Pipeline Audit reviews how your clinic currently turns attention into enquiries, follow-up, consultations, and revenue. We look for the stage where serious patients are dropping off.",
  },
  {
    question: "Is this just a marketing audit?",
    answer:
      "No. A normal marketing audit usually looks at ads, content, or website design in isolation. This audit looks at the full patient journey: visibility, trust, enquiry quality, WhatsApp handling, follow-up, and consultation readiness.",
  },
  {
    question: "Who is this audit for?",
    answer:
      "It is for doctor-led clinics, aesthetic clinics, dermatology clinics, dental clinics, and specialist clinics that are visible online but still struggle with patient quality, low consultation bookings, weak follow-up, or price shoppers.",
  },
  {
    question: "What do you review?",
    answer:
      "We review your website, Instagram presence, positioning, trust signals, enquiry flow, WhatsApp or call handling, current marketing channels, and the quality of patients your clinic is attracting.",
  },
  {
    question: "Do I need to already be running ads?",
    answer:
      "No. The audit works whether you are running ads or not. If you are not running ads, we check whether your organic presence, website, and enquiry path are strong enough. If you are running ads, we also check where paid traffic is leaking.",
  },
  {
    question: "Will you tell me what is wrong with my clinic marketing?",
    answer:
      "Yes, but not as a random list of opinions. The goal is to identify the main bottleneck first: attention, trust, enquiry, follow-up, consultation, or conversion.",
  },
  {
    question: "Is this free?",
    answer:
      "The request is free. We review your submitted details first. If your clinic looks like a fit, we may schedule a short call to understand the situation better and explain the next step.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Your request is reviewed internally. If there is a clear fit, we contact you through your preferred contact method and discuss where your clinic’s patient journey may be leaking.",
  },
  {
    question: "Will you directly pitch services after the audit?",
    answer:
      "Only if there is a clear fit. The first job is diagnosis. If the issue is something we can help fix, we will explain what needs to change and what working together could look like.",
  },
  {
    question: "What makes Fundamental.co different from a normal agency?",
    answer:
      "We do not treat content, ads, websites, and follow-up as separate tasks. We build them as parts of one connected attention-to-conversion pipeline.",
  },
];

export default function RequestAuditFAQ() {
  return (
    <section className="border-b border-white/10 bg-black px-6 py-24 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/40">
            FAQ
          </p>

          <h2 className="mt-6 max-w-3xl text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.05em] md:text-6xl">
            Before you request the audit.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/55">
            The audit is designed to find the weak stage in your clinic journey,
            not to push more random marketing activity.
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
              Core idea
            </p>

            <p className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em]">
              More visibility does not fix a leaking patient journey.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              number={String(index + 1).padStart(2, "0")}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ number, question, answer }) {
  return (
    <details className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.05]">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
        <div className="flex gap-5">
          <span className="mt-1 text-xs font-semibold text-white/35">
            {number}
          </span>

          <h3 className="text-lg font-semibold leading-6 tracking-[-0.03em] text-white md:text-xl">
            {question}
          </h3>
        </div>

        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-sm text-white/60 transition group-open:rotate-45 group-open:border-white/35 group-open:text-white">
          +
        </span>
      </summary>

      <div className="ml-11 mt-5 max-w-3xl border-t border-white/10 pt-5">
        <p className="text-sm leading-7 text-white/55 md:text-base">
          {answer}
        </p>
      </div>
    </details>
  );
}