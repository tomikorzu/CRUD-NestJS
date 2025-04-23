"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { ChildrenProp } from "../interfaces/common.interface";

export default function AppProvider({ children }: ChildrenProp) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
