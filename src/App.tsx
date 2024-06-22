import { About } from "@/Sections/About";
import SkillList from "@/Sections/SkillList";
import { Header } from "./Sections/Header";
function App() {
  return (
    <div className="bg-primary max-w-6xl mx-auto border-l border-r border-action">
      <Header />
      <About />
      <SkillList />
    </div>
  );
}

export default App;
