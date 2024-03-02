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
      <div className="flex">
        <SideBarButtonElement formElement={formElements.HeadingField} />
      </div>
    </div>
  );
};

export default SideBarButtonElements;
