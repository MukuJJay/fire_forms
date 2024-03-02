import { Label } from "@/components/ui/label";
import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./heading";

export const DesignerComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label } = extraAttributes;

  return (
    <div>
      <h2 className="text-sm text-muted-foreground">Title of the field</h2>
      <p className="text-xl mt-2">{label}</p>
    </div>
  );
};

export const PreviewComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label } = extraAttributes;

  return (
    <div className="w-full px-6 pt-6 pb-3">
      <h1 className="text-xl text-muted-foreground font-bold">{label}</h1>
    </div>
  );
};
