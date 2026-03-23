import React from "react";
import "./EmbeddedServiceIntro.css";

import mcuImg from "../assets/images/pcb-mcu-processors.png";
import systemDesignImg from "../assets/images/pcb-complex-system.png";
import powerProtectionImg from "../assets/images/pcb-power-protection.png";
import manufacturingImg from "../assets/images/pcb-manufacturing.png";
import developmentImg from "../assets/images/pcb-development.png";
import whyImg from "../assets/images/mm.png";

export default function PcbSchematicIntro() {
  const sections = [
    {
      title: "Advanced MCU & Processor Integration",
      text: [
        "We design systems based on a wide range of microcontrollers and processors, ensuring the right balance between performance, availability, lifecycle, and cost-efficiency."
      ],
      bullets: [
        "ARM Cortex-based MCUs",
        "STM32, ESP series, NXP, Microchip, and TI platforms",
        "Industrial and automotive-grade controllers",
        "Multi-processor and distributed control systems"
      ],
      image: mcuImg,
      alt: "MCU and processor integration"
    },
    {
      title: "Complex System Design",
      text: [
        "Our team develops schematics for complex electronic systems with strong architectural integration across all functional blocks.",
        "We ensure that every subsystem works cohesively within the complete system architecture."
      ],
      bullets: [
        "Multi-layer high-speed digital systems",
        "Mixed-signal designs (analog + digital integration)",
        "Communication interfaces such as CAN, RS-485, UART, SPI, I2C, and Ethernet",
        "Power management and wide-input industrial power stages",
        "Sensor integration and signal conditioning circuits",
        "AI-enabled and IoT-connected hardware platforms"
      ],
      image: systemDesignImg,
      alt: "Complex electronic system design"
    },
    {
      title: "Power & Protection Engineering",
      text: [
        "We design reliable power stages that operate efficiently across wide voltage ranges while maintaining safety, durability, and compliance.",
        "Every schematic is engineered with long-term stability and protection in mind."
      ],
      bullets: [
        "Overcurrent and overvoltage protection",
        "Reverse polarity protection",
        "EMI/EMC filtering considerations",
        "Thermal management strategy",
        "Battery-powered and energy-efficient designs"
      ],
      image: powerProtectionImg,
      alt: "Power and protection engineering"
    },
    {
      title: "Designed for Standards & Manufacturing",
      text: [
        "Our schematic designs are developed with full awareness of industrial requirements and production readiness.",
        "We deliver organized, well-documented schematics that support a smooth transition into PCB layout, prototyping, and mass production."
      ],
      bullets: [
        "Industrial and automotive design practices",
        "EMC/EMI compliance requirements",
        "Design for Manufacturability (DFM)",
        "Design for Testing (DFT)",
        "Production scalability"
      ],
      image: manufacturingImg,
      alt: "Manufacturing-ready schematic design"
    },
    {
      title: "Fast, Structured, and Collaborative Development",
      text: [
        "With an experienced and dedicated engineering team, we can support projects through flexible and efficient development cycles.",
        "We work closely with clients throughout the development process, ensuring technical transparency and long-term partnership."
      ],
      bullets: [
        "Rapid development cycles",
        "Iterative prototyping",
        "Custom electrical solutions from scratch",
        "Design upgrades and legacy system improvements"
      ],
      image: developmentImg,
      alt: "Collaborative electronics development"
    }
  ];

  const whyChooseUs = [
    "Dedicated electronics engineering team",
    "Proven experience in complex embedded systems",
    "Strong component selection and sourcing knowledge",
    "Industrial-grade design philosophy",
    "Long-term technical support mindset"
  ];

  return (
    <section className="embedded-service-page">
      <div className="site-container">
        <div className="service-main-header">
          <span className="service-label">Electronics Design Service</span>
          <h2>PCB Schematic Design</h2>
          <h3>Engineering-Driven Circuit Architecture for Reliable Products</h3>

          <p>
            At our Electronics Design Lab, PCB schematic design is more than
            just drawing circuits — it is the foundation of reliable,
            high-performance electronic systems. Our engineering team develops
            robust electrical architectures tailored for industrial, automotive,
            IoT, and intelligent system applications.
          </p>

          <p>
            We create scalable, production-ready schematics that support signal
            integrity, power stability, protection compliance, and long-term
            reliability in real-world environments.
          </p>

        </div>

        <div className="service-intro-block">
          <h4>Our Technical Capabilities</h4>
          <p>
            We develop advanced schematic architectures tailored for complex
            embedded and intelligent electronic products, with a strong focus on
            reliability, integration, and production readiness.
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
                We do not just design circuits — we build reliable electronic
                foundations for products designed to last.
                </p>

                <ul>
                {whyChooseUs.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>

            <div className="service-highlight-image">
                <img src={whyImg} alt="Engineering illustration" />
            </div>

            </div>

        <div className="service-cta">
          <h4>Let’s Engineer Your Next Electronic System</h4>
          <p>
            Whether you are developing a new product or upgrading an existing
            platform, our engineering team is ready to support your schematic
            design requirements with precision and reliability.
          </p>
          <p>
            Start your project with Nexus Design Lab and build electronics
            designed for performance, compliance, and long-term success.
          </p>

          <div className="service-cta-buttons">
            <a href="#consultation" className="primary-btn">
              Request a Consultation
            </a>
            <a href="#project-discussion" className="secondary-btn">
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}