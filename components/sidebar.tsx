"use client";
import Link from "next/link";
import {
  LayoutDashboard,
  Banknote,
  NotebookText,
  ShieldCheck,
} from "lucide-react";
import React from "react";

interface IPage {
  label: string;
  logo: React.ReactNode;
  path: string;
}

export default function SideBar() {
  const pages: IPage[] = [
    {
      label: "DashBoard",
      logo: <LayoutDashboard />,
      path: "/dashboard",
    },
    {
      label: "Budgets",
      logo: <Banknote />,
      path: "/dashboard/banknote",
    },
    {
      label: "Expenses",
      logo: <NotebookText />,
      path: "/dashboard/expenses",
    },
    {
      label: "Upgrade",
      logo: <ShieldCheck />,
      path: "/dashboard/upgrade",
    },
  ];
  return (
    <div className="w-64 flex-col gap-y-4 hidden md:flex border-r-[1px] border-gray-300">
      <h3 className="text-2xl text-purple-500 text-center py-4 w-full">
        DevExpenses
      </h3>
      <div className="flex flex-col items-center justify-center gap-y-4">
        {pages.map((page: IPage, idx: number) => {
          return (
            <Link
              key={idx}
              href={page.path}
              className="flex flex-row pl-4 gap-x-2 py-4 hover:bg-slate-200 w-full"
            >
              {page.logo}
              <span>{page.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
