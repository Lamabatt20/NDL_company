import React from "react";
import "./MechanicalHero.css";
import { useLanguage } from "../context/LanguageContext";

export default function MechanicalHero({ activeService, services }) {
  const { language } = useLanguage();

  const service = services[activeService] || services.home;

  const heading =
    language === "ar"
      ? service.headingAr || service.heading
      : service.heading;

  const description =
    language === "ar"
      ? service.descriptionAr || service.description
      : service.description;

  return (
    <section
      className="mechanical-hero"
      style={{ backgroundImage: `url(${service.heroImage})` }}
    >
      <div className="mechanical-hero-overlay"></div>

      <div
          className="mechanical-hero-content"
          dir={language === "ar" ? "rtl" : "ltr"}
        >
        <span className="mechanical-hero-label">
          {language === "ar" ? "التصاميم الميكانيكية" : "Mechanical Designs"}
        </span>

        <h1>{heading}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}