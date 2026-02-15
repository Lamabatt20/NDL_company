import React, { useRef, useEffect, useState } from "react";
import { FiSettings, FiUsers, FiLayers, FiBriefcase, FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import "./WhyChooseNDL.css";

const features = [
  { icon: <FiSettings />, title: "Innovative Approach", description: "We are not a trend follower: we create the trends. Our team employs the newest approaches and cool new tools to hammer out cool modern solutions, keeping your business ahead of the pack and ready for whatever’s next." },
  { icon: <FiUsers />, title: "Tailored Solutions", description: "We realize that every business is unique. Instead of the same cookie-cutter approach that leaves people coming up empty, we always listen to your requests for results and devise hand-made strategies that cater to you personally." },
  { icon: <FiLayers />, title: "Skilled Team", description: "Our people are our strength. The teams are made up of developers to designers, marketing experts, and everyone has a wealth of knowledge, creativity, and years of experience in the industry." },
  { icon: <FiBriefcase />, title: "Transparent Process", description: "You will never feel disconnected from your project. We maintain an open line of communication each step of the way, provide frequent progress updates, and ensure you are always informed about your project." },
  { icon: <FiCheckCircle />, title: "End-to-End Support", description: "We do not simply build and leave. From the initial concept, through launch and beyond, we work with you every step of the way, whenever you need us." },
  { icon: <FiTrendingUp />, title: "Long-Term Value", description: "Ours is the bigger picture, always, to notice. We generate solutions that don't hold you back from growing, scaling, and performing years later." },
];

export default function WhyChooseNDL() {
  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    const element = titleRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="why-choose-ndl">
      <div className="site-container">
        <h2
          ref={titleRef}
          className={`why-choose-title ${isTitleVisible ? "show" : ""}`}
        >
          Why Choose NDL?
        </h2>

        <div className="why-choose-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
