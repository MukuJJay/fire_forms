"use client";

import { Form } from "@prisma/client";
import { Button } from "@/components/ui/button";
import Preview from "./builder-navbar-buttons/preview";
import Save from "./builder-navbar-buttons/save";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

const BuilderNavbar = ({ form }: { form: Form }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="w-full flex items-center justify-between p-3">
      <Link href={window.location.origin}>
        <Button variant={"secondary"} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </Link>
      <div className="flex items-center gap-2">
        <Badge variant={"outline"}>Form Name : </Badge>
        <Badge>{form?.name}</Badge>
      </div>
      <div className="flex items-center gap-4 ">
        <Preview />
        <Save formId={form.id} />
        <Button className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-primary">
          Publish
        </Button>
      </div>
    </nav>
  );
};

export default BuilderNavbar;
