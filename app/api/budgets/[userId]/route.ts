import { ExtendedNextApiRequest } from "../../auth/register/route";
import { NextResponse } from "next/server";
import Budget from "@/lib/models/budget";
import { RouteParams } from "@/@types/index";
import dbConn from "@/lib/database/database";

dbConn();
export async function GET(req: ExtendedNextApiRequest, context: RouteParams) {
  try {
    const userId = context.params.userId;
    const budgets = await Budget.find({ uuid: userId })
      .populate("expenses")
      .exec();
    return new NextResponse(JSON.stringify(budgets), { status: 200 });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
