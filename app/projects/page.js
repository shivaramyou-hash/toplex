import PageHeader from "@/components/PageHeader";
import PageProjects from "@/components/PageProjects";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Our" subtitle="Projects" pageName="project" />
      <PageProjects />
    </>
  );
}
