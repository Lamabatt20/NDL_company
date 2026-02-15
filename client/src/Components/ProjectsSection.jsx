import React, { useEffect, useState, useRef } from "react";
import { getGeneralProjects } from "../api";
import ProjectModal from "./ProjectModal";
import "./ProjectsSection.css";

const API_URL = process.env.REACT_APP_API_URL;

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getGeneralProjects();
      if (!data?.error) setProjects(data);
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

  return (
    <section className="projects" ref={sectionRef} id="projects">
      <div className="site-container">
        <h2
          className={`projects-title ${titleVisible ? "show" : ""}`}
          ref={titleRef}
        >
          Our Products
        </h2>
        <p
          className={`projects-subtitle ${titleVisible ? "show" : ""}`}
          ref={subtitleRef}
        >
          Real-world engineering solutions delivered with precision and innovation.
        </p>

        <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${animateCards ? "animate" : ""}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={
                project.images?.length
                  ? `${API_URL}${project.images[0].imageUrl}`
                  : "/placeholder.png"
              }
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
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
