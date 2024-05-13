"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function useUserAuthenticatedInTheClient() {
  const { data: session } = useSession();
  if (!session) {
    return redirect("/auth/signin");
  }
  return session.user;
}
