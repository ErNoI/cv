import { About } from "@/sections/About";
import SkillList from "@/sections/Skills";
import { Header } from "./sections/Header";
import { Experience } from "./sections/Experience";
function App() {
  return (
    <div className="bg-primary max-w-6xl mx-auto border-l border-r border-action">
      <Header />
      <About />
      <SkillList />
      <Experience />
    </div>
  );
}

export default App;
