"use server";

import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs";

export const getUserStats = async () => {
  const user = await currentUser();
  if (!user) {
    throw "user not found!";
  }

  const stats = await db.form.aggregate({
    where: {
      userId: user.id,
    },
    _sum: {
      visits: true,
      submissions: true,
    },
  });

  const calc: Record<string, number> = {};
  const calc_string: Record<string, string> = {};

  calc.visits = stats._sum.visits || 0;
  calc.submissions = stats._sum.submissions || 0;
  calc.submissionRate = (calc.visits / calc.submissions) * 100 || 0;
  calc.bounceRate = calc.visits > 0 ? 100 - calc.submissionRate : 0;

  for (const key in calc) {
    calc_string[key] = calc[key].toString();
  }

  return calc_string;
};

export const getSingleFormStatsById = async (formId: string) => {
  const user = await currentUser();
  if (!user) {
    throw new Error("User not found!");
  }

  const stats = await db.form.findUnique({
    where: {
      id: formId,
      userId: user.id,
    },
  });

  if (!stats) {
    throw new Error("Form not found!");
  }

  const visits = stats.visits;
  const submissions = stats.submissions;
  const submissionRate = (visits / submissions) * 100 || 0;
  const bounceRate = visits > 0 ? 100 - submissionRate : 0;

  return { visits, submissions, submissionRate, bounceRate };
};
