"use client";

import { ServerCrash } from "lucide-react";

function Error({ error }: { error: Error }) {
  return (
    <div className="flex justify-center items-center text-destructive text-lg gap-2 w-full h-full">
      <ServerCrash className="w-9 h-9 text-destructive" />
      Uh oh! Somethign went wrong!
    </div>
  );
}

export default Error;
