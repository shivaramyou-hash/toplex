import PageHeader from "@/components/PageHeader";
import PageTeamSingle from "@/components/PageTeamSingle";

export const metadata = {
  title: "Team Details - Toplax",
  description: "Team Details Page",
};

export default function TeamSingle() {
  return (
    <>
      <PageHeader title="Brooklyn" subtitle="simmons" pageName="brooklyn simmons" />
      <PageTeamSingle />
    </>
  );
}
