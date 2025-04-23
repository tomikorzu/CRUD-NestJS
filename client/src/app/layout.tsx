import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout.layout";

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
