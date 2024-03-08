import { ElementType, FormElement } from "@/interfaces/form-elements";
import { TextSelect } from "lucide-react";
import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "TextAreaField";

const extraAttributes = {
  label: "Label",
  placeholder: "Add Placeholder",
  helperText: "Helper Text",
  required: false,
  rows: 5,
  min: 1,
  max: 255,
};

export type extraAttributesType = typeof extraAttributes;

const TextAreaField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: TextSelect,
    label: "Text Area",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default TextAreaField;
