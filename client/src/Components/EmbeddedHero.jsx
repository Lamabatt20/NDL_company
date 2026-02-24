import React from "react";
import "./EmbeddedHero.css";
import {
  FaMicrochip,
  FaProjectDiagram,
  FaCode,
  FaCogs,
  FaWifi,
  FaBrain
} from "react-icons/fa";

export default function EmbeddedHero({
  activeService,
  setActiveService,
  services
}) {
  const service = services[activeService];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="embedded-hero"
        style={{ backgroundImage: `url(${service.heroImage})` }}
      >
        <div className="embedded-hero-overlay"></div>

        <div className="embedded-hero-content">
          <h1>{service.title}</h1>
        </div>
      </section>

      {/* SERVICES TABS */}
      <section className="services-tabs">
        <div
          className={`tab ${activeService === "pcb-schematic" ? "active" : ""}`}
          onClick={() => setActiveService("pcb-schematic")}
        >
          <FaMicrochip />
          <span>PCB Schematic Design</span>
        </div>

        <div
          className={`tab ${activeService === "pcb-layout" ? "active" : ""}`}
          onClick={() => setActiveService("pcb-layout")}
        >
          <FaProjectDiagram />
          <span>PCB Layout Design</span>
        </div>

        <div
          className={`tab ${activeService === "embedded-sw" ? "active" : ""}`}
          onClick={() => setActiveService("embedded-sw")}
        >
          <FaCode />
          <span>Embedded Software Development</span>
        </div>

        <div
          className={`tab ${activeService === "product-dev" ? "active" : ""}`}
          onClick={() => setActiveService("product-dev")}
        >
          <FaCogs />
          <span>Electronic Products Development</span>
        </div>

        <div
          className={`tab ${activeService === "iot" ? "active" : ""}`}
          onClick={() => setActiveService("iot")}
        >
          <FaWifi />
          <span>IoT Smart Solutions</span>
        </div>

        <div
          className={`tab ${activeService === "ai" ? "active" : ""}`}
          onClick={() => setActiveService("ai")}
        >
          <FaBrain />
          <span>AI Integration</span>
        </div>
      </section>
    </>
  );
}