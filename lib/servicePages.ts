import {
  BadgeCheck,
  ClipboardCheck,
  LayoutTemplate,
  LucideIcon,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Sparkles,
  Target
} from "lucide-react";

export type ServicePage = {
  slug: string;
  href: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  primaryOutcome: string;
  whoItsFor: string[];
  symptoms: string[];
  whatWeBuild: Array<{
    title: string;
    copy: string;
  }>;
  process: Array<{
    step: string;
    title: string;
    copy: string;
  }>;
  deliverables: string[];
  metrics: string[];
  related: string[];
  ctaHeading: string;
  ctaCopy: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "clinic-growth-system",
    href: "/clinic-growth-system",
    label: "Clinic Growth System",
    eyebrow: "Full patient acquisition system",
    title: "A clinic growth system for doctors who need more than scattered marketing activity.",
    description:
      "Fundamental.co connects positioning, ads, landing pages, follow-up, consultation support, and reporting into one trust-first patient acquisition system.",
    metaTitle: "Clinic Growth System | Trust-First Patient Acquisition",
    metaDescription:
      "Build a connected clinic growth system across positioning, ads, landing pages, follow-up, consultation support, and conversion reporting.",
    icon: Target,
    primaryOutcome:
      "A clearer patient journey from first attention to booked consultation, with every asset built around trust and serious enquiries.",
    whoItsFor: [
      "Doctor-led clinics that already have skill and reputation but inconsistent enquiry quality.",
      "Clinics spending on marketing without a connected conversion system.",
      "Premium clinics that do not want discount-led growth."
    ],
    symptoms: [
      "You have campaigns, content, and a website, but they do not feel connected.",
      "The clinic gets attention, but the team still has to rebuild trust on every call.",
      "Reporting shows activity, not the specific stage where growth is leaking."
    ],
    whatWeBuild: [
      {
        title: "Pipeline diagnosis",
        copy: "We map the clinic journey across attention, trust, enquiry, follow-up, consultation, and conversion."
      },
      {
        title: "Trust infrastructure",
        copy: "We create the proof, authority, education, and page sections patients need before they enquire."
      },
      {
        title: "Conversion assets",
        copy: "We build the landing pages, enquiry paths, follow-up scripts, and decision support that protect intent."
      }
    ],
    process: [
      {
        step: "01",
        title: "Diagnose the leaks",
        copy: "We review your current assets and identify where attention, trust, enquiry, or conversion is weakening."
      },
      {
        step: "02",
        title: "Build the missing system",
        copy: "We prioritize the assets that remove friction from the patient journey instead of adding random deliverables."
      },
      {
        step: "03",
        title: "Optimize by stage",
        copy: "We use pipeline reporting to improve the weakest stage before scaling more traffic."
      }
    ],
    deliverables: [
      "Pipeline audit and growth roadmap",
      "Positioning and message map",
      "Landing page and website trust sections",
      "Ads and content angle system",
      "Follow-up scripts and recovery flows",
      "Monthly pipeline optimization"
    ],
    metrics: [
      "Qualified enquiry volume",
      "Landing page conversion rate",
      "Response speed and follow-up completion",
      "Consultation booking rate",
      "Consultation-to-treatment movement"
    ],
    related: ["google-ads-for-clinics", "landing-page-design", "follow-up-automation"],
    ctaHeading: "Before you buy more marketing activity, find the pipeline leak.",
    ctaCopy:
      "Request a Pipeline Audit and we will review where your clinic is losing trust, enquiries, consultations, or revenue."
  },
  {
    slug: "aesthetic-clinic-marketing",
    href: "/aesthetic-clinic-marketing",
    label: "Aesthetic Clinic Marketing",
    eyebrow: "Premium aesthetic clinic growth",
    title: "Aesthetic clinic marketing that protects trust, price, and patient intent.",
    description:
      "Build demand for high-consideration aesthetic treatments without making your clinic look like a discount-led commodity.",
    metaTitle: "Aesthetic Clinic Marketing | Premium Patient Acquisition",
    metaDescription:
      "Trust-first marketing for aesthetic clinics, dermatology clinics, and premium treatment providers that need serious enquiries.",
    icon: Sparkles,
    primaryOutcome:
      "More qualified treatment enquiries from patients who understand the doctor, the procedure, the expected journey, and why your clinic is different.",
    whoItsFor: [
      "Aesthetic and dermatology clinics selling high-trust treatments.",
      "Clinics that need premium positioning, not cheap lead volume.",
      "Doctors who want education-led demand instead of aggressive sales messaging."
    ],
    symptoms: [
      "Patients ask for price before they understand treatment value.",
      "The clinic gets compared with lower-quality providers online.",
      "Instagram activity creates visibility but not enough serious consultations."
    ],
    whatWeBuild: [
      {
        title: "Treatment trust journeys",
        copy: "Pages and content that explain treatment fit, safety, expectations, proof, and next steps."
      },
      {
        title: "Premium offer clarity",
        copy: "Messaging that makes expertise visible without relying on discounts or exaggerated claims."
      },
      {
        title: "Consultation-focused campaigns",
        copy: "Ad and content systems built to move serious patients toward a qualified consultation."
      }
    ],
    process: [
      {
        step: "01",
        title: "Clarify the treatment promise",
        copy: "We separate premium positioning from generic beauty marketing and define the patient decision journey."
      },
      {
        step: "02",
        title: "Build trust before enquiry",
        copy: "We create proof, doctor authority, FAQs, treatment education, and conversion paths."
      },
      {
        step: "03",
        title: "Improve enquiry quality",
        copy: "We tune campaigns and follow-up around patient fit, readiness, and consultation intent."
      }
    ],
    deliverables: [
      "Aesthetic clinic positioning map",
      "Treatment page copy and structure",
      "Doctor authority sections",
      "Ad angles for premium treatments",
      "Consultation enquiry flow",
      "Follow-up message scripts"
    ],
    metrics: [
      "Qualified treatment enquiries",
      "Consultation booking rate",
      "Cost per qualified enquiry",
      "Lead-to-consultation movement",
      "Treatment-specific conversion signals"
    ],
    related: ["meta-ads-for-clinics", "landing-page-design", "follow-up-automation"],
    ctaHeading: "Premium aesthetic growth should not depend on discount pressure.",
    ctaCopy:
      "Request a Pipeline Audit and see where your aesthetic clinic journey can build more trust before enquiry."
  },
  {
    slug: "google-ads-for-clinics",
    href: "/google-ads-for-clinics",
    label: "Google Ads for Clinics",
    eyebrow: "High-intent search demand",
    title: "Google Ads for clinics that turn search intent into serious consultation enquiries.",
    description:
      "Capture patients already looking for treatment while sending them into landing pages and follow-up systems built to protect intent.",
    metaTitle: "Google Ads for Clinics | High-Intent Patient Enquiries",
    metaDescription:
      "Google Ads management for doctor-led clinics, connected to landing pages, trust assets, enquiry tracking, and follow-up systems.",
    icon: MousePointerClick,
    primaryOutcome:
      "A Google Ads system that does not stop at clicks, but connects search intent to trust, enquiry quality, and consultation bookings.",
    whoItsFor: [
      "Clinics with high-intent treatment searches in their local market.",
      "Teams that want fewer wasted clicks and clearer conversion tracking.",
      "Doctors who need ads connected to credible landing pages."
    ],
    symptoms: [
      "Search campaigns get clicks but the enquiry quality is uneven.",
      "Patients land on generic pages that do not answer their real concerns.",
      "Reports focus on CPC and leads without showing consultation movement."
    ],
    whatWeBuild: [
      {
        title: "Intent-led campaign structure",
        copy: "Campaigns grouped around treatment intent, location, patient urgency, and decision stage."
      },
      {
        title: "Clinic landing pages",
        copy: "Pages that make the doctor, proof, treatment fit, FAQs, and next step clear before enquiry."
      },
      {
        title: "Lead quality feedback loop",
        copy: "Tracking and reviews that connect campaign performance to actual consultation quality."
      }
    ],
    process: [
      {
        step: "01",
        title: "Map search intent",
        copy: "We identify the searches worth paying for and separate serious treatment intent from broad curiosity."
      },
      {
        step: "02",
        title: "Build conversion paths",
        copy: "We connect campaigns to pages and forms designed for confidence, not just form fills."
      },
      {
        step: "03",
        title: "Optimize by patient quality",
        copy: "We use enquiry and consultation feedback to improve keywords, copy, pages, and follow-up."
      }
    ],
    deliverables: [
      "Google Ads account structure",
      "Keyword and negative keyword plan",
      "Ad copy and extension strategy",
      "Treatment landing pages",
      "Conversion tracking plan",
      "Monthly campaign review"
    ],
    metrics: [
      "Cost per qualified enquiry",
      "Landing page conversion rate",
      "Search term quality",
      "Consultation booking rate",
      "Spend by treatment intent"
    ],
    related: ["landing-page-design", "follow-up-automation", "local-seo-for-clinics"],
    ctaHeading: "Clicks are expensive when the journey after the click is weak.",
    ctaCopy:
      "Request a Pipeline Audit and we will review whether your Google Ads journey is built for real consultation demand."
  },
  {
    slug: "meta-ads-for-clinics",
    href: "/meta-ads-for-clinics",
    label: "Meta Ads for Clinics",
    eyebrow: "Facebook and Instagram demand creation",
    title: "Meta Ads for clinics that create demand without cheapening the brand.",
    description:
      "Use Facebook and Instagram ads to educate, qualify, and move patients toward enquiry with stronger trust assets behind every campaign.",
    metaTitle: "Meta Ads for Clinics | Facebook and Instagram Clinic Marketing",
    metaDescription:
      "Meta Ads for clinics, built around education-led creative, treatment trust, landing pages, and follow-up systems.",
    icon: BadgeCheck,
    primaryOutcome:
      "Campaigns that introduce patients to the problem, the treatment, the doctor, and the next step before asking for commitment.",
    whoItsFor: [
      "Clinics that need demand creation, not only search capture.",
      "Aesthetic, dermatology, wellness, and treatment-led clinics.",
      "Doctors who want ads that feel credible instead of loud."
    ],
    symptoms: [
      "Ad creative gets attention but leads are low-intent.",
      "Campaigns rely on discounts because the value is not clearly explained.",
      "Instagram engagement is not translating into booked consultations."
    ],
    whatWeBuild: [
      {
        title: "Education-led creative",
        copy: "Angles that explain patient problems, treatment context, proof, expectations, and trust signals."
      },
      {
        title: "Offer and audience testing",
        copy: "Campaign tests organized around patient readiness, treatment fit, and message-market match."
      },
      {
        title: "Post-click trust flow",
        copy: "Landing pages, WhatsApp entry points, and follow-up messages that carry the ad promise forward."
      }
    ],
    process: [
      {
        step: "01",
        title: "Define the demand angle",
        copy: "We identify the patient problem and treatment context the market needs to understand first."
      },
      {
        step: "02",
        title: "Build creative and page pairs",
        copy: "We connect every strong ad angle to a page or enquiry path that can continue the argument."
      },
      {
        step: "03",
        title: "Scale what books consultations",
        copy: "We optimize around qualified enquiries and booked consultations, not surface engagement."
      }
    ],
    deliverables: [
      "Meta campaign structure",
      "Creative angle library",
      "Ad copy variations",
      "Short-form video briefs",
      "Landing page or WhatsApp flow",
      "Lead quality review"
    ],
    metrics: [
      "Cost per qualified enquiry",
      "Creative hook performance",
      "Landing page conversion rate",
      "Follow-up response rate",
      "Consultation booking movement"
    ],
    related: ["aesthetic-clinic-marketing", "landing-page-design", "follow-up-automation"],
    ctaHeading: "Meta Ads work better when the clinic can hold the attention they create.",
    ctaCopy:
      "Request a Pipeline Audit and see where your ad creative, landing pages, and follow-up system may be leaking intent."
  },
  {
    slug: "landing-page-design",
    href: "/landing-page-design",
    label: "Landing Page Design",
    eyebrow: "Clinic landing pages",
    title: "Landing page design for clinics where trust has to happen before the form fill.",
    description:
      "Build treatment and campaign landing pages that explain the doctor, treatment fit, proof, FAQs, and next step with clarity.",
    metaTitle: "Landing Page Design for Clinics | Treatment Pages That Convert",
    metaDescription:
      "Clinic landing page design and copy for treatment campaigns, Google Ads, Meta Ads, and consultation enquiry funnels.",
    icon: LayoutTemplate,
    primaryOutcome:
      "A page that makes the patient feel informed, reassured, and clear about what to do next.",
    whoItsFor: [
      "Clinics sending paid traffic to generic website pages.",
      "Doctors launching treatment-specific campaigns.",
      "Teams that need a clearer enquiry path for serious patients."
    ],
    symptoms: [
      "Visitors read the page but leave without enquiring.",
      "The page lists treatments but does not reduce patient risk.",
      "Forms and WhatsApp CTAs are present, but the reason to act is weak."
    ],
    whatWeBuild: [
      {
        title: "Conversion copy",
        copy: "Clear page messaging that explains the patient problem, treatment value, doctor credibility, and next step."
      },
      {
        title: "Trust sections",
        copy: "Proof, authority, FAQs, process explanations, and expectation-setting blocks."
      },
      {
        title: "CTA system",
        copy: "Action paths for patients at different readiness levels, from consultation requests to WhatsApp enquiries."
      }
    ],
    process: [
      {
        step: "01",
        title: "Map the decision",
        copy: "We define what a patient needs to believe before they are ready to enquire."
      },
      {
        step: "02",
        title: "Write and structure the page",
        copy: "We build the page argument from relevance to trust to next step."
      },
      {
        step: "03",
        title: "Improve after traffic",
        copy: "We use conversion and enquiry feedback to refine the page once real visitors interact with it."
      }
    ],
    deliverables: [
      "Landing page strategy",
      "Page wireframe",
      "Conversion copy",
      "Trust and proof sections",
      "CTA and form structure",
      "Analytics event recommendations"
    ],
    metrics: [
      "Landing page conversion rate",
      "CTA click rate",
      "Form completion rate",
      "WhatsApp enquiry starts",
      "Qualified enquiry rate"
    ],
    related: ["google-ads-for-clinics", "meta-ads-for-clinics", "follow-up-automation"],
    ctaHeading: "A clinic landing page should do more than collect leads.",
    ctaCopy:
      "Request a Pipeline Audit and we will review whether your pages are building enough trust before the enquiry."
  },
  {
    slug: "follow-up-automation",
    href: "/follow-up-automation",
    label: "Follow-up Automation",
    eyebrow: "Lead response and recovery",
    title: "Follow-up automation for clinics that cannot afford to let serious enquiries cool down.",
    description:
      "Create response scripts, recovery flows, lead tracking, and team follow-up standards that move enquiries toward consultation.",
    metaTitle: "Follow-up Automation for Clinics | Lead Response Systems",
    metaDescription:
      "Clinic follow-up automation, WhatsApp scripts, missed enquiry recovery, lead trackers, and consultation booking workflows.",
    icon: MessageCircle,
    primaryOutcome:
      "A faster, clearer, more consistent follow-up system that preserves patient intent after enquiry.",
    whoItsFor: [
      "Clinics getting leads but losing them before consultation.",
      "Teams relying on inconsistent WhatsApp replies.",
      "Doctors who want better booking movement from existing demand."
    ],
    symptoms: [
      "Leads arrive, but the team responds late or inconsistently.",
      "Patients ask questions and disappear before booking.",
      "No one can clearly see which enquiries were followed up properly."
    ],
    whatWeBuild: [
      {
        title: "Response scripts",
        copy: "WhatsApp and call scripts that acknowledge the patient, clarify intent, and guide them to the next step."
      },
      {
        title: "Recovery flows",
        copy: "Structured follow-up sequences for missed calls, cold leads, undecided patients, and no-shows."
      },
      {
        title: "Lead tracking",
        copy: "A practical tracker and operating rhythm so the team can see what happened to each enquiry."
      }
    ],
    process: [
      {
        step: "01",
        title: "Audit the current handoff",
        copy: "We review what happens from form fill or WhatsApp enquiry to consultation booking."
      },
      {
        step: "02",
        title: "Build the follow-up logic",
        copy: "We create scripts, statuses, timing rules, and recovery flows for common enquiry scenarios."
      },
      {
        step: "03",
        title: "Review booking movement",
        copy: "We improve the system based on response speed, patient replies, and booked consultations."
      }
    ],
    deliverables: [
      "WhatsApp reply scripts",
      "Missed enquiry recovery sequence",
      "Lead status tracker",
      "Follow-up timing rules",
      "Team SOP",
      "Monthly follow-up review"
    ],
    metrics: [
      "Response time",
      "Follow-up completion rate",
      "Lead-to-consultation booking rate",
      "Missed enquiry recovery",
      "No-show and drop-off patterns"
    ],
    related: ["clinic-growth-system", "landing-page-design", "google-ads-for-clinics"],
    ctaHeading: "A lead is not won when the form is submitted.",
    ctaCopy:
      "Request a Pipeline Audit and we will review where your follow-up process is losing warm patient intent."
  },
  {
    slug: "local-seo-for-clinics",
    href: "/local-seo-for-clinics",
    label: "Local SEO for Clinics",
    eyebrow: "Local search trust",
    title: "Local SEO for clinics that need to be found and trusted in the same journey.",
    description:
      "Improve how your clinic appears in local search with stronger service pages, Google Business Profile alignment, reviews, and trust signals.",
    metaTitle: "Local SEO for Clinics | Local Search and Patient Trust",
    metaDescription:
      "Local SEO for doctor-led clinics, including service page strategy, Google Business Profile alignment, reviews, and local trust assets.",
    icon: MapPin,
    primaryOutcome:
      "A stronger local search presence that helps patients understand why your clinic is relevant before they contact you.",
    whoItsFor: [
      "Clinics competing in local treatment searches.",
      "Doctors who need stronger visibility for specific services and locations.",
      "Clinics with local reputation but weak search structure."
    ],
    symptoms: [
      "The clinic appears online, but important treatments have no dedicated pages.",
      "Google Business Profile and website messaging feel disconnected.",
      "Patients find you, then compare you with clinics that explain themselves better."
    ],
    whatWeBuild: [
      {
        title: "Local service structure",
        copy: "Treatment and service pages mapped to the searches patients actually use."
      },
      {
        title: "Trust-aligned SEO content",
        copy: "Content that answers local patient concerns while supporting search visibility."
      },
      {
        title: "Review and profile alignment",
        copy: "Google Business Profile, reviews, location cues, and website proof working together."
      }
    ],
    process: [
      {
        step: "01",
        title: "Map local demand",
        copy: "We identify the treatments, locations, and patient questions that deserve dedicated visibility."
      },
      {
        step: "02",
        title: "Build search-ready trust pages",
        copy: "We structure content so it can rank while still helping patients choose confidently."
      },
      {
        step: "03",
        title: "Connect profile and website",
        copy: "We align local listings, website pages, CTAs, reviews, and enquiry paths."
      }
    ],
    deliverables: [
      "Local SEO opportunity map",
      "Service page structure",
      "On-page SEO recommendations",
      "Google Business Profile alignment",
      "Review signal recommendations",
      "Local conversion path review"
    ],
    metrics: [
      "Local search visibility",
      "Treatment page traffic",
      "Google Business Profile actions",
      "Organic qualified enquiries",
      "Local consultation booking signals"
    ],
    related: ["landing-page-design", "clinic-growth-system", "google-ads-for-clinics"],
    ctaHeading: "Being found is only useful when the clinic also feels credible.",
    ctaCopy:
      "Request a Pipeline Audit and we will review how your local search journey turns visibility into trust and enquiries."
  }
];

export const servicePageBySlug = Object.fromEntries(
  servicePages.map((page) => [page.slug, page])
) as Record<string, ServicePage>;

export const servicePageSummaries = servicePages.map(({ href, label, metaDescription }) => ({
  href,
  label,
  description: metaDescription
}));
