import { Metadata } from "next";
import { AdminPanel } from "@/components/admin/AdminPanel";

export const metadata: Metadata = {
  title: "Edit Blog Post | Fundamental.co",
  robots: {
    index: false,
    follow: false
  }
};

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  return <AdminPanel view="blog-edit" postId={params.id} />;
}
