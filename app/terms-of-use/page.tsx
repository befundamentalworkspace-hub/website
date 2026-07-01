import { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteData";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Use | Fundamental.co",
  description:
    "Terms of Use for Fundamental.co, including website use, audit requests, service discussions, content ownership, and limitations.",
  path: "/terms-of-use"
});

export default function TermsOfUsePage() {
  return (
    <PolicyPage
      eyebrow="Terms"
      title="Terms of Use"
      intro="These terms explain how visitors may use the Fundamental.co website and what to expect when requesting an audit or discussing services."
      updated="1 July 2026"
      sections={[
        {
          title: "Use of the website",
          body: [
            "You may use this website to learn about Fundamental.co, read content, and request a pipeline audit. You agree not to misuse the site, interfere with its operation, attempt unauthorized access, or submit false, harmful, or unlawful information.",
            "The website may change at any time, including page content, forms, offers, policies, and service descriptions."
          ]
        },
        {
          title: "Audit requests and service discussions",
          body: [
            "Submitting an audit request does not guarantee acceptance, availability, results, or a commercial relationship. Fundamental.co may choose whether to respond, qualify, or decline a request.",
            "Any paid service, consultation, or implementation engagement should be governed by a separate written proposal, invoice, agreement, or scope of work."
          ]
        },
        {
          title: "No professional medical or legal advice",
          body: [
            "Website content is provided for general marketing and business information. It is not medical, legal, tax, accounting, or regulatory advice.",
            "Clinics and healthcare businesses remain responsible for ensuring that their marketing, claims, patient communications, and advertising comply with applicable laws, platform rules, and professional standards."
          ]
        },
        {
          title: "Content ownership",
          body: [
            "Unless otherwise stated, website copy, structure, visuals, design, articles, and other materials are owned by or licensed to Fundamental.co.",
            "You may not copy, resell, redistribute, or create derivative commercial materials from the website without permission."
          ]
        },
        {
          title: "Limitation of liability",
          body: [
            "The website is provided on an as-is basis. We aim to keep information accurate and useful, but we do not promise that the website will always be error-free, uninterrupted, or complete.",
            "To the maximum extent permitted by applicable law, Fundamental.co is not responsible for indirect, incidental, or consequential losses from use of the website."
          ]
        },
        {
          title: "Contact",
          body: [`For questions about these terms, contact ${siteConfig.contact.email}.`]
        }
      ]}
    />
  );
}
