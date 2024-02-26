import { ElementType, FormElement } from "@/interfaces/form-elements";
import { FileType } from "lucide-react";
import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "TextField";

const extraAttributes = {
  label: "Text Field",
  placeholder: "Add Placeholder",
  helperText: "Helper Text",
  required: false,
  min: 1,
  max: 255,
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
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default TextField;
