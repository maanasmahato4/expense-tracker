import dbConn from "@/lib/database/database";
import { NextResponse } from "next/server";
import { ExtendedNextApiRequest } from "../auth/register/route";
import Expense from "@/lib/models/expense";
import Budget from "@/lib/models/budget";

dbConn();

/* export async function GET(req: ExtendedNextApiRequest): Promise<NextResponse> {
  try {
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
} */

export async function POST(req: ExtendedNextApiRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const expense = await Expense.create(body);
    if (!expense) {
      return new NextResponse(
        JSON.stringify({ error: "expense could not be created" }),
        {
          status: 500,
        }
      );
    }
    const budget = await Budget.findById(body.budgetId);
    if (!budget) {
      return new NextResponse(JSON.stringify({ error: "budget not found" }), {
        status: 404,
      });
    }

    const updatedBudget = await Budget.updateOne(
      { _id: budget._id },
      { $push: { expenses: expense._id } }
    );

    if (!updatedBudget) {
      return new NextResponse(JSON.stringify({ error: "budget not updated" }), {
        status: 500,
      });
    }
    return new NextResponse(JSON.stringify({ message: "expense created" }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
