import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Loader2 className="w-12 h-12 animate-spin text-primary" />
    </div>
  );
};

export default Loading;
