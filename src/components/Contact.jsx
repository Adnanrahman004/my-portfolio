import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="section-label">GET IN TOUCH</p>

      <h2>Let's Build Something Great.</h2>

      <p className="contact-description">
        Have a project idea, internship opportunity, or just want to talk about
        technology? Feel free to reach out.
      </p>

      <div className="contact-details">
        <a className="contact-email" href="mailto:adnan@example.com">
          <Mail size={18} />
          <span>adnan@example.com</span>
          <ArrowUpRight size={16} />
        </a>

        <div className="contact-location">
          <MapPin size={18} />
          <span>Jamshedpur, Jharkhand, India</span>
        </div>
      </div>

      <a href="mailto:adnan@example.com" className="contact-button">
        Let's Talk
        <ArrowUpRight size={17} />
      </a>
    </section>
  );
}
