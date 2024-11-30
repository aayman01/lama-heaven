import NextAuth, { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "./modal/user";
import { dbConnect } from "../src/lib/mongoDb";
import { compare } from "bcryptjs";
import { MongoDBAdapter } from "@auth/mongodb-adapter"; 

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials === null) return null;
        const { email, password } = credentials;
        if (!email || !password) {
          throw new CredentialsSignin("Please provide both email & password");
        }
        await dbConnect();
        try {
          const user = await User.findOne({
            email: credentials?.email,
          });
          if (user) {
            const isMatch = await compare(credentials?.password, user.password);
            if (isMatch) {
              return user;
            } else {
              throw new Error("Check your password");
            }
          } else {
            throw new Error("user not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_KEY,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  // callbacks: {
  //   async signIn({ user, account }) {
  //     if (account.provider === "google") {
  //       await dbConnect();
  //       const existingUser = await User.findOne({ email: user.email });
  //       if (!existingUser) {
  //         await User.create({
  //           email: user.email,
  //           name: user.name,
  //           role: "user",
  //         });
  //       }
  //       return true;
  //     }
  //     return true;
  //   },
  //   async session({ session, token }) {
  //     if (token) session.user.id = token.id;
  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     if (user) token.id = user.id;
  //     return token;
  //   },
  // },

  pages: {
    signIn: "/login",
  },
});
