import React from "react";
import "./EmbeddedHero.css";
import { useLanguage } from "../context/LanguageContext";

export default function EmbeddedHero({ activeService, services }) {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const service = services[activeService] || services.home;

  const heading = isAR
    ? service.headingAr || service.heading
    : service.heading;

  const description = isAR
    ? service.descriptionAr || service.description
    : service.description;

  return (
    <section
      className="embedded-hero"
      style={{ backgroundImage: `url(${service.heroImage})` }}
    >
      <div className="embedded-hero-overlay"></div>

      <div
        className="embedded-hero-content"
        dir={isAR ? "rtl" : "ltr"}
      >
        <span className="embedded-hero-label">
          {isAR ? "التصاميم المدمجة" : "Embedded Designs"}
        </span>

        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}