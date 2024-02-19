"use client";

import { DesignerContext } from "@/context/designer-context";
import { ElementType, formElements } from "@/interfaces/form-elements";
import { cn } from "@/lib/utils";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

const Designer = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  const context = useContext(DesignerContext);

  useDndMonitor({
    onDragEnd(event) {
      if (!event.active || !event.over) {
        return;
      }

      if (
        !event?.active?.data?.current?.isDesignerDragButtonElement &&
        !event?.over?.data?.current?.isDesignerDropArea
      ) {
        return;
      }

      const type: ElementType = event?.active?.data?.current?.type;

      const newElement = formElements[type].construct(uuidv4());

      context?.addElement(newElement);
    },
  });

  return (
    <div
      className={cn(
        "flex w-[90%] h-[95%] max-h-[95%] bg-background rounded-md p-4 overflow-y-auto",
        isOver && "ring-2 ring-primary/60"
      )}
      ref={setNodeRef}
    >
      {!isOver && context?.elements.length === 0 && (
        <p className="flex-grow flex items-center justify-center text-3xl text-slate-500">
          Drop here
        </p>
      )}
      {isOver && <div className="bg-accent w-full h-[120px] rounded-md"></div>}
      {context?.elements.map((element) => JSON.stringify(element))}
      <br />
    </div>
  );
};

export default Designer;
