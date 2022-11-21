import NextAuth, { NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const admins = ["fryzee.cartwright@gmail.com"];

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Auth0Provider ({
      clientId: process.env.AUTH0_CLIENT_ID as string,
      clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  callbacks: {
    session: ({ session, user, token }) => {
      console.log(session);
      console.log(user);
      console.log(token);
      return {
        ...session,
        email: token.email
      }
    },
    jwt: ({ token, profile }) => {
      return {
        ...token,
        profile
        
      }
    }
  },
  session: { strategy: "jwt" }
};
export default NextAuth(authOptions);
