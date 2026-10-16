import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects, type Project, type Section } from "../data/projects";
import { PageHeader } from "../components/ui/PageHeader";
import { InlineText } from "../components/ui/InlineText";
import { Reveal } from "../components/ui/Reveal";
import "./project-detail.css";

function MetaTable({ project }: { project: Project }) {
  return (
    <dl className="pd-meta">
      {project.meta.map((m) => (
        <div key={m.label} className="pd-meta__row">
          <dt>{m.label}</dt>
          <dd>{m.value}</dd>
        </div>
      ))}
      <div className="pd-meta__row">
        <dt>Code</dt>
        <dd>
          {project.code.map((c, i) => (
            <span key={c.label}>
              {i > 0 && " · "}
              <a href={c.href} target="_blank" rel="noreferrer">{c.label}</a>
            </span>
          ))}
          {project.codeNote}
        </dd>
      </div>
    </dl>
  );
}

function SectionBlock({ section }: { section: Section }) {
  return (
    <Reveal>
      <section className="pd-section">
        <h2>{section.title}</h2>
        {section.table && (
          <div className="pd-table" role="region" aria-label={section.title} tabIndex={0}>
            <table>
              <thead>
                <tr>{section.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
              </thead>
              <tbody>
                {section.table.rows.map((row) => (
                  <tr key={row[0] + row[1]}>
                    {row.map((cell, i) => (i === 0
                      ? <th key={i} scope="row"><InlineText text={cell} /></th>
                      : <td key={i}><InlineText text={cell} /></td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {section.body && <p><InlineText text={section.body} /></p>}
        {section.bullets && (
          <ul>
            {section.bullets.map((b) => (
              <li key={b.text}>
                {b.lead && <b>{b.lead} </b>}
                <InlineText text={b.text} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </Reveal>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    return (
      <main className="container detail-missing">
        <h1>Project not found</h1>
        <Link to="/" className="btn btn--ghost">Back to home</Link>
      </main>
    );
  }

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      <PageHeader eyebrow={`${project.num} · ${project.eyebrow}`} title={project.title} subtitle={project.lede} />

      <article className="container pd">
        <Reveal>
          <ul className="pd-tags" aria-label="Tech stack">
            {project.tags.map((t) => <li key={t}>{t}</li>)}
          </ul>
          <MetaTable project={project} />
        </Reveal>

        {project.metrics && (
          <Reveal>
            <div className={`pd-metrics pd-metrics--${project.metrics.length}`}>
              {project.metrics.map((m) => (
                <div key={m.label} className="pd-metric">
                  <strong>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        <Reveal>
          <section className="pd-section">
            <h2>Overview</h2>
            <p>{project.overview}</p>
          </section>
        </Reveal>

        {project.sections.map((s) => <SectionBlock key={s.title} section={s} />)}

        {project.posters.map((poster) => (
          <Reveal key={poster.src}>
            <figure className="pd-poster">
              <img src={poster.src} alt={poster.alt} width={poster.width} height={poster.height} loading="lazy" decoding="async" />
              <figcaption>{poster.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </article>

      <nav className="container pd-pager" aria-label="More projects">
        <div className="pd-pager__inner">
          <Link to={`/projects/${prev.slug}`} className="pd-pager__link">
            <span><ArrowLeft size={15} /> {prev.num} · Previous</span>
            <b>{prev.title}</b>
          </Link>
          <Link to={`/projects/${next.slug}`} className="pd-pager__link pd-pager__link--next">
            <span>{next.num} · Next <ArrowRight size={15} /></span>
            <b>{next.title}</b>
          </Link>
        </div>
      </nav>
    </main>
  );
}
