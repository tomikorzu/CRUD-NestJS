import { SidebarProvider } from "@/components/ui/sidebar";
import { ChildrenProp } from "../interfaces/common.interface";
import { cookies } from "next/headers";
import { AuthProvider } from "./Auth.provider";

export default async function AppProvider({ children }: ChildrenProp) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AuthProvider>{children}</AuthProvider>
    </SidebarProvider>
  );
}
