import { ElementType, FormElement } from "@/interfaces/form-elements";
import { WrapText } from "lucide-react";
import { DesignerComponent, PreviewComponent } from "./designer-preview";
import PropertiesComponent from "./properties";
import SubmitComponent from "./submit";

const type: ElementType = "ParagraphField";

const extraAttributes = {
  label: "Paragraph Field",
};

export type extraAttributesType = typeof extraAttributes;

const ParagraphField: FormElement = {
  type,
  construct: (id) => ({
    id,
    type,
    extraAttributes,
  }),

  desginerButton: {
    icon: WrapText,
    label: "Paragraph",
  },

  designerComponent: DesignerComponent,
  previewComponent: PreviewComponent,
  propertiesComponent: PropertiesComponent,
  submitComponent: SubmitComponent,
};

export default ParagraphField;
