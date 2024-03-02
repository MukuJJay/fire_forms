import { FormElementInstance } from "@/interfaces/form-elements";
import { extraAttributesType } from "./spacer";
import { cn } from "@/lib/utils";
import { SeparatorHorizontal } from "lucide-react";

export const DesignerComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { height } = extraAttributes;

  return (
    <div className="w-full flex items-center flex-col gap-2">
      <h2 className="text-sm text-muted-foreground">Spacer PX</h2>
      <SeparatorHorizontal />
      <p className="text-base">{height} PX</p>
    </div>
  );
};

export const PreviewComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  const extraAttributes = instance.extraAttributes as extraAttributesType;

  const { height } = extraAttributes;

  return <div style={{ width: "100%", height: `${height}px` }}></div>;
};
