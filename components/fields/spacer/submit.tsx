import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./spacer";

const SubmitComponent = ({ instance }: { instance: FormElementInstance }) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { height } = extraAttributes;

  return <div style={{ width: "100%", height: `${height}px` }}></div>;
};

export default SubmitComponent;
