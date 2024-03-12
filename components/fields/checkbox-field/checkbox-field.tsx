import { ElementType, FormElement } from "@/interfaces/form-elements";
import { IoCheckboxSharp } from "react-icons/io5";

import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "CheckboxField";

const extraAttributes = {
  label: "Label",
  helperText: "Helper Text",
  required: false,
  options: "",
};

export type extraAttributesType = typeof extraAttributes;

const CheckboxField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: IoCheckboxSharp,
    label: "Checkbox",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default CheckboxField;
