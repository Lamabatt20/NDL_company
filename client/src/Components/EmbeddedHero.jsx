import React from "react";
import "./EmbeddedHero.css";
import embeddedpicture from "../assets/images/emimage.png";
import { 
  FaMicrochip, 
  FaProjectDiagram, 
  FaCode, 
  FaCogs, 
  FaWifi,
  FaBrain
} from "react-icons/fa";

export default function EmbeddedHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="embedded-hero"
        style={{ backgroundImage: `url(${embeddedpicture})` }}
      >
        <div className="embedded-hero-overlay"></div>

        <div className="embedded-hero-content">
          <h1>Embedded Systems Designs</h1>
        </div>
      </section>

      {/* SERVICES TABS SECTION */}
      <section className="services-tabs">

        <div className="tab">
          <FaMicrochip />
          <span>PCB Schematic Design</span>
        </div>

        <div className="tab">
          <FaProjectDiagram />
          <span>PCB Layout Design</span>
        </div>

        <div className="tab">
          <FaCode />
          <span>Embedded Software Development</span>
        </div>

        <div className="tab">
          <FaCogs />
          <span>Electronic Products Development</span>
        </div>

        <div className="tab">
          <FaWifi />
          <span>IoT Smart Solutions</span>
        </div>

       
        <div className="tab">
          <FaBrain />
          <span>AI Integration</span>
        </div>

      </section>
    </>
  );
}
