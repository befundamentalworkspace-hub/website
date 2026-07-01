import { Metadata } from "next";
import { AdminPanel } from "@/components/admin/AdminPanel";

export const metadata: Metadata = {
  title: "Blog CMS | Fundamental.co",
  robots: {
    index: false,
    follow: false
  }
};

export default function AdminBlogPage() {
  return <AdminPanel view="blog" />;
}
