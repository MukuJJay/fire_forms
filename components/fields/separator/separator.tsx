import { ElementType, FormElement } from "@/interfaces/form-elements";
import { Minus } from "lucide-react";
import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "SeparatorField";

const extraAttributes = {
  label: "Label",
};

export type extraAttributesType = typeof extraAttributes;

const SeparatorField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: Minus,
    label: "Separator",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default SeparatorField;
