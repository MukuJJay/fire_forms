import { ElementType, FormElement } from "@/interfaces/form-elements";
import { FileType } from "lucide-react";

const type: ElementType = "TextField";

const TextField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes: {
      label: "Text Field",
      placeholder: "Add Placeholder",
      helperText: "Helper Text",
      required: false,
    },
  }),

  desginerButton: {
    icon: FileType,
    label: "Text Field",
  },

  designerComponent: () => <div>Desginer Component</div>,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};

export default TextField;
