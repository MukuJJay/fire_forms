import { ElementType, FormElement } from "@/interfaces/form-elements";
import { Heading1 } from "lucide-react";
import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "HeadingField";

const extraAttributes = {
  label: "Heading Field",
};

export type extraAttributesType = typeof extraAttributes;

const HeadingField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: Heading1,
    label: "Heading",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default HeadingField;
