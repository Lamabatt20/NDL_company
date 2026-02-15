import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
      { threshold: 0.3 }
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

      {/* SECTIONS */}
      <section className="project-content-wrapper">
        <div className="site-container">
          {/* حاوية تجمع البطاقات التي بدون صور فقط */}
          <div className="u-cards-container">
            {sections.map((section, i) => {
              const image = visuals[i + 1];
              const reverse = i % 2 !== 0;

              // إذا لا توجد صورة: استعمل تصميم الـ U-Shape الجديد
              if (!image) {
                return (
                  <div key={i} className="u-process-card">
                    <div className="u-card-icon">
                      {/* أيقونة افتراضية تشبه التي في الصورة */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="#17477b" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
              }

              // إذا توجد صورة: استعمل تصميم الـ Zigzag العادي كما كان
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
                  {image.type === "video" || image.videoUrl || image.imageUrl?.endsWith(".mp4") ? (
                    <video
                      src={`${API_URL}${image.videoUrl || image.imageUrl}`}
                      controls
                      muted
                      autoPlay={false}
                      loop
                      className="zigzag-image"
                    />
                  ) : (
                    <img
                      src={`${API_URL}${image.imageUrl}`}
                      alt=""
                      className="zigzag-image"
                    />
                  )}
                </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
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
                const isVideo =
                  media.type === "video" ||
                  media.videoUrl ||
                  media.imageUrl?.endsWith(".mp4");

                return (
                  <div key={i} className="gallery-item gallery-clickable">
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
          </div>
        </section>
      )}
    </main>
  );
}