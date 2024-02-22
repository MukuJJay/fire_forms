import { DesignerContext } from "@/context/designer-context";
import { FormElementInstance, formElements } from "@/interfaces/form-elements";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { Trash2 } from "lucide-react";

import { useContext } from "react";

function DesignerElementWrapper({ element }: { element: FormElementInstance }) {
  const context = useContext(DesignerContext);

  const DesignerElement = formElements[element.type].designerComponent;

  const topHalf = useDroppable({
    id: `${element.id}-top-half`,
  });
  const bottomHalf = useDroppable({
    id: `${element.id}-bottom-half`,
  });

  const draggable = useDraggable({
    id: `${element.id}-designer-element`,
    data: {
      type: element.type,
      elementId: element.id,
      isdraggableDesignerElement: true,
    },
  });

  if (draggable.isDragging) {
    return null;
  }

  return (
    <div
      className="hover:bg-accent/50 group cursor-grab w-full h-[120px] bg-accent px-4 flex items-center rounded-md relative"
      ref={draggable.setNodeRef}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <div
        ref={topHalf.setNodeRef}
        className="absolute w-full h-1/2 top-0 left-0"
      />
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute w-full h-1/2 bottom-0 left-0"
      />

      {topHalf.isOver && (
        <div className="w-full h-[7px] bg-primary rounded-t-md absolute top-0 left-0" />
      )}
      {bottomHalf.isOver && (
        <div className="w-full h-[7px] bg-primary rounded-b-md absolute bottom-0 left-0" />
      )}

      <DesignerElement />

      <div className="hidden group-hover:flex justify-center items-center absolute top-0 left-0 w-full h-full">
        <p className="text-muted-foreground animate-pulse">
          Click here to set see properties
        </p>
        <button
          className="hover:bg-primary flex justify-center items-center w-12 h-full absolute top-0 right-0 rounded-r-md bg-primary/80"
          onClick={() => context?.removeElement(element.id)}
        >
          <Trash2 className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default DesignerElementWrapper;
