import {
  FolderKanban,
  Home,
  Inbox,
  LogOut,
  Settings,
  Users,
} from "lucide-react";

export const navigationItems = [
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

export const actionItems = [
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Logout",
    icon: LogOut,
  },
];
