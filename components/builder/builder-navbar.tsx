import { Form } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { EyeIcon, Upload } from "lucide-react";
import Preview from "./builder-navbar-buttons/preview";
import Save from "./builder-navbar-buttons/save";

const BuilderNavbar = ({ form }: { form: Form }) => {
  return (
    <nav className="w-full flex items-center justify-between p-3">
      <p>Form Name : {form?.name}</p>
      <div className="flex items-center gap-4 ">
        <Preview />
        <Save formId={form.id} />
        <Button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-primary">
          <Upload /> Publish
        </Button>
      </div>
    </nav>
  );
};

export default BuilderNavbar;
