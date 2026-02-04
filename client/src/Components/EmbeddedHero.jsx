import React from "react";
import "./EmbeddedHero.css";
import embeddedpicture from "../assets/images/bimage.png";

export default function EmbeddedHero() {
  return (
    <section
      className="embedded-hero"
      style={{ backgroundImage: `url(${embeddedpicture})` }}
    >
      <div className="embedded-hero-overlay"></div>

      <div className="embedded-hero-content">
        <h1>Embedded Systems Designs</h1>
      </div>
    </section>
  );
}
