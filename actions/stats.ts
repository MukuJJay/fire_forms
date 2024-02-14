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
