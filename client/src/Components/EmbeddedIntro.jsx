import React, { useEffect, useRef, useState } from "react";
import "./EmbeddedIntro.css";
import img1 from "../assets/images/images.png";

export default function EmbeddedIntro() {
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
      className={`embedded-intro ${show ? "show" : ""}`}
    >
      <div className="site-container">
        <h2 className="embedded-intro-title">What Is Embedded Systems Design?</h2>

        <div className="embedded-intro-wrapper">
          <div className="embedded-intro-text">
            <p>
              We develop high-performance embedded systems that seamlessly integrate
              hardware and software. Our solutions focus on reliability, real-time
              performance, and scalable architectures across diverse industries.
            </p>
          </div>

          <div className="embedded-intro-image">
            <img src={img1} alt="Embedded Design" />
          </div>
        </div>
      </div>
    </section>
  );
}
