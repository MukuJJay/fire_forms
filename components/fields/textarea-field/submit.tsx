import { Label } from "@/components/ui/label";
import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./textarea-field";
import useErrorCheck, { valueType } from "@/hooks/error-checker-zustand";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";

const SubmitComponent = ({ instance }: { instance: FormElementInstance }) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, placeholder, helperText, required, min, max, rows } =
    extraAttributes;

  const { startChecking, setErrorObj, setValues } = useErrorCheck();
  const [value, setValue] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const errorCheck = () => {
    if (required && value.length === 0) {
      setErrorObj(instance.id, true);
      setErrorMsg("Field is required");
      return;
    }
    if (value.length < min) {
      setErrorObj(instance.id, true);
      setErrorMsg(`Minimum character length : ${min}`);
      return;
    }

    if (value.length > max) {
      setErrorObj(instance.id, true);
      setErrorMsg(`Maximum character length : ${max}`);
      return;
    }

    setErrorObj(instance.id, false);
    setErrorMsg("");

    valueConstruct();
  };

  function valueConstruct() {
    const valueObj: valueType = {
      label,
      value,
      type: instance.type,
      extraAttributes,
    };
    setValues(instance.id, valueObj);
  }

  useEffect(() => {
    errorCheck();

    if (!startChecking) {
      setErrorMsg("");
    }
  }, [startChecking]);

  return (
    <div className="flex flex-col gap-2 w-full px-6 pt-6 pb-3 space-y-1 dark:bg-stone-900 bg-stone-200 rounded-md">
      <Label>
        {label}
        {required && <sup>*</sup>}
      </Label>
      <div className="relative pb-4 pt-2">
        <Textarea
          rows={rows}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onBlur={errorCheck}
        />
        {errorMsg && (
          <span className="text-xs text-destructive absolute right-0 bottom-[-7px] md:text-[10px]">
            {errorMsg}
          </span>
        )}
      </div>
      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
};

export default SubmitComponent;
