"use client";

import { IExpense } from "@/@types";
import ExpenseCard from "@/components/cards/expense-card";
import AddExpenseForm from "@/components/forms/add-expense-form";
import { Progress } from "@/components/ui/progress";
import useBudget from "@/lib/hooks/useBudget";
import { useMemo } from "react";

function Expense({ params }: { params: { id: string } }) {
  const { data, isLoading, error } = useBudget(params.id);

  const totalItems = useMemo(() => {
    if (!data) return 0;
    return data.expenses.reduce(
      (total: number, expense: IExpense) => total + 1,
      0
    );
  }, [data]);

  const totalExpenseAmount = useMemo(() => {
    if (!data) return 0; // Ensure data is available
    return data.expenses.reduce(
      (total: number, expense: IExpense) =>
        total + parseInt(expense.expenseAmount),
      0
    );
  }, [data]);

  const remainingBudget = useMemo(() => {
    if (!data) return 0;
    return parseInt(data.budgetAmount) - totalExpenseAmount;
  }, [data, totalExpenseAmount]);

  const progress = useMemo(() => {
    if (!data) return 0;
    return (totalExpenseAmount / parseInt(data.budgetAmount)) * 100;
  }, [data, totalExpenseAmount]);

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  if (error) {
    console.error(error);
    return <h3>error...</h3>;
  }

  return (
    <div className="grid grid-cols-2 gap-8 grid-rows-2 p-4">
      <div className="min-w-80 min-h-36 rounded-sm border-[1px] p-4 border-solid border-zinc-400 flex flex-col gap-y-4 hover:cursor-pointer hover:shadow-md shadow-zinc-400">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">{data.budgetName}</h3>
          <p className="text-lg font-semibold text-blue-400">
            ${data.budgetAmount}
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
        <Progress className="h-[8px]" value={progress || 0} />
      </div>
      <div>
        <AddExpenseForm budgetId={params.id} />
      </div>
      <div className="col-span-2 space-y-8">
        <h3 className="text-2xl">Expenses</h3>
        <div className="flex flex-row justify-start flex-wrap gap-4">
          {data.expenses.map((expense: IExpense) => {
            return <ExpenseCard key={expense._id} expense={expense} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Expense;
