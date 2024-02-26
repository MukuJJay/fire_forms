import CardWrapper from "@/components/cards/card-wrapper";
import CreateFormBtn from "@/components/create-form-btn";
import CreatedForms from "@/components/created-forms";
import { Separator } from "@/components/ui/separator";
import React, { Suspense } from "react";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<CardWrapper loading={true} />}>
        <CardWrapper />
      </Suspense>
      <Separator className="my-4" />
      <h2 className="text-2xl font-bold text-primary text-center">
        Your Forms
      </h2>
      <Separator className="my-4" />
      <div className="grid gap-4 grid-cols-4 xl:grid-cols-2 md:!grid-cols-1">
        <CreateFormBtn />
        <CreatedForms />
      </div>
    </div>
  );
};

export default Page;
