import { DesignerContext } from "@/context/designer-context";
import { formElements } from "@/interfaces/form-elements";
import { XSquare } from "lucide-react";
import { useContext } from "react";

const PropertiesForm = () => {
  const context = useContext(DesignerContext);

  if (!context?.selectedElement) {
    return null;
  }

  const PropertiesComponent =
    formElements[context?.selectedElement?.type].propertiesComponent;

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between ">
        <span className="text-muted-foreground text-sm">Properties Form</span>
        <XSquare
          className="text-primary w-6 h-6 cursor-pointer"
          onClick={() => context?.setSelectedElement(null)}
        />
      </div>
      <PropertiesComponent
        instance={context?.selectedElement}
        key={context?.selectedElement.id}
      />
    </div>
  );
};

export default PropertiesForm;
