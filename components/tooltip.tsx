import {
  Tooltip as Ttip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TooltipProps {
  children: React.ReactNode;
  label: string;
  delayDuration?: number;
  side?: "top" | "left" | "bottom" | "right";
  sideOffset?: number;
}

export function Tooltip({
  children,
  label,
  delayDuration,
  side,
  sideOffset,
}: TooltipProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Ttip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent sideOffset={sideOffset} side={side}>
          <p>{label}</p>
        </TooltipContent>
      </Ttip>
    </TooltipProvider>
  );
}
