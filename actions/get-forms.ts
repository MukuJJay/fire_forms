"use server";

import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export const getForms = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found!");
  }

  const forms = await db.form.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  if (!forms) {
    return [];
  }

  return forms;
};
