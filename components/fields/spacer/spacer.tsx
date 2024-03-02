import { ElementType, FormElement } from "@/interfaces/form-elements";
import { SeparatorHorizontal } from "lucide-react";
import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "SpacerField";

const extraAttributes = {
  height: 5,
};

export type extraAttributesType = typeof extraAttributes;

const SpacerField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: SeparatorHorizontal,
    label: "Spacer",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default SpacerField;
