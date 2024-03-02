import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./paragraph";

const SubmitComponent = ({ instance }: { instance: FormElementInstance }) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label } = extraAttributes;

  return (
    <div className="w-full px-6">
      <h2 className="text-base text-muted-foreground">{label}</h2>
    </div>
  );
};

export default SubmitComponent;
