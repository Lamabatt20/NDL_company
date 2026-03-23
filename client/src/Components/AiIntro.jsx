import React from "react";
import "./EmbeddedServiceIntro.css";

import pppp1 from "../assets/images/pppp1.webp";
import pppp2 from "../assets/images/pppp2.jpg";
import pppp3 from "../assets/images/pppp3.png";
import pppp4 from "../assets/images/pppp4.webp";
import pppp5 from "../assets/images/pppp5.jpeg";
import pppp6 from "../assets/images/pppp6.jpg";

export default function AiIntro() {
  const sections = [
    {
      title: "From Data to Actionable Intelligence",
      text: [
        "AI integration begins with a clear understanding of system objectives, operational data, and hardware capabilities.",
        "Our team defines the most effective intelligence layer for each application to ensure measurable value and real-world performance."
      ],
      bullets: [
        "Edge-based AI processing on embedded systems",
        "Cloud-connected AI analytics platforms",
        "Computer vision integration with industrial cameras",
        "Predictive maintenance and anomaly detection",
        "Intelligent automation and decision logic"
      ],
      image: pppp2,
      alt: "Data to actionable intelligence"
    },
    {
      title: "Embedded & Edge AI Development",
      text: [
        "We integrate intelligence directly into embedded platforms when required, enabling efficient processing close to the hardware layer.",
        "Our engineers optimize AI deployment for stability, speed, and reliability in field conditions."
      ],
      bullets: [
        "Optimized model deployment on microcontrollers and processors",
        "Resource-efficient inference on constrained hardware",
        "Integration with sensors, vision systems, and control units",
        "Real-time processing for industrial and robotic applications"
      ],
      image: pppp3,
      alt: "Embedded and edge AI development"
    },
    {
      title: "Intelligent Automation & System Optimization",
      text: [
        "We develop AI-driven control strategies that improve efficiency, reduce downtime, and enable adaptive system behavior.",
        "Our goal is to create intelligence that directly supports operational and business performance."
      ],
      bullets: [
        "Smart monitoring and automated alerts",
        "Vision-based inspection systems",
        "Adaptive robotics and motion control",
        "Energy optimization systems",
        "Data-driven performance analysis"
      ],
      image: pppp4,
      alt: "Intelligent automation and system optimization"
    },
    {
      title: "Built for Scalability & Long-Term Deployment",
      text: [
        "AI systems must evolve alongside the products and environments they support.",
        "We design scalable architectures that ensure maintainability, secure operation, and seamless integration with enterprise infrastructure."
      ],
      bullets: [
        "Model updates and retraining",
        "Remote system upgrades",
        "Secure data handling",
        "Integration with existing enterprise platforms",
        "Long-term maintainability and cybersecurity readiness"
      ],
      image: pppp5,
      alt: "Scalable AI deployment"
    }
  ];

  const whyChooseUs = [
    "Unified hardware, embedded, and intelligent software expertise",
    "Practical AI engineered for real-world deployment",
    "Strong system-level integration capability",
    "Scalable and secure architecture design",
    "Reliable long-term technical partnership"
  ];

  return (
    <section className="embedded-service-page">
      <div className="site-container">
        <div className="service-main-header">
          <span className="service-label">AI Engineering Service</span>

          <h2>AI Integration</h2>

          <h3>Engineering Intelligence into Real-World Systems</h3>

          <p>
            At our Electronics Design Lab, we integrate Artificial Intelligence
            into hardware and software platforms to create systems that are not
            only automated — but intelligent.
          </p>

          <p>
            Our approach combines embedded engineering, data processing, and
            system architecture to deliver AI-driven solutions that operate
            reliably in real-world environments. We focus on practical,
            deployable intelligence designed to enhance performance, improve
            decision-making, and create measurable operational value.
          </p>

          <div className="service-main-image">
            <img src={pppp1} alt="AI integration systems" />
          </div>
        </div>

        <div className="service-intro-block">
          <h4>Practical Intelligence, Engineered for Deployment</h4>
          <p>
            We build AI-enabled systems that combine embedded hardware,
            intelligent software, and operational data to create scalable,
            high-value solutions for industrial and smart environments.
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
              We combine hardware expertise, embedded systems engineering, and
              intelligent software development under one unified team. This
              multidisciplinary capability allows us to integrate AI seamlessly
              into complete systems — not as an isolated feature, but as a core
              functional layer.
            </p>

            <ul>
              {whyChooseUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-highlight-image">
            <img src={pppp6} alt="AI engineering team" />
          </div>
        </div>

        <div className="service-cta">
          <h4>Ready to Integrate Intelligence into Your System?</h4>

          <p>
            Partner with Nexus Design Lab to develop AI-driven solutions
            tailored to your hardware, infrastructure, and operational goals.
          </p>

          <p>
            Let’s build systems that don’t just operate — but think.
          </p>

          <div className="service-cta-buttons">
            <button type="button" className="primary-btn">
              Start Your AI Integration Project
            </button>

            <button type="button" className="secondary-btn">
              Discuss Your System
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}