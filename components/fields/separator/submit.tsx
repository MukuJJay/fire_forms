import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./separator";
import { Separator } from "@/components/ui/separator";

const SubmitComponent = ({ instance }: { instance: FormElementInstance }) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label } = extraAttributes;

  return (
    <div className="w-full px-6">
      <Separator />
    </div>
  );
};

export default SubmitComponent;
