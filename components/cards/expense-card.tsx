"use client";

import { IExpense } from "@/@types";

interface ExpenseCardProps {
  expense: IExpense;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ expense }) => {
  return (
    <div className="min-w-80 rounded-sm border-zinc-500 border-[2px] p-4 border-solid flex flex-row justify-between gap-y-4 hover:cursor-pointer hover:shadow-md shadow-zinc-400">
      <h3 className="text-xl font-bold">{expense.expenseName}</h3>
      <p className="text-md font-semibold">{expense.expenseAmount}</p>
    </div>
  );
};

export default ExpenseCard;
