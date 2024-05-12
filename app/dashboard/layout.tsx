import Header from "@/components/header";
import SideBar from "@/components/sidebar";
import React, { Fragment } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-row h-full">
      <SideBar />
      <div className="flex-grow">
        <Header />
        {children}
      </div>
    </section>
  );
}
