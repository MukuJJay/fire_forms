import { publishForm } from "@/actions/publish-form";
import { Loader, Upload } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useTransition } from "react";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const Publish = ({ formId }: { formId: string }) => {
  const [loading, startTransition] = useTransition();
  const router = useRouter();

  const onPublish = async () => {
    try {
      await publishForm(formId);
      toast({
        title: "Success",
        description: "Form published successfully!",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong while submitting!",
        variant: "destructive",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="flex p-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 gap-2">
        <Upload className="w-4 h-4" /> Publish
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-destructive text-2xl">
            SAVE BEFORE YOU PUBLISH
          </AlertDialogTitle>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. You can not edit your form after
            publishing. Anyone with the link can view and submit the form.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <button
            className="inline-flex h-full p-[7px] w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none hover:ring-2 hover:ring-slate-400 focus:ring-2 focus:ring-slate-400 gap-2"
            onClick={() => startTransition(onPublish)}
            disabled={loading}
          >
            {loading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <Upload className="w-4 h-4" />
            )}
            Publish
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Publish;
