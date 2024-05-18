"use client";
import { IBudget } from "@/@types";
import { Progress } from "@/components/ui/progress";
import React, { useMemo } from "react";
import { IExpense } from "@/@types";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

interface BudgetCardProps {
  budget: IBudget;
}

const BudgetCard: React.FC<BudgetCardProps> = ({ budget }) => {
  const totalItems = useMemo(() => {
    if (!budget) return 0;
    return budget.expenses.reduce(
      (total: number, expense: IExpense) => total + 1,
      0
    );
  }, [budget]);

  const totalExpenseAmount = useMemo(() => {
    if (!budget) return 0; // Ensure budget is available
    return budget.expenses.reduce(
      (total: number, expense: IExpense) =>
        total + parseInt(expense.expenseAmount),
      0
    );
  }, [budget]);

  const remainingBudget = useMemo(() => {
    if (!budget) return 0;
    return budget.budgetAmount - totalExpenseAmount;
  }, [budget, totalExpenseAmount]);

  const progress = useMemo(() => {
    if (!budget) return 0;
    return (totalExpenseAmount / budget.budgetAmount) * 100;
  }, [budget, totalExpenseAmount]);

  async function deleteBudget(id: string) {
    try {
      const result = await fetch(`/api/budget/${id}`, { method: "DELETE" });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-w-80 min-h-36 rounded-sm border-zinc-500 border-[2px] p-4 border-solid flex flex-col gap-y-4 hover:cursor-pointer hover:shadow-md shadow-zinc-400">
      <Link href={`/dashboard/expense/${budget._id}`}>
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">{budget.budgetName}</h3>
          <p className="text-lg font-semibold text-blue-400">
            ${budget.budgetAmount}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-md">Items: {totalItems}</p>
          <div>
            <p className="text-sm text-zinc-500">Spent: {totalExpenseAmount}</p>
            <p className="text-sm text-zinc-500">
              Remaining: {remainingBudget}
            </p>
          </div>
        </div>
        <Progress className="h-[6px]" value={progress || 0} />
      </Link>
      <div className="flex flex-row gap-2 gap-x-4 justify-end">
        <SquarePen color="blue" />
        <Dialog>
          <DialogTrigger>
            <Trash2 color="red" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                budget from our servers.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-row justify-between mt-4">
              <DialogClose className="hover:bg-blue-400 p-2 rounded-sm hover:text-white">
                Cancel
              </DialogClose>
              <Button onClick={() => deleteBudget(budget._id)}>
                Confirm Delete
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BudgetCard;
