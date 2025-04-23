import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

interface ProjectsChildren {
  id: number;
  avatar: string;
  name: string;
}

async function getProjects() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function NavbarProjects() {
  const projects = await getProjects();
  return (
    <SidebarMenu>
      {projects.splice(0, 5).map((project: ProjectsChildren) => (
        <SidebarMenuItem key={project.id}>
          <SidebarMenuButton
            className="transition duration-300 hover:brightness-50"
            asChild
            tooltip={project.name}
          >
            <Link
              href={`/projects/${project.id}`}
              style={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              {project.avatar}
              {project.name}
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
