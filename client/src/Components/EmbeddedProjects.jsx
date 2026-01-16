import React, { useEffect, useRef, useState } from "react";
import { getEmbeddedProjects } from "../api";
import ProjectModal from "./ProjectModal";
import "./EmbeddedProjects.css";

const API_URL = process.env.REACT_APP_API_URL;

export default function EmbeddedProjects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchEmbeddedProjects = async () => {
      const data = await getEmbeddedProjects();
      if (!data?.error) {
        setProjects(data);
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`Embeddedprojects ${show ? "show" : ""}`}
    >
      <h2 className="Embeddedprojects-title">Our Projects</h2>
      <p className="Embeddedprojects-subtitle">
        Innovative embedded systems designed for real-world applications.
      </p>

      <div className="Embeddedprojects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="Embeddedproject-card"
            style={{ animationDelay: `${index * 0.15}s` }}
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
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
