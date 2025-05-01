import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login / Signup",
  description: "Login or Signup with Google, Facebook or Apple",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
