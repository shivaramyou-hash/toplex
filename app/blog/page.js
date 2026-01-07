import PageHeader from "@/components/PageHeader";
import PageBlog from "@/components/PageBlog";

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Latest" subtitle="Post" pageName="blog" />
      <PageBlog />
    </>
  );
}
