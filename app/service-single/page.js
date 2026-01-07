import PageHeader from "@/components/PageHeader";
import PageServiceSingle from "@/components/PageServiceSingle";

export const metadata = {
  title: "Service Details - Toplax",
  description: "Service Details Page",
};

export default function ServiceSingle() {
  return (
    <>
      <PageHeader title="Industrial automation" subtitle="and robotics" pageName="industrial automation and robotics" />
      <PageServiceSingle />
    </>
  );
}
