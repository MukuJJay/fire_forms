import { formElements } from "@/interfaces/form-elements";
import SideBarButtonElement from "./sidebar-button-element";

const SideBarButtonElements = () => {
  return (
    <div className="flex flex-col gap-3 p-4 h-full">
      <h3 className="text-muted-foreground font-bold text-center">
        Field Elements
      </h3>
      <div className="flex items-center gap-2 justify-center flex-wrap">
        <SideBarButtonElement formElement={formElements.TextField} />
        <SideBarButtonElement formElement={formElements.NumberField} />
        <SideBarButtonElement formElement={formElements.TextAreaField} />
        <SideBarButtonElement formElement={formElements.DateField} />
        <SideBarButtonElement formElement={formElements.SelectField} />
        <SideBarButtonElement formElement={formElements.CheckboxField} />
        <SideBarButtonElement formElement={formElements.RadioField} />
      </div>
      <h3 className="text-muted-foreground font-bold text-center">
        Layout Elements
      </h3>
      <div className="flex items-center gap-2 justify-center flex-wrap">
        <SideBarButtonElement formElement={formElements.HeadingField} />
        <SideBarButtonElement formElement={formElements.SubHeadingField} />
        <SideBarButtonElement formElement={formElements.ParagraphField} />
        <SideBarButtonElement formElement={formElements.SeparatorField} />
        <SideBarButtonElement formElement={formElements.SpacerField} />
      </div>
    </div>
  );
};

export default SideBarButtonElements;
