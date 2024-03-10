import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./date-field";
import useErrorCheck, { valueType } from "@/hooks/error-checker-zustand";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { BsCalendar2DateFill } from "react-icons/bs";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const SubmitComponent = ({ instance }: { instance: FormElementInstance }) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, helperText, required } = extraAttributes;

  const { startChecking, setErrorObj, setValues } = useErrorCheck();
  const [value, setValue] = useState<string | null>();
  const [errorMsg, setErrorMsg] = useState<string>("");

  const errorCheck = () => {
    if (required && value === null) {
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
      <div className="relative pb-4 pt-2">
        <Popover>
          <PopoverTrigger disabled={value ? true : false}>
            <Button variant={"outline"} className="flex items-center gap-2">
              <BsCalendar2DateFill className="w-5 h-5" />
              {value ? format(value, "dd-MMM-yyyy") : ""}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="flex justify-center items-center"
          >
            <Calendar onDayClick={(e) => setValue(format(e, "dd-MMM-yyyy"))} />
          </PopoverContent>
        </Popover>
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
