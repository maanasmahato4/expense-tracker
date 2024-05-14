import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    expenseName: {
      type: String,
      required: true,
    },
    expenseAmount: {
      type: String,
      required: true,
    },
    budgetId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true }
);

const Expense =
  mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);

export default Expense;
