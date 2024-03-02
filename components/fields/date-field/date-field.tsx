import { ElementType, FormElement } from "@/interfaces/form-elements";
import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";
import { BsCalendar2DateFill } from "react-icons/bs";

const type: ElementType = "DateField";

const extraAttributes = {
  label: "Label",
  helperText: "Helper Text",
  required: false,
};

export type extraAttributesType = typeof extraAttributes;

const DateField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: BsCalendar2DateFill,
    label: "Text Field",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default DateField;
