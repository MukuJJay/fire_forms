"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { DesignerContext } from "@/context/designer-context";
import { FormElementInstance, formElements } from "@/interfaces/form-elements";
import { EyeIcon } from "lucide-react";
import { useContext } from "react";

const Preview = () => {
  const context = useContext(DesignerContext);

  const FormComponent = ({ instance }: { instance: FormElementInstance }) => {
    const PreviewComponent = formElements[instance.type].previewComponent;

    return <PreviewComponent instance={instance} />;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2" variant={"outline"}>
          <EyeIcon /> Preview
        </Button>
      </DialogTrigger>
      <DialogContent className="w-screen h-screen max-h-screen max-w-full p-8">
        <div className="w-full h-full bg-accent bg-[url(/jigsaw.svg)] dark:bg-[url(/jigsaw-dark.svg)] rounded-xl flex justify-center items-center">
          <div className="mdm:h-[97%] mdm:w-[700px] md:w-full md:h-full  bg-background rounded-md">
            {context?.elements.map((element) => (
              <>
                <FormComponent instance={element} />
              </>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Preview;
