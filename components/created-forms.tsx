import { getForms } from "@/actions/get-forms";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistance } from "date-fns";
import { BookOpen, BookOpenText, EyeIcon, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CreatedForms = async () => {
  const forms = await getForms();

  return forms.map((form) => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="truncate">{form?.name}</span>
          {form?.published && <Badge variant={"secondary"}>Pubshied</Badge>}
          {!form?.published && <Badge>Draft</Badge>}
        </CardTitle>
        <CardDescription className="flex items-center justify-between">
          {formatDistance(form?.createdAt, Date.now())} ago
          <span className="flex gap-1 items-center">
            <EyeIcon className="w-4 h-4" />
            {form?.visits}
            <FileCheck className="w-4 h-4" />
            {form?.submissions}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-slate-500">
        {form?.description || "No Description"}
      </CardContent>
      <CardFooter>
        {form?.published && (
          <Button className="w-full p-0" variant={"outline"}>
            <Link
              href={`form/${form.id}`}
              className="flex justify-center items-center gap-3 w-full h-full"
            >
              View Submissions
              <BookOpenText className="w-5 h-5" />
            </Link>
          </Button>
        )}
        {!form?.published && (
          <Button className="w-full p-0" variant={"outline"}>
            <Link
              href={`builder/${form.id}`}
              className="flex justify-center items-center gap-3 w-full h-full"
            >
              Edit Form
              <BookOpen className="w-5 h-5" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  ));
};

export default CreatedForms;
