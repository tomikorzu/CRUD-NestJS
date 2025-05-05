"use client";

import SidebarProvider from "./SidebarProvider.provider";
import { ChildrenProp } from "../interfaces/common.interface";
import { SessionProvider } from "next-auth/react";
import AuthProvider from "./AuthProvider.provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";

export default function AppProvider({ children }: ChildrenProp) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </AuthProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
