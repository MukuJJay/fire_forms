"use server";

import { valueType } from "@/hooks/error-checker-zustand";
import { FormElementInstance } from "@/interfaces/form-elements";
import db from "@/lib/db";

export const submitForm = async (shareId: string, content: any) => {
  if (!content) {
    throw new Error("Totally empty form can't be saved!");
  }

  const form = await db.form.findUnique({
    where: {
      shareURL: shareId,
    },
  });

  if (!form) {
    throw new Error("Form not found!");
  }

  // const idArr = [];
  // const contentTemplate: FormElementInstance[] = JSON.parse(form.content);
  // const values: Record<string, valueType> = JSON.parse(content);

  // for (const instance of contentTemplate) {
  //   idArr.push(instance.id);
  // }

  // for (const key in values) {
  //   if (!idArr.includes(key)) {
  //     throw new Error("Format not supported!");
  //   }

  //   for (const instance of contentTemplate) {
  //     if (instance.id === key) {
  //       if (
  //         instance.extraAttributes?.required === true &&
  //         values[key].value.length === 0
  //       ) {
  //         throw new Error("Format not supported!");
  //       }

  //       if (
  //         values[key]?.value.length < instance.extraAttributes?.min ||
  //         values[key]?.value.length > instance.extraAttributes?.max
  //       ) {
  //         throw new Error("Format not supported!");
  //       }
  //     }
  //   }
  // }

  const updateForm = await db.form.update({
    where: {
      shareURL: shareId,
    },
    data: {
      submissions: {
        increment: 1,
      },
      FormSubmissions: {
        create: {
          content: content,
        },
      },
    },
  });

  if (!updateForm) {
    throw new Error("Form submit not possible!");
  }

  return true;
};
