import PageHeader from "@/components/PageHeader";
import PageBlogSingle from "@/components/PageBlogSingle";

export const metadata = {
  title: "Blog Details - Toplax",
  description: "Blog Details Page",
};

export default function BlogSingle() {
  return (
    <>
      <PageHeader title="Advanced" subtitle="robotics..." pageName="Advanced robotics..." />
      <PageBlogSingle />
    </>
  );
}
