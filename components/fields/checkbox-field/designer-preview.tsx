import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./checkbox-field";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export const DesignerComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, helperText, required, options } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        <Label>
          {label}
          {required && <sup>*</sup>}
        </Label>
      </div>
      <div className="flex items-center gap-1 flex-wrap ">
        {options &&
          options.split(",").map((option, index) => (
            <Badge key={index} variant={"indigo"}>
              {option}
            </Badge>
          ))}
      </div>
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

  // const parsedValue = value ? JSON.parse(value ? value : "") : "";

  const { label, helperText, required, options } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full px-6 pt-6 pb-3 dark:bg-stone-900 bg-stone-200 rounded-md">
      <Label>
        {label}
        {required && <sup>*</sup>}
      </Label>
      <div className="flex flex-col gap-4 my-4">
        {options.split(",").map((option, index) => (
          <div key={index} className="flex items-center gap-2 ">
            <Checkbox
              checked={value?.includes(option)}
              // id={index.toString()}
              disabled={!!value}
            />
            <label
              // htmlFor={index.toString()}
              className="text-sm text-muted-foreground font-bold"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
};
