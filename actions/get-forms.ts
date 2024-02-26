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

export const getFormById = async (id: string) => {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found!");
  }

  const form = await db.form.findUnique({
    where: {
      id,
      userId: user.id,
    },
  });

  if (!form) {
    throw new Error("Form not found!");
  }

  return form;
};

export const getFormByShareId = async (shareId: string) => {
  const form = await db.form.findUnique({
    where: {
      shareURL: shareId,
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
