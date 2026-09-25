import { services } from "../data/profile";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import "./services.css";

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading eyebrow="// what I can do for you" title="Services" />
        <div className="services__grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <article className="service glass">
                <div className="service__icon"><s.icon size={22} /></div>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
