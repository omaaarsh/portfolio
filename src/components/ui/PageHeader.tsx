import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./page-header.css";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <header className="page-header">
      <div className="container">
        <Link to="/" className="page-back"><ArrowLeft size={16} /> Back to home</Link>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
        <span className="section-underline" />
      </div>
    </header>
  );
}
