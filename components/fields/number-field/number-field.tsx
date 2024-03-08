import { ElementType, FormElement } from "@/interfaces/form-elements";
import { FileDigit } from "lucide-react";
import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "NumberField";

const extraAttributes = {
  label: "Label",
  placeholder: "Add Placeholder",
  helperText: "Helper Text",
  required: false,
  min: 1,
  max: 255,
};

export type extraAttributesType = typeof extraAttributes;

const NumberField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: FileDigit,
    label: "Number Field",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default NumberField;
