import React, { useEffect, useRef, useState } from "react";
import "./AboutSection.css";
import checkIcon from "../assets/icons/IMG_4911.png";
import { useLanguage } from "../context/LanguageContext";

function AboutSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

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
            <h2 className="about-title">
              <img src={checkIcon} alt="icon" className="title-icon-img" />
              {language === "ar" ? "من نحن؟" : "Who We Are?"}
            </h2>

            <p>
              {language === "ar"
                ? "في Nexus Design Lab، نقدم حلولًا هندسية متكاملة من البداية إلى النهاية لتحويل الأفكار إلى منتجات قابلة للتنفيذ والتوسع."
                : "At Nexus Design Lab, we deliver end-to-end engineering solutions that turn ideas into scalable products."}
            </p>

            <p>
              {language === "ar"
                ? "تمتد خبرتنا في التصميم الميكانيكي إلى تطوير المنتجات، وتصميم خطوط الإنتاج، والهياكل الفولاذية، والحلول الجاهزة للتصنيع باستخدام الصفائح المعدنية والطباعة ثلاثية الأبعاد."
                : "Our mechanical design expertise spans product development, production line design, steel structures, and manufacturing-ready solutions using sheet metal and 3D printing."}
            </p>

            <p>
              {language === "ar"
                ? "وفي جانب الإلكترونيات، نحن متخصصون في الأنظمة المدمجة، وتصميم لوحات PCB بشكل متكامل، والتطوير المشترك بين الهاردوير والسوفتوير."
                : "On the electronics side, we specialize in embedded systems, full-stack PCB design, and hardware–software co-development."}
            </p>

            <p>
              {language === "ar"
                ? "ومن خلال خبرة عملية في مجالات صناعية متنوعة، نركز على بناء حلول تعمل بكفاءة في البيئات الواقعية."
                : "With hands-on experience across diverse industries, we focus on building solutions that perform in real-world environments."}
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