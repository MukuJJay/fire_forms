import { Button } from "@/components/ui/button";
import { FormElement } from "@/interfaces/form-elements";
import { cn } from "@/lib/utils";
import { useDraggable } from "@dnd-kit/core";

const SideBarButtonElement = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { icon: Icon, label } = formElement.desginerButton;

  const { setNodeRef, attributes, listeners, isDragging } = useDraggable({
    id: `designer-drag-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerDragButtonElement: true,
    },
  });

  return (
    <Button
      variant={"outline"}
      ref={setNodeRef}
      className={cn(
        "text-primary flex flex-col items-center gap-1 w-[110px] h-[110px] cursor-grab",
        isDragging && "ring-2 ring-primary/60"
      )}
      {...listeners}
      {...attributes}
    >
      <Icon className="w-8 h-8 min-w-7 min-h-7" />
      <span className="text-lg">{label}</span>
    </Button>
  );
};

export const SideBarButtonElementDraggingOverlay = ({
  formElement,
}: {
  formElement: FormElement;
}) => {
  const { icon: Icon, label } = formElement.desginerButton;

  return (
    <Button
      variant={"outline"}
      className="text-primary flex flex-col items-center gap-1 w-[110px] h-[110px] cursor-grab"
    >
      <Icon className="w-8 h-8 min-w-7 min-h-7" />
      <span className="text-lg">{label}</span>
    </Button>
  );
};

export default SideBarButtonElement;
