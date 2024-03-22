import { NextAuthOptions } from "next-auth";
/* import { options } from "./options";

const handler = NextAuth(options);
export { handler as GET, handler as POST }; */
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GH_CLIENTID,
      clientSecret: process.env.GH_CLIENTSECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "Username: ",
          type: "text",
          placeholder: "your-alter-ego",
        },
        password: { label: "Password: ", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = {
          id: "1",
          name: "Yoko-Yoko",
          email: "yoko@example.com",
          password: "password",
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    /* GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),*/
  ], // put more authProviders here
  /* pages: {
    signIn: "/Login", // route to sign in pages
  }, */
};
