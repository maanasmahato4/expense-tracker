"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { PlusIcon } from "lucide-react";
import AddBudgetForm from "./forms/add-budget-form";
export default function AddBudget() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="min-w-80 min-h-36 rounded-sm border-zinc-500 border-[2px] border-dashed flex items-center justify-center bg-zinc-300 hover:cursor-pointer">
          <PlusIcon />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Budget</DialogTitle>
          <AddBudgetForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
