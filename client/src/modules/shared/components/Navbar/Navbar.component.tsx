import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import NavbarProjects from "./NavbarProjects.component";
import NavbarNavigation from "./NavbarNavigation.component";

export default async function Navbar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroup className="gap-2">
            <NavbarNavigation />
          </SidebarGroup>
        </SidebarGroup>
        <SidebarGroup />
        <SidebarGroup>
          <NavbarProjects />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
