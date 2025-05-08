import InterfaceWrapper from "../shared/components/InterfaceWrapper/InterfaceWrapper.component";
import CreateProjectButton from "./components/CreateProjectButton.component";

export default function Projects() {
  return (
    <InterfaceWrapper>
      <main className="p-5 gap-2">
        <h1 className="text-2xl font-bold">All Projects</h1>
        <div className="flex items-center gap-5">
          <p>See all of your projects or create one</p>
          <CreateProjectButton />
        </div>
      </main>
    </InterfaceWrapper>
  );
}
