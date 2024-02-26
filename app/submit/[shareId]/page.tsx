import { getFormByShareId } from "@/actions/get-forms";
import SubmitFormWrapper from "@/components/submit-form-wrapper";

const Page = async ({ params }: { params: { shareId: string } }) => {
  const { shareId } = params;

  const form = await getFormByShareId(shareId);

  if (!form.published) {
    return (
      <div className="flex justify-center items-center text-5xl w-full h-full text-muted-foreground">
        Form has yet to be published!
      </div>
    );
  }

  return (
    <main className="w-full h-full p-4 overflow-y-auto scrollbar scrollbar-w-2 scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-sm">
      <SubmitFormWrapper form={form} />
    </main>
  );
};

export default Page;
