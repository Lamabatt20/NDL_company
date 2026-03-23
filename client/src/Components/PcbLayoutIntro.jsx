import React from "react";
import "./EmbeddedServiceIntro.css";

import img1 from "../assets/images/layout1.png";
import img2 from "../assets/images/layout2.png";
import img3 from "../assets/images/layout3.png";
import img4 from "../assets/images/layout4.png";
import img5 from "../assets/images/layout5.png";
import img6 from "../assets/images/layout6.png";
import img7 from "../assets/images/layout7.png";

export default function PcbLayoutIntro() {

  const sections = [
    {
      title: "Multilayer & High-Density PCB Design",
      text: [
        "We design complex multilayer boards optimized for performance and compact form factors.",
        "Our layouts are optimized for efficiency, durability, and long-term scalability."
      ],
      bullets: [
        "2 to high-layer-count PCBs",
        "High-density component placement",
        "Controlled impedance routing",
        "Fine-pitch and BGA packages",
        "HDI embedded systems"
      ],
      image: img2
    },

    {
      title: "Signal Integrity Optimization",
      text: [
        "We implement advanced routing practices to ensure stable performance in high-speed digital systems."
      ],
      bullets: [
        "Differential pair routing",
        "Impedance control",
        "Length matching",
        "Noise reduction",
        "Crosstalk mitigation"
      ],
      image: img3
    },

    {
      title: "Power Distribution & Thermal Management",
      text: [
        "Reliable power architecture is critical to electronic system stability."
      ],
      bullets: [
        "Optimized power planes",
        "Thermal relief strategies",
        "Wide copper pours",
        "EMI reduction techniques"
      ],
      image: img4
    },

    {
      title: "Manufacturing & Compliance Ready",
      text: [
        "Layouts are developed with full consideration of production readiness."
      ],
      bullets: [
        "Design for Manufacturability (DFM)",
        "Design for Assembly (DFA)",
        "Design for Testing (DFT)",
        "EMC/EMI compliance"
      ],
      image: img5
    },

    {
      title: "Engineering Workflow & Collaboration",
      text: [
        "Our layout engineers collaborate with hardware, firmware, and mechanical teams."
      ],
      bullets: [
        "Rapid prototyping",
        "Design revisions",
        "Component verification",
        "Production documentation"
      ],
      image: img6
    }

  ];

  const whyChooseUs = [
    "Dedicated PCB layout specialists",
    "Experience in complex embedded systems",
    "Strong signal integrity expertise",
    "Production-ready engineering workflow",
    "Long-term engineering support"
  ];

  return (
    <section className="embedded-service-page">

      <div className="site-container">

        {/* Header */}
        <div className="service-main-header">

          <span className="service-label">
            Electronics Design Service
          </span>

          <h2>PCB Layout Design</h2>

          <h3>
            Precision Layout Engineering for High-Performance Electronics
          </h3>

          <p>
            Our engineering team transforms validated schematics into optimized,
            production-ready PCB layouts tailored for industrial, automotive,
            and embedded applications.
          </p>

          <div className="service-main-image">
            <img src={img1} alt="PCB layout design"/>
          </div>

        </div>

        {/* Intro */}
        <div className="service-intro-block">
          <h4>Advanced Layout Capabilities</h4>
          <p>
            We deliver precision PCB layouts combining electrical performance,
            compact design strategy, and manufacturing readiness.
          </p>
        </div>


        {/* Sections */}

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
              <img src={section.image} alt={section.title}/>
            </div>

          </div>

        ))}


        {/* Why Section */}

        <div className="service-highlight-box">

          <div className="service-highlight-content">

            <h4>Why Nexus Design Lab?</h4>

            <p>
              We don't just place components — we engineer layouts that ensure
              performance, reliability, and manufacturability.
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={img7} alt="Engineering team"/>
          </div>

        </div>


        {/* CTA */}

        <div className="service-cta">

          <h4>Ready to Bring Your PCB Design to Production?</h4>

          <p>
            Let our engineering team develop a precision-optimized layout that
            ensures performance and reliability.
          </p>

          <div className="service-cta-buttons">
            <button type="button" className="primary-btn">
                Request Consultation
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