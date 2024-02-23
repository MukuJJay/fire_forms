"use server";

import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export const saveForm = async (formId: string, content: string) => {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found!");
  }

  const form = await db.form.update({
    where: {
      id: formId,
      userId: user.id,
    },
    data: {
      content,
    },
  });

  if (!form) {
    throw new Error("Form not found!");
  }
};
