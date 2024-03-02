import { FormElementInstance } from "@/interfaces/form-elements";
import { Separator } from "@/components/ui/separator";

export const DesignerComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  return (
    <div className="w-full">
      <h2 className="text-lg mb-2 text-muted-foreground text-center">
        Separator
      </h2>
      <Separator className="dark:bg-zinc-200 bg-zinc-800" />
    </div>
  );
};

export const PreviewComponent = ({
  instance,
}: {
  instance: FormElementInstance;
}) => {
  return (
    <div className="w-full px-6">
      <Separator />
    </div>
  );
};
