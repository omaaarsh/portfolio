import { socials, profile } from "../data/profile";
import { Reveal } from "./ui/Reveal";
import "./contact.css";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="contact glass">
            <span className="eyebrow">// let's talk</span>
            <h2 className="contact__title">
              Have a backend that needs <span className="gradient-text">building or fixing?</span>
            </h2>
            <p className="contact__text">
              {profile.availability}. Whether it's a NestJS API, a payment integration, a database problem,
              or an AI service — I'd love to hear about it.
            </p>
            <a href="mailto:omarsherifelghamry@gmail.com" className="btn btn--primary contact__cta">
              Email me
            </a>
            <div className="contact__socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact__social">
                  <s.icon size={18} /> <span>{s.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
