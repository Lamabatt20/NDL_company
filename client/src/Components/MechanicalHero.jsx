import React from "react";
import "./MechanicalHero.css";

export default function MechanicalHero({ activeService, services }) {
  const service = services[activeService] || services.home;

  return (
    <section
      className="mechanical-hero"
      style={{ backgroundImage: `url(${service.heroImage})` }}
    >
      <div className="mechanical-hero-overlay"></div>

      <div className="mechanical-hero-content">
        <span className="mechanical-hero-label">Mechanical Designs</span>
        <h1>{service.heading}</h1>
        <p>{service.description}</p>
      </div>
    </section>
  );
}