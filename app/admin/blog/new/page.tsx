import { Metadata } from "next";
import { AdminPanel } from "@/components/admin/AdminPanel";

export const metadata: Metadata = {
  title: "Create Blog Post | Fundamental.co",
  robots: {
    index: false,
    follow: false
  }
};

export default function NewBlogPostPage() {
  return <AdminPanel view="blog-new" />;
}
