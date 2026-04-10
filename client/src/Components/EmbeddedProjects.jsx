import React, { useEffect, useMemo, useRef, useState } from "react";
import { getEmbeddedProjects } from "../api";
import ProjectModal from "./ProjectModal";
import "./EmbeddedProjects.css";

const API_URL = process.env.REACT_APP_API_URL;

const placeholderCards = [
  {
    id: "placeholder-1",
    title: "Coming Soon",
    shortDesc: "A new embedded solution is currently under development.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-2",
    title: "More Innovations Ahead",
    shortDesc: "We are continuously building smarter embedded systems.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-3",
    title: "Next Project Loading",
    shortDesc: "Another real-world embedded project will be showcased here soon.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-4",
    title: "Future Innovation",
    shortDesc: "More advanced embedded products will be added here soon.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-5",
    title: "In Development",
    shortDesc: "This space is reserved for upcoming engineering work.",
    isPlaceholder: true,
  },
  {
    id: "placeholder-6",
    title: "New Solution Soon",
    shortDesc: "A new project will be published here in the near future.",
    isPlaceholder: true,
  },
];

export default function EmbeddedProjects() {
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
    <section
      ref={sectionRef}
      className={`Embeddedprojects ${show ? "show" : ""}`}
    >
      <div className="site-container">
        <h2 className={`Embeddedprojects-title ${show ? "show" : ""}`}>
          Our Projects
        </h2>

        <p className={`Embeddedprojects-subtitle ${show ? "show" : ""}`}>
          Innovative embedded systems designed for real-world applications.
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