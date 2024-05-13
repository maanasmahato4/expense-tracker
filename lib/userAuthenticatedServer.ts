import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function userAuthenticatedInTheServer() {
  try {
    const session = await getServerSession();
    if (!session) {
      return redirect("/auth/signin");
    }
    return session.user;
  } catch (error) {
    console.error(error);
  }
}
