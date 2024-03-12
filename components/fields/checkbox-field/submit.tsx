import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./checkbox-field";
import useErrorCheck, { valueType } from "@/hooks/error-checker-zustand";
import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const SubmitComponent = ({ instance }: { instance: FormElementInstance }) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, helperText, required, options } = extraAttributes;

  const { startChecking, setErrorObj, setValues } = useErrorCheck();
  const [value, setValue] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const errorCheck = () => {
    if (required && value.length === 0) {
      setErrorObj(instance.id, true);
      setErrorMsg("Field is required");
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
      <div className="relative ">
        <div className="flex flex-col gap-4">
          {options.split(",").map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <Checkbox
                id={index.toString()}
                // onCheckedChange={(e: boolean) =>
                //   setValue((prev) => {
                //     const tmp = [...prev];
                //     if(e){
                //       tmp[index] = options;
                //       return tmp;
                //     }

                //   })
                // }
              />
              <label
                htmlFor={index.toString()}
                className="text-sm text-muted-foreground font-bold"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
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
