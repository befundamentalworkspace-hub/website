import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { MetaTagsAdmin } from "@/components/admin/MetaTagsAdmin";

export const metadata: Metadata = {
  title: "Meta Tag Admin | Fundamental.co",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminMetaTagsPage() {
  return (
    <Section className="pt-16 lg:pt-24">
      <Container>
        <MetaTagsAdmin />
      </Container>
    </Section>
  );
}
