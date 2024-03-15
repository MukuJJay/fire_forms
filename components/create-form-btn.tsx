"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createFormSchema,
  createFormSchemaType,
} from "@/interfaces/form-schema";
import { createForm } from "@/actions/create-form";
import { Loader, Loader2, Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateFormBtn = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isRoutePushing, setIsRoutePushing] = useState<boolean>(false);
  const pathName = usePathname();

  const form = useForm<createFormSchemaType>({
    resolver: zodResolver(createFormSchema),
  });

  const onSubmit = async (values: createFormSchemaType) => {
    try {
      const formId = await createForm(values);
      toast({
        title: "Form created successfully!",
        duration: 1800,
      });
      setIsOpen(false);
      setIsRoutePushing(true);

      router.push(`/builder/${formId}`);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error creating form",
        duration: 1800,
      });
    }
  };

  useEffect(() => {
    setIsRoutePushing(false);
  }, [pathName]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="border-dashed border-primary w-full h-full"
        >
          {!isRoutePushing && <Plus className="text-primary w-12 h-12" />}
          {isRoutePushing && (
            <Loader className="text-primary w-12 h-12 animate-spin" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Form</DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter form name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      placeholder="Enter form description"
                      rows={4}
                      {...field}
                    />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Create"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFormBtn;
