import React, { useState, useEffect, useRef } from "react";
import "./OurServices.css";

import serviceImg1 from "../assets/images/service1.png";
import serviceImg2 from "../assets/images/service2.png";
import serviceImg3 from "../assets/images/service3.png";
import serviceImg4 from "../assets/images/service4.png";
import serviceImg5 from "../assets/images/service5.png";
import serviceImg6 from "../assets/images/service6.png";
import serviceImg7 from "../assets/images/service7.png";
import serviceImg8 from "../assets/images/service8.png";
import serviceImg9 from "../assets/images/Picture2.png";
import serviceImg10 from "../assets/images/Picture3.png";
import serviceImg11 from "../assets/images/Picture1.png";
import serviceImg12 from "../assets/images/Picture4.png";

export default function OurServices() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLab, setActiveLab] = useState("electronics");

  const services = [
    { title: "PCB Schematic Design", description: "Robust and production-ready schematic design built on best engineering practices." },
    { title: "PCB Layout Design", description: "High-quality multilayer PCB layout optimized for signal integrity and manufacturability." },
    { title: "Embedded Software Development", description: "Efficient firmware and embedded software tailored for real-time systems." },
    { title: "Electronic Products Development", description: "End-to-end electronic product development — from concept to testing." },
    { title: "IoT Smart Solutions", description: "Secure and connected IoT systems integrating sensors and cloud platforms." },
    { title: "AI Integration", description: "Integration of intelligent algorithms and AI-driven systems into hardware and software platforms." },

    { title: "Sheet Metal Design", description: "Precision sheet-metal solutions optimized for manufacturability and structural integrity." },
    { title: "Aluminum Structure Design", description: "Lightweight and durable aluminum structures engineered for industrial applications." },
    { title: "Product Enclosure Design", description: "Professional enclosure development balancing aesthetics, durability, and real-world requirements." },
    { title: "Robotics Development", description: "Mechanical and electromechanical design for robotic platforms including motion systems." },
    { title: "Steel Structure Design", description: "Heavy-duty steel structures engineered for strength, stability, and compliance." },
    { title: "Wood and Furniture Design", description: "Custom wood and furniture design combining engineering, functionality, and refined aesthetics." }
  ];

  const images = [
    serviceImg1, serviceImg2, serviceImg3, serviceImg4, serviceImg5, serviceImg11,
    serviceImg6, serviceImg7, serviceImg8, serviceImg9, serviceImg10, serviceImg12
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderCards = (startIndex) => (
    <div className="service-group">
      {services.slice(startIndex, startIndex + 6).map((service, index) => (
        <div
          key={index}
          className="service-card show"
          style={{ transitionDelay: `${index * 0.08}s` }}
        >
          <img src={images[startIndex + index]} alt={service.title} />
          <div className="card-overlay">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section ref={sectionRef} className={`our-services ${isVisible ? "visible" : ""}`}>
      <div className="site-container">

        <div className="services-header">
          <h2>Our Services</h2>
          <p className="main-text">
            We provide end-to-end engineering solutions covering electronics, embedded systems,
            mechanical design, and intelligent technologies. From concept to hardware, software,
            and AI integration, our services help businesses transform ideas into high-performance
            products built for real-world deployment.
          </p>
        </div>

        {/* Tabs */}
        <div className="servicese-tabs">
          <button
            className={activeLab === "electronics" ? "active" : ""}
            onClick={() => setActiveLab("electronics")}
          >
            Electronics Design Lab
          </button>

          <button
            className={activeLab === "mechanical" ? "active" : ""}
            onClick={() => setActiveLab("mechanical")}
          >
            Mechanical Design Lab
          </button>
        </div>

        {/* Cards */}
        <div className="services-grid">
          {activeLab === "electronics" && renderCards(0)}
          {activeLab === "mechanical" && renderCards(6)}
        </div>

      </div>
    </section>
  );
}