import { ExtendedNextApiRequest } from "../auth/register/route";
import { NextResponse } from "next/server";
import Budget from "@/lib/models/budget";
import dbConn from "@/lib/database/database";

export async function POST(req: ExtendedNextApiRequest) {
  try {
    dbConn();
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
    console.log(error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
