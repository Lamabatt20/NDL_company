import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkIcon from "../assets/icons/IMG_4911.png";
import "./ProjectModal.css";
import { useLanguage } from "../context/LanguageContext";
import { getTranslatedProject } from "../utils/getTranslatedProject";

const API_URL = process.env.REACT_APP_API_URL;

/* ================= HELPERS ================= */
const getMediaUrl = (url) => {
  if (!url) return "";
  return url.startsWith("http") ? url : `${API_URL}${url}`;
};

const isVideoFile = (media) => {
  const url = media?.videoUrl || media?.imageUrl || "";
  return (
    media?.type === "video" ||
    !!media?.videoUrl ||
    url.includes("/video/upload/") ||
    url.toLowerCase().includes(".mp4") ||
    url.toLowerCase().includes(".webm") ||
    url.toLowerCase().includes(".ogg") ||
    url.toLowerCase().includes(".mov")
  );
};

/* ================= PARSER ================= */
const parseDescription = (description) => {
  if (!description) return [];

  const sections = [];
  const lines = description.split("\n");

  let current = { title: "", content: [] };

  const isRealHeading = (text) => {
    const t = text.trim();
    const lower = t.toLowerCase();

    if (!t) return false;

    if (
      lower.includes("including:") ||
      lower.includes("includes:") ||
      lower.includes("such as:")
    ) {
      return false;
    }

    if (t.endsWith(":") && t.length <= 45) return true;

    if (
      t.length <= 45 &&
      !t.includes(".") &&
      !t.includes(",") &&
      !t.includes(";")
    ) {
      return true;
    }

    return false;
  };

  lines.forEach((line) => {
    const t = line.trim();
    if (!t) return;

    if (isRealHeading(t)) {
      if (current.title || current.content.length) {
        sections.push(current);
      }

      current = {
        title: t.replace(/:$/, ""),
        content: [],
      };
    } else if (t.startsWith("-")) {
      current.content.push({
        type: "bullet",
        text: t.replace(/^-+\s*/, ""),
      });
    } else {
      current.content.push({
        type: "paragraph",
        text: t,
      });
    }
  });

  if (current.title || current.content.length) {
    sections.push(current);
  }

  return sections;
};

/* ================= MEDIA VIEWER ================= */
function MediaViewer({ media, onClose, isAR }) {
  if (!media) return null;

  return (
    <div className="viewer-backdrop" onClick={onClose}>
      <div className="viewer-modal" onClick={(e) => e.stopPropagation()}>
        <button className="viewer-close" onClick={onClose}>
          ×
        </button>

        {isVideoFile(media) ? (
          <video className="viewer-media" controls autoPlay playsInline>
            <source
              src={getMediaUrl(media.videoUrl || media.imageUrl)}
              type="video/mp4"
            />
            {isAR
              ? "المتصفح لا يدعم الفيديو"
              : "Your browser does not support the video tag."}
          </video>
        ) : (
          <img
            className="viewer-media"
            src={getMediaUrl(media.imageUrl)}
            alt="Preview"
          />
        )}
      </div>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function ProjectModal({ project, onClose }) {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const [selectedMedia, setSelectedMedia] = useState(null);
  const navigate = useNavigate();

  const translatedProject = getTranslatedProject(project, language);

  const handleGetQuote = () => {
    navigate("/get-a-quote", {
      state: { projectName: translatedProject.title },
    });
    onClose();
  };

  const visuals = translatedProject?.images || [];

  const sections = useMemo(
    () => parseDescription(translatedProject?.description),
    [translatedProject?.description]
  );

  const galleryItems = visuals.slice(sections.length + 1);

  useEffect(() => {
    const rows = document.querySelectorAll(".zig-row");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, [sections.length]);

  if (!project) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}>
        <div
          className="modal-content full-modal"
          dir={isAR ? "rtl" : "ltr"}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            ×
          </button>

          {visuals[0] && (
            <div
              className="modal-hero"
              onClick={() => setSelectedMedia(visuals[0])}
            >
              {isVideoFile(visuals[0]) ? (
                <video autoPlay muted loop playsInline>
                  <source
                    src={getMediaUrl(
                      visuals[0].videoUrl || visuals[0].imageUrl)
                    }
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  src={getMediaUrl(visuals[0].imageUrl)}
                  alt={translatedProject.title}
                />
              )}
            </div>
          )}

          <div className="modal-header">
            <div className="modal-header-content">
              <h2>{translatedProject.title}</h2>
              {translatedProject.shortDesc && (
                <p>{translatedProject.shortDesc}</p>
              )}
            </div>

            <button className="get-quote-btn" onClick={handleGetQuote}>
              {isAR ? "اطلب عرض سعر" : "Get a Quote"}
            </button>
          </div>

          <div className="modal-zigzag">
            {sections.map((sec, i) => {
              const media = visuals[i + 1];
              const reverse = i % 2 !== 0;
              const hasMedia = !!media;

              const bullets = sec.content.filter(
                (item) => item.type === "bullet"
              );

              const paragraphs = sec.content.filter(
                (item) => item.type === "paragraph"
              );

              return (
                <div
                  key={i}
                  className={`zig-row ${reverse ? "reverse" : ""}`}
                  
                >
                  <div className={`zig-card ${!hasMedia ? "no-media" : ""}`}>
                    <div className="zig-text">
                      {sec.title && <h3>{sec.title}</h3>}

                      <div className="zig-text-content">
                        {paragraphs.map((item, j) => (
                          <p key={j}>{item.text}</p>
                        ))}

                        {bullets.length > 0 && (
                          <ul className="zig-bullets">
                            {bullets.map((item, j) => (
                              <li key={j}>
                                <img
                                  className="bullet-icon"
                                  src={checkIcon}
                                  alt=""
                                />
                                <span>{item.text}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {media && (
                      <div
                        className="zig-media"
                        onClick={() => setSelectedMedia(media)}
                      >
                        {isVideoFile(media) ? (
                          <video muted playsInline controls preload="metadata">
                            <source
                              src={getMediaUrl(
                                media.videoUrl || media.imageUrl
                              )}
                              type="video/mp4"
                            />
                            {isAR
                              ? "المتصفح لا يدعم الفيديو"
                              : "Your browser does not support the video tag."}
                          </video>
                        ) : (
                          <img src={getMediaUrl(media.imageUrl)} alt="" />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {galleryItems.length > 0 && (
            <div className="modal-gallery-wrap">
              <h3 className="gallery-title">
                {isAR ? "وسائط إضافية" : "More Media"}
              </h3>

              <div className="modal-gallery">
                {galleryItems.map((m, i) => (
                  <div
                    key={i}
                    className="gallery-item"
                    onClick={() => setSelectedMedia(m)}
                  >
                    {isVideoFile(m) ? (
                      <video muted playsInline controls preload="metadata">
                        <source
                          src={getMediaUrl(m.videoUrl || m.imageUrl)}
                          type="video/mp4"
                        />
                        {isAR
                          ? "المتصفح لا يدعم الفيديو"
                          : "Your browser does not support the video tag."}
                      </video>
                    ) : (
                      <img src={getMediaUrl(m.imageUrl)} alt="" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <MediaViewer
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
        isAR={isAR}
      />
    </>
  );
}