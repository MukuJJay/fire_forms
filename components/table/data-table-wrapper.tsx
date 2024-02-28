"use client";

import { Form, FormSubmissions } from "@prisma/client";
import { DataTable } from "./data-table";
import useDateRange from "@/hooks/use-date-range";
import { format, isAfter, isBefore } from "date-fns";

type FormWithSubmissions = Form & { FormSubmissions: FormSubmissions[] };

const DataTableWrapper = ({ form }: { form: FormWithSubmissions }) => {
  const { date } = useDateRange();

  const formSubmission = form.FormSubmissions;

  if (formSubmission.length === 0) {
    return [];
  }

  let data = [];

  for (const submission of formSubmission) {
    const content = JSON.parse(submission.content);
    const obj: Record<string, any> = { id: submission.id };

    for (const key in content) {
      const { value } = content[key];
      obj[key] = value;
    }

    const creationDate = format(new Date(submission.createdAt), "dd-MMM-yyyy");

    obj.createdAt = creationDate;
    data.push(obj);
  }

  if (date) {
    if (date.from && date.to) {
      data = data.filter((elem: any) => {
        return (
          !isBefore(elem.createdAt, date.from) &&
          !isAfter(elem.createdAt, date.to)
        );
      });
    }
  }

  return <DataTable contentStr={form.content} data={data} />;
};

export default DataTableWrapper;
