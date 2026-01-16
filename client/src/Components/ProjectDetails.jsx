import React, { useEffect, useMemo, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./ProjectDetails.css";
import { getProjectById } from "../api";

const API_URL = process.env.REACT_APP_API_URL;

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
    const capitalized = words.filter(
      (w) => w[0] === w[0]?.toUpperCase()
    );
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

      let listBlock =
        currentSection.blocks[currentSection.blocks.length - 1];

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
      } finally {
        if (alive) setLoading(false);
      }
    };

    fetchProject();
    return () => (alive = false);
  }, [id]);

  const sections = useMemo(
    () => parseDescription(project?.description),
    [project?.description]
  );

  const visuals = project?.images || [];

  useEffect(() => {
    if (!sections.length) return;

    const rows = document.querySelectorAll(".zigzag-animate");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.30 }
    );

    rows.forEach((r) => observer.observe(r));
    return () => observer.disconnect();
  }, [sections.length]);

  if (loading) return <div className="project-loading">Loading…</div>;
  if (!project) return <div className="project-loading">Not Found</div>;

  return (
    <main className="project-details">
      {/* HERO */}
      <section className="project-hero">
        {visuals[0] && (
          <img src={`${API_URL}${visuals[0].imageUrl}`} alt="" />
        )}
        <div className="project-hero-overlay" />
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
      </section>

      {/* ZIGZAG SECTIONS */}
      {sections.map((section, i) => {
        const reverse = i % 2 !== 0;
        const image = visuals[i + 1];

        return (
          <section
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

            {image && (
              <div className="zigzag-image-wrapper">
                <img
                  src={`${API_URL}${image.imageUrl}`}
                  alt=""
                  className="zigzag-image"
                />
              </div>
            )}
          </section>
        );
      })}

      {/* GALLERY */}
      {visuals.length > sections.length + 1 && (
        <section className="project-gallery">
          <h2 className="gallery-title">Our Work</h2>

          <div className="gallery-grid">
            {visuals.slice(sections.length + 1).map((media, i) => {
              const isVideo =
                media.type === "video" ||
                media.videoUrl ||
                media.imageUrl?.endsWith(".mp4");

              return (
                <div key={i} className="gallery-item">
                  {isVideo ? (
                    <video
                      src={`${API_URL}${media.videoUrl || media.imageUrl}`}
                      controls
                      muted
                      controlsList="nofullscreen"
                    />
                  ) : (
                    <img
                      src={`${API_URL}${media.imageUrl}`}
                      alt="Project media"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
