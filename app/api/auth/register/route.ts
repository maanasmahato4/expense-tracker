import dbConn from "@/lib/database/database";
import User from "@/lib/models/user";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { NextApiRequest } from "next";

dbConn();

export interface ExtendedNextApiRequest extends NextApiRequest {
  json: () => Promise<any>;
}

export async function POST(req: ExtendedNextApiRequest): Promise<NextResponse> {
  try {
    const userCreds = await req.json();

    const userExist = await User.findOne({ email: userCreds.email });
    if (userExist) {
      return new NextResponse(
        JSON.stringify({ message: "user already exists" }),
        { status: 409 }
      );
    }

    const { _doc } = await User.create({
      ...userCreds,
      password: await hash(userCreds.password, 10),
    });
    return new NextResponse(
      JSON.stringify({ username: _doc.username, email: _doc.email }),
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
