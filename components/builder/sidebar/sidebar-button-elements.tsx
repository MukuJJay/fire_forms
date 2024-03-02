import { formElements } from "@/interfaces/form-elements";
import SideBarButtonElement from "./sidebar-button-element";

const SideBarButtonElements = () => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <h3 className="text-muted-foreground font-bold text-center">
        Field Elements
      </h3>
      <div className="flex">
        <SideBarButtonElement formElement={formElements.TextField} />
      </div>
      <h3 className="text-muted-foreground font-bold text-center">
        Layout Elements
      </h3>
      <div className="flex items-center gap-2 flex-wrap">
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
