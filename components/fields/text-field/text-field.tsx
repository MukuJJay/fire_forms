import { ElementType, FormElement } from "@/interfaces/form-elements";
import { FileType } from "lucide-react";
import DesignerComponent from "./designer";
import PropertiesComponent from "./properties";

const type: ElementType = "TextField";

const extraAttributes = {
  label: "Text Field",
  placeholder: "Add Placeholder",
  helperText: "Helper Text",
  required: false,
};

export type extraAttributesType = typeof extraAttributes;

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
  propertiesComponent: PropertiesComponent,
};

export default TextField;
