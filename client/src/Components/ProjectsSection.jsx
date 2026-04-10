import React, { useEffect, useState, useRef, useMemo } from "react";
import { getGeneralProjects } from "../api";
import ProjectModal from "./ProjectModal";
import "./ProjectsSection.css";

const API_URL = process.env.REACT_APP_API_URL;

const placeholderCards = [
  {
    id: "placeholder-1",
    title: "Coming Soon",
    shortDesc: "A new engineering solution is currently in development.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    title: "More Innovations Ahead",
    shortDesc: "We are continuously expanding our product portfolio.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    title: "Next Product Loading",
    shortDesc: "Another real-world product will be showcased here soon.",
    isPlaceholder: true,
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  const displayItems = useMemo(() => {
    if (isLoading) return [];

    const items = [...projects];
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
  }, [projects, isLoading]);

  return (
    <section className="projects" ref={sectionRef} id="projects">
      <div className="site-container">
        <h2 className={`projects-title ${titleVisible ? "show" : ""}`}>
          Our Products
        </h2>

        <p className={`projects-subtitle ${titleVisible ? "show" : ""}`}>
          Real-world engineering solutions delivered with precision and innovation.
        </p>

        <div className="projects-grid">
          {!isLoading &&
            displayItems.map((item, index) =>
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
                  className={`project-card ${animateCards ? "animate" : ""}`}
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