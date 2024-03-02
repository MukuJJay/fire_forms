import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./heading";

const SubmitComponent = ({ instance }: { instance: FormElementInstance }) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full px-6 pt-6 pb-3 space-y-1 dark:bg-stone-900 bg-stone-200 rounded-md">
      <h1 className="text-xl text-muted-foreground font-bold">{label}</h1>
    </div>
  );
};

export default SubmitComponent;
