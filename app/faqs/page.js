import PageHeader from "@/components/PageHeader";
import PageFaq from "@/components/PageFaq";

export default function FaqPage() {
  return (
    <>
      <PageHeader title="Frequently asked" subtitle="questions" pageName="faqs" />
      <PageFaq />
    </>
  );
}
