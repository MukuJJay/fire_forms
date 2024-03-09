import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./select-field";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <div className="flex items-center gap-1">
        {options &&
          options
            .split(",")
            .map((elem) => <Badge variant={"indigo"}>{elem}</Badge>)}
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

  const { label, helperText, required, placeholder, options } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full px-6 pt-6 pb-3 space-y-1 dark:bg-stone-900 bg-stone-200 rounded-md">
      <Label>
        {label}
        {required && <sup>*</sup>}
      </Label>
      <div>
        <Select disabled={!!value}>
          <SelectTrigger>
            {!value ? (
              <SelectValue
                placeholder={placeholder ? placeholder : "Select Option"}
              />
            ) : (
              value
            )}
          </SelectTrigger>
          <SelectContent>
            {options.split(",").map((elem, index) => (
              <SelectItem key={index} value={`${index + 1}. ${elem}`}>
                {elem}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
};
