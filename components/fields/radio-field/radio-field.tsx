import { ElementType, FormElement } from "@/interfaces/form-elements";
import { IoMdRadioButtonOn } from "react-icons/io";

import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "RadioField";

const extraAttributes = {
  label: "Label",
  helperText: "Helper Text",
  required: false,
  options: "",
};

export type extraAttributesType = typeof extraAttributes;

const RadioField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: IoMdRadioButtonOn,
    label: "Radio Field",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default RadioField;
