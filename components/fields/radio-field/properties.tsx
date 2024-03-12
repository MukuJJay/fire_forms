import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { DesignerContext } from "@/context/designer-context";

import { FormElementInstance } from "@/interfaces/form-elements";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeX, Plus } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const PropertiesComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  if (!instance.extraAttributes) {
    return null;
  }

  const context = useContext(DesignerContext);

  const [optionsArr, setOptionsArr] = useState<string[]>([]);

  const { label, helperText, required, options } = instance.extraAttributes;

  const formSchema = z.object({
    label: z.string().min(2).max(200),
    helperText: z.string().max(200),
    options: z.string(),
    required: z.boolean(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      label,
      helperText,
      options,
      required,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    instance.extraAttributes = values;
    context?.updateElement(instance);
  };

  const addOption = () => {
    setOptionsArr((prev) => {
      const tmp = [...prev, "Change me"];
      form.setValue("options", tmp.join(","));
      form.handleSubmit(onSubmit)();
      return tmp;
    });
  };

  const removeOption = (index: number) => {
    setOptionsArr((prev) => {
      const tmp = [...prev];
      const modifiedArr = tmp.slice(0, index).concat(tmp.slice(index + 1));
      form.setValue("options", modifiedArr.join(","));
      form.handleSubmit(onSubmit)();
      return modifiedArr;
    });
  };

  return (
    <Form {...form}>
      <form onBlur={form.handleSubmit(onSubmit)} className="space-y-4 ">
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="helperText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Helper Text</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="options"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Options</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem className="flex justify-between items-center">
              <div>
                <FormLabel>Required</FormLabel>
                <FormDescription>
                  Setting this field on will force the field to be a required
                  one.
                </FormDescription>
              </div>

              <FormControl>
                <div onClick={form.handleSubmit(onSubmit)}>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      <div className="flex gap-3 justify-between">
        <Button
          className="flex gap-2"
          variant={"secondary"}
          onClick={addOption}
        >
          <Plus className="w-5 h-5" />
          Add Option
        </Button>
        <div className="flex flex-col gap-2 flex-1">
          {optionsArr.map((option: string, index: number) => (
            <div key={index} className="flex items-center gap-1 w-full">
              <Input
                value={option}
                className="w-full"
                onChange={(e) =>
                  setOptionsArr((prev) => {
                    const tmp = [...prev];
                    tmp[index] = e.target.value;
                    form.setValue("options", tmp.join(","));
                    return tmp;
                  })
                }
                onBlur={() => {
                  form.setValue("options", optionsArr.join(","));
                  form.handleSubmit(onSubmit)();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") e.currentTarget.blur();
                }}
              />
              <Button
                variant={"destructive"}
                onClick={() => removeOption(index)}
              >
                <BadgeX />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Form>
  );
};

export default PropertiesComponent;
