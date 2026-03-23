import React, { useEffect, useRef, useState } from "react";
import "./EmbeddedIntro.css";
import workflowVideo from "../assets/videos/Blue and Orange Corporate Product Development Roadmap Presentation.mp4";

export default function HomeIntro() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.25 }
    );

    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      videoObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`embedded-intro ${show ? "show" : ""}`}
    >
      <div className="site-container">
        <div className="embedded-intro-head">
          <span className="embedded-intro-badge">Development Process</span>
          <h2 className="embedded-intro-title">Embedded Systems Workflow</h2>
          <p className="embedded-intro-subtitle">
            A structured product development journey from concept to launch,
            designed to ensure performance, validation, and production readiness.
          </p>
        </div>

        <div className="embedded-intro-video-shell">
          <div className="embedded-intro-video-glow"></div>

          <video
            ref={videoRef}
            className="embedded-intro-video"
            src={workflowVideo}
            muted
            playsInline
            loop
            autoPlay
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}