import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import "./section-heading.css";

export function SectionHeading({ eyebrow, title, to }: { eyebrow: string; title: string; to?: string }) {
  return (
    <Reveal>
      <div className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
        {to ? (
          <Link to={to} className="section-title section-title--link">
            {title} <ArrowUpRight size={26} className="section-title__arrow" />
          </Link>
        ) : (
          <h2 className="section-title">{title}</h2>
        )}
        <span className="section-underline" />
      </div>
    </Reveal>
  );
}
