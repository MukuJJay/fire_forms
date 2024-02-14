import CardWrapper from "@/components/cards/card-wrapper";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<CardWrapper loading={true} />}>
        <CardWrapper />
      </Suspense>
    </div>
  );
};

export default Page;
