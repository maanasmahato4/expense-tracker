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
  };
}
