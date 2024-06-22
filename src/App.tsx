import { About } from "@components/About";
import SkillList from "@components/SkillList";
import { Header } from "./components/Header";
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
