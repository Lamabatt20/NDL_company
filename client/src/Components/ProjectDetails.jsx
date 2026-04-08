import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProjectDetails.css";
import { getProjectById } from "../api";

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

  let currentSection = { title: "", blocks: [] };
  let lastListItem = null;

  const isSectionTitle = (text) => {
    if (!text.endsWith(":")) return false;
    const words = text.replace(":", "").split(" ");
    const capitalized = words.filter((w) => w[0] === w[0]?.toUpperCase());
    return capitalized.length >= Math.ceil(words.length * 0.6);
  };

  const pushSection = () => {
    if (currentSection.title || currentSection.blocks.length) {
      sections.push(currentSection);
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (isSectionTitle(trimmed)) {
      pushSection();
      currentSection = { title: trimmed.slice(0, -1), blocks: [] };
      lastListItem = null;
      return;
    }

    if (trimmed.startsWith("-")) {
      const item = {
        title: trimmed.replace(/^-+\s*/, ""),
        desc: "",
      };

      let listBlock = currentSection.blocks[currentSection.blocks.length - 1];

      if (!listBlock || listBlock.type !== "list") {
        listBlock = { type: "list", items: [] };
        currentSection.blocks.push(listBlock);
      }

      listBlock.items.push(item);
      lastListItem = item;
      return;
    }

    if (lastListItem) {
      lastListItem.desc = trimmed;
      lastListItem = null;
      return;
    }

    currentSection.blocks.push({
      type: "text",
      value: trimmed,
    });
  });

  pushSection();
  return sections;
};

export default function ProjectDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    const fetchProject = async () => {
      try {
        const data = await getProjectById(id);
        if (!alive) return;
        setProject(data);
      } catch (error) {
        console.error("Failed to fetch project:", error);
      } finally {
        if (alive) setLoading(false);
      }
    };

    fetchProject();
    return () => {
      alive = false;
    };
  }, [id]);

  const sections = useMemo(
    () => parseDescription(project?.description),
    [project?.description]
  );

  const visuals = project?.images || [];

  /* ================= ANIMATION OBSERVER ================= */
  useEffect(() => {
    const rows = document.querySelectorAll(".zigzag-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, [sections.length]);

  if (loading) return <div className="project-loading">Loading…</div>;
  if (!project) return <div className="project-loading">Not Found</div>;

  return (
    <main className="project-details">
      {/* ================= HERO ================= */}
      <section className="project-hero">
        {visuals[0] &&
          (isVideoFile(visuals[0]) ? (
            <video
              className="project-hero-media"
              autoPlay
              muted
              loop
              playsInline
            >
              <source
                src={getMediaUrl(visuals[0].videoUrl || visuals[0].imageUrl)}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={getMediaUrl(visuals[0].imageUrl)} alt="" />
          ))}

        <div className="project-hero-overlay" />

        <div className="site-container">
          <div className="project-hero-content">
            <h1>{project.title}</h1>
            <p>{project.shortDesc}</p>

            <button
              className="hero-cta"
              onClick={() =>
                navigate("/get-a-quote", {
                  state: { projectName: project.title },
                })
              }
            >
              Get a Quote
            </button>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="project-content-wrapper">
        <div className="site-container">
          {sections.map((section, i) => {
            const image = visuals[i + 1];
            const reverse = i % 2 !== 0;

            if (!image) return null;

            return (
              <div
                key={i}
                className={`zigzag-row zigzag-animate ${
                  reverse ? "reverse" : ""
                }`}
              >
                <div className="zigzag-text">
                  <h2 className="zigzag-title">{section.title}</h2>

                  {section.blocks.map((block, j) =>
                    block.type === "list" ? (
                      <ul key={j} className="zigzag-list">
                        {block.items.map((item, k) => (
                          <li key={k}>
                            <strong>{item.title}</strong>
                            {item.desc && <p>{item.desc}</p>}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j} className="zigzag-paragraph">
                        {block.value}
                      </p>
                    )
                  )}
                </div>

                <div className="zigzag-image-wrapper">
                  {isVideoFile(image) ? (
                    <video
                      controls
                      muted
                      loop
                      playsInline
                      className="zigzag-image"
                    >
                      <source
                        src={getMediaUrl(image.videoUrl || image.imageUrl)}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={getMediaUrl(image.imageUrl)}
                      alt=""
                      className="zigzag-image"
                    />
                  )}
                </div>
              </div>
            );
          })}

          <div className="u-cards-grid">
            {sections.map((section, i) => {
              const image = visuals[i + 1];
              if (image) return null;

              return (
                <div key={i} className="u-process-card">
                  <div className="u-card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#17477b"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <h2 className="u-card-title">{section.title}</h2>

                  {section.blocks.map((block, j) =>
                    block.type === "list" ? (
                      <ul key={j} className="u-card-list">
                        {block.items.map((item, k) => (
                          <li key={k}>
                            <strong>{item.title}</strong>
                            {item.desc && <p>{item.desc}</p>}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j} className="u-card-paragraph">
                        {block.value}
                      </p>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      {visuals.length > sections.length + 1 && (
        <section className="project-gallery">
          <div className="site-container">
            <h2 className="gallery-title">Our Work</h2>
            <p className="gallery-subtitle">
              Explore a curated selection of completed work that reflects our
              commitment to quality, precision, and exceptional craftsmanship.
            </p>

            <div
              className={`gallery-grid ${
                visuals.slice(sections.length + 1).length === 2
                  ? "two-items"
                  : ""
              }`}
            >
              {visuals.slice(sections.length + 1).map((media, i) => {
                const isVideo = isVideoFile(media);

                return (
                  <div key={i} className="gallery-item">
                    {isVideo ? (
                      <video
                        controls
                        muted
                        playsInline
                        controlsList="nofullscreen"
                      >
                        <source
                          src={getMediaUrl(media.videoUrl || media.imageUrl)}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={getMediaUrl(media.imageUrl)}
                        alt="Project media"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}