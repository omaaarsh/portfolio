import { Link } from "react-router-dom";
import { experience } from "../data/profile";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import "./experience.css";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="// where I've shipped" title="Experience" />
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.08}>
              <article className="job glass">
                <div className="job__head">
                  <div>
                    <h3 className="job__role">{job.role}</h3>
                    <p className="job__org">
                      {job.orgUrl ? <a href={job.orgUrl} target="_blank" rel="noreferrer">{job.org}</a> : job.org}
                      {job.grade && <span className="job__grade">Grade {job.grade}</span>}
                    </p>
                  </div>
                  <span className="job__period">{job.period}</span>
                </div>
                <p className="job__summary">{job.summary}</p>
                <ul className="job__points">
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <div className="job__stack">
                  {job.stack.map((t) => <span key={t}>{t}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="timeline__cta">
            <Link to="/experience" className="btn btn--ghost">See my full experience at Techkhana »</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
