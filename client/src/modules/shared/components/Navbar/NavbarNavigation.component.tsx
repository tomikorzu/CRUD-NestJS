"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderKanban, Home, Inbox, Users } from "lucide-react";

interface NavigationItem {
  title: string;
  url: string;
  icon: any;
}

const navigationItems: NavigationItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Team",
    url: "/team",
    icon: Users,
  },
];

export default function NavbarNavigation() {
  return (
    <>
      {navigationItems.map((item) => {
        const pathname = usePathname();
        const Icon = item.icon;
        const isActive = item.url === pathname;
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              className={`transition duration-300 ${
                isActive ? "" : "hover:brightness-50"
              }`}
              asChild
              isActive={isActive}
              tooltip={item.title}
            >
              <Link href={item.url}>
                <Icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      })}
    </>
  );
}
