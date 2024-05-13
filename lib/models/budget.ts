import mongoose from "mongoose";

const BudgetSchema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
    },
    budgetName: {
      type: String,
      required: true,
    },
    budgetAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Budget = mongoose.models.Budget || mongoose.model("Budget", BudgetSchema);

export default Budget;
