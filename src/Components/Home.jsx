import React from "react";
import { images } from "../data";
import RaniaStage from "../Assets/Images/Rania-stage.webp";
// import Rania2 from "../Assets/Images/Rania-2.jpg";

import { ArrowUpRight, ArrowRight, ChevronDown } from "lucide-react";

export function Home() {
  return (
    <section
      id="home"
      className="hero"
      style={{
        "--bg": `url("${RaniaStage}")`,
      }}
    >
      <div className="hero-wash" />

      <div className="hero-content">
        <div className="eyebrow">
          <span className="eyebrow-line" />
          SOPRANO · OPERA · ARABIC MUSIC
        </div>

        <h1>
          Every voice
          <br />
          has a <em>story.</em>
        </h1>

        <p>
          Meet Rania Ateek, a Palestinian soprano from Nazareth, bringing opera
          and Arabic musical traditions together through a voice that crosses
          cultures.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#music">
            EXPLORE THE MUSIC
            <ArrowUpRight size={18} />
          </a>

          <a className="text-link" href="#about">
            DISCOVER RANIA
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>RANIA ATEEK · SOPRANO</span>

        <a href="#about">
          SCROLL TO EXPLORE
          <ChevronDown size={16} />
        </a>
      </div>

      {/* <div className="hero-index">01 / 05</div> */}
    </section>
  );
}
