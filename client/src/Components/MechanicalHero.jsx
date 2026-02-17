import React from "react";
import "./MechanicalHero.css";
import Mechanicalpicture from "../assets/images/bimage.avif";


import { FaDraftingCompass, FaCubes, FaBox, FaRobot, FaBuilding, FaChair } from "react-icons/fa";

export default function MechanicalHero() {
  const services = [
    { title: "Sheet Metal Design", icon: <FaDraftingCompass /> },
    { title: "Aluminum Structure Design", icon: <FaCubes /> },
    { title: "Product Enclosure Design", icon: <FaBox /> },
    { title: "Robotics Development", icon: <FaRobot /> },
    { title: "Steel Structure Design", icon: <FaBuilding /> },
    { title: "Wood and Furniture Design", icon: <FaChair /> }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="Mechanical-hero"
        style={{ backgroundImage: `url(${Mechanicalpicture})` }}
      >
        <div className="Mechanical-hero-overlay"></div>
        <div className="Mechanical-hero-content">
          <h1>Mechanical Systems Designs</h1>
        </div>
      </section>

      {/* SERVICES TABS SECTION */}
      <section className="services-tabs">
        {services.map((service, index) => (
          <div key={index} className="tab">
            {service.icon}
            <span>{service.title}</span>
          </div>
        ))}
      </section>
    </>
  );
}
