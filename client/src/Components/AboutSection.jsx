import React, { useEffect, useRef } from "react";
import "./AboutSection.css";

function AboutSection() {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.35 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }
  }, []);

  return (
    <section className="about">
      <div className="about-wrapper reveal" ref={contentRef}>

        <div className="about-content">
          <h2 className="about-title">
            Built by Engineers.Proven in the Field
          </h2>

          <p className="about-text">
            Nexus Design Lab is an engineering-driven company specializing in
            Mechanical, embedded systems, and smart automation solutions.
          </p>

          <p className="about-text">
            We work closely with our partners to design, develop, and deliver
            reliable products built for real-world use.
          </p>

          <p className="about-text">
            Our focus is on long-term collaboration, technical excellence, and
            solutions that scale with your needs.
          </p>
        </div>

        <div className="about-video">
          <div className="video-frame">
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
