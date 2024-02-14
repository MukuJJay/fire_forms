import { getUserStats } from "@/actions/stats";
import Card from "./card";

const CardWrapper = async ({ loading }: { loading?: boolean }) => {
  const { visits, submissions, submissionRate, bounceRate } =
    await getUserStats();

  return (
    <div className="grid grid-cols-4 xl:grid-cols-2 md:!grid-cols-1 gap-4">
      <Card
        title="Total Visits"
        helperText="All time Form Visits"
        value={visits}
        icon="visits"
        loading={loading}
      />
      <Card
        title="Total Submissions"
        helperText="All time Form Submissions"
        value={submissions}
        icon="submissions"
        loading={loading}
      />
      <Card
        title="Submission Rate"
        helperText="Visits that submits the form"
        value={submissionRate + "%"}
        icon="submissionRate"
        loading={loading}
      />
      <Card
        title="Bounce Rate"
        helperText="Visits that leaves without interacting"
        value={bounceRate + "%"}
        icon="bounceRate"
        loading={loading}
      />
    </div>
  );
};

export default CardWrapper;
