import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./text-field";

export const DesignerComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, placeholder, helperText, required } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && <sup>*</sup>}
      </Label>
      <Input placeholder={placeholder} disabled />
      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
};

export const PreviewComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, placeholder, helperText, required } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full px-6 pt-6 pb-3 space-y-1">
      <Label>
        {label}
        {required && <sup>*</sup>}
      </Label>
      <Input placeholder={placeholder} />
      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
};
