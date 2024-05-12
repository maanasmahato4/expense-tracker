import SideBar from "@/components/sidebar";
import React, { Fragment } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-row gap-x-4">
      <SideBar />
      <div>{children}</div>
    </section>
  );
}
