"use client";

import { Form } from "@prisma/client";
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import SideBarButtonElements from "./sidebar/sidebar-button-elements";
import DragOverlayWrapper from "./drag-overlay-wrapper";
import Designer from "./desginer";

const Builder = ({ form }: { form: Form }) => {
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <DndContext sensors={sensors}>
      <div className="w-full h-full flex justify-between">
        <div className="w-[70%] h-full flex justify-center items-center">
          <Designer />
        </div>
        <aside className="h-full w-[30%] bg-background">
          <SideBarButtonElements />
        </aside>
      </div>
      <DragOverlayWrapper />
    </DndContext>
  );
};

export default Builder;
