import SkillList from "@/sections/Skills";
import { Header } from "./sections/Header";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import About from "./sections/About";
import { ScrollTopButton } from "./components/ScrollButton";
function App() {
  return (
    <div className="bg-primary sm:max-w-6xl sm:mx-auto border-l border-r border-action ">
      <Header />
      <About />
      <Experience />
      <SkillList />
      <Contact />
      <ScrollTopButton />
    </div>
  );
}

export default App;
