import { Form } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { EyeIcon, Save, Upload } from "lucide-react";
import Preview from "./builder-navbar-buttons/preview";

const BuilderNavbar = ({ form }: { form: Form }) => {
  return (
    <nav className="w-full flex items-center justify-between p-3">
      <p>Form Name : {form?.name}</p>
      <div className="flex items-center gap-4 ">
        <Preview />
        <Button className="flex items-center gap-2" variant={"outline"}>
          <Save /> Save
        </Button>
        <Button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-primary">
          <Upload /> Publish
        </Button>
      </div>
    </nav>
  );
};

export default BuilderNavbar;
