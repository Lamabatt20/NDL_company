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
  const [animateCards, setAnimateCards] = useState(false);

  const services = [
    { title: "PCB Schematic Design", description: "Robust and production-ready schematic design built on best engineering practices." },
    { title: "PCB Layout Design", description: "High-quality multilayer PCB layout optimized for signal integrity and manufacturability." },
    { title: "Embedded Software Development", description: "Efficient firmware and embedded software tailored for real-time systems." },
    { title: "Electronic Products Development", description: "End-to-end electronic product development — from concept to testing." },
    { title: "IoT Smart Solutions", description: "Secure and connected IoT systems integrating sensors and cloud platforms." },

    // ✅ الخدمة الجديدة بعد IoT
    { 
      title: "AI Integration",
      description: "Integration of intelligent algorithms and AI-driven systems into hardware and software platforms, enabling automation, data-driven decision-making, and advanced system performance."
    },

    { title: "Sheet Metal Design", description: "Precision sheet-metal solutions optimized for manufacturability and structural integrity." },
    { title: "Aluminum Structure Design", description: "Lightweight and durable aluminum structures engineered for industrial applications." },
    { title: "Product Enclosure Design", description: "Professional enclosure development balancing aesthetics, durability, and real-world requirements." },
    { title: "Robotics Development", description: "Mechanical and electromechanical design for robotic platforms including motion systems." },
    { title: "Steel Structure Design", description: "Heavy-duty steel structures engineered for strength, stability, and compliance." },

    // ✅ آخر خدمة
    {
      title: "Wood and Furniture Design",
      description: "Custom wood and furniture design combining structural engineering, functionality, and refined aesthetics — from concept development to production-ready designs."
    }
  ];

  const getImage = (index) => {
    const imgs = [
      serviceImg1,
      serviceImg2,
      serviceImg3,
      serviceImg4,
      serviceImg5,
      serviceImg11, // AI Integration
      serviceImg6,
      serviceImg7,
      serviceImg8,
      serviceImg9,
      serviceImg10,
      serviceImg12  // Wood Design
    ];
    return imgs[index];
  };

  useEffect(() => {
    const element = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          triggerCardAnimation();
        }
      },
      { threshold: 0.3 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const triggerCardAnimation = () => {
    setAnimateCards(false);
    setTimeout(() => {
      setAnimateCards(true);
    }, 50);
  };

  return (
    <section
      ref={sectionRef}
      className={`our-services ${isVisible ? "show" : ""}`}
    >
      <div className="site-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p className="main-text">
            We provide end-to-end engineering solutions covering mechanical design, embedded systems, and intelligent technology development.
            From concept to hardware, software, and AI integration, our services help businesses transform ideas into high-performance products built for real-world deployment. 
          </p>
        </div>

        <div className="services-grid">
          <div className="service-group">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className={`service-card ${animateCards ? "animate" : ""} group-one`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img src={getImage(index)} alt={service.title} />
                <div className="card-overlay">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="service-group">
            {services.slice(6).map((service, index) => (
              <div
                key={index + 6}
                className={`service-card ${animateCards ? "animate" : ""} group-two`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <img src={getImage(index + 6)} alt={service.title} />
                <div className="card-overlay">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
