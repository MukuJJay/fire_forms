"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowLeft,
  ArrowRight,
  Copy,
  CopyCheck,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip } from "@/components/tooltip";
import useMount from "@/hooks/useMount";
import { useState } from "react";
import Link from "next/link";
import { Form } from "@prisma/client";

const PublishCard = ({ form }: { form: Form }) => {
  const mounted = useMount();
  if (!mounted) {
    return null;
  }

  const detailsUrl = window.location.origin + "/form/" + form.id;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Card className="mdm:w-[700px] relative overflow-hidden bg-gradient-to-r from-stone-900 to-zinc-900">
        <CardHeader className="space-y-4 text-center">
          <CardTitle>Your form is now published!</CardTitle>
          <CardDescription>
            Anyone with the below link can see and submit the form.
          </CardDescription>
          <CardDescription>
            <CopyUrl shareId={form.shareURL} />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <VistsFormBtn shareId={form.shareURL} />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href={window.location.origin}>
            <Button
              variant={"ghost"}
              className="text-base flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
          </Link>

          <Link href={detailsUrl}>
            <Button
              variant={"ghost"}
              className="text-base flex items-center gap-1"
            >
              Details
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export const VistsFormBtn = ({ shareId }: { shareId: string }) => {
  const mounted = useMount();
  if (!mounted) {
    return null;
  }

  const shareUrl = window.location.origin + "/submit/" + shareId;
  return (
    <Link
      target="_blank"
      href={shareUrl}
      className="flex p-2 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 gap-2"
    >
      <ExternalLink className="w-4 h-4" /> Visit Form
    </Link>
  );
};

export const CopyUrl = ({ shareId }: { shareId: string }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const mounted = useMount();
  if (!mounted) {
    return null;
  }

  const shareUrl = window.location.origin + "/submit/" + shareId;

  const copyShareUrl = () => {
    navigator.clipboard.writeText(shareUrl);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="flex items-center gap-2 w-full">
      <Input value={shareUrl} readOnly />
      <Tooltip label="Copy Form URL" sideOffset={12} delayDuration={0}>
        <Button variant={"outline"} onClick={copyShareUrl}>
          {isCopied ? (
            <CopyCheck className="w-5 h-5 text-primary" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </Button>
      </Tooltip>
    </div>
  );
};

export default PublishCard;
