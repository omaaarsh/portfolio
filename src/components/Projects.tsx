import { Link } from "react-router-dom";
import { ArrowUpRight, Download } from "lucide-react";
import { projects } from "../data/projects";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import "./projects.css";

const PORTFOLIO_PDF = `${import.meta.env.BASE_URL}Omar-Elghamry-Project-Portfolio.pdf`;

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="Project portfolio · 2026" title="Selected work" />

        <Reveal>
          <p className="projects__label">Contents</p>
          <ol className="projects__list">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link to={`/projects/${p.slug}`} className="prow">
                  <span className="prow__num">{p.num}</span>
                  <span className="prow__body">
                    <span className="prow__title">
                      <b>{p.title}</b> <span className="prow__kind">· {p.kind}</span>
                    </span>
                    <span className="prow__summary">{p.summary}</span>
                    {p.metrics && (
                      <span className="prow__metrics">
                        {p.metrics.slice(0, 2).map((m) => (
                          <span key={m.label}><em>{m.value}</em> {m.label}</span>
                        ))}
                      </span>
                    )}
                  </span>
                  <span className="prow__stack">{p.stackLine.join(" · ")}</span>
                  <ArrowUpRight size={20} className="prow__arrow" aria-hidden />
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <div className="projects__foot">
            <a href={PORTFOLIO_PDF} download className="btn btn--ghost">
              <Download size={17} /> Download the project portfolio (PDF)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
