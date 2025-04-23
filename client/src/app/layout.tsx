import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/modules/shared/providers/AppProvider.provider";

export const metadata: Metadata = {
  title: "Project Managment",
  description: "Create and manage your projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
