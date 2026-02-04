import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectModal.css";

const API_URL = process.env.REACT_APP_API_URL;

export default function ProjectModal({ project, onClose }) {
  const navigate = useNavigate();

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content preview" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <h2>{project.title}</h2>

        {project.images?.[0] && (
          <div className="modal-main-image">
            <img
              src={`${API_URL}${project.images[0].imageUrl}`}
              alt={project.title}
            />
          </div>
        )}

        {/* SHORT DESCRIPTION ONLY */}
        <p className="modal-short-desc">
          {project.shortDesc}
        </p>

        <div className="modal-actions center">
          <button
            className="quote-btn outline"
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            View Full Project
          </button>
        </div>
      </div>
    </div>
  );
}
