import React from "react";
export function Footer({}) {
  return (
    <footer>
      <a className="logo" href="#home">
        RANIA<span>ATEEK</span>
        <i>.</i>
      </a>
      <span>
        © {new Date().getFullYear()} Rania Ateek. All rights reserved.
      </span>
      <a href="#home">BACK TO TOP ↑</a>
    </footer>
  );
}
