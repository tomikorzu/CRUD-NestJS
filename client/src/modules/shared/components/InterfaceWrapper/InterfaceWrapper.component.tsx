import { SidebarTrigger } from "@/components/ui/sidebar";
import Navbar from "../Navbar/Navbar.component";
import { ChildrenProp } from "../../interfaces/common.interface";

export default function InterfaceWrapper({ children }: ChildrenProp) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        <SidebarTrigger />
        {children}
      </main>
    </>
  );
}
