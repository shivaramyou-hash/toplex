import PageHeader from "@/components/PageHeader";
import PageProjectSingle from "@/components/PageProjectSingle";

export const metadata = {
  title: "Project Details - Toplax",
  description: "Project Details Page",
};

export default function ProjectSingle() {
  return (
    <>
      <PageHeader title="Total Quality" subtitle="Management" pageName="Total Quality Management" />
      <PageProjectSingle />
    </>
  );
}
