import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { AnalyticsEvents } from "@/components/analytics/AnalyticsEvents";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { CookieNotice } from "@/components/analytics/CookieNotice";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/lib/siteData";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Fundamental.co | Attention-to-Conversion Pipeline for Doctor-Led Clinics",
    template: "%s | Fundamental.co"
  },
  description:
    "Fundamental.co builds trust-first patient acquisition systems for doctor-led clinics, from attention to consultation conversion.",
  openGraph: {
    title: "Fundamental.co | Attention-to-Conversion Pipeline for Doctor-Led Clinics",
    description:
      "A premium clinic growth agency building the trust, enquiry, follow-up, consultation, and conversion infrastructure behind serious patient acquisition.",
    url: siteConfig.url,
    siteName: "Fundamental.co",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundamental.co | Attention-to-Conversion Pipeline for Doctor-Led Clinics",
    description:
      "Trust-first clinic growth systems for doctor-led clinics and high-trust healthcare businesses."
  },
  icons: {
    icon: "/fundamental-logo.png",
    apple: "/fundamental-logo.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnalyticsScripts />
        <Suspense fallback={null}>
          <AnalyticsEvents />
        </Suspense>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
