import React from "react";
import "./EmbeddedHero.css";

export default function EmbeddedHero({ activeService, services }) {
  const service = services[activeService] || services.home;

  return (
    <section
      className="embedded-hero"
      style={{ backgroundImage: `url(${service.heroImage})` }}
    >
      <div className="embedded-hero-overlay"></div>

      <div className="embedded-hero-content">
        <h1>{services[activeService].heading}</h1>
        <p>{services[activeService].description}</p>
      </div>
    </section>
  );
}