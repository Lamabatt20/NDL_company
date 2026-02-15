import React, { useEffect, useRef, useState } from "react";
import "./MechanicalIntro.css";
import img1 from "../assets/images/images.png";

export default function MechanicalIntro() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.6 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`Mechanical-intro ${show ? "show" : ""}`}
    >
      <div className="site-container">
        <h2 className="Mechanical-intro-title">What Is Mechanical Systems Design?</h2>

        <div className="Mechanical-intro-wrapper">
          <div className="Mechanical-intro-text">
            <p>
              We develop high-quality mechanical designs that translate concepts into reliable physical systems. Our work focuses on structural integrity, manufacturability, and performance optimization for real-world environments.
            </p>
          </div>

          <div className="Mechanical-intro-image">
            <img src={img1} alt="Mechanical Design" />
          </div>
        </div>
      </div>
    </section>
  );
}
