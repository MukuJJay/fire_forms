import {
  Active,
  DragStartEvent,
  useDndMonitor,
  DragCancelEvent,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import { useState } from "react";
import { SideBarButtonElementDraggingOverlay } from "./sidebar/sidebar-button-element";
import { ElementType, formElements } from "@/interfaces/form-elements";

const DragOverlayWrapper = () => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

  useDndMonitor({
    onDragStart: (event: DragStartEvent) => {
      setDraggedItem(event.active);
      console.log(event, "=============");
    },
    onDragCancel(event: DragCancelEvent) {
      setDraggedItem(null);
    },
    onDragEnd(event: DragEndEvent) {
      setDraggedItem(null);
    },
  });

  if (!draggedItem) {
    return null;
  }

  const type: ElementType = draggedItem?.data?.current?.type;

  if (draggedItem?.data?.current?.isDesignerDragButtonElement) {
    const node = (
      <SideBarButtonElementDraggingOverlay formElement={formElements[type]} />
    );
    return <DragOverlay>{node}</DragOverlay>;
  }

  if (draggedItem?.data?.current?.isdraggableDesignerElement) {
    const DesignerElement = formElements[type].designerComponent;

    const node = (
      <div className="cursor-grabbing w-full h-[120px] bg-accent/80 px-4 flex items-center rounded-md pointer-events-none">
        <DesignerElement />
      </div>
    );

    return <DragOverlay>{node}</DragOverlay>;
  }

  return null;
};

export default DragOverlayWrapper;
