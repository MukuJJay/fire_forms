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
  const node = (
    <SideBarButtonElementDraggingOverlay formElement={formElements[type]} />
  );

  return <DragOverlay>{node}</DragOverlay>;
};

export default DragOverlayWrapper;
