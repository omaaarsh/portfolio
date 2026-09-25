import { useParams, Link } from "react-router-dom";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { projects } from "../data/profile";
import { PageHeader } from "../components/ui/PageHeader";
import { GitHubIcon } from "../components/ui/BrandIcons";
import { Reveal } from "../components/ui/Reveal";
import "./project-detail.css";

export function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="container detail-missing">
        <h1>Project not found</h1>
        <Link to="/" className="btn btn--ghost">Back to home</Link>
      </main>
    );
  }

  return (
    <main>
      <PageHeader eyebrow={`// ${project.role} · ${project.period}`} title={project.title} subtitle={project.tagline} />
      <div className="container detail">
        <div className="detail__main">
          <Reveal>
            <p className="detail__lead">{project.longDesc}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="detail__h2"><Sparkles size={18} /> Key features</h2>
            <ul className="detail__list">
              {project.features.map((f) => <li key={f}><Check size={16} /> {f}</li>)}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="detail__h2">Highlights</h2>
            <div className="detail__chips">
              {project.highlights.map((h) => <span key={h}>{h}</span>)}
            </div>
          </Reveal>
        </div>

        <aside className="detail__side">
          <Reveal delay={0.1}>
            <div className="detail__card glass">
              <div className="detail__row"><span>Role</span><b>{project.role}</b></div>
              <div className="detail__row"><span>Period</span><b>{project.period}</b></div>
              <div className="detail__row detail__row--col">
                <span>Tech stack</span>
                <div className="detail__tags">{project.tags.map((t) => <em key={t}>{t}</em>)}</div>
              </div>
              <div className="detail__links">
                {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn--primary"><GitHubIcon width={16} height={16} /> View code</a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn--ghost"><ArrowUpRight size={16} /> Live demo</a>}
              </div>
            </div>
          </Reveal>
        </aside>
      </div>

      <div className="container detail__more">
        <h3>More projects</h3>
        <div className="detail__morelist">
          {projects.filter((p) => p.slug !== project.slug).slice(0, 3).map((p) => (
            <Link key={p.slug} to={`/projects/${p.slug}`} className="detail__morecard glass">
              <p.icon size={20} />
              <span>{p.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
