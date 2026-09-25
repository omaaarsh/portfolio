import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
