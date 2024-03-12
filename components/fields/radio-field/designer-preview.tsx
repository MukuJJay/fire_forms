import { Label } from "@/components/ui/label";
import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./radio-field";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

  const { label, helperText, required, options } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full px-6 pt-6 pb-3 space-y-1 dark:bg-stone-900 bg-stone-200 rounded-md">
      <Label>
        {label}
        {required && <sup>*</sup>}
      </Label>
      <RadioGroup disabled>
        <div className="flex flex-col gap-4 my-4">
          {options.split(",").map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option}
                  id={index.toString()}
                  checked={value === option}
                />
                <Label
                  htmlFor={index.toString()}
                  className="text-sm text-muted-foreground font-bold"
                >
                  {option}
                </Label>
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>

      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
};
