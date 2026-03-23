import React from "react";
import "./EmbeddedServiceIntro.css";

import p1 from "../assets/images/pp1.png";
import p2 from "../assets/images/pp2.webp";
import p3 from "../assets/images/pp3.webp";
import p4 from "../assets/images/pp4.png";
import p5 from "../assets/images/pp5.jpg";
import p6 from "../assets/images/pp6.jpg";

export default function ProductDevIntro() {
  const sections = [
    {
      title: "Concept & System Architecture",
      text: [
        "Every successful product begins with a strong foundation. Our engineering team defines the technical direction of the product from the earliest stage to ensure reliable development and long-term scalability.",
        "Our structured planning process creates a smooth path from concept to execution."
      ],
      bullets: [
        "Technical requirements and system specifications",
        "Electrical and mechanical architecture",
        "Component selection strategy",
        "Risk assessment and feasibility analysis",
        "Scalability and lifecycle planning"
      ],
      image: p2,
      alt: "Concept and system architecture"
    },
    {
      title: "Hardware & Embedded Integration",
      text: [
        "We develop fully integrated electronic systems where hardware and software are engineered together to achieve optimal performance and seamless system interaction.",
        "Our multidisciplinary workflow ensures that each subsystem is aligned with the complete product architecture."
      ],
      bullets: [
        "Custom PCB schematic and layout design",
        "Embedded firmware development",
        "Power management and protection systems",
        "Communication interfaces and connectivity",
        "Sensor integration and signal processing"
      ],
      image: p3,
      alt: "Hardware and embedded integration"
    },
    {
      title: "Prototyping & Validation",
      text: [
        "We support rapid prototyping and iterative development cycles to validate product functionality, optimize performance, and reduce design risks before mass production.",
        "Each development stage is tested to ensure reliable operation in real-world conditions."
      ],
      bullets: [
        "Functional prototypes",
        "Design verification testing",
        "Performance optimization",
        "Environmental and stress considerations",
        "Pre-production validation"
      ],
      image: p4,
      alt: "Prototyping and validation"
    },
    {
      title: "Manufacturing & Production Readiness",
      text: [
        "Our team prepares products for a smooth transition into manufacturing by ensuring production readiness, documentation quality, and risk reduction.",
        "We focus on achieving reliable production while maintaining efficiency, quality, and cost control."
      ],
      bullets: [
        "Design for Manufacturability (DFM)",
        "Design for Assembly (DFA)",
        "Design for Testing (DFT)",
        "Production documentation and BOM optimization",
        "Supplier coordination support"
      ],
      image: p5,
      alt: "Manufacturing and production readiness"
    },
    {
      title: "Applications & Industry Experience",
      text: [
        "Our product development experience covers a wide range of industries and applications where reliability, performance, and intelligent system integration are critical.",
        "We engineer solutions that operate effectively in demanding industrial and connected environments."
      ],
      bullets: [
        "Industrial automation systems",
        "Smart monitoring devices",
        "IoT-connected platforms",
        "Control units for vehicles and infrastructure",
        "Intelligent sensing and data acquisition systems"
      ],
      image: p6,
      alt: "Applications and industry experience"
    }
  ];

  const whyChooseUs = [
    "Multidisciplinary engineering expertise",
    "Integrated mechanical, electronic, and embedded development",
    "Experience in complex and high-reliability systems",
    "Structured development methodology",
    "Long-term technical partnership mindset"
  ];

  return (
    <section className="embedded-service-page">
      <div className="site-container">
        <div className="service-main-header">
          <span className="service-label">Electronics Design Service</span>

          <h2>Electronic Product Development</h2>

          <h3>End-to-End Engineering from Concept to Production</h3>

          <p>
            At our Electronics Design Lab, we provide comprehensive electronic
            product development services that transform ideas into reliable,
            production-ready systems.
          </p>

          <p>
            Our multidisciplinary engineering team manages the complete
            development lifecycle — from architecture definition and
            prototyping to validation and deployment. We partner with
            businesses to build scalable electronic products designed for
            performance, compliance, and long-term market success.
          </p>

          <div className="service-main-image">
            <img src={p1} alt="Electronic product development" />
          </div>
        </div>

        <div className="service-intro-block">
          <h4>Our Development Approach</h4>
          <p>
            We deliver end-to-end product engineering services that combine
            system architecture, hardware design, embedded development,
            validation, and production readiness into one structured workflow.
          </p>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`service-section ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="service-section-text">
              <h4>{section.title}</h4>

              {section.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              <ul>
                {section.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="service-section-image">
              <img src={section.image} alt={section.alt} />
            </div>
          </div>
        ))}

        <div className="service-highlight-box">
          <div className="service-highlight-content">
            <h4>Why Nexus Design Lab?</h4>

            <p>
              We don’t just develop electronic products — we engineer complete
              solutions designed for durability, scalability, and market
              success.
            </p>

            <ul>
              {whyChooseUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-highlight-image">
            <img src={p6} alt="Engineering development team" />
          </div>
        </div>

        <div className="service-cta">
          <h4>Ready to Develop Your Next Electronic Product?</h4>

          <p>
            Partner with Nexus Design Lab to transform your concept into a
            high-performance, production-ready solution.
          </p>

          <p>
            Let’s build technology designed for reliability, scalability, and
            long-term impact.
          </p>

          <div className="service-cta-buttons">
            <button type="button" className="primary-btn">
              Start Your Product Development Project
            </button>

            <button type="button" className="secondary-btn">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}