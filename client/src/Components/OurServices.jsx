import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./OurServices.css";
import { useLanguage } from "../context/LanguageContext";

import serviceImg1 from "../assets/images/service1.png";
import serviceImg2 from "../assets/images/service2.png";
import serviceImg3 from "../assets/images/service3.png";
import serviceImg4 from "../assets/images/service4.png";
import serviceImg5 from "../assets/images/service5.png";
import serviceImg6 from "../assets/images/service6.png";
import serviceImg7 from "../assets/images/service7.png";
import serviceImg8 from "../assets/images/service8.png";
import serviceImg9 from "../assets/images/Picture2.png";
import serviceImg10 from "../assets/images/Picture3.png";
import serviceImg11 from "../assets/images/Picture1.png";
import serviceImg12 from "../assets/images/Picture4.png";

export default function OurServices() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [activeLab, setActiveLab] = useState("electronics");

  const services = [
    {
      title: isAR ? "تصميم مخططات PCB" : "PCB Schematic Design",
      description: isAR
        ? "تصميم مخططات احترافي وجاهز للإنتاج."
        : "Robust and production-ready schematic design.",
      path: "/embedded/pcb-schematic"
    },
    {
      title: isAR ? "تصميم PCB Layout" : "PCB Layout Design",
      description: isAR
        ? "تصميم لوحات متعددة الطبقات بجودة عالية."
        : "High-quality multilayer PCB layout.",
      path: "/embedded/pcb-layout"
    },
    {
      title: isAR ? "تطوير البرمجيات المدمجة" : "Embedded Software Development",
      description: isAR
        ? "Firmware فعال للأنظمة اللحظية."
        : "Efficient firmware for real-time systems.",
      path: "/embedded/embedded-sw"
    },
    {
      title: isAR ? "تطوير المنتجات الإلكترونية" : "Electronic Products Development",
      description: isAR
        ? "تطوير المنتج من الفكرة حتى الاختبار."
        : "End-to-end electronic product development.",
      path: "/embedded/product-dev"
    },
    {
      title: isAR ? "حلول IoT الذكية" : "IoT Smart Solutions",
      description: isAR
        ? "أنظمة متصلة وآمنة."
        : "Secure and connected IoT systems.",
      path: "/embedded/iot"
    },
    {
      title: isAR ? "دمج الذكاء الاصطناعي" : "AI Integration",
      description: isAR
        ? "دمج الذكاء داخل الأنظمة."
        : "AI-driven systems integration.",
      path: "/embedded/ai"
    },

    {
      title: isAR ? "تصميم الصفائح المعدنية" : "Sheet Metal Design",
      description: isAR
        ? "حلول دقيقة وقابلة للتصنيع."
        : "Precision sheet-metal solutions.",
      path: "/mechanical/sheet-metal"
    },
    {
      title: isAR ? "تصميم هياكل الألمنيوم" : "Aluminum Structure Design",
      description: isAR
        ? "هياكل خفيفة وقوية."
        : "Lightweight aluminum structures.",
      path: "/mechanical/aluminum"
    },
    {
      title: isAR ? "تصميم الأغلفة" : "Product Enclosure Design",
      description: isAR
        ? "أغلفة احترافية وعملية."
        : "Professional enclosure development.",
      path: "/mechanical/enclosure"
    },
    {
      title: isAR ? "تصميم الهياكل الحديدية" : "Steel Structure Design",
      description: isAR
        ? "هياكل قوية للصناعة."
        : "Heavy-duty steel structures.",
      path: "/mechanical/steel"
    },
    {
      title: isAR ? "تصميم المنتجات" : "Product Design",
      description: isAR
        ? "تحويل الأفكار إلى منتجات."
        : "Full product design solutions.",
      path: "/mechanical/product-design"
    },
    {
      title: isAR ? "تصميم الخشب والأثاث" : "Wood and Furniture Design",
      description: isAR
        ? "تصاميم عملية وجمالية."
        : "Custom furniture design.",
      path: "/mechanical/wood"
    }
  ];

  const images = [
    serviceImg1,
    serviceImg2,
    serviceImg3,
    serviceImg4,
    serviceImg5,
    serviceImg11,
    serviceImg6,
    serviceImg7,
    serviceImg8,
    serviceImg9,
    serviceImg10,
    serviceImg12
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const renderCards = (startIndex) => (
    <div className="service-group">
      {services.slice(startIndex, startIndex + 6).map((service, index) => (
        <div
          key={service.title}
          className="service-card show clickable-card"
          style={{ transitionDelay: `${index * 0.08}s` }}
          onClick={() => navigate(service.path)}
        >
          <img src={images[startIndex + index]} alt={service.title} />

          <div className="card-overlay">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className={`our-services ${isVisible ? "visible" : ""}`}
    >
      <div className="site-container">
        <div className="services-header">
          <h2>{isAR ? "خدماتنا" : "Our Services"}</h2>

          <p className="main-text">
            {isAR
              ? "نقدم حلول هندسية متكاملة تشمل الإلكترونيات والأنظمة المدمجة والتصميم الميكانيكي."
              : "We provide end-to-end engineering solutions covering electronics, embedded systems, mechanical design, and AI integration."}
          </p>
        </div>

        <div className="servicese-tabs">
          <button
            className={activeLab === "electronics" ? "active" : ""}
            onClick={() => setActiveLab("electronics")}
          >
            {isAR ? "قسم الإلكترونيات" : "Electronics Design Lab"}
          </button>

          <button
            className={activeLab === "mechanical" ? "active" : ""}
            onClick={() => setActiveLab("mechanical")}
          >
            {isAR ? "قسم الميكانيك" : "Mechanical Design Lab"}
          </button>
        </div>

        <div className="services-grid">
          {activeLab === "electronics" && renderCards(0)}
          {activeLab === "mechanical" && renderCards(6)}
        </div>
      </div>
    </section>
  );
}