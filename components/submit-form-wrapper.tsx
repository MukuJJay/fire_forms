"use client";

import { FormElementInstance, formElements } from "@/interfaces/form-elements";
import { Button } from "@/components/ui/button";
import useErrorCheck from "@/hooks/error-checker-zustand";
import { useEffect, useRef, useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpFromLine, Loader } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { submitForm } from "@/actions/submit-form";
import useMount from "@/hooks/useMount";
import { toast } from "./ui/use-toast";

interface FormProps {
  content: string;
  published: boolean;
}

const SubmitFormWrapper = ({ form }: { form: FormProps }) => {
  const { setStartChecking, errorObj, values } = useErrorCheck();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [pending, startTransition] = useTransition();
  const { shareId }: { shareId: string } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const scrollIntoView = useRef(null);

  useEffect(() => {
    const locallySavedShareId = localStorage.getItem("submitted_forms_shareId");

    if (locallySavedShareId === shareId) {
      setIsSubmitted(true);
    }
  }, []);

  const mounted = useMount();
  if (!mounted) {
    return null;
  }

  const content: FormElementInstance[] = JSON.parse(form.content);

  if (isSubmitted) {
    return (
      <div className="max-w-[700px] bg-accent mx-auto scrollbar scrollbar-w-1 p-16 md:p-8 rounded-md shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] flex flex-col gap-4  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-center text-muted bg-gradient-to-r from-teal-200 to-teal-500">
        <span className="font-extrabold text-transparent text-4xl md:text-2xl bg-clip-text bg-gradient-to-r from-slate-900 to-blue-900">
          FORM SUBMITTED!
        </span>
      </div>
    );
  }

  const checkAllErrors = () => {
    setStartChecking(true);

    for (const key in errorObj) {
      if (errorObj[key] === true) {
        setOpenDialog(false);
        if (scrollIntoView.current) {
          const elementToScrollTo = (
            scrollIntoView.current as HTMLElement
          ).querySelector(`[data-key="${key}"]`);

          if (elementToScrollTo) {
            elementToScrollTo.scrollIntoView({ behavior: "smooth" });
          }
        }

        return;
      }
    }

    setOpenDialog(true);
  };

  const onSubmit = async () => {
    try {
      const isSubmitted = await submitForm(shareId, JSON.stringify(values));

      localStorage.setItem("submitted_forms_shareId", shareId);

      toast({
        title: "Success",
        description: "Form Submitted Successfully!",
      });
      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Error Submitting Form!",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className="max-w-[700px] bg-accent mx-auto scrollbar scrollbar-w-1 px-4 py-8 rounded-md shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] flex flex-col gap-4"
      ref={scrollIntoView}
    >
      {content.map((instance) => (
        <SubmitComponent instance={instance} key={instance.id} />
      ))}
      <Dialog
        open={openDialog}
        onOpenChange={(e: boolean) => {
          if (!e) {
            setOpenDialog(false);
          }
        }}
      >
        <DialogTrigger asChild className="mt-5">
          <Button
            variant={"teal"}
            onClick={checkAllErrors}
            className="text-base"
          >
            Submit
          </Button>
        </DialogTrigger>
        <DialogContent className="space-y-4">
          <DialogHeader>
            <DialogTitle>Are you sure to submit?</DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <div className="flex items-center justify-center gap-4">
              <Button variant={"outline"} onClick={() => setOpenDialog(false)}>
                Close
              </Button>
              <Button
                variant={"shimmer"}
                className="flex items-center gap-1"
                onClick={() => startTransition(onSubmit)}
              >
                Submit
                {pending ? (
                  <Loader className="w-5 h-5 animate-spin" />
                ) : (
                  <ArrowUpFromLine className="w-5 h-5" />
                )}
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const SubmitComponent = ({ instance }: { instance: FormElementInstance }) => {
  const Component = formElements[instance.type].submitComponent;

  return (
    <div data-key={instance.id}>
      <Component instance={instance} />
    </div>
  );
};

export default SubmitFormWrapper;
