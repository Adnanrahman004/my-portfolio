import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#home" className="footer-brand">
          <span className="brand-logo">AR</span>
          <span>Adnan Rahman</span>
        </a>

        <a href="#home" className="back-to-top">
          Back to top
          <ArrowUp size={16} />
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Adnan Rahman. All rights reserved.</p>

        <p className="footer-made">
          Made with <Heart size={14} /> and code
        </p>
      </div>
    </footer>
  );
}