import React from "react";
import "./MechanicalHero.css";
import {
  FaTools,        // sheet metal
  FaCubes,        // aluminum
  FaBoxOpen,      // enclosure
  FaIndustry,     // steel
  FaDraftingCompass, // product design
  FaChair         // wood
} from "react-icons/fa";

export default function MechanicalHero({
  activeService,
  setActiveService,
  services
}) {
  const service = services[activeService] || services.home;

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="Mechanical-hero"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="Mechanical-hero-overlay"></div>
        <div className="Mechanical-hero-content">
          <h1>{service.title}</h1>
        </div>
      </section>

      {/* SERVICES TABS */}
      <section className="services-tabs">

        <div
          className={`tab ${activeService === "sheet-metal" ? "active" : ""}`}
          onClick={() => setActiveService("sheet-metal")}
        >
          <FaTools />
          <span>Sheet Metal Design</span>
        </div>

        <div
          className={`tab ${activeService === "aluminum" ? "active" : ""}`}
          onClick={() => setActiveService("aluminum")}
        >
          <FaCubes />
          <span>Aluminum Structure Design</span>
        </div>

        <div
          className={`tab ${activeService === "enclosure" ? "active" : ""}`}
          onClick={() => setActiveService("enclosure")}
        >
          <FaBoxOpen />
          <span>Product Enclosure Design</span>
        </div>

        <div
          className={`tab ${activeService === "steel" ? "active" : ""}`}
          onClick={() => setActiveService("steel")}
        >
          <FaIndustry />
          <span>Steel Structure Design</span>
        </div>

        <div
          className={`tab ${activeService === "product-design" ? "active" : ""}`}
          onClick={() => setActiveService("product-design")}
        >
          <FaDraftingCompass />
          <span>Product Design</span>
        </div>

        <div
          className={`tab ${activeService === "wood" ? "active" : ""}`}
          onClick={() => setActiveService("wood")}
        >
          <FaChair />
          <span>Wood and Furniture Design</span>
        </div>

      </section>
    </>
  );
}