import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  FileText,
  Handshake,
  HeartPulse,
  MessageCircle,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp
} from "lucide-react";

export const siteConfig = {
  name: "Fundamental.co",
  url: "https://www.justfundamental.com",
  description:
    "Trust-first patient acquisition systems for doctor-led clinics and high-trust healthcare businesses.",
  contact: {
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "hello@justfundamental.com",
    phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "+91 9082811893",
    whatsapp: process.env.NEXT_PUBLIC_BUSINESS_WHATSAPP || "https://wa.me/919082811893",
    location: process.env.NEXT_PUBLIC_BUSINESS_LOCATION || "Lucknow, India. Serving clients across India.",
    serviceArea:
      process.env.NEXT_PUBLIC_SERVICE_AREA ||
      "Doctor-led clinics, aesthetic clinics, healthcare businesses, and high-trust local businesses across India."
  }
};

export const navItems = [
  { label: "Pipeline", href: "/#pipeline" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "Blog", href: "/blog" },
  { label: "Our Clients", href: "/clients" },
  { label: "Contact", href: "/contact" }
];

export const pipelineStages = [
  {
    name: "Attention",
    idea: "Attention is not reach. It is relevance.",
    leak: "The clinic is visible, but not understood.",
    assets: "Authority-led content, hooks, ad angles, short-form video assets.",
    metric: "Qualified attention and high-intent visits."
  },
  {
    name: "Trust",
    idea: "Patients choose the clinic they understand and trust.",
    leak: "The clinic looks active, but not credible enough.",
    assets: "Doctor authority sections, website trust blocks, proof assets, treatment education.",
    metric: "Trust before enquiry."
  },
  {
    name: "Enquiry",
    idea: "Interest must be converted into a clear next step.",
    leak: "Patients are curious but unsure what to do next.",
    assets: "Landing pages, CTA system, request forms, WhatsApp enquiry flow.",
    metric: "Serious enquiries."
  },
  {
    name: "Follow-up",
    idea: "Speed and structure protect demand.",
    leak: "Leads come in, but response is delayed or inconsistent.",
    assets: "WhatsApp scripts, missed enquiry recovery, lead tracker, follow-up SOP.",
    metric: "Enquiry-to-consultation movement."
  },
  {
    name: "Consultation",
    idea: "The consultation should start with trust already built.",
    leak: "The doctor has to rebuild credibility from zero.",
    assets: "Pre-consultation education, expectation setting, proof reinforcement.",
    metric: "Better consultation quality."
  },
  {
    name: "Conversion",
    idea: "Patients decide when value is clear and confidence is high.",
    leak: "Patients hesitate because the decision feels risky or unclear.",
    assets: "Offer clarity, proof reinforcement, post-consultation follow-up, reporting.",
    metric: "Consultation-to-treatment conversion."
  }
];

export const journeyBreaks = [
  {
    stage: "Attention",
    statement: "Seen does not mean understood.",
    cost: "More people notice the clinic without knowing why it matters.",
    fix: "Clarify relevance, hooks, treatment context, and positioning.",
    icon: Search
  },
  {
    stage: "Trust",
    statement: "Active does not mean credible.",
    cost: "Patients compare you to weaker clinics that simply explain themselves better.",
    fix: "Build visible doctor authority, proof, education, and credibility cues.",
    icon: ShieldCheck
  },
  {
    stage: "Enquiry",
    statement: "Interest does not mean intent.",
    cost: "Curious visitors leave because the next step feels vague or risky.",
    fix: "Create CTA systems, forms, landing pages, and enquiry pathways.",
    icon: Target
  },
  {
    stage: "Follow-up",
    statement: "Delay kills demand.",
    cost: "Serious leads cool down before the consultation is booked.",
    fix: "Install scripts, trackers, recovery flows, and response standards.",
    icon: MessageCircle
  }
];

export const assetMap = [
  ["Attention", ["Content strategy", "Hook bank", "Short-form video assets", "Ad creatives", "Campaign angles"]],
  ["Trust", ["Doctor authority sections", "Website trust blocks", "Proof assets", "Treatment education", "FAQs"]],
  ["Enquiry", ["Landing pages", "CTA system", "Request forms", "WhatsApp enquiry flow"]],
  ["Follow-up", ["WhatsApp scripts", "Missed enquiry recovery", "Lead tracking", "Follow-up SOP"]],
  ["Consultation", ["Pre-consultation education", "Expectation setting", "Consultation framing", "Trust reinforcement"]],
  ["Conversion", ["Offer clarity", "Proof reinforcement", "Post-consultation follow-up", "Monthly optimization"]]
] as const;

export const services = [
  {
    title: "Attention System",
    icon: Activity,
    breaks: "Reach exists, but patients do not understand why the clinic is relevant.",
    build: "Content strategy, hook banks, campaign angles, and short-form assets.",
    matters: "The right people need to recognize the clinic before they compare options.",
    assets: ["Positioning-led content plan", "Ad angle library", "Short-form video briefs", "Campaign message map"]
  },
  {
    title: "Trust Infrastructure",
    icon: ShieldCheck,
    breaks: "The clinic looks active but not meaningfully more credible.",
    build: "Doctor authority sections, proof blocks, website credibility systems, and treatment education.",
    matters: "Patients need confidence before they submit an enquiry.",
    assets: ["Doctor authority modules", "Proof architecture", "FAQ systems", "Treatment education pages"]
  },
  {
    title: "Enquiry System",
    icon: ClipboardCheck,
    breaks: "Interest exists, but the path to action is unclear.",
    build: "Landing pages, forms, CTA logic, and WhatsApp enquiry flows.",
    matters: "A serious patient should never have to guess the next step.",
    assets: ["Landing pages", "CTA hierarchy", "Request forms", "WhatsApp entry flow"]
  },
  {
    title: "Follow-up System",
    icon: MessageCircle,
    breaks: "Leads arrive, then slow response or inconsistent messaging reduces intent.",
    build: "WhatsApp scripts, missed enquiry recovery, lead tracking, and follow-up SOPs.",
    matters: "Speed and structure preserve demand while trust is still warm.",
    assets: ["Reply scripts", "Lead tracker", "Recovery sequences", "Team SOP"]
  },
  {
    title: "Consultation Support",
    icon: Stethoscope,
    breaks: "Doctors spend consultation time rebuilding basic trust.",
    build: "Pre-consultation education, expectation setting, and proof reinforcement.",
    matters: "Consultations improve when the patient arrives informed and confident.",
    assets: ["Pre-consult assets", "Expectation setting", "Consultation framing", "Proof reinforcement"]
  },
  {
    title: "Conversion Support",
    icon: Handshake,
    breaks: "Patients hesitate because value, timing, or risk still feels unclear.",
    build: "Offer clarity, post-consultation follow-up, proof reinforcement, and conversion reporting.",
    matters: "Patients move when the decision feels clear, safe, and worthwhile.",
    assets: ["Offer clarity", "Post-consult follow-up", "Decision support", "Conversion reporting"]
  },
  {
    title: "Optimization and Reporting",
    icon: TrendingUp,
    breaks: "Marketing activity continues without knowing which stage is leaking.",
    build: "Monthly reviews, leak diagnosis, message tests, and pipeline reporting.",
    matters: "Growth becomes repeatable when the clinic can see the system.",
    assets: ["Monthly pipeline review", "Leak diagnosis", "Asset iteration", "Reporting dashboard"]
  }
];

export const resultCategories = [
  "Positioning transformations",
  "Website trust rebuilds",
  "Landing page improvements",
  "Ad creative breakdowns",
  "Follow-up system improvements",
  "Consultation conversion improvements"
];

export const proofCards = [
  {
    title: "Clinic positioning transformation",
    type: "Positioning",
    leak: "Attention without distinction",
    status: "Available on request"
  },
  {
    title: "Website trust section rebuild",
    type: "Trust",
    leak: "Traffic without confidence",
    status: "Case study coming soon"
  },
  {
    title: "Enquiry follow-up improvement",
    type: "Follow-up",
    leak: "Leads cooling before booking",
    status: "Available on request"
  },
  {
    title: "Ad creative angle breakdown",
    type: "Attention",
    leak: "Campaigns selling features too early",
    status: "Case study coming soon"
  },
  {
    title: "Landing page before and after",
    type: "Enquiry",
    leak: "Weak next-step clarity",
    status: "Available on request"
  },
  {
    title: "Consultation conversion system",
    type: "Conversion",
    leak: "Patients hesitating after consult",
    status: "Case study coming soon"
  }
];

export const blogArticles = [
  {
    title: "Why clinic Instagram reach does not turn into consultations",
    category: "Clinic Marketing",
    excerpt:
      "Reach can create awareness, but consultation demand needs relevance, trust, and a clear next step.",
    readTime: "6 min read"
  },
  {
    title: "Why clinic websites fail to create trust",
    category: "Website Conversion",
    excerpt:
      "Most clinic websites describe services. Strong clinic websites reduce perceived risk before enquiry.",
    readTime: "7 min read"
  },
  {
    title: "How doctors can build authority before the first enquiry",
    category: "Doctor Authority",
    excerpt:
      "Patients arrive with more confidence when the doctor’s expertise is visible before the consultation.",
    readTime: "5 min read"
  },
  {
    title: "Why cheap leads damage premium clinics",
    category: "Patient Trust",
    excerpt:
      "Volume without fit can train teams to chase low-intent demand and dilute premium positioning.",
    readTime: "6 min read"
  },
  {
    title: "How WhatsApp follow-up affects consultation bookings",
    category: "Follow-up Systems",
    excerpt:
      "Response speed, message structure, and recovery workflows often decide whether interest becomes a booked visit.",
    readTime: "8 min read"
  },
  {
    title: "Why patient acquisition is a system, not a campaign",
    category: "Ads and Landing Pages",
    excerpt:
      "Campaigns work better when trust, enquiry, follow-up, and consultation assets are already connected.",
    readTime: "7 min read"
  }
];

export const blogCategories = [
  "Clinic Marketing",
  "Doctor Authority",
  "Website Conversion",
  "Patient Trust",
  "Follow-up Systems",
  "Ads and Landing Pages",
  "SEO for Clinics"
];

export const clientCategories = [
  "Doctor-led clinics",
  "Aesthetic clinics",
  "Healthcare businesses",
  "Local high-trust businesses",
  "Wellness brands",
  "Service businesses"
];

export const faqs = [
  {
    question: "What happens after I request an audit?",
    answer:
      "We review your clinic’s visible patient journey, including positioning, website trust signals, enquiry pathways, and follow-up structure. If there is a fit, we share the clearest leakage points and next steps."
  },
  {
    question: "Is the audit free?",
    answer:
      "The initial pipeline audit request is free. If your clinic needs a deeper diagnostic, implementation plan, or monthly operating system, we will outline that separately."
  },
  {
    question: "Who is this for?",
    answer:
      "Fundamental.co is built for doctor-led clinics, aesthetic clinics, dermatology clinics, healthcare businesses, and other high-trust local businesses where credibility drives conversion."
  },
  {
    question: "Do I need a website already?",
    answer:
      "No. A website helps the audit, but we can still review your current Instagram, ads, enquiry path, and consultation flow to identify where trust and intent are leaking."
  },
  {
    question: "Will you review my Instagram and website?",
    answer:
      "Yes. The audit is designed to look at the connected journey, not one isolated channel."
  },
  {
    question: "What if my clinic is not a fit?",
    answer:
      "We will say so clearly. The goal is not to sell random services; it is to identify whether a trust-first pipeline can meaningfully improve your patient acquisition system."
  }
];

export const icons = {
  ArrowRight,
  FileText,
  HeartPulse,
  Sparkles
};
