import DateField from "@/components/fields/date-field/date-field";
import HeadingField from "@/components/fields/heading/heading";
import NumberField from "@/components/fields/number-field/number-field";
import ParagraphField from "@/components/fields/paragraph/paragraph";
import SelectField from "@/components/fields/select-field/select-field";
import SeparatorField from "@/components/fields/separator/separator";
import SpacerField from "@/components/fields/spacer/spacer";
import SubHeadingField from "@/components/fields/sub-heading/sub-heading";
import TextField from "@/components/fields/text-field/text-field";
import TextAreaField from "@/components/fields/textarea-field/textarea-field";

export type ElementType =
  | "TextField"
  | "HeadingField"
  | "SubHeadingField"
  | "ParagraphField"
  | "SeparatorField"
  | "SpacerField"
  | "NumberField"
  | "TextAreaField"
  | "DateField"
  | "SelectField";

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
  SubHeadingField: SubHeadingField,
  ParagraphField: ParagraphField,
  SeparatorField: SeparatorField,
  SpacerField: SpacerField,
  NumberField: NumberField,
  TextAreaField: TextAreaField,
  DateField: DateField,
  SelectField: SelectField,
};
