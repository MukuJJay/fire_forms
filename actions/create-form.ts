"use server";

import {
  createFormSchema,
  createFormSchemaType,
} from "@/interfaces/form-schema";
import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export const createForm = async (values: createFormSchemaType) => {
  const validation = createFormSchema.safeParse(values);
  if (!validation.success) {
    throw new Error("Form not valid!");
  }

  const user = await currentUser();
  if (!user) {
    throw new Error("User not found!");
  }

  const { name, description } = values;

  const form = await db.form.create({
    data: {
      userId: user.id,
      name,
      description,
    },
  });

  if (!form) {
    throw new Error("Something went wrong!");
  }

  return form.id;
};
