import {
  ElementType,
  FormElement,
  FormElementInstance,
} from "@/interfaces/form-elements";
import { FileType } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const type: ElementType = "TextField";

const extraAttributes = {
  label: "Text Field",
  placeholder: "Add Placeholder",
  helperText: "Helper Text",
  required: false,
};

const TextField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: FileType,
    label: "Text Field",
  },

  designerComponent: DesignerComponent,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};

function DesignerComponent() {
  const { label, placeholder, helperText, required } = extraAttributes;

  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>{label}</Label>
      <Input placeholder={placeholder} disabled />
      {helperText && (
        <span className="text-xs text-muted-foreground">{helperText}</span>
      )}
    </div>
  );
}

export default TextField;
