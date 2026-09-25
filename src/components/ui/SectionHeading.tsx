import { Reveal } from "./Reveal";
import "./section-heading.css";

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <div className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        <span className="section-underline" />
      </div>
    </Reveal>
  );
}
