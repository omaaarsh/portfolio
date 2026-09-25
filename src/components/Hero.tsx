import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Download } from "lucide-react";
import { profile, socials } from "../data/profile";
import portrait from "../assets/omar.jpg";
import "./hero.css";

const roles = ["Node.js / NestJS", "Python / FastAPI", "Event-Driven Systems", "AI Integration"];

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero__badge glass">
            <Sparkles size={14} /> {profile.availability}
          </span>
          <h1 className="hero__title">
            {profile.name.split(" ")[0]} <span className="gradient-text">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__chips">
            {roles.map((r) => <span key={r} className="hero__chip">{r}</span>)}
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">View my work <ArrowRight size={17} /></a>
            <a href="#contact" className="btn btn--ghost">Get in touch</a>
            <a href={`${import.meta.env.BASE_URL}Omar-Sherif-Elghamry-CV.pdf`} download className="btn btn--ghost"><Download size={17} /> Download CV</a>
          </div>

          <div className="hero__meta">
            <span><MapPin size={15} /> {profile.location}</span>
            <div className="hero__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="hero__social">
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portrait">
            <div className="portrait__glow" />
            <img className="portrait__img" src={portrait} alt="Omar Sherif Elghamry" width={360} height={450} />
            <div className="portrait__ring" />
            <span className="portrait__badge glass"><i className="portrait__dot" /> Available for work</span>
          </div>
        </motion.div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll down"><span /></a>
    </section>
  );
}
