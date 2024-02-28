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

export const getFormById = async (id: string, formSubmissions?: boolean) => {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found!");
  }

  const form = await db.form.findUnique({
    where: {
      id,
      userId: user.id,
    },
    include: {
      FormSubmissions: formSubmissions,
    },
  });

  if (!form) {
    throw new Error("Form not found!");
  }

  return form;
};

export const getFormByShareId = async (shareId: string) => {
  const form = await db.form.update({
    where: {
      shareURL: shareId,
    },
    data: {
      visits: {
        increment: 1,
      },
    },
    select: {
      content: true,
      published: true,
    },
  });

  if (!form) {
    throw new Error("Form not found!");
  }

  return form;
};
