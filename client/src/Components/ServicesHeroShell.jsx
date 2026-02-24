import React, { useEffect, useMemo, useRef, useState } from "react";
import "./ServicesHeroShell.css";

export default function ServicesHeroShell({ heroTitle, heroImage, services }) {
  const [activeId, setActiveId] = useState(services?.[0]?.id || "");
  const activeService = useMemo(
    () => services.find((s) => s.id === activeId) || services?.[0],
    [activeId, services]
  );

  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeId]);

  return (
    <>
      {/* HERO (ثابت) */}
      <section className="sh-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="sh-hero-overlay" />
        <div className="sh-hero-content">
          <h1>{heroTitle}</h1>
        </div>
      </section>

      {/* TABS */}
      <section className="sh-tabs">
        {services.map((s) => (
          <button
            key={s.id}
            type="button"
            className={`sh-tab ${activeId === s.id ? "active" : ""}`}
            onClick={() => setActiveId(s.id)}
          >
            <span className="sh-tab-icon">{s.icon}</span>
            <span className="sh-tab-title">{s.title}</span>
          </button>
        ))}
      </section>

      {/* CONTENT PLACEHOLDER (بدون معلومات) */}
      <section className="sh-content" ref={contentRef}>
        <div className="sh-content-head">
          <h2>{activeService?.title}</h2>
          <p>سيتم إضافة محتوى هذه الخدمة لاحقًا…</p>
        </div>

        {/* سكاشن فارغة كـ placeholder */}
        <div className="sh-card">Section 1 (Placeholder)</div>
        <div className="sh-card">Section 2 (Placeholder)</div>
        <div className="sh-card">Section 3 (Placeholder)</div>
      </section>
    </>
  );
}