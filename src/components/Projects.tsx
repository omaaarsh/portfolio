import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Star } from "lucide-react";
import { GitHubIcon } from "./ui/BrandIcons";
import { projects } from "../data/profile";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import "./projects.css";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="// selected work" title="Featured Projects" />
        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <motion.article
                className={`project glass ${p.featured ? "project--featured" : ""}`}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {p.featured && <span className="project__flag"><Star size={12} /> Flagship</span>}
                <div className="project__icon"><p.icon size={22} /></div>
                <Link to={`/projects/${p.slug}`} className="project__title">{p.title}</Link>
                <p className="project__desc">{p.desc}</p>
                <div className="project__tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="project__links">
                  <Link to={`/projects/${p.slug}`} className="project__link project__link--primary">
                    View details <ArrowUpRight size={16} />
                  </Link>
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="project__link">
                      <GitHubIcon width={16} height={16} /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" className="project__link">
                      <ArrowUpRight size={16} /> Live
                    </a>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
