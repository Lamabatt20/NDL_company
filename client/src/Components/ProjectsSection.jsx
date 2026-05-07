import React, { useEffect, useState, useRef, useMemo } from "react";
import { getGeneralProjects } from "../api";
import ProjectModal from "./ProjectModal";
import "./ProjectsSection.css";
import { useLanguage } from "../context/LanguageContext";
import { getTranslatedProject } from "../utils/getTranslatedProject";

const API_URL = process.env.REACT_APP_API_URL;

export default function ProjectsSection() {
  const { language } = useLanguage();

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getGeneralProjects();

        if (!data?.error && Array.isArray(data)) {
          setProjects(data);
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.error("Failed to fetch general projects:", error);
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const element = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
          triggerCardAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const triggerCardAnimation = () => {
    setAnimateCards(false);
    setTimeout(() => setAnimateCards(true), 50);
  };

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
            ? "يتم حاليًا تطوير حل هندسي جديد."
            : "A new engineering solution is currently in development.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-2",
        title: language === "ar" ? "ابتكارات قادمة" : "More Innovations Ahead",
        shortDesc:
          language === "ar"
            ? "نواصل توسيع مجموعة منتجاتنا."
            : "We are continuously expanding our product portfolio.",
        isPlaceholder: true,
      },
      {
        id: "placeholder-3",
        title: language === "ar" ? "منتج قيد التحميل" : "Next Product Loading",
        shortDesc:
          language === "ar"
            ? "سيتم عرض منتج حقيقي جديد هنا قريبًا."
            : "Another real-world product will be showcased here soon.",
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
    <section className="projects" ref={sectionRef} id="projects">
      <div className="site-container">

        <h2 className={`projects-title ${titleVisible ? "show" : ""}`}>
          {language === "ar" ? "منتجاتنا" : "Our Products"}
        </h2>

        <p className={`projects-subtitle ${titleVisible ? "show" : ""}`}>
          {language === "ar"
            ? "حلول هندسية واقعية يتم تنفيذها بدقة وابتكار."
            : "Real-world engineering solutions delivered with precision and innovation."}
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

        <div className="projects-grid">
          {!isLoading &&
            paginatedItems.map((item, index) =>
              item.isPlaceholder ? (
                <div
                  key={`${item.id}-${index}`}
                  className={`project-card placeholder-card ${
                    animateCards ? "animate" : ""
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="placeholder-content">
                    <div className="placeholder-icon">+</div>
                    <h3>{item.title}</h3>
                    <p>{item.shortDesc}</p>
                  </div>
                </div>
              ) : (
                <div
                  key={item.id}
                  className={`project-card ${
                    animateCards ? "animate" : ""
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                  onClick={() => setSelectedProject(item)}
                >
                  <img
                    src={
                      item.images?.length
                        ? `${API_URL}${item.images[0].imageUrl}`
                        : "/placeholder.png"
                    }
                    alt={item.title}
                    className="project-image"
                  />

                  <div className="project-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.shortDesc}</p>
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