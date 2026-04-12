import React, { useEffect, useMemo, useRef, useState } from "react";
import "./ServicesHeroShell.css";
import { useLanguage } from "../context/LanguageContext";

export default function ServicesHeroShell({
  heroTitle,
  heroTitleAr,
  heroImage,
  services = [],
}) {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const [activeId, setActiveId] = useState(services?.[0]?.id || "");

  const activeService = useMemo(
    () => services.find((s) => s.id === activeId) || services?.[0],
    [activeId, services]
  );

  const contentRef = useRef(null);

  useEffect(() => {
    if (services?.length && !services.find((s) => s.id === activeId)) {
      setActiveId(services[0].id);
    }
  }, [services, activeId]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeId]);

  const displayedHeroTitle = isAR
    ? heroTitleAr || heroTitle
    : heroTitle;

  const displayedActiveTitle = isAR
    ? activeService?.titleAr || activeService?.title
    : activeService?.title;

  return (
    <>
      <section
        className="sh-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="sh-hero-overlay" />
        <div className="sh-hero-content">
          <h1>{displayedHeroTitle}</h1>
        </div>
      </section>

      <section className="sh-tabs">
        {services.map((s) => {
          const displayedTitle = isAR ? s.titleAr || s.title : s.title;

          return (
            <button
              key={s.id}
              type="button"
              className={`sh-tab ${activeId === s.id ? "active" : ""}`}
              onClick={() => setActiveId(s.id)}
            >
              <span className="sh-tab-icon">{s.icon}</span>
              <span className="sh-tab-title">{displayedTitle}</span>
            </button>
          );
        })}
      </section>

      <section className="sh-content" ref={contentRef}>
        <div className="sh-content-head">
          <h2>{displayedActiveTitle}</h2>
          <p>
            {isAR
              ? "سيتم إضافة محتوى هذه الخدمة لاحقًا…"
              : "This service content will be added later..."}
          </p>
        </div>

        <div className="sh-card">
          {isAR ? "القسم 1 (محتوى مؤقت)" : "Section 1 (Placeholder)"}
        </div>
        <div className="sh-card">
          {isAR ? "القسم 2 (محتوى مؤقت)" : "Section 2 (Placeholder)"}
        </div>
        <div className="sh-card">
          {isAR ? "القسم 3 (محتوى مؤقت)" : "Section 3 (Placeholder)"}
        </div>
      </section>
    </>
  );
}