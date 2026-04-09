import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProject.css";

const API_URL = process.env.REACT_APP_API_URL;

export default function AddProject() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("admin123");
  const [authError, setAuthError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    description: "",
    isEmbedded: false,
    isMechanical: false,
    images: [],
  });
  const [imageFiles, setImageFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);

  const authenticate = (pass) => {
    if (pass === "admin123") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect password");
    }
  };

  useEffect(() => {
    if (!isAuthenticated) {
      const timer = setTimeout(() => authenticate(password), 300);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, password]);

  useEffect(() => {
    return () => {
      formData.images.forEach((file) => {
        if (file.imageUrl?.startsWith("blob:")) {
          URL.revokeObjectURL(file.imageUrl);
        }
      });
    };
  }, [formData.images]);

  if (!isAuthenticated) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Admin Login</h2>
          <p>Automatically signing you in with the saved password.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              authenticate(password);
            }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
            {authError && <p className="error">{authError}</p>}
          </form>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
  const files = Array.from(e.target.files || []);
  if (!files.length) return;

  const previewFiles = files.map((file) => ({
    imageUrl: URL.createObjectURL(file),
    type: file.type.startsWith("video/") ? "video" : "image",
    name: file.name,
  }));

  setImageFiles((prev) => [...prev, ...files]);

  setFormData((prev) => ({
    ...prev,
    images: [...prev.images, ...previewFiles],
  }));

  e.target.value = "";
};

const handleRemoveFile = (indexToRemove) => {
  setImageFiles((prev) => prev.filter((_, index) => index !== indexToRemove));

  setFormData((prev) => {
    const updatedImages = prev.images.filter((_, index) => index !== indexToRemove);

    const removedItem = prev.images[indexToRemove];
    if (removedItem?.imageUrl?.startsWith("blob:")) {
      URL.revokeObjectURL(removedItem.imageUrl);
    }

    return {
      ...prev,
      images: updatedImages,
    };
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageFiles.length === 0) {
      alert("Please upload at least one image or video.");
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append("title", formData.title);
      submitData.append("shortDesc", formData.shortDesc);
      submitData.append("description", formData.description);
      submitData.append("isEmbedded", formData.isEmbedded.toString());
      submitData.append("isMechanical", formData.isMechanical.toString());

      imageFiles.forEach((file) => {
        submitData.append("images", file);
      });

      const response = await fetch(`${API_URL}/projects`, {
        method: "POST",
        body: submitData,
      });

      if (response.ok) {
        alert("Project added successfully!");
        navigate("/");
      } else {
        throw new Error("Failed to add project");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add project. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const addSection = () => {
    const newSection = "\n\nNew Section:\n- Point 1\n- Point 2\n- Point 3";
    setFormData((prev) => ({
      ...prev,
      description: prev.description + newSection,
    }));
  };

  if (previewMode) {
    return (
      <div className="add-project-page">
        <div className="preview-header">
          <h1>Preview Mode</h1>
          <button
            className="btn-secondary"
            onClick={() => setPreviewMode(false)}
          >
            Back to Edit
          </button>
        </div>

        <div className="modal-backdrop">
          <div className="modal-content full-modal">
            <button className="modal-close" onClick={() => setPreviewMode(false)}>
              ×
            </button>

           {formData.images.length > 0 && (
             <div className="image-preview">
              <h4>Selected Files ({formData.images.length})</h4>
              <div className="preview-grid">
             {formData.images.map((img, index) => (
              <div key={index} className="preview-item">
              {img.type === "video" ? (
               <video muted controls>
              <source src={img.imageUrl} />
            </video>
          ) : (
            <img src={img.imageUrl} alt={`Preview ${index + 1}`} />
          )}

          <span className="preview-label">
            {index === 0 ? "Hero Media" : `Media ${index + 1}`}
          </span>

          <button
            type="button"
            className="remove-preview-btn"
            onClick={() => handleRemoveFile(index)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
    </div>
)}

            {/* Header */}
            <div className="modal-header">
              <div className="modal-header-content">
                <h2>{formData.title}</h2>
                {formData.shortDesc && <p>{formData.shortDesc}</p>}
              </div>
              <button className="get-quote-btn">Get a Quote</button>
            </div>

            {/* Content */}
            <div className="modal-zigzag">
              <div className="zig-row">
                <div className="zig-card no-media">
                  <div className="zig-text">
                    <h3>Project Overview</h3>
                    <div className="zig-text-content">
                      <p>
                        {formData.description || "Project description will appear here."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery = باقي الصور بعد أول صورة */}
            {formData.images.length > 1 && (
              <div className="modal-gallery-wrap">
                <h3 className="gallery-title">Project Images</h3>
                <div className="modal-gallery">
                  {formData.images.slice(1).map((img, i) => (
                    <div key={i} className="gallery-item">
                      {img.type === "video" ? (
                        <video controls muted playsInline>
                          <source src={img.imageUrl} type="video/mp4" />
                        </video>
                      ) : (
                        <img src={img.imageUrl} alt={`Preview ${i + 2}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="add-project-page">
      <div className="site-container">
        <div className="add-project-container">
          <div className="form-header">
            <h1>Add New Project</h1>
            <p>Create a new project with multiple images. The first uploaded file will be the hero.</p>
            <button
              className="btn-secondary"
              onClick={() => setPreviewMode(true)}
              disabled={!formData.title}
            >
              Preview Project
            </button>
          </div>

          <form onSubmit={handleSubmit} className="add-project-form">
            <div className="form-section">
              <h3>Basic Information</h3>

              <div className="form-group">
                <label>Project Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter project title"
                />
              </div>

              <div className="form-group">
                <label>Short Description</label>
                <input
                  type="text"
                  name="shortDesc"
                  value={formData.shortDesc}
                  onChange={handleInputChange}
                  placeholder="Brief description for project cards"
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <div className="category-options">
                  <label>
                    <input
                      type="checkbox"
                      name="isEmbedded"
                      checked={formData.isEmbedded}
                      onChange={handleInputChange}
                    />
                    Embedded Systems
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="isMechanical"
                      checked={formData.isMechanical}
                      onChange={handleInputChange}
                    />
                    Mechanical Design
                  </label>
                  <span className="category-note">
                    Leave both unchecked for General projects
                  </span>
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Project Description</h3>
              <p className="form-help">
                Write your description with sections. Use headings ending with ":" and bullet points with "-".
              </p>

              <div className="form-group">
                <label>Full Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="15"
                  placeholder={`Project Overview:

- Key feature 1
- Key feature 2
- Key feature 3

Technical Details:

- Specification 1
- Specification 2`}
                />
              </div>

              <button type="button" className="btn-secondary" onClick={addSection}>
                Add Section Template
              </button>
            </div>

            <div className="form-section">
              <h3>Project Images & Media</h3>
              <p className="form-help">
                You can upload multiple images/videos. The first uploaded file will be used as the hero image.
              </p>

              <div className="form-group">
                <label>Images & Videos *</label>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleImageChange}
                  required
                />
                <small>Supported formats: JPG, PNG, MP4, WebM</small>
              </div>

              {formData.images.length > 0 && (
                <div className="image-preview">
                  <h4>Selected Files ({formData.images.length})</h4>
                  <div className="preview-grid">
                    {formData.images.map((img, index) => (
                      <div key={index} className="preview-item">
                        {img.type === "video" ? (
                          <video muted controls>
                            <source src={img.imageUrl} />
                          </video>
                        ) : (
                          <img src={img.imageUrl} alt={`Preview ${index + 1}`} />
                        )}

                        <span className="preview-label">
                          {index === 0
                            ? "Hero Media"
                            : img.type === "video"
                            ? `Video ${index + 1}`
                            : `Image ${index + 1}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Adding Project..." : "Add Project"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}