import React from "react";
import "./EmbeddedServiceIntro.css";

import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpeg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";

export default function EmbeddedSwIntro() {
  const sections = [
    {
      title: "Microcontroller & Processor-Based Systems",
      text: [
        "We develop firmware for a wide range of platforms, ensuring performance, scalability, and long-term maintainability across industrial, automotive, IoT, and intelligent systems."
      ],
      bullets: [
        "ARM Cortex-based MCUs",
        "STM32, ESP series, NXP, Microchip, TI, and other industrial-grade controllers",
        "Multi-core and distributed control systems",
        "RTOS-based and bare-metal architectures"
      ],
      image: p2,
      alt: "Microcontroller and processor-based systems"
    },
    {
      title: "Real-Time & Low-Level Programming",
      text: [
        "Our engineering team develops robust low-level firmware for time-critical applications where deterministic behavior and system stability are essential.",
        "We ensure stable and predictable operation even in demanding real-world environments."
      ],
      bullets: [
        "Real-time task scheduling and interrupt-driven systems",
        "Peripheral driver development (UART, SPI, I2C, CAN, ADC, PWM, Ethernet)",
        "Bootloaders and firmware update mechanisms",
        "Memory optimization and power management strategies",
        "Hardware abstraction layer (HAL) design"
      ],
      image: p3,
      alt: "Real-time and low-level embedded programming"
    },
    {
      title: "Communication & Connectivity Integration",
      text: [
        "We implement reliable communication stacks and connectivity protocols that enable seamless interaction between hardware, external devices, and cloud-based platforms."
      ],
      bullets: [
        "CAN and CAN-FD",
        "RS-485 and Modbus",
        "TCP/IP and Ethernet-based systems",
        "Wireless communication (Wi-Fi, Bluetooth, GSM, LoRa)",
        "GPS and sensor data acquisition systems"
      ],
      image: p4,
      alt: "Communication and connectivity integration"
    },
    {
      title: "System-Level Integration",
      text: [
        "Embedded software at Nexus Design Lab is developed in close coordination with hardware and mechanical teams to ensure complete system alignment.",
        "Our structured development process supports integration, validation, documentation, and long-term maintainability."
      ],
      bullets: [
        "Hardware-software co-development",
        "Sensor integration and calibration",
        "Control algorithms and automation logic",
        "AI-enabled edge processing",
        "Field testing and performance validation"
      ],
      image: p5,
      alt: "System-level embedded integration"
    }
  ];

  const whyChooseUs = [
    "Dedicated embedded engineering team",
    "Strong experience in industrial and intelligent systems",
    "Seamless integration with PCB and mechanical design",
    "Structured development workflow",
    "Long-term technical partnership approach"
  ];

  return (
    <section className="embedded-service-page">
      <div className="site-container">
        <div className="service-main-header">
          <span className="service-label">Embedded Engineering Service</span>

          <h2>Embedded Software Development</h2>

          <h3>Reliable Firmware Engineered for Real-World Performance</h3>

          <p>
            At our Electronics Design Lab, we develop embedded software that
            powers intelligent, high-performance electronic systems. Our
            engineering team designs scalable, efficient, and robust firmware
            tailored for industrial, automotive, IoT, and smart automation
            applications.
          </p>

          <p>
            We build embedded systems that operate reliably under real-world
            conditions — not just in controlled lab environments.
          </p>

          <div className="service-main-image">
            <img src={p1} alt="Embedded software development" />
          </div>
        </div>

        <div className="service-intro-block">
          <h4>Core Development Capabilities</h4>
          <p>
            We deliver embedded firmware solutions that combine performance,
            reliability, connectivity, and long-term maintainability for
            real-world products and intelligent electronic platforms.
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
              We engineer firmware that becomes the reliable core of your
              product — stable, efficient, and built to evolve with your
              system.
            </p>

            <ul>
              {whyChooseUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-highlight-image">
            <img src={p5} alt="Embedded engineering team" />
          </div>
        </div>

        <div className="service-cta">
          <h4>Ready to Power Your Hardware with Intelligent Firmware?</h4>

          <p>
            Partner with our embedded engineering team to develop scalable,
            high-performance software tailored to your application.
          </p>

          <p>
            Let’s build embedded systems designed for reliability and long-term
            success.
          </p>

          <div className="service-cta-buttons">
            <button type="button" className="primary-btn">
              Start Your Embedded Project
            </button>

            <button type="button" className="secondary-btn">
              Request a Technical Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}