import { ElementType, FormElement } from "@/interfaces/form-elements";
import { GrSelect } from "react-icons/gr";

import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "SelectField";

const extraAttributes = {
  label: "Label",
  helperText: "Helper Text",
  placeholder: "Select here",
  options: "",
  required: false,
};

export type extraAttributesType = typeof extraAttributes;

const SelectField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: GrSelect,
    label: "Select Field",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default SelectField;
