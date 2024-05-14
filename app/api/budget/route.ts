import { ExtendedNextApiRequest } from "../auth/register/route";
import { NextResponse } from "next/server";
import Budget from "@/lib/models/budget";
import dbConn from "@/lib/database/database";

dbConn();

export async function POST(req: ExtendedNextApiRequest) {
  try {
    const budget = await req.json();
    const newBudget = {
      ...budget,
      expenses: [],
    };
    await Budget.create(newBudget);
    return new NextResponse(JSON.stringify({ message: "budget created" }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
