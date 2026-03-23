import React from "react";
import "./EmbeddedServiceIntro.css";

import eep1 from "../assets/images/eep1.png";
import eep2 from "../assets/images/eep2.jpg";
import eep3 from "../assets/images/eep3.jpg";
import eep4 from "../assets/images/eep4.jpg";
import eep5 from "../assets/images/eep5.jpg";
import eep6 from "../assets/images/eep6.jpg";

export default function AluminumIntro() {
  const sections = [
    {
      title: "Engineering for Strength & Efficiency",
      text: [
        "Aluminum structures require precise design to ensure rigidity, stability, and long-term durability.",
        "Our team analyzes load conditions, environmental exposure, and operational demands to create reliable structural frameworks."
      ],
      bullets: [
        "Custom aluminum frames and support systems",
        "Modular structural assemblies",
        "Equipment mounting platforms",
        "Machine base structures",
        "Lightweight industrial enclosures"
      ],
      image: eep2,
      alt: "Aluminum structural design"
    },
    {
      title: "Structural Analysis & Optimization",
      text: [
        "We apply engineering principles to ensure every structure performs under real-world conditions.",
        "Each design is optimized to balance strength, weight, and efficiency."
      ],
      bullets: [
        "Load and stress distribution",
        "Deflection and vibration analysis",
        "Reinforcement strategies",
        "Joint and fastening optimization",
        "Thermal expansion considerations"
      ],
      image: eep3,
      alt: "Structural analysis"
    },
    {
      title: "Designed for Fabrication & Assembly",
      text: [
        "Our aluminum structures are designed with manufacturing efficiency in mind.",
        "We ensure that every design is practical to fabricate and easy to assemble."
      ],
      bullets: [
        "Extrusion profile selection",
        "CNC machining compatibility",
        "Welding and fastening techniques",
        "Tolerance management",
        "Ease of maintenance"
      ],
      image: eep4,
      alt: "Fabrication and assembly"
    },
    {
      title: "Integrated System Development",
      text: [
        "Aluminum structures often serve as the backbone of complex systems.",
        "We collaborate with electronics and embedded teams to ensure full system integration."
      ],
      bullets: [
        "Control unit integration",
        "Sensor mounting",
        "Cooling and ventilation systems",
        "Automation components",
        "Mechanical motion systems"
      ],
      image: eep5,
      alt: "System integration"
    },
    {
      title: "Built for Industrial Performance",
      text: [
        "Our designs are engineered for real-world environments where durability and efficiency are critical.",
        "We deliver structures that are modular, scalable, and production-ready."
      ],
      bullets: [
        "Industrial-grade design approach",
        "Lightweight yet strong structures",
        "Scalable modular systems",
        "Long-term reliability",
        "Cost-efficient solutions"
      ],
      image: eep6,
      alt: "Industrial aluminum structures"
    }
  ];

  const whyChooseUs = [
    "Strong structural engineering expertise",
    "Practical manufacturing knowledge",
    "Lightweight and efficient design philosophy",
    "Integrated system development approach",
    "Reliable long-term solutions"
  ];

  return (
    <section className="embedded-service-page">
      <div className="site-container">

        {/* HEADER */}
        <div className="service-main-header">

          <span className="service-label">
            Mechanical Design Service
          </span>

          <h2>Aluminum Structure Design</h2>

          <h3>
            Lightweight Structural Solutions Engineered for Performance
          </h3>

          <p>
            We design high-strength aluminum structures tailored for industrial
            systems, automation platforms, and mechanical assemblies.
          </p>

          <p>
            Our engineering approach focuses on achieving the optimal balance
            between strength, weight reduction, and manufacturability.
          </p>

          <div className="service-main-image">
            <img src={eep1} alt="Aluminum structures"/>
          </div>

        </div>


        {/* INTRO */}
        <div className="service-intro-block">
          <h4>Precision Structural Engineering</h4>
          <p>
            We develop aluminum structures that are efficient, modular, and
            production-ready for demanding industrial environments.
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
              Our engineering team combines structural analysis expertise with
              practical manufacturing knowledge to deliver high-performance
              aluminum systems.
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={eep6} alt="Aluminum engineering"/>
          </div>

        </div>


        {/* CTA */}
        <div className="service-cta">

          <h4>Looking for a Lightweight Structural Solution?</h4>

          <p>
            Partner with Nexus Design Lab to develop precision-engineered
            aluminum structures tailored to your application.
          </p>

          <p>
            Let’s design systems built for strength, efficiency, and scalability.
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              Start Your Structural Project
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