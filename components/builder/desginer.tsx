"use client";

import { DesignerContext } from "@/context/designer-context";
import { ElementType, formElements } from "@/interfaces/form-elements";
import { cn } from "@/lib/utils";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import DesignerElementWrapper from "./designer-element-wrapper";

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

      //for first dropping scenerio

      const isDropppingDesignerBtnElementOverDesignerDropArea =
        event?.active?.data?.current?.isDesignerDragButtonElement &&
        event?.over?.data?.current?.isDesignerDropArea;

      if (isDropppingDesignerBtnElementOverDesignerDropArea) {
        const type: ElementType = event?.active?.data?.current?.type;

        const newElement = formElements[type].construct(uuidv4());

        context?.addElement(newElement);
      }

      //for second dropping scenerio
      const isDroppingOverTopHalfDesignerElement =
        event?.over?.data?.current?.isTopHalfDesignerElement;
      const isDroppingOverBottomHalfDesignerElement =
        event?.over?.data?.current?.isBottomHalfDesignerElement;

      const isDropppingDesignerBtnElementOverDesignerElement =
        event?.active?.data?.current?.isDesignerDragButtonElement &&
        (isDroppingOverTopHalfDesignerElement ||
          isDroppingOverBottomHalfDesignerElement);

      if (isDropppingDesignerBtnElementOverDesignerElement) {
        const type: ElementType = event?.active?.data?.current?.type;

        const newElement = formElements[type].construct(uuidv4());

        const designerElementId = event?.over?.data?.current?.elementId;

        const designerElementIndex = context?.elements.findIndex(
          (elem) => elem.id === designerElementId
        );

        if (!designerElementIndex && designerElementIndex !== 0) return;

        if (isDroppingOverTopHalfDesignerElement) {
          context?.addElementWithIndex(designerElementIndex, newElement);
        } else if (isDroppingOverBottomHalfDesignerElement) {
          context?.addElementWithIndex(designerElementIndex + 1, newElement);
        }
      }

      //for third dropping scenerio
      const isSortingDesignerElement =
        event?.active?.data?.current?.isdraggableDesignerElement &&
        (isDroppingOverTopHalfDesignerElement ||
          isDroppingOverBottomHalfDesignerElement);

      if (isSortingDesignerElement) {
        const dropDesignerElementId = event?.over?.data?.current?.elementId;
        const dragDesignerElementId = event?.active?.data?.current?.elementId;

        const dropDesignerElementIndex = context?.elements.findIndex(
          (elem) => elem.id === dropDesignerElementId
        );
        if (!dropDesignerElementIndex && dropDesignerElementIndex !== 0) return;

        const dragDesignerElement = context?.elements.find(
          (elem) => elem.id === dragDesignerElementId
        );
        if (!dragDesignerElement) return;

        context?.removeElement(dragDesignerElementId);

        if (isDroppingOverTopHalfDesignerElement) {
          context?.addElementWithIndex(
            dropDesignerElementIndex,
            dragDesignerElement
          );
        } else if (isDroppingOverBottomHalfDesignerElement) {
          context?.addElementWithIndex(
            dropDesignerElementIndex + 1,
            dragDesignerElement
          );
        }
      }
    },
  });

  return (
    <div
      className={cn(
        "flex flex-col gap-3 w-[90%] h-[95%] max-h-[700px] bg-background rounded-md p-4 overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-zinc-700 scrollbar-thumb-rounded-sm",
        isOver && "ring-2 ring-primary/60"
      )}
      ref={setNodeRef}
      onClick={() => context?.setSelectedElement(null)}
    >
      {!isOver && context?.elements.length === 0 && (
        <p className="flex-grow flex items-center justify-center text-3xl text-slate-500">
          Drop here
        </p>
      )}
      {isOver && context?.elements.length === 0 && (
        <div className="bg-accent w-full h-[120px] rounded-md"></div>
      )}
      {context?.elements.map((element) => (
        <div
          className="w-full h-[120px]"
          key={element.id}
          onClick={(e) => {
            e.stopPropagation();
            context?.setSelectedElement(element);
          }}
        >
          <DesignerElementWrapper element={element} />
        </div>
      ))}
    </div>
  );
};
export default Designer;
