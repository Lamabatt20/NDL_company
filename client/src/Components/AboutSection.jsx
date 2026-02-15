import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";

function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-espark ${isVisible ? "show" : ""}`}
    >
      <div className="site-container">
        <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">Who We Are?</h2>

          <p>
            At Nexus Design Lab, we deliver end-to-end engineering solutions that
            turn ideas into scalable products.
          </p>

          <p>
            Our mechanical design expertise spans product development, production
            line design, steel structures, and manufacturing-ready solutions
            using sheet metal and 3D printing.
          </p>

          <p>
            On the electronics side, we specialize in embedded systems,
            full-stack PCB design, and hardware–software co-development.
          </p>

          <p>
            With hands-on experience across diverse industries, we focus on
            building solutions that perform in real-world environments.
          </p>
        </div>

        <div className="about-video">
          <video
            src="https://res.cloudinary.com/dalt14sx4/video/upload/v1768502252/about_xinics.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
