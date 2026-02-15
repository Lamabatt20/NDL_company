import React, { useEffect, useRef, useState } from "react";
import { getMechanicalProjects } from "../api";
import ProjectModal from "./ProjectModal";
import "./MechanicalProjects.css";

const API_URL = process.env.REACT_APP_API_URL;

export default function MechanicalProjects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchMechanicalProjects = async () => {
      const data = await getMechanicalProjects();
      if (!data?.error) {
        setProjects(data);
      }
    };
    fetchMechanicalProjects();
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
      className={`Mechanicalprojects ${show ? "show" : ""}`}
    >
      <div className="site-container">
        <h2 className="Mechanicalprojects-title">Our Projects</h2>
        <p className="Mechanicalprojects-subtitle">
          Innovative Mechanical systems designed for real-world applications.
        </p>

        <div className="Mechanicalprojects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="Mechanicalproject-card"
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
              className="Mechanicalproject-image"
            />

            <div className="Mechanicalproject-overlay">
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
      </div>
    </section>
  );
}
