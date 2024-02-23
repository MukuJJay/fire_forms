"use client";

import { saveForm } from "@/actions/save-form";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { DesignerContext } from "@/context/designer-context";
import { Loader, Save as SaveBtn } from "lucide-react";
import { useContext, useTransition } from "react";

const Save = ({ formId }: { formId: string }) => {
  const [loading, startTransition] = useTransition();
  const context = useContext(DesignerContext);

  const onSave = async () => {
    try {
      await saveForm(formId, JSON.stringify(context?.elements));
      toast({
        title: "Saved Successfully",
        description:
          "Your form is saved successfully! You can now safely close this page.",
      });
    } catch (error) {
      toast({
        title: "Error!",
        description: "Something went wrong!",
        variant: "destructive",
      });
    }
  };

  if (context?.elements.length === 0) {
    return null;
  }

  return (
    <Button
      className="flex items-center gap-2"
      variant={"outline"}
      onClick={() => startTransition(onSave)}
      disabled={loading}
    >
      {loading ? <Loader className="animate-spin" /> : <SaveBtn />}
      Save
    </Button>
  );
};

export default Save;
