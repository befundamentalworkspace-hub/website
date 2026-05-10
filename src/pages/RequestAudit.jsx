import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import RequestAuditFAQ from "../components/RequestAuditFAQ.jsx";

const auditFocusOptions = [
  "Low-quality enquiries",
  "Website not converting",
  "Instagram reach but no bookings",
  "Weak follow-up system",
  "Too many price shoppers",
  "No clear clinic positioning",
  "Not sure where the funnel is leaking",
];

const budgetOptions = [
  "Below ₹25,000 / month",
  "₹25,000 – ₹50,000 / month",
  "₹50,000 – ₹1,00,000 / month",
  "₹1,00,000+ / month",
  "Not sure yet",
];

const contactOptions = ["WhatsApp", "Phone call", "Email", "Google Meet"];

export default function RequestAudit() {
  const [formData, setFormData] = useState({
    name: "",
    clinicName: "",
    city: "",
    specialty: "",
    website: "",
    instagram: "",
    monthlyEnquiries: "",
    mainProblem: "",
    budgetRange: "",
    preferredContact: "WhatsApp",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    const payload = {
      name: formData.name,
      clinic_name: formData.clinicName,
      city: formData.city,
      specialty: formData.specialty,
      website: formData.website,
      instagram: formData.instagram,
      monthly_enquiries: formData.monthlyEnquiries,
      main_problem: formData.mainProblem,
      budget_range: formData.budgetRange,
      preferred_contact: formData.preferredContact,
      notes: formData.notes,
      status: "new",
      source: "website",
    };

    console.log("Sending audit request:", payload);

    const { error } = await supabase.from("request_audits").insert([payload]);

    if (error) {
      console.error("Supabase insert error:", error);
      setSubmitError(error.message || "Something went wrong.");
      setIsSubmitting(false);
      return;
    }

    console.log("Supabase insert success");

    setSubmitted(true);
    setIsSubmitting(false);
  }

  function resetForm() {
    setSubmitted(false);
    setSubmitError("");

    setFormData({
      name: "",
      clinicName: "",
      city: "",
      specialty: "",
      website: "",
      instagram: "",
      monthlyEnquiries: "",
      mainProblem: "",
      budgetRange: "",
      preferredContact: "WhatsApp",
      notes: "",
    });
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          {/* Left Side */}
          <div className="flex h-full flex-col">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
              Request Audit
            </p>

            <h1 className="max-w-3xl text-5xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl">
              Find where your clinic funnel is leaking.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/60 md:text-lg">
              Most clinics do not need more random marketing. They need to know
              which part of the patient journey is failing: attention, trust,
              enquiry, follow-up, consultation, or conversion.
            </p>

            <div className="mt-10 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="premium-card flex min-h-[140px] flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    Audit checks
                  </p>

                  <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                    Pipeline leakage
                  </p>
                </div>

                <div className="premium-card flex min-h-[140px] flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                    Output
                  </p>

                  <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">
                    Clear next fixes
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm leading-7 text-white/55">
                  This page is designed to convert qualified clinic owners and
                  doctors into Pipeline Audit requests, instead of using a
                  generic contact form.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
                  What we look for
                </p>

                <div className="mt-5 space-y-4">
                  <AuditPoint
                    number="01"
                    title="Attention"
                    text="Are the right people noticing the clinic for the right reason?"
                  />

                  <AuditPoint
                    number="02"
                    title="Trust"
                    text="Does the clinic look credible before the patient enquires?"
                  />

                  <AuditPoint
                    number="03"
                    title="Enquiry"
                    text="Is the next step clear, specific, and low-friction?"
                  />

                  <AuditPoint
                    number="04"
                    title="Follow-up"
                    text="Are serious leads being guided before they go cold?"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex h-full flex-col">
                <div className="space-y-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                      Clinic Details
                    </p>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <Field
                        label="Your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />

                      <Field
                        label="Clinic name"
                        name="clinicName"
                        value={formData.clinicName}
                        onChange={handleChange}
                        required
                      />

                      <Field
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />

                      <Field
                        label="Specialty"
                        name="specialty"
                        value={formData.specialty}
                        onChange={handleChange}
                        placeholder="Aesthetic, dental, dermatology, ortho..."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                      Online Presence
                    </p>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <Field
                        label="Website link"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://..."
                      />

                      <Field
                        label="Instagram link"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="https://instagram.com/..."
                      />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                      Funnel Problem
                    </p>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      <Field
                        label="Monthly enquiry volume"
                        name="monthlyEnquiries"
                        value={formData.monthlyEnquiries}
                        onChange={handleChange}
                        placeholder="Example: 50–100 enquiries"
                      />

                      <SelectField
                        label="Main problem"
                        name="mainProblem"
                        value={formData.mainProblem}
                        onChange={handleChange}
                        options={auditFocusOptions}
                        required
                      />

                      <SelectField
                        label="Budget range"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        options={budgetOptions}
                      />

                      <SelectField
                        label="Preferred contact method"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        options={contactOptions}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/70">
                      Anything specific we should look at?
                    </label>

                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us what is currently not working..."
                      className="mt-3 w-full resize-none rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
                    />
                  </div>
                </div>

                {submitError && (
                  <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
                    <p className="text-sm text-red-200">{submitError}</p>
                  </div>
                )}

                <div className="mt-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-white/85 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Submitting..." : "Request My Audit"}
                  </button>

                  <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-5 text-white/35">
                    Fundamental.co reviews the submitted details to understand
                    where your attention-to-conversion journey may be leaking.
                  </p>
                </div>
              </form>
            ) : (
              <div className="flex min-h-[560px] flex-col items-center justify-center text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
                  Request Received
                </p>

                <h2 className="mt-6 max-w-xl text-4xl font-semibold uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl">
                  We will review your clinic pipeline.
                </h2>

                <p className="mt-6 max-w-lg text-base leading-7 text-white/55">
                  Your audit request has been saved. Check the Supabase
                  request_audits table to confirm the new row.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-10 rounded-full border border-white/15 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/35 hover:bg-white/10"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <RequestAuditFAQ />
    </main>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-white/70">{label}</span>

      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-white/70">{label}</span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition focus:border-white/35"
      >
        <option value="" className="bg-black text-white">
          Select one
        </option>

        {options.map((option) => (
          <option key={option} value={option} className="bg-black text-white">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function AuditPoint({ number, title, text }) {
  return (
    <div className="border-t border-white/10 pt-4">
      <div className="flex items-start gap-4">
        <span className="min-w-6 text-xs font-semibold text-white/35">
          {number}
        </span>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
            {title}
          </p>

          <p className="mt-2 text-sm leading-6 text-white/45">{text}</p>
        </div>
      </div>
    </div>
  );
}