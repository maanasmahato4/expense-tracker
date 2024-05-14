"use client";
import AddBudget from "@/components/add-budget";
import useBudgetList from "@/lib/hooks/useBudgetList";
import useUserAuthenticatedInTheClient from "@/lib/hooks/userAuthenticatedClient";
import Link from "next/link";
import BudgetCard from "@/components/cards/budget-card";
import { IBudget } from "@/@types/index";

function BudgetPage() {
  const user = useUserAuthenticatedInTheClient();
  const { data, isLoading, error } = useBudgetList(user.id);

  if (isLoading) {
    return <h3>loading...</h3>;
  } else if (error) {
    console.error(error);
    return <h3>error</h3>;
  }
  return (
    <section className="p-4">
      <h3 className="text-3xl font-bold">My Budgets</h3>
      <div className="flex flex-row flex-wrap justify-start gap-6 py-4">
        <AddBudget />
        <div className="flex flex-row flex-wrap justify-start gap-6 py-4">
          {data.map((budget: IBudget) => {
            return (
              <Link href={`/dashboard/expense/${budget._id}`} key={budget._id}>
                <BudgetCard budget={budget} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BudgetPage;
