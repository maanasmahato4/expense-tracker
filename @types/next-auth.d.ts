import { TUser } from "./index";

declare module "next-auth" {
  interface Session {
    id: string;
    user: Omit<TUser, "password" | "confirmPassword">;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: Omit<TUser, "password" | "confirmPassword">;
  }
}
