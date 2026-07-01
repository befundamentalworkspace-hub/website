"use client";

type AnalyticsValue = string | number | boolean | null | undefined;
export type AnalyticsPayload = Record<string, AnalyticsValue>;

type StoredAttribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  first_landing_page?: string;
  landing_page?: string;
  referrer?: string;
  captured_at?: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const attributionKey = "fundamental_attribution";
const consentKey = "fundamental_cookie_consent";
const campaignParams = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];

export function persistAttributionFromLocation() {
  if (typeof window === "undefined") return;

  const current = getStoredAttribution();
  const params = new URLSearchParams(window.location.search);
  const next: StoredAttribution = {
    ...current,
    landing_page: window.location.href,
    first_landing_page: current.first_landing_page || window.location.href,
    referrer: current.referrer || document.referrer || "",
    captured_at: current.captured_at || new Date().toISOString()
  };

  const hasCampaignParams = campaignParams.some((param) => params.has(param));
  if (hasCampaignParams) {
    campaignParams.forEach((param) => {
      const value = params.get(param);
      if (value) {
        next[param as keyof StoredAttribution] = value;
      }
    });
    next.landing_page = window.location.href;
    next.captured_at = new Date().toISOString();
  }

  window.localStorage.setItem(attributionKey, JSON.stringify(next));
}

export function getStoredAttribution(): StoredAttribution {
  if (typeof window === "undefined") return {};

  try {
    const value = window.localStorage.getItem(attributionKey);
    return value ? (JSON.parse(value) as StoredAttribution) : {};
  } catch {
    return {};
  }
}

export function getAttributionPayload() {
  const attribution = getStoredAttribution();

  return {
    utmSource: attribution.utm_source ?? "",
    utmMedium: attribution.utm_medium ?? "",
    utmCampaign: attribution.utm_campaign ?? "",
    utmTerm: attribution.utm_term ?? "",
    utmContent: attribution.utm_content ?? "",
    gclid: attribution.gclid ?? "",
    fbclid: attribution.fbclid ?? "",
    referrer: attribution.referrer ?? "",
    landingPage: attribution.landing_page ?? "",
    firstLandingPage: attribution.first_landing_page ?? "",
    timestamp: new Date().toISOString()
  };
}

export function trackEvent(eventName: string, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;

  const params = stripEmpty({
    ...getPageContext(),
    ...toSnakeCaseKeys(getStoredAttribution()),
    ...payload
  });

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params
  });

  window.gtag?.("event", eventName, params);
  window.fbq?.("trackCustom", eventName, params);
}

export function trackLead(payload: AnalyticsPayload = {}) {
  if (!hasAnalyticsConsent()) return;

  trackEvent("audit_form_submitted", {
    form_name: "pipeline_audit",
    conversion_type: "lead",
    ...payload
  });

  window.fbq?.("track", "Lead", stripEmpty({ content_name: "Pipeline Audit Request", ...payload }));

  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_AUDIT_CONVERSION_LABEL;

  if (adsId && conversionLabel) {
    window.gtag?.("event", "conversion", {
      send_to: `${adsId}/${conversionLabel}`,
      value: 1,
      currency: "INR"
    });
  }
}

export function trackPageView() {
  if (!hasAnalyticsConsent()) return;

  const params = stripEmpty({
    ...getPageContext(),
    ...toSnakeCaseKeys(getStoredAttribution())
  });

  window.gtag?.("event", "page_view", params);
  window.fbq?.("track", "PageView");
  window.dataLayer?.push({
    event: "page_view",
    ...params
  });
}

export function hasAnalyticsConsent() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(consentKey) === "accepted";
}

export function getCookieConsent() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(consentKey);
}

export function setCookieConsent(value: "accepted" | "declined") {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(consentKey, value);
  window.dispatchEvent(new CustomEvent("fundamental-cookie-consent", { detail: value }));
}

function getPageContext() {
  if (typeof window === "undefined") return {};

  return {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_referrer: document.referrer
  };
}

function stripEmpty(payload: AnalyticsPayload) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );
}

function toSnakeCaseKeys(payload: AnalyticsPayload) {
  return Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [
      key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`),
      value
    ])
  );
}
