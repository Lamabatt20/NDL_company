import React from "react";
import "./EmbeddedServiceIntro.css";

import e1 from "../assets/images/e1.jpg";
import e2 from "../assets/images/e2.jpg";
import e3 from "../assets/images/e3.jpg";
import e4 from "../assets/images/e4.png";
import e5 from "../assets/images/e5.webp";
import e6 from "../assets/images/e6.webp";

export default function EnclosureIntro() {
  const sections = [
    {
      title: "Engineering-Driven Design Approach",
      text: [
        "An effective enclosure must integrate mechanical strength, thermal management, and system accessibility.",
        "Our team develops solutions tailored to the product’s function and operating environment."
      ],
      bullets: [
        "Industrial and electronic device enclosures",
        "Control panels and instrument housings",
        "Weather-resistant and IP-rated designs",
        "Wall-mounted, portable, and rack-mounted solutions",
        "Custom enclosures for automation and IoT systems"
      ],
      image: e2,
      alt: "Engineering enclosure design"
    },
    {
      title: "Performance & Protection Considerations",
      text: [
        "We engineer enclosures to ensure maximum protection and long-term reliability.",
        "Each design enhances system performance instead of limiting it."
      ],
      bullets: [
        "Impact resistance and structural reinforcement",
        "Thermal management and airflow",
        "Cable routing and accessibility",
        "EMI shielding",
        "Environmental sealing"
      ],
      image: e3,
      alt: "Enclosure protection and performance"
    },
    {
      title: "Designed for Manufacturing",
      text: [
        "From early stages, we consider fabrication methods and cost-efficiency.",
        "We ensure a smooth transition from design to production."
      ],
      bullets: [
        "Sheet metal fabrication",
        "CNC machining",
        "Aluminum extrusion",
        "Injection molding",
        "Hybrid material assemblies"
      ],
      image: e4,
      alt: "Manufacturing enclosure design"
    },
    {
      title: "Integrated System Compatibility",
      text: [
        "We ensure perfect integration with internal systems including electronics and mechanical components.",
        "This reduces conflicts and accelerates development."
      ],
      bullets: [
        "PCB and power system fitment",
        "Wiring harness organization",
        "Cooling system integration",
        "Mounting structures",
        "Mechanical support alignment"
      ],
      image: e5,
      alt: "System integration enclosure"
    },
    {
      title: "Built for Real-World Performance",
      text: [
        "Our enclosures are designed for real environments, combining durability, usability, and aesthetics.",
        "We create solutions that perform and represent your product professionally."
      ],
      bullets: [
        "Industrial-grade durability",
        "Optimized internal layout",
        "Professional product appearance",
        "Long-term reliability",
        "Efficient assembly and maintenance"
      ],
      image: e6,
      alt: "Industrial enclosure performance"
    }
  ];

  const whyChooseUs = [
    "Mechanical and system-level expertise",
    "Strong focus on real-world usability",
    "Production-ready engineering workflow",
    "Durable and high-quality designs",
    "Seamless integration with electronics"
  ];

  return (
    <section className="embedded-service-page">
      <div className="site-container">

        {/* HEADER */}
        <div className="service-main-header">

          <span className="service-label">
            Mechanical Design Service
          </span>

          <h2>Product Enclosure Design</h2>

          <h3>
            Functional, Durable, and Production-Ready Enclosures
          </h3>

          <p>
            We design product enclosures that combine structural integrity,
            usability, and refined aesthetics.
          </p>

          <p>
            Our approach goes beyond appearance — we engineer enclosures that
            protect internal components, support system performance, and ensure
            smooth manufacturing.
          </p>

          <div className="service-main-image">
            <img src={e1} alt="Product enclosure design"/>
          </div>

        </div>


        {/* INTRO */}
        <div className="service-intro-block">
          <h4>Engineered for Protection and Performance</h4>
          <p>
            We develop enclosure systems that enhance product performance while
            ensuring durability, accessibility, and production efficiency.
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
              We combine mechanical engineering expertise with system-level
              understanding to design enclosures that are practical, durable,
              and market-ready.
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={e6} alt="Enclosure engineering"/>
          </div>

        </div>


        {/* CTA */}
        <div className="service-cta">

          <h4>Ready to Develop a Professional Product Enclosure?</h4>

          <p>
            Partner with Nexus Design Lab to design enclosures engineered for
            protection, performance, and production efficiency.
          </p>

          <p>
            Let’s create a housing solution tailored to your product.
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              Start Your Enclosure Design Project
            </button>

            <button className="secondary-btn">
              Discuss Your Product
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}