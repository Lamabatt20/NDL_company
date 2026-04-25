import React, { useEffect, useMemo, useRef, useState } from "react";
import { getEmbeddedProjects } from "../api";
import ProjectModal from "./ProjectModal";
import "./EmbeddedProjects.css";
import { useLanguage } from "../context/LanguageContext";
import { getTranslatedProject } from "../utils/getTranslatedProject";

const API_URL = process.env.REACT_APP_API_URL;

export default function EmbeddedProjects() {
  const { language } = useLanguage();

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchEmbeddedProjects = async () => {
      try {
        const data = await getEmbeddedProjects();

        if (!data?.error && Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.error("Failed to fetch embedded projects:", error);
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmbeddedProjects();
  }, []);

  useEffect(() => {

    if (window.innerWidth <= 600) {
      setShow(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const translatedProjects = useMemo(() => {
    return projects.map((project) => getTranslatedProject(project, language));
  }, [projects, language]);

  const displayItems = useMemo(() => {
    if (isLoading) return [];

    const placeholderCards = [
      {
        id: "placeholder-1",
        title: language === "ar" ? "قريبًا" : "Coming Soon",
        shortDesc:
          language === "ar"
            ? "يتم حاليًا تطوير حل مدمج جديد."
            : "A new embedded solution is currently under development.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-2",
        title: language === "ar" ? "ابتكارات قادمة" : "More Innovations Ahead",
        shortDesc:
          language === "ar"
            ? "نواصل بناء أنظمة مدمجة أكثر تطورًا."
            : "We are continuously building smarter embedded systems.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-3",
        title: language === "ar" ? "مشروع قيد التحميل" : "Next Project Loading",
        shortDesc:
          language === "ar"
            ? "سيتم عرض مشروع حقيقي قريبًا."
            : "Another real-world embedded project will be showcased here soon.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-4",
        title: language === "ar" ? "ابتكار مستقبلي" : "Future Innovation",
        shortDesc:
          language === "ar"
            ? "سيتم إضافة المزيد من المنتجات المدمجة المتقدمة قريبًا."
            : "More advanced embedded products will be added here soon.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-5",
        title: language === "ar" ? "قيد التطوير" : "In Development",
        shortDesc:
          language === "ar"
            ? "هذه المساحة مخصصة لأعمال هندسية قادمة."
            : "This space is reserved for upcoming engineering work.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-6",
        title: language === "ar" ? "حل جديد قريبًا" : "New Solution Soon",
        shortDesc:
          language === "ar"
            ? "سيتم نشر مشروع جديد هنا قريبًا."
            : "A new project will be published here in the near future.",
        isPlaceholder: true,
      },
    ];

    const items = [...translatedProjects];
    const columnsPerRow = 3;

    if (items.length === 0) {
      return placeholderCards.slice(0, columnsPerRow);
    }

    const remainder = items.length % columnsPerRow;

    if (remainder !== 0) {
      const needed = columnsPerRow - remainder;
      items.push(...placeholderCards.slice(0, needed));
    }

    return items;
  }, [translatedProjects, isLoading, language]);

  return (
    <section
      ref={sectionRef}
      className={`Embeddedprojects ${show ? "show" : ""}`}
    >
      <div className="site-container">
        <h2 className={`Embeddedprojects-title ${show ? "show" : ""}`}>
          {language === "ar" ? "مشاريعنا" : "Our Projects"}
        </h2>

        <p className={`Embeddedprojects-subtitle ${show ? "show" : ""}`}>
          {language === "ar"
            ? "أنظمة مدمجة مبتكرة مصممة لتطبيقات واقعية."
            : "Innovative embedded systems designed for real-world applications."}
        </p>

        <div className="Embeddedprojects-grid">
          {!isLoading &&
            displayItems.map((project, index) =>
              project.isPlaceholder ? (
                <div
                  key={`${project.id}-${index}`}
                  className={`Embeddedproject-card Embeddedplaceholder-card ${
                    show ? "animate" : ""
                  }`}
                  style={{ transitionDelay: `${index * 0.12}s` }}
                >
                  <div className="Embeddedplaceholder-content">
                    <div className="Embeddedplaceholder-icon">+</div>
                    <h3>{project.title}</h3>
                    <p>{project.shortDesc}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={project.id}
                  className={`Embeddedproject-card ${show ? "animate" : ""}`}
                  style={{ transitionDelay: `${index * 0.12}s` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={
                      project.images?.length
                        ? `${API_URL}${project.images[0].imageUrl}`
                        : "/placeholder.png"
                    }
                    alt={project.title}
                    className="Embeddedproject-image"
                  />

                  <div className="Embeddedproject-overlay">
                    <h3>{project.title}</h3>
                    <p>{project.shortDesc}</p>
                  </div>
                </div>
              )
            )}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}