import { ExtendedNextApiRequest } from "../../auth/register/route";
import { NextResponse } from "next/server";
import Budget from "@/lib/models/budget";
import { RouteParams } from "@/@types/index";
import dbConn from "@/lib/database/database";

dbConn();
export async function GET(req: ExtendedNextApiRequest, context: RouteParams) {
  try {
    const budgetId = context.params.budgetId;
    const budget = await Budget.findById(budgetId);
    return new NextResponse(JSON.stringify(budget), { status: 200 });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
