import { connectDbCollection } from "@/services/connect-db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      async authorize(credentials, req) {
        const { email } = await JSON.parse(credentials.email);
        const { connection, dbCollection: userCollection } =
          await connectDbCollection("users");
        const user = await userCollection.findOne({ email: email });
        connection.close();
        if (!user) {
          return null;
        }
        return user;
      },
    }),
  ],
  session: { strategy: "jwt" },
  jwt: {
    maxAge: 60 * 24,
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export default handler;
