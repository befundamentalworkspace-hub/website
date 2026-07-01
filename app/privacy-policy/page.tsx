import { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteData";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy | Fundamental.co",
  description:
    "Privacy Policy for Fundamental.co, including lead forms, analytics, advertising pixels, cookies, and contact information.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This policy explains what information Fundamental.co collects, why it is collected, and how it is used to operate the website, respond to audit requests, and measure marketing performance."
      updated="1 July 2026"
      sections={[
        {
          title: "Information we collect",
          body: [
            "When you submit an audit request, we collect the information you provide, such as your name, clinic name, city, specialty, contact detail, preferred contact method, website, Instagram profile, enquiry volume, budget range, main problem, and any notes you choose to share.",
            "We also collect technical and attribution information such as page URL, first landing page, referrer, UTM parameters, Google click ID, Meta click ID, timestamp, device/browser signals, and analytics events."
          ]
        },
        {
          title: "How we use information",
          body: [
            "We use submitted information to review audit requests, respond to enquiries, assess whether there is a fit, improve the website, diagnose lead sources, and understand which marketing campaigns produce qualified demand.",
            "We do not sell personal information. We may use aggregated or non-identifying information to improve our content, services, reporting, and campaign performance."
          ]
        },
        {
          title: "Analytics and advertising pixels",
          body: [
            "The website can use Google Analytics 4, Meta Pixel, and Google Ads conversion tracking to measure page views, button clicks, scroll depth, audit form submissions, and advertising conversions.",
            "Where the cookie notice is shown, non-essential analytics and advertising pixels load only after the visitor accepts analytics tracking. If declined, the website will not intentionally load those tracking scripts for that browser session."
          ]
        },
        {
          title: "Cookies and local storage",
          body: [
            "The site uses local storage to remember cookie consent and to preserve campaign attribution, such as UTM parameters, so that a visitor who lands on one page and later submits the audit form can still be attributed correctly.",
            "You can block or delete cookies and local storage through your browser settings. Doing so may affect attribution, analytics, and some website preferences."
          ]
        },
        {
          title: "Where data is stored",
          body: [
            "Audit request data is stored in Supabase, which powers the website lead database and admin panel. Analytics and advertising data may be processed by Google and Meta if analytics tracking is accepted.",
            "Access to admin lead data is intended to be restricted to authorized team members."
          ]
        },
        {
          title: "Your choices",
          body: [
            "You may contact us to request access, correction, or deletion of information you submitted through the website, subject to reasonable identity verification and business/legal retention needs.",
            `For privacy requests, contact ${siteConfig.contact.email}.`
          ]
        }
      ]}
    />
  );
}
