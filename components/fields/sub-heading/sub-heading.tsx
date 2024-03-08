import { ElementType, FormElement } from "@/interfaces/form-elements";
import { Heading1, Heading2 } from "lucide-react";
import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "SubHeadingField";

const extraAttributes = {
  label: "Label",
};

export type extraAttributesType = typeof extraAttributes;

const SubHeadingField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: Heading2,
    label: "Sub Heading",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default SubHeadingField;
