import { ExtendedNextApiRequest } from "../../auth/register/route";
import { NextResponse } from "next/server";
import Budget from "@/lib/models/budget";
import { RouteParams } from "@/@types/index";
import dbConn from "@/lib/database/database";

export async function GET(req: ExtendedNextApiRequest, context: RouteParams) {
  try {
    dbConn();
    const budgetId = context.params.budgetId;
    const budget = await Budget.findById(budgetId).populate("expenses").exec();
    return new NextResponse(JSON.stringify(budget), { status: 200 });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function DELETE(
  req: ExtendedNextApiRequest,
  context: RouteParams
) {
  try {
    dbConn();
    const budgetId = context.params.budgetId;
    console.log(budgetId);
    const result = await Budget.findByIdAndDelete(budgetId);
    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
