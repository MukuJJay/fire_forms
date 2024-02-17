import TextField from "@/components/fields/text-field";

export type ElementType = "TextField";

interface FormElementInstance {
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

  designerComponent: React.FC;
  formComponent: React.FC;
  propertiesComponent: React.FC;
}

type FormElementsType = {
  [key in ElementType]: FormElement;
};

export const formElements: FormElementsType = {
  TextField: TextField,
};
