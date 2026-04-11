import React from "react";
import "./About.css";
import heroImg from "../assets/images/4583.png";
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
  return (
    <div className="aboutsd-page">
      {/* ================= HERO ================= */}
      <section className="aboutsd-hero">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>

        <div className="aboutsd-container">
          <div className="aboutsd-text">
            <span className="aboutsd-label">ABOUT NDL</span>
            <h1>
              Engineering <span>Innovation</span>
              <br />
              With Real-World Impact
            </h1>
            <p>
              We create reliable engineering solutions across embedded systems,
              mechanical design, and smart technologies, combining innovation,
              precision, and practical execution.
            </p>

            <div className="aboutsd-hero-actions">
              <button className="aboutsd-btn" onClick={() => navigate("/contact")}>
                Contact Us
              </button>
              <button className="aboutsd-btn aboutsd-btn-outline" onClick={() => navigate("/services")}>
                Explore Services
              </button>
            </div>
          </div>

          <div className="aboutsd-image">
            <div className="aboutsd-image-wrap">
              <img src={heroImg} alt="About Us" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="aboutsd-section aboutsd-section-intro">
        <div className="container narrow">
          <span className="section-tag">Who We Are</span>
          <h2>Driven by Quality, Precision, and Innovation</h2>
          <p>
            NDL is an engineering-focused company dedicated to delivering
            dependable and forward-thinking solutions tailored to real industry
            needs. We transform ideas into practical products through a balanced
            combination of technical expertise, creative problem solving, and
            attention to detail.
          </p>
          <p>
            Our work spans multiple engineering disciplines, allowing us to
            build solutions that are not only functional and efficient, but also
            scalable and ready for real-world application.
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="aboutsd-section diagonal-section mission-vision-section">
        <div className="diagonal-bg"></div>

        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Our Direction</span>
            <h2>Mission & Vision</h2>
            <p>
              What drives our work, shapes our decisions, and defines the future
              we aim to build.
            </p>
          </div>

          <div className="two-col mission-grid">
            <div className="info-box">
              <div className="mini-icon">M</div>
              <h3>Our Mission</h3>
              <p>
                To deliver innovative, reliable, and efficient engineering
                solutions that solve real-world challenges with precision,
                quality, and long-term value.
              </p>
            </div>

            <div className="info-box">
              <div className="mini-icon">V</div>
              <h3>Our Vision</h3>
              <p>
                To become a trusted leader in engineering innovation by creating
                impactful solutions that advance industries and empower growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="about-section what-we-do-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">What We Do</span>
            <h2>Engineering Services Designed for Impact</h2>
            <p>
              We provide integrated technical solutions across multiple domains,
              built to meet modern challenges with precision and flexibility.
            </p>
          </div>

          <div className="grid servicese-grid">
            <div className="card servicese-card">
              <div className="card-dot"></div>
              <h4>Embedded Systems</h4>
              <p>
                Design and development of intelligent embedded solutions for
                modern devices and applications.
              </p>
            </div>

            <div className="card servicese-card">
              <div className="card-dot"></div>
              <h4>PCB Design</h4>
              <p>
                High-quality schematic and PCB layout development with strong
                focus on performance and reliability.
              </p>
            </div>

            <div className="card servicese-card">
              <div className="card-dot"></div>
              <h4>Mechanical Design</h4>
              <p>
                Functional product design and 3D modeling tailored to practical
                engineering requirements.
              </p>
            </div>

            <div className="card servicese-card">
              <div className="card-dot"></div>
              <h4>Smart Systems</h4>
              <p>
                Intelligent systems and connected solutions built for efficiency,
                automation, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="aboutsd-section values-section">
        <div className="values-shape values-shape-left"></div>
        <div className="values-shape values-shape-right"></div>

        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Our Values</span>
            <h2>What We Stand For</h2>
            <p>
              The principles that guide how we think, build, and deliver every
              solution.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>Innovation</h4>
              <p>
                We go beyond conventional thinking to create engineering
                solutions that are modern, effective, and future-ready.
              </p>
            </div>

            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>Accountability</h4>
              <p>
                We take ownership of every phase of the process and maintain a
                high standard from concept to delivery.
              </p>
            </div>

            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>Client Focus</h4>
              <p>
                We design with purpose, aligning every solution with our
                clients’ real goals, needs, and long-term success.
              </p>
            </div>

            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>Quality</h4>
              <p>
                We believe excellence is in the details, and we prioritize
                precision, reliability, and strong execution in every project.
              </p>
            </div>

            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>Integrity</h4>
              <p>
                Transparency, honesty, and trust are essential to how we work,
                communicate, and build long-lasting partnerships.
              </p>
            </div>

            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>Collaboration</h4>
              <p>
                Great outcomes are built together, and we value teamwork, shared
                ideas, and collective problem solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="aboutsd-section diagonal-section choose-section">
        <div className="diagonal-bg diagonal-bg-light"></div>

        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Why Choose Us</span>
            <h2>A Trusted Partner for Smart Engineering Solutions</h2>
            <p>
              We combine strong technical capability with clear execution and a
              commitment to delivering real value.
            </p>
          </div>

          <div className="choose-grid">
            <div className="choose-item">
              <span></span>
              <p>Practical and scalable engineering solutions</p>
            </div>
            <div className="choose-item">
              <span></span>
              <p>Strong focus on quality and precision</p>
            </div>
            <div className="choose-item">
              <span></span>
              <p>Flexible approach tailored to project needs</p>
            </div>
            <div className="choose-item">
              <span></span>
              <p>Innovation-driven mindset across all services</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRE FOOTER CTA ================= */}
      <section className="pre-footer-section">
        <div className="container pre-footer-box">
          <div className="pre-footer-text">
            <span className="section-tag light-tag">Let’s Connect</span>
            <h2>Let’s Build Something Meaningful Together</h2>
            <p>
              Whether you need a full engineering solution or a specialized
              technical service, we’re ready to help bring your vision to life.
            </p>
          </div>

          <div className="pre-footer-action">
            <button className="aboutsd-btn" onClick={() => navigate("/contact")}>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}