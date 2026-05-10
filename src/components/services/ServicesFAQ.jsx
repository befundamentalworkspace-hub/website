import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Do you offer individual services or only the full system?",
    answer:
      "We offer individual services, but we do not treat them as isolated tasks. Social media, SEO, website development, performance marketing, video editing, and pipeline optimization are all built around one goal: improving the patient journey from attention to booked consultation.",
  },
  {
    question: "Can we work with you only for website, SEO, or video editing?",
    answer:
      "Yes. But before recommending one service, we first understand where that service fits in your clinic’s pipeline. A website should increase trust and enquiries. SEO should capture high-intent search demand. Video editing should build authority and decision confidence.",
  },
  {
    question: "What is the Clinic Revenue Multiplier Plan?",
    answer:
      "It is a diagnosis of your clinic’s current attention-to-consultation journey. We identify where your clinic may be leaking revenue through weak trust, poor enquiry flow, slow follow-up, unclear consultation framing, or disconnected marketing execution.",
  },
  {
    question: "Is this just a sales call?",
    answer:
      "No. The purpose is not to pitch a random service. The purpose is to identify the highest-leverage leak in your current patient journey. If we cannot clearly show where the pipeline is leaking, we will not recommend our services.",
  },
  {
    question: "How is this different from a normal marketing agency?",
    answer:
      "A normal agency usually sells tasks: posts, ads, websites, or SEO. Fundamental.co builds the system those tasks belong to. The focus is not more activity. The focus is better patient quality, stronger trust, better enquiries, structured follow-up, and consultation conversion.",
  },
  {
    question: "Do you only work with doctors and clinics?",
    answer:
      "Our primary focus is doctor-led clinics, especially aesthetic clinics and other high-trust healthcare businesses where patients need confidence before they enquire, book, or decide.",
  },
  {
    question: "What happens after I request the plan?",
    answer:
      "We review your submitted details, study your visible patient journey, identify likely leakage points, and then share the next step. If there is a clear fit, we discuss what should be fixed first.",
  },
  {
    question: "How soon can we expect results?",
    answer:
      "That depends on the stage that is leaking. Some fixes, such as enquiry flow, follow-up, WhatsApp scripting, and CTA clarity, can improve quickly. Trust-building, SEO, authority content, and premium positioning compound over time.",
  },
];

export default function ServicesFAQ() {
  return (
    <section
      id="services-faq"
      className="relative px-6 py-28 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left copy */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-white/40">
              FAQ
            </p>

            <h2 className="text-4xl font-semibold uppercase tracking-[-0.055em] text-white md:text-6xl">
              Questions clinics ask before working with us.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/55">
              The goal is to make the next step clear. You should know what we
              do, how we think, and why we diagnose the pipeline before
              recommending a service.
            </p>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.025] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                Still unsure?
              </p>

              <p className="mt-4 text-base leading-7 text-white/58">
                Request the plan first. We will look for the highest-leverage
                leak before recommending execution.
              </p>

              <Link
                to="/request-audit"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/85"
              >
                Find My Revenue Leaks
              </Link>
            </div>
          </div>

          {/* FAQ list */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.question} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] transition hover:border-white/20 hover:bg-white/[0.04]">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-start justify-between gap-6 p-6 text-left"
      >
        <div className="flex gap-5">
          <span className="mt-0.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/30">
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3 className="text-base font-semibold tracking-[-0.025em] text-white md:text-lg">
            {faq.question}
          </h3>
        </div>

        <span className="shrink-0 text-2xl leading-none text-white/35">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 pl-[4.6rem]">
          <p className="max-w-3xl text-sm leading-7 text-white/55">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}