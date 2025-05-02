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
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/auth/oauth",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: user.email,
              name: user.name,
              image: user.image,
              provider: account?.provider,
              providerAccountId: account?.providerAccountId,
            }),
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
    async session({ session, user }) {
      session.user = user;
      return session;
    },
    async redirect() {
      return "/dashboard";
    },
  },
});
export { handler as GET, handler as POST };
