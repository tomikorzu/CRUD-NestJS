"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { navigationItems } from "./Items.utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroup className="gap-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.url === window.location.pathname;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`transition duration-300 ${
                      isActive ? "" : "hover:brightness-50"
                    }`}
                    asChild
                    isActive={isActive}
                  >
                    <Link href={item.url}>
                      <Icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarGroup>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
