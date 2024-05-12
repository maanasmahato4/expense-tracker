import { TUser } from "./index";

declare module "next-auth" {
  interface Session {
    user: Omit<TUser, "password" | "confirmPassword">;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: Omit<TUser, "password" | "confirmPassword">;
  }
}
