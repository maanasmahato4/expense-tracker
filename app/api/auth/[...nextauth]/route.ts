import User from "@/lib/models/user";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { compare } from "bcrypt";
import dbConn from "@/lib/database/database";
import NextAuth from "next-auth/next";
import { TUser } from "@/@types/index";

dbConn();

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const { _doc: user } = await User.findOne({
          email: credentials?.email,
        });

        if (!user) {
          throw new Error("user does not exist");
        }
        if (!credentials?.password) {
          throw new Error("password not found");
        }

        const matched = await compare(credentials?.password, user.password);
        if (!matched) {
          throw new Error("Invalid Credentials!");
        }

        const userCreds = {
          id: user._id,
          username: user.username,
          email: user.email,
        };
        return userCreds;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user as unknown as Omit<
          TUser,
          "password" | "confirmPassword"
        >;
      }
      return token;
    },
    async session({ token, session }) {
      session.id = token.user.id;
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
