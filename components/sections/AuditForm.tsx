"use client";

import { useEffect, useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { getAttributionPayload, persistAttributionFromLocation, trackLead } from "@/lib/analytics";

const mainProblems = [
  "We get views but not serious enquiries",
  "We get enquiries but poor-quality leads",
  "We get leads but few consultations",
  "Our website does not create trust",
  "Our ads are not converting",
  "Our follow-up is weak",
  "We are not sure where the leakage is"
];

const budgetRanges = [
  "Below Rs.25,000/month",
  "Rs.25,000-Rs.50,000/month",
  "Rs.50,000-Rs.1,00,000/month",
  "Rs.1,00,000+/month",
  "Not sure yet"
];

const contactMethods = ["WhatsApp", "Phone", "Email"];
const requiredFields = ["fullName", "clinicName", "city", "specialty", "contactDetail", "mainProblem", "preferredContact"] as const;

type FormState = {
  fullName: string;
  clinicName: string;
  city: string;
  specialty: string;
  contactDetail: string;
  website: string;
  instagram: string;
  monthlyEnquiries: string;
  mainProblem: string;
  budgetRange: string;
  preferredContact: string;
  notes: string;
};

type TrackingState = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  gclid: string;
  fbclid: string;
  referrer: string;
  landingPage: string;
  firstLandingPage: string;
  timestamp: string;
};

const initialForm: FormState = {
  fullName: "",
  clinicName: "",
  city: "",
  specialty: "",
  contactDetail: "",
  website: "",
  instagram: "",
  monthlyEnquiries: "",
  mainProblem: "",
  budgetRange: "",
  preferredContact: "",
  notes: ""
};

export function AuditForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [tracking, setTracking] = useState<TrackingState>({
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmTerm: "",
    utmContent: "",
    gclid: "",
    fbclid: "",
    referrer: "",
    landingPage: "",
    firstLandingPage: "",
    timestamp: ""
  });

  useEffect(() => {
    persistAttributionFromLocation();
    setTracking(getAttributionPayload());
  }, []);

  const hiddenPayload = useMemo(() => JSON.stringify({ ...form, ...tracking }, null, 2), [form, tracking]);

  function update(name: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    requiredFields.forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = "This field is required.";
      }
    });

    if (form.website && !/^https?:\/\/.+\..+/i.test(form.website)) {
      nextErrors.website = "Add a full URL, including https://";
    }

    if (form.instagram && !/^https?:\/\/.+/i.test(form.instagram)) {
      nextErrors.instagram = "Add a full URL, including https://";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);

    try {
      const response = await fetch("/api/audit-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, ...tracking })
      });

      if (!response.ok) {
        throw new Error("The audit request could not be saved.");
      }

      trackLead({
        specialty: form.specialty,
        main_problem: form.mainProblem,
        budget_range: form.budgetRange,
        preferred_contact: form.preferredContact,
        has_website: Boolean(form.website),
        has_instagram: Boolean(form.instagram)
      });

      setSubmitted(true);
      setForm(initialForm);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-panel border border-hairline bg-card p-8 shadow-soft" role="status" aria-live="polite">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
          <CheckCircle2 size={22} aria-hidden="true" />
        </div>
        <h2 className="display-text mt-5 text-4xl text-ink">Audit request received.</h2>
        <p className="mt-4 text-body">
          Thank you. Your audit request has been saved, and the team can now
          review it from the lead database.
        </p>
        <Button className="mt-6" variant="secondary" onClick={() => setSubmitted(false)}>
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form className="rounded-panel border border-hairline bg-card p-5 shadow-soft sm:p-8" onSubmit={submit} noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Input label="Full name" name="fullName" required value={form.fullName} error={errors.fullName} onChange={(event) => update("fullName", event.target.value)} />
        <Input label="Clinic name" name="clinicName" required value={form.clinicName} error={errors.clinicName} onChange={(event) => update("clinicName", event.target.value)} />
        <Input label="City" name="city" required value={form.city} error={errors.city} onChange={(event) => update("city", event.target.value)} />
        <Input label="Specialty" name="specialty" required value={form.specialty} error={errors.specialty} onChange={(event) => update("specialty", event.target.value)} />
        <Input label="Email or WhatsApp number" name="contactDetail" required value={form.contactDetail} error={errors.contactDetail} onChange={(event) => update("contactDetail", event.target.value)} />
        <Select label="Preferred contact method" name="preferredContact" required options={contactMethods} value={form.preferredContact} error={errors.preferredContact} onChange={(event) => update("preferredContact", event.target.value)} />
        <Input label="Website link" name="website" type="url" placeholder="https://example.com" value={form.website} error={errors.website} onChange={(event) => update("website", event.target.value)} />
        <Input label="Instagram link" name="instagram" type="url" placeholder="https://instagram.com/clinic" value={form.instagram} error={errors.instagram} onChange={(event) => update("instagram", event.target.value)} />
        <Input label="Monthly enquiry volume" name="monthlyEnquiries" placeholder="Example: 50-100 enquiries" value={form.monthlyEnquiries} error={errors.monthlyEnquiries} onChange={(event) => update("monthlyEnquiries", event.target.value)} />
        <Select label="Budget range" name="budgetRange" options={budgetRanges} value={form.budgetRange} error={errors.budgetRange} onChange={(event) => update("budgetRange", event.target.value)} />
        <Select className="md:col-span-2" label="Main problem" name="mainProblem" required options={mainProblems} value={form.mainProblem} error={errors.mainProblem} onChange={(event) => update("mainProblem", event.target.value)} />
        <Textarea className="md:col-span-2" label="Notes" name="notes" placeholder="Share any context about your current marketing, website, ads, or follow-up process." value={form.notes} error={errors.notes} onChange={(event) => update("notes", event.target.value)} />
      </div>
      <input type="hidden" name="trackingPayload" value={hiddenPayload} readOnly />
      <p className="mt-5 text-sm leading-6 text-muted">
        Your submission includes UTM parameters, referrer, landing page URL,
        and timestamp so the team can understand where qualified demand came
        from.
      </p>
      {submitError ? (
        <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {submitError}
        </p>
      ) : null}
      <div className="mt-6">
        <Button type="submit" disabled={submitting}>
          {submitting ? "Saving request..." : "Request Pipeline Audit"}
        </Button>
      </div>
    </form>
  );
}
