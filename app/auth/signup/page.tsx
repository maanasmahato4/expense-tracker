"use client";
import SignUpForm from "@/components/forms/signup-form";
import GoogleAuth from "@/components/google-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function SignUpPage() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[35%] p-4 border-2 shadow-sm shadow-zinc-300 rounded-sm">
        <SignUpForm />
        <div className="flex items-center justify-end gap-x-4">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
