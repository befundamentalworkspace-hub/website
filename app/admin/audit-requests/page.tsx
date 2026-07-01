import { Metadata } from "next";
import { AdminPanel } from "@/components/admin/AdminPanel";

export const metadata: Metadata = {
  title: "Audit Requests | Fundamental.co",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminAuditRequestsPage() {
  return <AdminPanel view="audit" />;
}
