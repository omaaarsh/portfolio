import { profile, stats } from "../data/profile";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import "./about.css";

export function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__text">
          <SectionHeading eyebrow="// about me" title="Backend engineer who ships to production" />
          <Reveal delay={0.05}>
            <p className="about__lead">{profile.about}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="about__note">
              I don't just write endpoints — I own features end-to-end: architecture, implementation,
              testing, deployment, and the production support after launch.
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="about__stats">
            {stats.map((s) => (
              <div key={s.label} className="stat glass">
                <div className="stat__value">{s.value}<span>{s.suffix}</span></div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
