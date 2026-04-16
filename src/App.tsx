// import { ScrollTopButton } from "./components/ScrollButton";
import { SideNav } from "./components/SideNav";
import About from "./Sections/About";
import { Contact } from "./Sections/Contact";
import { Experience } from "./Sections/Experience";
import { Header } from "./Sections/Header";
import { SkillsV2 } from "./Sections/SkillsV2";

function App() {
  return (
    <div className="border-l border-r border-action bg-primary sm:mx-auto sm:max-w-6xl">
      <SideNav />
      <Header />
      <About />
      <Experience />
      <SkillsV2 />
      <Contact />
      {/* <ScrollTopButton /> */}
    </div>
  );
}

export default App;
