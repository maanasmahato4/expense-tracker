export type TUser = {
  id: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  createdAt: string;
  updatedAt: string;
  name?: string;
  image?: string;
};

export interface RouteParams {
  params: {
    budgetId: string;
    userId: string;
  };
}

export interface IExpense {
  _id: string;
  budgetId: string;
  createdAt: string;
  updatedAt: string;
  expenseAmount: string;
  expenseName: string;
}
export interface IBudget {
  _id: string;
  uuid: string;
  budgetName: string;
  budgetAmount: number;
  expenses: IExpense[];
  createdAt: string;
  updatedAt: string;
}
