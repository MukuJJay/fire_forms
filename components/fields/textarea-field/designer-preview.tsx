import { Label } from "@/components/ui/label";
import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./textarea-field";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

export const DesignerComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, placeholder, helperText, required, min, max, rows } =
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
      <Textarea rows={rows} placeholder={placeholder} disabled />
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

  const { label, placeholder, helperText, required, rows } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full px-6 pt-6 pb-3 space-y-1 dark:bg-stone-900 bg-stone-200 rounded-md">
      <Label>
        {label}
        {required && <sup>*</sup>}
      </Label>
      <div className="pb-4 pt-2">
        <Textarea
          rows={rows}
          placeholder={placeholder}
          disabled={typeof value === "string" ? true : false}
          value={value}
        />
      </div>
      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
};
