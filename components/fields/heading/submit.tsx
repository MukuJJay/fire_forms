import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./heading";

const SubmitComponent = ({ instance }: { instance: FormElementInstance }) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label } = extraAttributes;

  return (
    <div className="w-full px-6">
      <h1 className="text-xl text-muted-foreground font-bold">{label}</h1>
    </div>
  );
};

export default SubmitComponent;
