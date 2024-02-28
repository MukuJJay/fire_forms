import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./text-field";
import { Badge } from "@/components/ui/badge";

export const DesignerComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, placeholder, helperText, required, min, max } =
    extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        <Label>
          {label}
          {required && <sup>*</sup>}
        </Label>
        <div className="flex gap-1 items-center">
          <Badge variant={"indigo"}>Min : {min}</Badge>
          <Badge variant={"indigo"}>Max : {max}</Badge>
        </div>
      </div>
      <Input placeholder={placeholder} disabled />
      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
};

export const PreviewComponent = ({
  instance,
  value,
}: {
  instance: FormElementInstance;
  value?: string;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, placeholder, helperText, required } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full px-6 pt-6 pb-3 space-y-1">
      <Label>
        {label}
        {required && <sup>*</sup>}
      </Label>
      <Input
        placeholder={placeholder}
        readOnly={value ? true : false}
        value={value}
      />
      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
};
