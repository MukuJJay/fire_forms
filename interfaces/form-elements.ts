import HeadingField from "@/components/fields/heading/heading";
import TextField from "@/components/fields/text-field/text-field";

export type ElementType = "TextField" | "HeadingField";

export interface FormElementInstance {
  id: string;
  type: ElementType;
  extraAttributes?: Record<string, any>;
}

export interface FormElement {
  type: ElementType;

  construct: (id: string) => FormElementInstance;

  desginerButton: {
    icon: React.ElementType;
    label: string;
  };

  designerComponent: React.FC<{ instance: FormElementInstance }>;
  previewComponent: React.FC<{ instance: FormElementInstance; value?: string }>;
  propertiesComponent: React.FC<{ instance: FormElementInstance }>;
  submitComponent: React.FC<{ instance: FormElementInstance }>;
}

type FormElementsType = {
  [key in ElementType]: FormElement;
};

export const formElements: FormElementsType = {
  TextField: TextField,
  HeadingField: HeadingField,
};
