import React from "react";
import { ArrowUpRight, Instagram, Youtube, Mail } from "lucide-react";
export function Contact({}) {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-orb" />
      <div className="section-kicker light">05 / LET'S CONNECT</div>
      <h2>
        Let's make something
        <br />
        <em>beautiful.</em>
      </h2>
      <p>Bookings, collaborations, workshops, or just to say hello.</p>
      <a
        className="button primary"
        href="mailto:bookings@example.com?subject=Rania%20Ateek%20inquiry"
      >
        GET IN TOUCH <ArrowUpRight size={19} />
      </a>
      <div className="socials">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram placeholder"
        >
          <Instagram />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="YouTube placeholder"
        >
          <Youtube />
        </a>
        <a href="mailto:bookings@example.com" aria-label="Email placeholder">
          <Mail />
        </a>
      </div>
    </section>
  );
}
