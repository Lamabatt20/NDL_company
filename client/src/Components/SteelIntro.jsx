import React from "react";
import "./EmbeddedServiceIntro.css";

import ee1 from "../assets/images/ee1.jpg";
import ee2 from "../assets/images/ee2.avif";
import ee3 from "../assets/images/ee3.jpg";
import ee4 from "../assets/images/ee4.jpg";
import ee5 from "../assets/images/ee5.webp";
import ee6 from "../assets/images/ee6.png";

export default function SteelIntro() {
  const sections = [
    {
      title: "Engineering for Structural Integrity",
      text: [
        "Steel structures require detailed analysis and careful planning to ensure performance under real-world conditions.",
        "We apply engineering principles to create stable and efficient structural systems."
      ],
      bullets: [
        "Industrial frames and support structures",
        "Equipment platforms and heavy-duty bases",
        "Structural racks and mounting systems",
        "Machinery foundations",
        "Custom load-bearing assemblies"
      ],
      image: ee2,
      alt: "Steel structural engineering"
    },
    {
      title: "Load Analysis & Performance Considerations",
      text: [
        "Our design process accounts for static and dynamic loads, ensuring long-term performance.",
        "Each structure is optimized for safety and durability."
      ],
      bullets: [
        "Static and dynamic load evaluation",
        "Vibration and fatigue analysis",
        "Environmental impact considerations",
        "Reinforcement strategies",
        "Safety factor calculations"
      ],
      image: ee3,
      alt: "Load analysis steel"
    },
    {
      title: "Fabrication & Installation Ready",
      text: [
        "We develop steel structures with full awareness of manufacturing and installation processes.",
        "Our designs ensure smooth coordination between engineering and field teams."
      ],
      bullets: [
        "Detailed structural drawings",
        "Welding specifications",
        "Bolt and fastening layouts",
        "Material documentation",
        "Installation guidelines"
      ],
      image: ee4,
      alt: "Steel fabrication"
    },
    {
      title: "Integrated System Support",
      text: [
        "Steel structures serve as the backbone of larger systems.",
        "We ensure full integration with electrical and mechanical components."
      ],
      bullets: [
        "Control panel integration",
        "Cable routing solutions",
        "Equipment mounting",
        "Maintenance access design",
        "Safety system integration"
      ],
      image: ee5,
      alt: "System integration steel"
    },
    {
      title: "Built for Industrial Reliability",
      text: [
        "Our steel designs are engineered for demanding industrial environments.",
        "We deliver solutions focused on durability and long-term performance."
      ],
      bullets: [
        "Heavy-duty structural design",
        "Industrial-grade durability",
        "Compliance with standards",
        "Long-term reliability",
        "Efficient fabrication approach"
      ],
      image: ee6,
      alt: "Industrial steel performance"
    }
  ];

  const whyChooseUs = [
    "Strong structural engineering expertise",
    "Practical fabrication knowledge",
    "Safe and compliant designs",
    "Efficient and scalable structures",
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

          <h2>Steel Structure Design</h2>

          <h3>
            Heavy-Duty Structural Engineering Built for Strength and Reliability
          </h3>

          <p>
            We design robust steel structures engineered to withstand demanding
            operational and environmental conditions.
          </p>

          <p>
            Our engineering team develops solutions for industrial facilities,
            equipment platforms, and infrastructure applications.
          </p>

          <div className="service-main-image">
            <img src={ee1} alt="Steel structures"/>
          </div>

        </div>


        {/* INTRO */}
        <div className="service-intro-block">
          <h4>Engineered for Strength and Safety</h4>
          <p>
            We deliver steel structures designed for performance, safety, and
            long-term operational reliability.
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
              We combine structural engineering expertise with practical
              fabrication knowledge to deliver steel designs that are safe,
              efficient, and production-ready.
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={ee6} alt="Steel engineering"/>
          </div>

        </div>


        {/* CTA */}
        <div className="service-cta">

          <h4>Need a Reliable Steel Structural Solution?</h4>

          <p>
            Partner with Nexus Design Lab to develop strong, engineered steel
            structures tailored to your requirements.
          </p>

          <p>
            Let’s build systems designed for durability and long-term success.
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              Start Your Steel Project
            </button>

            <button className="secondary-btn">
              Discuss Your Structure
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}