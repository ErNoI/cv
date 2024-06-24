import SkillList from "@/sections/Skills";
import { Header } from "./sections/Header";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { useRef } from "react";
import About from "./sections/About";
function App() {
  const aboutRef = useRef<HTMLDivElement | null>();
  const contactRef = useRef<HTMLDivElement | null>();
  const experienceRef = useRef<HTMLDivElement | null>();

  return (
    <div className="bg-primary max-w-6xl mx-auto border-l border-r border-action">
      <Header />
      <About />
      <Experience />
      <SkillList />
      <Contact />
    </div>
  );
}

export default App;
