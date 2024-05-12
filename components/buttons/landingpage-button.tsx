"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import React from "react";

interface LandingPageProps {
  variant:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  children: React.ReactNode;
  path: string;
  className: string;
}
const LandingPageButton: React.FC<LandingPageProps> = ({
  variant = "default",
  children,
  path,
  className,
}) => {
  const router = useRouter();
  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => router.push(path)}
    >
      {children}
    </Button>
  );
};

export default LandingPageButton;
