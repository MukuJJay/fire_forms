import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import { validate } from "uuid";

const ViewForm = ({ row }: { row: any }) => {
  const instanceIdArr = [];

  for (const key in row.original) {
    if (validate(key).toString()) {
      instanceIdArr.push(key.toString());
    }
  }
  return (
    <div className="w-full text-center">
      <Dialog>
        <DialogTrigger>
          <Button variant={"outline"}>
            <EyeIcon className="w-5 h-5" />
          </Button>
        </DialogTrigger>
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
};

export default ViewForm;
