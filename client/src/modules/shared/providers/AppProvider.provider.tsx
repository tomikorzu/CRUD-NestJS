"use client";

import SidebarProvider from "./SidebarProvider.provider";
import { ChildrenProp } from "../interfaces/common.interface";
import { SessionProvider } from "next-auth/react";

export default function AppProvider({ children }: ChildrenProp) {
  return (
    <SessionProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </SessionProvider>
  );
}
