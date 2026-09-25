import { profile } from "../data/profile";
import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {profile.name}</span>
        <span className="footer__built">Built with React · Vite · framer-motion</span>
      </div>
    </footer>
  );
}
