import React from "react";
import "./EmbeddedServiceIntro.css";

import ep1 from "../assets/images/ep1.png";
import ep2 from "../assets/images/ep2.jpg";
import ep3 from "../assets/images/ep3.webp";
import ep4 from "../assets/images/ep4.png";
import ep5 from "../assets/images/ep5.webp";
import ep6 from "../assets/images/ep6.jpg";

export default function SheetMetalIntro() {
  const sections = [
    {
      title: "Design for Manufacturing from Day One",
      text: [
        "Successful sheet metal products require more than geometry. We design with full awareness of fabrication constraints, assembly processes, and structural performance to ensure smooth production and long-term durability.",
        "Each design is developed with accurate tolerances, bend allowances, and material selection tailored to the application."
      ],
      bullets: [
        "Enclosures and chassis for electronic systems",
        "Industrial cabinets and control panels",
        "Structural frames and mechanical supports",
        "Brackets, mounts, and precision components",
        "Assembly-ready sheet metal systems"
      ],
      image: ep2,
      alt: "Design for manufacturing sheet metal"
    },
    {
      title: "Structural Integrity & Optimization",
      text: [
        "We analyze mechanical loads, vibration, and environmental conditions to ensure structural stability and operational reliability.",
        "This ensures every product balances strength, weight, and cost-effectiveness."
      ],
      bullets: [
        "Material thickness optimization",
        "Reinforcement strategies and rib structures",
        "Fastening and joint design",
        "Thermal and airflow considerations",
        "Corrosion resistance planning"
      ],
      image: ep3,
      alt: "Structural integrity and optimization"
    },
    {
      title: "Production-Ready Documentation",
      text: [
        "To support seamless manufacturing, we provide complete documentation packages that reduce fabrication errors and improve production efficiency.",
        "Our goal is to ensure every design transitions smoothly from engineering to fabrication."
      ],
      bullets: [
        "Detailed fabrication drawings",
        "Flat patterns and bend tables",
        "Assembly drawings and exploded views",
        "Bill of materials (BOM)",
        "DXF and CNC-ready production files"
      ],
      image: ep4,
      alt: "Production-ready documentation"
    },
    {
      title: "Integration with Electronic & Mechanical Systems",
      text: [
        "Sheet metal components often form the backbone of larger systems. We coordinate closely with electronics and embedded teams to ensure precise fitment and reliable system integration.",
        "This multidisciplinary collaboration allows us to deliver fully integrated industrial solutions."
      ],
      bullets: [
        "PCB fitment and mounting support",
        "Wiring harness accommodation",
        "Cooling system integration",
        "Mechanical assembly coordination",
        "System-level enclosure alignment"
      ],
      image: ep5,
      alt: "Integration with electronic and mechanical systems"
    },
    {
      title: "Built for Industrial Performance",
      text: [
        "Our sheet metal solutions are engineered for demanding real-world environments where durability, manufacturability, and operational efficiency are essential.",
        "We focus on designs that are practical to fabricate, easy to assemble, and reliable over long-term use."
      ],
      bullets: [
        "Industrial-grade design approach",
        "Optimized fabrication workflow",
        "Reliable long-term performance",
        "Cost-efficient structural solutions",
        "Real-world deployment readiness"
      ],
      image: ep6,
      alt: "Industrial sheet metal performance"
    }
  ];

  const whyChooseUs = [
    "Practical fabrication knowledge",
    "Advanced mechanical design expertise",
    "Production-ready engineering workflow",
    "Durable and cost-efficient solutions",
    "Smooth transition from CAD to manufacturing"
  ];

  return (
    <section className="embedded-service-page">
      <div className="site-container">
        <div className="service-main-header">
          <span className="service-label">Mechanical Design Service</span>

          <h2>Sheet Metal Design</h2>

          <h3>Precision Sheet Metal Engineering for Industrial Applications</h3>

          <p>
            At our mechanical design lab, we provide professional sheet metal
            design services focused on strength, manufacturability, and cost
            efficiency.
          </p>

          <p>
            Our mechanical engineering team develops production-ready designs
            optimized for fabrication processes such as laser cutting, CNC
            punching, bending, and welding. We don’t just design parts — we
            engineer sheet metal solutions that perform reliably in real-world
            industrial environments.
          </p>

          <div className="service-main-image">
            <img src={ep1} alt="Sheet metal design" />
          </div>
        </div>

        <div className="service-intro-block">
          <h4>Engineering for Real Production</h4>
          <p>
            We develop sheet metal systems that combine structural strength,
            fabrication efficiency, and production-ready detailing for
            industrial applications.
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
              We combine practical fabrication knowledge with advanced
              mechanical design expertise. Our sheet metal solutions are
              engineered for durability, manufacturability, and long-term
              operational performance.
            </p>

            <ul>
              {whyChooseUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-highlight-image">
            <img src={ep6} alt="Sheet metal engineering team" />
          </div>
        </div>

        <div className="service-cta">
          <h4>Need a Production-Ready Sheet Metal Solution?</h4>

          <p>
            Partner with Nexus Design Lab to develop precision-engineered sheet
            metal components tailored to your application.
          </p>

          <p>
            Let’s design structures built for strength, efficiency, and
            real-world deployment.
          </p>

          <div className="service-cta-buttons">
            <button type="button" className="primary-btn">
              Start Your Mechanical Project
            </button>

            <button type="button" className="secondary-btn">
              Discuss Your Application
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}