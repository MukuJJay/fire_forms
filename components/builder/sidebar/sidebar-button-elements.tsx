import { formElements } from "@/interfaces/form-elements";
import SideBarButtonElement from "./sidebar-button-element";

const SideBarButtonElements = () => {
  return (
    <div className="flex">
      <SideBarButtonElement formElement={formElements.TextField} />
    </div>
  );
};

export default SideBarButtonElements;
