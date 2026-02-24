import React from "react";
import "./MechanicalHero.css";
import {
  FaDraftingCompass,
  FaCubes,
  FaBox,
  FaRobot,
  FaBuilding,
  FaChair
} from "react-icons/fa";

export default function MechanicalHero({
  activeService,
  setActiveService,
  services
}) {
  const service = services[activeService];

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
          <FaDraftingCompass />
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
          <FaBox />
          <span>Product Enclosure Design</span>
        </div>

        <div
          className={`tab ${activeService === "robotics" ? "active" : ""}`}
          onClick={() => setActiveService("robotics")}
        >
          <FaRobot />
          <span>Robotics Development</span>
        </div>

        <div
          className={`tab ${activeService === "steel" ? "active" : ""}`}
          onClick={() => setActiveService("steel")}
        >
          <FaBuilding />
          <span>Steel Structure Design</span>
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