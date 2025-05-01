"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { ChildrenProp } from "../interfaces/common.interface";
import { cookies } from "next/headers";
import { SessionProvider } from "next-auth/react";

export default async function AppProvider({ children }: ChildrenProp) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SessionProvider>
      <SidebarProvider defaultOpen={defaultOpen}>{children}</SidebarProvider>
    </SessionProvider>
  );
}
