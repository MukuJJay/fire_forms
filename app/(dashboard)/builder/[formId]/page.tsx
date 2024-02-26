import { getFormById } from "@/actions/get-forms";
import Builder from "@/components/builder/builder";
import BuilderNavbar from "@/components/builder/builder-navbar";
import PublishCard from "@/components/builder/publish-card";

const Page = async ({ params }: { params: { formId: string } }) => {
  const { formId } = params;

  const form = await getFormById(formId);

  if (form.published) {
    return <PublishCard form={form} />;
  }

  return (
    <main className="w-full h-full flex flex-col">
      <BuilderNavbar form={form} />
      <div className="w-full flex-grow dark:bg-black bg-stone-100 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] rounded-md">
        <Builder form={form} />
      </div>
    </main>
  );
};

export default Page;
