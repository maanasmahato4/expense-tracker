import AddBudget from "@/components/add-budget";

async function Budget() {
  return (
    <section className="p-4">
      <h3 className="text-3xl font-bold">My Budgets</h3>
      <div className="flex flex-row flex-wrap justify-start gap-6 py-4">
        <AddBudget />
      </div>
    </section>
  );
}

export default Budget;
