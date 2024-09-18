import SkillList from "@/sections/Skills";
import { Header } from "./sections/Header";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import About from "./sections/About";
import { ScrollTopButton } from "./components/ScrollButton";
function App() {
  return (
    <div className="border-l border-r border-action bg-primary sm:mx-auto sm:max-w-6xl">
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
