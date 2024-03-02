import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
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

  const { height } = instance.extraAttributes;

  const formSchema = z.object({
    height: z.number().min(1).max(500),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      height,
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
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height : {form.watch("height")}PX</FormLabel>
              <FormControl>
                <div onClick={form.handleSubmit(onSubmit)}>
                  <Slider
                    defaultValue={[height]}
                    step={1}
                    max={500}
                    min={1}
                    onValueChange={(value) => {
                      field.onChange(value[0]);
                    }}
                  />
                </div>
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
