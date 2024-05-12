"use client";
import SignInForm from "@/components/forms/signin-form";
import GoogleAuth from "@/components/google-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function SignInPage() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [router, session]);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" w-[35%] p-4 border-2 shadow-sm shadow-zinc-300 rounded-sm">
        <SignInForm />
        <div className="flex items-center justify-end gap-x-4">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
