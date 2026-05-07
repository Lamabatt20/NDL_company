import React, { useEffect, useMemo, useRef, useState } from "react";
import { getMechanicalProjects } from "../api";
import ProjectModal from "./ProjectModal";
import "./MechanicalProjects.css";
import { useLanguage } from "../context/LanguageContext";
import { getTranslatedProject } from "../utils/getTranslatedProject";

const API_URL = process.env.REACT_APP_API_URL;

export default function MechanicalProjects() {
  const { language } = useLanguage();

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchMechanicalProjects = async () => {
      try {
        const data = await getMechanicalProjects();

        if (!data?.error && Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.error("Failed to fetch mechanical projects:", error);
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMechanicalProjects();
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const translatedProjects = useMemo(() => {
    return projects.map((project) =>
      getTranslatedProject(project, language)
    );
  }, [projects, language]);

  const displayItems = useMemo(() => {
    if (isLoading) return [];

    const placeholderCards = [
      {
        id: "placeholder-1",
        title: language === "ar" ? "قريبًا" : "Coming Soon",
        shortDesc:
          language === "ar"
            ? "يتم تطوير حل ميكانيكي جديد."
            : "A new mechanical solution is currently under development.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-2",
        title: language === "ar" ? "ابتكارات قادمة" : "More Innovations Ahead",
        shortDesc:
          language === "ar"
            ? "نواصل تطوير أنظمة ميكانيكية متقدمة."
            : "We are continuously building advanced mechanical systems.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-3",
        title: language === "ar" ? "مشروع قيد التحميل" : "Next Project Loading",
        shortDesc:
          language === "ar"
            ? "سيتم عرض مشروع حقيقي قريبًا."
            : "Another real-world mechanical project will be showcased here soon.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-4",
        title: language === "ar" ? "ابتكار مستقبلي" : "Future Innovation",
        shortDesc:
          language === "ar"
            ? "سيتم إضافة المزيد من المنتجات قريبًا."
            : "More advanced mechanical products will be added here soon.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-5",
        title: language === "ar" ? "قيد التطوير" : "In Development",
        shortDesc:
          language === "ar"
            ? "هذه المساحة لمشاريع قادمة."
            : "This space is reserved for upcoming engineering work.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-6",
        title: language === "ar" ? "حل جديد قريبًا" : "New Solution Soon",
        shortDesc:
          language === "ar"
            ? "سيتم نشر مشروع جديد قريبًا."
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

  const totalPages = Math.ceil(displayItems.length / itemsPerPage);

  const paginatedItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return displayItems.slice(start, start + itemsPerPage);
  }, [displayItems, currentPage]);

  return (
    <section
      ref={sectionRef}
      className={`Mechanicalprojects ${show ? "show" : ""}`}
    >
      <div className="site-container">

        <h2 className={`Mechanicalprojects-title ${show ? "show" : ""}`}>
          {language === "ar" ? "مشاريعنا" : "Our Projects"}
        </h2>

        <p className={`Mechanicalprojects-subtitle ${show ? "show" : ""}`}>
          {language === "ar"
            ? "أنظمة ميكانيكية مبتكرة مصممة للتطبيقات الواقعية."
            : "Innovative Mechanical systems designed for real-world applications."}
        </p>

        <div className="Embeddedprojects-navigation">
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev - 1, 0))
            }
            disabled={currentPage === 0}
          >
            ←
          </button>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages - 1)
              )
            }
            disabled={currentPage === totalPages - 1}
          >
            →
          </button>
        </div>

        <div className="Mechanicalprojects-grid">
          {!isLoading &&
            paginatedItems.map((project, index) =>
              project.isPlaceholder ? (
                <div
                  key={`${project.id}-${index}`}
                  className={`Mechanicalproject-card Mechanicalplaceholder-card ${
                    show ? "animate" : ""
                  }`}
                  style={{ transitionDelay: `${index * 0.12}s` }}
                >
                  <div className="Mechanicalplaceholder-content">
                    <div className="Mechanicalplaceholder-icon">+</div>
                    <h3>{project.title}</h3>
                    <p>{project.shortDesc}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={project.id}
                  className={`Mechanicalproject-card ${
                    show ? "animate" : ""
                  }`}
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
                    className="Mechanicalproject-image"
                  />

                  <div className="Mechanicalproject-overlay">
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