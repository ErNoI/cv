import { ScrollTopButton } from "./components/ScrollButton";
import About from "./Sections/About";
import { Contact } from "./Sections/Contact";
import { Experience } from "./Sections/Experience";
import { Header } from "./Sections/Header";
import { SkillList } from "./Sections/Skills";

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
