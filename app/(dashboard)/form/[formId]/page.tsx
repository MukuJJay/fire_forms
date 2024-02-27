import { getFormById } from "@/actions/get-forms";
import { getSingleFormStatsById } from "@/actions/stats";
import { CopyUrl, VistsFormBtn } from "@/components/builder/publish-card";
import Card from "@/components/cards/card";
import { DataTable } from "@/components/table/data-table";
import { FormSubmissions } from "@prisma/client";
import { format } from "date-fns";

async function getTableData(formSubmission: FormSubmissions[]) {
  if (formSubmission.length === 0) {
    return [];
  }

  const data = [];

  for (const submission of formSubmission) {
    const content = JSON.parse(submission.content);
    const obj: Record<string, any> = { id: submission.id };

    for (const key in content) {
      const { value } = content[key];
      obj[key] = value;
    }

    const creationDate = format(new Date(submission.createdAt), "dd-MMM-yyyy");

    obj.createdAt = creationDate;
    data.push(obj);
  }

  return data;
}

const Page = async ({ params }: { params: { formId: string } }) => {
  const { formId } = params;
  const form = await getFormById(formId, true);

  const tableData = await getTableData(form.FormSubmissions);

  const { visits, submissions, submissionRate, bounceRate } =
    await getSingleFormStatsById(formId);

  return (
    <main className="w-full h-full flex flex-col items-center gap-4">
      <div className="mdm:w-[700px] md:w-full flex flex-col gap-4 mt-8 px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl drop-shadow-[0_2px_2px_rgba(100,116,139,1)]">
            {form.name}
          </h1>
          <VistsFormBtn shareId={form.shareURL} />
        </div>
        <h2 className="text-slate-500 font-bold">
          Anyone can submit the form with below link
        </h2>
        <CopyUrl shareId={form.shareURL} />
      </div>
      <div className="grid grid-cols-4 xl:grid-cols-2 md:!grid-cols-1 gap-4 my-4">
        <Card
          title="Total Visits"
          helperText="All time Form Visits"
          value={visits.toString()}
          icon="visits"
        />
        <Card
          title="Total Submissions"
          helperText="All time Form Submissions"
          value={submissions.toString()}
          icon="submissions"
        />
        <Card
          title="Submission Rate"
          helperText="Visits that submits the form"
          value={submissionRate + "%"}
          icon="submissionRate"
        />
        <Card
          title="Bounce Rate"
          helperText="Visits that leaves without interacting"
          value={bounceRate + "%"}
          icon="bounceRate"
        />
      </div>
      <DataTable contentStr={form.content} data={tableData} />
    </main>
  );
};

export default Page;
