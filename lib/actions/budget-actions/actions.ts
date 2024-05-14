"use server";

import dbConn from "@/lib/database/database";
import Budget from "@/lib/models/budget";

export const getBudgetsAction = async (userID: string) => {
  try {
    dbConn();
    console.log(userID);
    const budgets = await Budget.find({ uuid: userID });
    return budgets;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};
