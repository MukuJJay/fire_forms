import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import { validate } from "uuid";
import { ElementType, formElements } from "@/interfaces/form-elements";

const ViewForm = ({ row }: { row: any }) => {
  const instanceIdArr = [];

  for (const key in row.original) {
    if (validate(key.toString())) {
      instanceIdArr.push(key.toString());
    }
  }

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
        <DialogTrigger>
          <Button variant={"outline"}>
            <EyeIcon className="w-5 h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent className="overflow-y-auto">
          {instanceIdArr.map((instanceId: string) => elementMapper(instanceId))}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ViewForm;
