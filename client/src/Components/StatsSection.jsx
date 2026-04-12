import React, { useEffect, useRef, useState } from "react";
import {
  FiBriefcase,
  FiUsers,
  FiSettings,
  FiLayers,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";
import "./StatsSection.css";
import { useLanguage } from "../context/LanguageContext";

function StatItem({ value, suffix, label, icon, visible, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div
      className={`stat-item ${visible ? "show" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="stat-icon">{icon}</div>

      <h3 className="stat-number">
        {count}
        {suffix}
      </h3>

      <p className="stat-label">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const statsData = [
    {
      value: 78,
      suffix: "+",
      label: isAR ? "مشروع تم إنجازه" : "Projects Delivered",
      icon: <FiBriefcase />,
    },
    {
      value: 28,
      suffix: "+",
      label: isAR ? "عميل حول العالم" : "Clients Worldwide",
      icon: <FiUsers />,
    },
    {
      value: 80,
      suffix: "+",
      label: isAR ? "حل هندسي" : "Engineering Solutions",
      icon: <FiSettings />,
    },
    {
      value: 12,
      suffix: "+",
      label: isAR ? "قطاع تم خدمته" : "Industries Served",
      icon: <FiLayers />,
    },
    {
      value: 10,
      suffix: "+",
      label: isAR ? "سنوات خبرة" : "Years in business",
      icon: <FiTrendingUp />,
    },
    {
      value: 30,
      suffix: "+",
      label: isAR ? "مشروع مكتمل" : "Projects completed",
      icon: <FiCheckCircle />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="site-container">
        <h2 className="stats-title">
          {isAR ? "الإنجازات" : "Achievements"}
        </h2>

        <div className="stats-grid">
          {statsData.map((item, index) => (
            <StatItem
              key={index}
              {...item}
              visible={visible}
              delay={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}