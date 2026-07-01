import { Metadata } from "next";
import { AdminPanel } from "@/components/admin/AdminPanel";

export const metadata: Metadata = {
  title: "Admin Dashboard | Fundamental.co",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminDashboardPage() {
  return <AdminPanel view="dashboard" />;
}
