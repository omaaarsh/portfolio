import { skills } from "../data/profile";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import "./skills.css";

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow="// my toolbox" title="Skills & Stack" />
        <div className="skills__grid">
          {skills.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <article className="skillcard glass">
                <div className="skillcard__head">
                  <span className="skillcard__icon"><g.icon size={18} /></span>
                  <h3>{g.title}</h3>
                </div>
                <div className="skillcard__items">
                  {g.items.map((it) => <span key={it}>{it}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
