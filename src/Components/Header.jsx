import React from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
export function Header({ navigate, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="logo" href="#home" onClick={navigate}>
        RANIA<span>ATEEK</span>
        <i>.</i>
      </a>
      <nav
        className={menuOpen ? "nav open" : "nav"}
        aria-label="Main navigation"
      >
        {[
          ["#about", "About"],
          ["#repertoire", "Repertoire"],
          ["#nard", "Nard"],
          ["#music", "Music"],
          ["#gallery", "Gallery"],
          ["#contact", "Contact"],
        ].map(([href, label]) => (
          <a key={href} href={href} onClick={navigate}>
            {label}
          </a>
        ))}
      </nav>
      <>.</>
      {/* <a
        className="header-cta"
        href="mailto:bookings@example.com?subject=Booking%20inquiry"
      >
        BOOK RANIA <ArrowUpRight size={16} />
      </a> */}
      <button
        className="mobile-menu icon-button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((v) => !v)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}
