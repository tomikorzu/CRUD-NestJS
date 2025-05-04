"use client";

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderKanban, Home, Inbox, Users } from "lucide-react";

interface NavigationItem {
  title: string;
  url: string;
  icon: React.ElementType;
}

const navigationItems: NavigationItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Onboarding",
    url: "/onboarding",
    icon: Users,
  },
  {
    title: "Projects",
    url: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    title: "Inbox",
    url: "/dashboard/inbox",
    icon: Inbox,
  },
  {
    title: "Team",
    url: "/dashboard/team",
    icon: Users,
  },
];

export default function NavbarNavigation() {
  const pathname = usePathname();
  return (
    <>
      {navigationItems.map((item) => {
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
