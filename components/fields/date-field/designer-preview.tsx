import { Label } from "@/components/ui/label";

import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./date-field";
import { BsCalendar2DateFill } from "react-icons/bs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

export const DesignerComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, helperText, required } = extraAttributes;

  return (
    <div className="flex flex-col gap-3 items-center w-full">
      <div className="flex items-center justify-between">
        <Label>
          {label}
          {required && <sup>*</sup>}
        </Label>
      </div>
      <BsCalendar2DateFill />
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
  const [date, setDate] = useState<Date | null>(null);

  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { label, helperText, required } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full px-6 py-3 space-y-1 dark:bg-stone-900 bg-stone-200 rounded-md">
      <Label>
        {label}
        {required && <sup>*</sup>}
      </Label>
      <div>
        <Popover>
          <PopoverTrigger disabled={value ? true : false}>
            <Button variant={"outline"} className="flex items-center gap-2">
              <BsCalendar2DateFill className="w-5 h-5" />
              {date ? format(date, "dd-MMM-yyyy") : ""}
              {value ? format(value, "dd-MMM-yyyy") : ""}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="flex justify-center items-center"
          >
            <Calendar
              captionLayout="dropdown-buttons"
              onDayClick={setDate}
              fromYear={1960}
              toYear={2030}
            />
          </PopoverContent>
        </Popover>
      </div>
      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
};
