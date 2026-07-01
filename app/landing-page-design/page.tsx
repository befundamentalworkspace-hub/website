import { Metadata } from "next";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { pageMetadata } from "@/lib/metadata";
import { servicePageBySlug } from "@/lib/servicePages";

const page = servicePageBySlug["landing-page-design"];

export const metadata: Metadata = pageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.href
});

export default function LandingPageDesignPage() {
  return <ServiceDetailPage page={page} />;
}
