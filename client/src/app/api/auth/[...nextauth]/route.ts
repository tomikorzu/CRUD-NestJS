import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID!,
      clientSecret: process.env.APPLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        const userData = {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          provider: account?.provider,
          providerAccountId: account?.providerAccountId,
        };

        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/users",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          }
        );

        if (!response.ok) {
          console.error(
            "❌ Backend responded with error:",
            response.status,
            await response.text()
          );
          return false;
        }

        return true;
      } catch (error) {
        console.error("❌ Error in signIn callback:", error);
        return false;
      }
    },
    async session({ session, token }) {
      session.user = {
        email: token.email,
        name: token.name,
        image: token.picture,
        id: token.sub,
      };
      return session;
    },
    async jwt({ token, account, profile, user }) {
      if (account && profile) {
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
        token.sub =
          user.id || profile?.sub || profile?.id || account.providerAccountId;
      }

      return token;
    },
    async redirect() {
      return "/dashboard";
    },
  },
});
export { handler as GET, handler as POST };
