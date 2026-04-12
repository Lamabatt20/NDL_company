import React, { useEffect, useRef, useState } from "react";
import "./MechanicalIntro.css";
import img1 from "../assets/images/images.png";
import { useLanguage } from "../context/LanguageContext";

export default function MechanicalHomeIntro() {
  const { language } = useLanguage();

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

        <h2 className="Mechanical-intro-title">
          {language === "ar"
            ? "ما هو تصميم الأنظمة الميكانيكية؟"
            : "What Is Mechanical Systems Design?"}
        </h2>

        <div className="Mechanical-intro-wrapper">

          <div className="Mechanical-intro-text">
            <p>
              {language === "ar"
                ? "نقوم بتطوير تصاميم ميكانيكية عالية الجودة تحول الأفكار إلى أنظمة حقيقية موثوقة. نركز على المتانة، وقابلية التصنيع، وتحسين الأداء لضمان عمل الأنظمة بكفاءة في البيئات الواقعية."
                : "We develop high-quality mechanical designs that translate concepts into reliable physical systems. Our work focuses on structural integrity, manufacturability, and performance optimization for real-world environments."}
            </p>
          </div>

          <div className="Mechanical-intro-image">
            <img
              src={img1}
              alt={language === "ar" ? "تصميم ميكانيكي" : "Mechanical Design"}
            />
          </div>

        </div>
      </div>
    </section>
  );
}