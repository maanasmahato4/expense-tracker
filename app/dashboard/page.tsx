import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Home() {
  const session = await getServerSession();
  if (!session) {
    return redirect("/auth/signin");
  }
  return <div className="flex-grow">Dashboard</div>;
}

export default Home;
