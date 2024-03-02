import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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

  const { label } = instance.extraAttributes;

  const formSchema = z.object({
    label: z.string().min(2).max(200),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      label,
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
      </form>
    </Form>
  );
};

export default PropertiesComponent;
