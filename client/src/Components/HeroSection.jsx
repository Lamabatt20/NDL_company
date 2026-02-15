import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src="https://res.cloudinary.com/dalt14sx4/video/upload/v1770222829/Hero_Video_2_no5ifp.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-overlay"></div>

      <div className="site-container">
        <div className="hero-content">
        <span className="hero-slogan">
          YOUR PRODUCT, OUR ENGINEERING
        </span>

        <h1 className="hero-title">
          Empowering <br /> businesses through <br /> Technology
        </h1>


       
        <h2 className="hero-subtitle">
          At NEXUS Design Labs, We work alongside businesses to create design and technology that performs in the real world. Driven by experience, precision, and accountability, we engineer solutions built to last. Our focus is not just building products — but building long-term partnerships that scale and endure.
        </h2>

        <button
          className="btn primary btn-arrow"
          onClick={() => {
            const section = document.getElementById("projects");
            if (section) {
              section.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          START YOUR PROJECT TODAY
          <span className="arrow">→</span>
        </button>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;
