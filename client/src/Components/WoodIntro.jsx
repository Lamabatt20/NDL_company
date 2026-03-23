import React from "react";
import "./EmbeddedServiceIntro.css";

import ss1 from "../assets/images/ss1.png";
import ss2 from "../assets/images/ss2.png";
import ss3 from "../assets/images/ss3.png";
import ss4 from "../assets/images/ss4.png";
import ss5 from "../assets/images/ss5.webp";
import ss6 from "../assets/images/ss6.jpg";

export default function WoodIntro() {
  const sections = [
    {
      title: "Engineering-Based Furniture Development",
      text: [
        "Furniture design requires more than appearance — it demands proper structural planning and engineering precision.",
        "We ensure every design balances strength, comfort, and usability."
      ],
      bullets: [
        "Custom furniture for residential and commercial spaces",
        "Workstations and industrial tables",
        "Storage systems and cabinetry",
        "Wooden structural components",
        "Hybrid wood-metal designs"
      ],
      image: ss2,
      alt: "Furniture development"
    },
    {
      title: "Material Selection & Structural Integrity",
      text: [
        "We carefully select materials and design joinery systems to ensure durability and performance.",
        "Each design is optimized for real-world use."
      ],
      bullets: [
        "Wood type selection",
        "Joinery and fastening systems",
        "Structural reinforcement",
        "Surface finishing",
        "Ergonomic design planning"
      ],
      image: ss3,
      alt: "Material and structure"
    },
    {
      title: "Designed for Fabrication & Assembly",
      text: [
        "Our designs are created with production efficiency in mind.",
        "We ensure smooth transition from design to workshop."
      ],
      bullets: [
        "Detailed CAD models",
        "Assembly documentation",
        "Cutting and layout plans",
        "Bill of materials (BOM)",
        "CNC-ready files"
      ],
      image: ss4,
      alt: "Fabrication wood"
    },
    {
      title: "Integrated Design Perspective",
      text: [
        "We integrate wood structures with modern systems and technologies.",
        "This enables innovative and functional hybrid designs."
      ],
      bullets: [
        "Embedded electronics integration",
        "Lighting systems",
        "Metal structural frames",
        "Automation components",
        "Smart furniture solutions"
      ],
      image: ss5,
      alt: "Integrated wood design"
    },
    {
      title: "Built for Durability & Aesthetics",
      text: [
        "Our designs combine visual refinement with structural strength.",
        "We create products that are both elegant and long-lasting."
      ],
      bullets: [
        "Long-term durability",
        "Professional appearance",
        "Functional layouts",
        "Clean finishing",
        "Efficient assembly"
      ],
      image: ss6,
      alt: "Wood durability"
    }
  ];

  const whyChooseUs = [
    "Engineering-driven furniture design",
    "Strong material and structural expertise",
    "Production-ready workflow",
    "Balanced aesthetics and functionality",
    "Long-term durability focus"
  ];

  return (
    <section className="embedded-service-page">
      <div className="site-container">

        {/* HEADER */}
        <div className="service-main-header">

          <span className="service-label">
            Mechanical Design Service
          </span>

          <h2>Wood & Furniture Design</h2>

          <h3>
            Functional, Durable, and Precision-Crafted Designs
          </h3>

          <p>
            We design custom wood and furniture solutions that combine
            structural integrity, functionality, and refined aesthetics.
          </p>

          <p>
            Our approach blends engineering principles with craftsmanship
            to create designs that are visually compelling and mechanically sound.
          </p>

          <div className="service-main-image">
            <img src={ss1} alt="Wood design"/>
          </div>

        </div>


        {/* INTRO */}
        <div className="service-intro-block">
          <h4>Engineering Meets Craftsmanship</h4>
          <p>
            We develop wood and furniture solutions that combine durability,
            usability, and refined design for real-world applications.
          </p>
        </div>


        {/* SECTIONS */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`service-section ${index % 2 !== 0 ? "reverse" : ""}`}
          >

            <div className="service-section-text">

              <h4>{section.title}</h4>

              {section.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <ul>
                {section.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

            </div>

            <div className="service-section-image">
              <img src={section.image} alt={section.alt}/>
            </div>

          </div>
        ))}


        {/* WHY */}
        <div className="service-highlight-box">

          <div className="service-highlight-content">

            <h4>Why Nexus Design Lab?</h4>

            <p>
              We bring engineering precision into furniture design, ensuring
              durability, usability, and production efficiency.
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={ss6} alt="Wood engineering"/>
          </div>

        </div>


        {/* CTA */}
        <div className="service-cta">

          <h4>Looking to Build Custom Furniture or Wood Solutions?</h4>

          <p>
            Partner with Nexus Design Lab to design functional and durable
            wood products tailored to your needs.
          </p>

          <p>
            Let’s create designs that combine craftsmanship with engineering precision.
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              Start Your Furniture Project
            </button>

            <button className="secondary-btn">
              Discuss Your Design
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}