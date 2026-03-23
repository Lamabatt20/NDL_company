import React from "react";
import "./EmbeddedServiceIntro.css";

import sw1 from "../assets/images/sw1.jpg";
import sw2 from "../assets/images/sw2.webp";
import sw3 from "../assets/images/sw3.jpeg";
import sw4 from "../assets/images/sw4.webp";
import sw5 from "../assets/images/sw5.jpg";
import sw6 from "../assets/images/sw6.jpg";
import sw7 from "../assets/images/sw7.png";

export default function ProductDesignIntro() {
  const sections = [
    {
      title: "Strategic Product Development Approach",
      text: [
        "Successful products require a structured development process.",
        "We guide projects from concept definition through engineering and validation."
      ],
      bullets: [
        "Concept development and feasibility analysis",
        "Functional and ergonomic design",
        "Mechanical architecture planning",
        "Material selection and manufacturing strategy",
        "Cost and production optimization"
      ],
      image: sw2,
      alt: "Product development strategy"
    },
    {
      title: "Engineering Meets Innovation",
      text: [
        "We integrate mechanical, electronic, and embedded considerations early in the design phase.",
        "This ensures seamless coordination between all system components."
      ],
      bullets: [
        "Internal layout and space optimization",
        "Structural integrity and load distribution",
        "Thermal and ventilation design",
        "User interface and accessibility",
        "Compliance and safety requirements"
      ],
      image: sw3,
      alt: "Engineering and innovation"
    },
    {
      title: "Prototyping & Validation",
      text: [
        "We support iterative development to refine and validate product performance.",
        "Each design is tested for usability, durability, and functionality."
      ],
      bullets: [
        "3D modeling and CAD development",
        "Rapid prototyping and 3D printing",
        "Functional testing",
        "Performance validation",
        "Design refinement"
      ],
      image: sw4,
      alt: "Prototyping and validation"
    },
    {
      title: "Designed for Manufacturing & Scalability",
      text: [
        "We prepare every design for real-world production environments.",
        "Our process ensures scalability and long-term product success."
      ],
      bullets: [
        "Sheet metal fabrication",
        "CNC machining",
        "Aluminum structures",
        "Injection molding",
        "Hybrid manufacturing methods"
      ],
      image: sw5,
      alt: "Manufacturing scalability"
    },
    {
      title: "From Idea to Market-Ready Product",
      text: [
        "We transform concepts into practical, manufacturable products.",
        "Our focus is on delivering solutions that are functional, aesthetic, and production-ready."
      ],
      bullets: [
        "Market-ready design solutions",
        "Optimized production workflows",
        "Balanced performance and cost",
        "User-focused design",
        "Long-term product lifecycle planning"
      ],
      image: sw6,
      alt: "Market-ready product design"
    }
  ];

  const whyChooseUs = [
    "Multidisciplinary engineering expertise",
    "Strong focus on innovation and practicality",
    "Production-ready design approach",
    "Balanced aesthetics and performance",
    "Long-term product success mindset"
  ];

  return (
    <section className="embedded-service-page">
      <div className="site-container">

        {/* HEADER */}
        <div className="service-main-header">

          <span className="service-label">
            Mechanical Design Service
          </span>

          <h2>Product Design</h2>

          <h3>
            From Concept to Market-Ready Product
          </h3>

          <p>
            We transform ideas into functional, manufacturable, and
            market-ready products.
          </p>

          <p>
            Our approach combines creativity with engineering precision,
            ensuring that every concept evolves into a practical and scalable solution.
          </p>

          <div className="service-main-image">
            <img src={sw1} alt="Product design"/>
          </div>

        </div>


        {/* INTRO */}
        <div className="service-intro-block">
          <h4>Engineering Innovation into Real Products</h4>
          <p>
            We develop products that are visually refined, structurally sound,
            and optimized for production and long-term success.
          </p>
        </div>


        {/* VIDEO SECTION (Roadmap) */}
        <div className="service-section">

          <div className="service-section-text">
            <h4>Product Development Roadmap</h4>
            <p>
              Our structured workflow ensures a smooth transition from concept
              to production through defined engineering stages.
            </p>
          </div>

          <div className="service-main-image">
            <img src={sw7} alt="Product design"/>
          </div>

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
              <img src={section.image} alt={section.alt}/>
            </div>

          </div>
        ))}


        {/* WHY */}
        <div className="service-highlight-box">

          <div className="service-highlight-content">

            <h4>Why Nexus Design Lab?</h4>

            <p>
              We combine innovation with engineering discipline to deliver
              products that are practical, scalable, and built to last.
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={sw6} alt="Product engineering"/>
          </div>

        </div>


        {/* CTA */}
        <div className="service-cta">

          <h4>Ready to Transform Your Idea into a Product?</h4>

          <p>
            Partner with Nexus Design Lab to develop innovative,
            engineered product solutions tailored to your vision.
          </p>

          <p>
            Let’s build products designed for performance and long-term success.
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              Start Your Product Project
            </button>

            <button className="secondary-btn">
              Discuss Your Idea
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}