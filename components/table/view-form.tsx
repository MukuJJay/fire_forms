import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import { validate } from "uuid";
import {
  ElementType,
  FormElementInstance,
  formElements,
} from "@/interfaces/form-elements";

const ViewForm = ({ row, cols }: { row: any; cols: FormElementInstance[] }) => {
  function elementMapper(instanceId: string) {
    const PreviewElement =
      formElements[row.original.instance[instanceId].type as ElementType]
        .previewComponent;

    return (
      <PreviewElement
        instance={row.original.instance[instanceId]}
        value={row.original[instanceId]}
        key={instanceId}
      />
    );
  }

  return (
    <div className="w-full text-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"}>
            <EyeIcon className="w-5 h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="overflow-y-auto max-h-[95%] rounded-md">
          {cols.map((instance: FormElementInstance) =>
            elementMapper(instance.id)
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ViewForm;
