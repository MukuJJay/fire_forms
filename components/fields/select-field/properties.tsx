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
import { DesignerContext } from "@/context/designer-context";

import { FormElementInstance } from "@/interfaces/form-elements";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
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

  const { label, placeholder, helperText, required, min, max } =
    instance.extraAttributes;

  const formSchema = z.object({
    label: z.string().min(2).max(200),
    placeholder: z.string().max(200),
    helperText: z.string().max(200),
    required: z.boolean(),
    min: z.coerce.number().gte(0).lte(5000).optional(),
    max: z.coerce.number().lte(5000).gte(1).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      label,
      placeholder,
      helperText,
      required,
      min,
      max,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    instance.extraAttributes = values;
    context?.updateElement(instance);
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
          name="placeholder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Placeholder</FormLabel>
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
        <FormField
          control={form.control}
          name="min"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum Characters</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
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
          name="max"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Characters</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default PropertiesComponent;
