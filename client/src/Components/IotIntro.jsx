import React from "react";
import "./EmbeddedServiceIntro.css";

import ppp1 from "../assets/images/ppp1.jpg";
import ppp2 from "../assets/images/ppp2.webp";
import ppp3 from "../assets/images/ppp3.jpg";
import ppp4 from "../assets/images/ppp4.jpg";
import ppp5 from "../assets/images/ppp5.webp";
import ppp6 from "../assets/images/ppp6.png";

export default function IotIntro() {
  const sections = [
    {
      title: "Smart Device Development",
      text: [
        "We design intelligent edge devices that operate reliably in real-world environments.",
        "Each device is engineered for long-term deployment with strong focus on efficiency and durability."
      ],
      bullets: [
        "Custom PCB and embedded system design",
        "Sensor integration and data acquisition",
        "Low-power and battery-operated systems",
        "Industrial-grade enclosures",
        "Secure firmware and device management"
      ],
      image: ppp2
    },
    {
      title: "Connectivity & Communication",
      text: [
        "Reliable communication is the foundation of any IoT ecosystem.",
        "We integrate both short-range and long-range communication technologies."
      ],
      bullets: [
        "Wi-Fi and Ethernet connectivity",
        "GSM / LTE / NB-IoT modules",
        "LoRa communication systems",
        "CAN and RS-485 protocols",
        "GPS tracking systems"
      ],
      image: ppp3
    },
    {
      title: "Cloud & Data Integration",
      text: [
        "We connect field devices to cloud platforms to enable real-time monitoring and analytics.",
        "Our solutions transform raw data into actionable insights."
      ],
      bullets: [
        "Secure data transmission",
        "Real-time dashboards",
        "Remote firmware updates",
        "Data logging and analytics",
        "API integration with enterprise systems"
      ],
      image: ppp4
    },
    {
      title: "Automation & Intelligent Control",
      text: [
        "We go beyond monitoring by building intelligent systems capable of autonomous decision-making.",
        "Our systems are designed to improve efficiency and reduce manual intervention."
      ],
      bullets: [
        "Automated control logic",
        "Alert and notification systems",
        "Predictive maintenance",
        "AI-enhanced processing",
        "Remote system management"
      ],
      image: ppp5
    },
    {
      title: "Security, Scalability & Reliability",
      text: [
        "All IoT systems are designed with strong emphasis on security, scalability, and long-term reliability.",
        "We build solutions that can grow with your business and operate safely in industrial environments."
      ],
      bullets: [
        "Cybersecurity best practices",
        "Scalable architecture",
        "Device lifecycle management",
        "Industrial reliability standards",
        "Efficient power management"
      ],
      image: ppp6
    }
  ];

  const whyChooseUs = [
    "Full-stack IoT development capability",
    "Integrated hardware and firmware expertise",
    "Experience in industrial systems",
    "Secure and scalable architecture",
    "Long-term technical partnership"
  ];

  return (
    <section className="embedded-service-page">
      <div className="site-container">

        {/* HEADER */}
        <div className="service-main-header">

          <span className="service-label">
            IoT Engineering Service
          </span>

          <h2>IoT Smart Solutions</h2>

          <h3>
            Intelligent Connected Systems Built for the Real World
          </h3>

          <p>
            We design and develop secure, scalable IoT solutions that connect
            devices, systems, and data into intelligent platforms.
          </p>

          <p>
            Our engineering team integrates hardware, embedded software,
            communication technologies, and cloud infrastructure to create
            reliable smart systems for industrial and commercial applications.
          </p>

          <div className="service-main-image">
            <img src={ppp1} alt="IoT smart systems"/>
          </div>

        </div>


        {/* INTRO */}
        <div className="service-intro-block">
          <h4>End-to-End IoT Architecture</h4>
          <p>
            We deliver complete IoT ecosystems that combine smart devices,
            connectivity, cloud platforms, and intelligent control systems.
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
              <img src={section.image} alt={section.title}/>
            </div>

          </div>
        ))}


        {/* WHY */}
        <div className="service-highlight-box">

          <div className="service-highlight-content">

            <h4>Why Nexus Design Lab?</h4>

            <p>
              We don’t just connect devices — we build intelligent ecosystems
              that enable smarter decision-making.
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={ppp6} alt="IoT engineering"/>
          </div>

        </div>


        {/* CTA */}
        <div className="service-cta">

          <h4>Ready to Build a Connected Intelligent System?</h4>

          <p>
            Partner with Nexus Design Lab to design scalable IoT solutions
            tailored to your operational needs.
          </p>

          <p>
            Let’s transform your data into intelligent systems.
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              Start Your IoT Project
            </button>

            <button className="secondary-btn">
              Discuss Your System
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}