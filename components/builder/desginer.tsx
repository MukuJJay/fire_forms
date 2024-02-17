import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";

const Designer = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  return (
    <div
      className={cn(
        "flex w-[90%] h-[95%] bg-background rounded-md p-4",
        isOver && "ring-2 ring-primary/60"
      )}
      ref={setNodeRef}
    >
      {!isOver && (
        <p className="flex-grow flex items-center justify-center text-3xl text-slate-500">
          Drop here
        </p>
      )}
      {isOver && <div className="bg-accent w-full h-[120px] rounded-md"></div>}
    </div>
  );
};

export default Designer;
