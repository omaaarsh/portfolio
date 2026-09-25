import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { companyDetail, experience } from "../data/profile";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import "./experience-detail.css";

export function ExperienceDetail() {
  const c = companyDetail;
  const grad = experience.find((j) => j.org === "StyleHub");

  return (
    <main>
      <PageHeader eyebrow={`// ${c.role} · ${c.type} · ${c.period}`} title={`${c.role} at ${c.company}`} subtitle={c.intro} />

      <div className="container xp">
        <Reveal>
          <div className="xp__meta glass">
            <div><span>Company</span><b><a href={c.companyUrl} target="_blank" rel="noreferrer">{c.company} <ExternalLink size={13} /></a></b></div>
            <div><span>Product</span><b>{c.product}</b></div>
            <div><span>Location</span><b>{c.location}</b></div>
            <div><span>Period</span><b>{c.period}</b></div>
          </div>
        </Reveal>

        <h2 className="xp__h2">What I work on</h2>
        <div className="xp__areas">
          {c.areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <article className="xp__area glass">
                <div className="xp__area-head">
                  <span className="xp__icon"><a.icon size={20} /></span>
                  <h3>{a.title}</h3>
                </div>
                <ul>{a.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="xp__stack">
            <h2 className="xp__h2">Stack I use here</h2>
            <div className="xp__tags">{c.stack.map((t) => <span key={t}>{t}</span>)}</div>
          </div>
        </Reveal>

        {grad && (
          <Reveal>
            <div className="xp__grad glass">
              <span className="eyebrow">// also</span>
              <h2 className="xp__h2" style={{ marginTop: "0.4rem" }}>{grad.org} — Graduation Project {grad.grade && <em>· {grad.grade}</em>}</h2>
              <p className="xp__gradsummary">{grad.summary}</p>
              <ul className="xp__gradlist">{grad.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <Link to="/projects/social-media-service" className="btn btn--ghost">See the flagship service »</Link>
            </div>
          </Reveal>
        )}
      </div>
    </main>
  );
}
