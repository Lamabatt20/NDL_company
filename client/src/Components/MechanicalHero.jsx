import React from "react";
import "./MechanicalHero.css";
import Mechanicalpicture from "../assets/images/bimage.png";

export default function MechanicalHero() {
  return (
    <section
      className="Mechanical-hero"
      style={{ backgroundImage: `url(${Mechanicalpicture})` }}
    >
      <div className="Mechanical-hero-overlay"></div>

      <div className="Mechanical-hero-content">
        <h1>Mechanical Systems Designs</h1>
      </div>
    </section>
  );
}
