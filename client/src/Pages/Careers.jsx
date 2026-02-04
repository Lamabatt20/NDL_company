import React, { useState } from "react";
import "./Career.css";
import heroImage from "../assets/images/freepik_assistant_1768560101801.png";

export default function Career() {
  const [openJobs, setOpenJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  // 🔍 filters state
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");

  const jobs = [
    {
      id: 1,
      title: "Embedded C/C++ Engineer",
      category: "Embedded",
      type: "Full Time",
      location: "Remote",
      details: {
        skills: [
          "Minimum 2 years experience in Embedded C/C++",
          "Experience with STM32, ESP32, Nordic nRF52",
          "Knowledge of RTOS (FreeRTOS)",
          "Protocols: UART, SPI, I2C, CAN, MQTT",
          "Version control: Git",
        ],
        offer: [
          "Competitive salary",
          "Flexible working hours",
          "Remote work option",
          "Professional team environment",
        ],
        responsibilities: [
          "Embedded firmware development",
          "Debugging and optimization",
          "Code documentation",
          "Collaboration with hardware team",
        ],
      },
    },
    {
      id: 2,
      title: "Mechanical Design Engineer",
      category: "Mechanical",
      type: "Full Time",
      location: "Ramallah",
      details: {
        skills: [
          "Bachelor degree in Mechanical Engineering",
          "Experience with SolidWorks / AutoCAD",
          "Knowledge of manufacturing processes",
          "Strong analytical skills",
        ],
        offer: [
          "Modern work environment",
          "Career growth opportunities",
          "Competitive salary",
        ],
        responsibilities: [
          "Mechanical system design",
          "Prototype development",
          "Technical documentation",
          "Support production team",
        ],
      },
    },
  ];

  // 🔁 toggle open / close per job
  const toggleJob = (id) => {
    setOpenJobs((prev) =>
      prev.includes(id)
        ? prev.filter((jobId) => jobId !== id)
        : [...prev, id]
    );
  };

  // 🎯 filtering logic
  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || job.category === category;

    const matchType = type === "All" || job.type === type;

    const matchLocation =
      location === "All" || job.location === location;

    return matchSearch && matchCategory && matchType && matchLocation;
  });

  return (
    <div className="career-page">
      {/* HERO */}
      <section className="career-hero">
        <img src={heroImage} alt="Careers" />
        <div className="career-overlay">
          <h1>Join Our Team</h1>
        </div>
      </section>

      {/* HEADER + FILTERS */}
      <section className="career-header">
        <h1>Let’s Elevate with Tech Adventures!</h1>

        <div className="career-filters">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Job Category</option>
            <option value="Embedded">Embedded</option>
            <option value="Mechanical">Mechanical</option>
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="All">All Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="All">All Job Location</option>
            <option value="Ramallah">Ramallah</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="career-content">
        {filteredJobs.length === 0 && (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            No jobs found.
          </p>
        )}

        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>

            <button
              type="button"
              className="more-details"
              onClick={() => toggleJob(job.id)}
            >
              {openJobs.includes(job.id)
                ? "Less Details ↑"
                : "More Details →"}
            </button>

            {openJobs.includes(job.id) && (
              <div className="job-details">
                <h4>Required Skills</h4>
                <ul>
                  {job.details.skills.map((item, i) => (
                    <li key={i}>- {item}</li>
                  ))}
                </ul>

                <h4>We Offer</h4>
                <ul>
                  {job.details.offer.map((item, i) => (
                    <li key={i}>- {item}</li>
                  ))}
                </ul>

                <h4>Responsibilities</h4>
                <ul>
                  {job.details.responsibilities.map((item, i) => (
                    <li key={i}>- {item}</li>
                  ))}
                </ul>

                <button
                  className="send-resume"
                  onClick={() => {
                    setSelectedJob(job.title);
                    setShowModal(true);
                  }}
                >
                  Send Resume!
                </button>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* RESUME MODAL */}
      {showModal && (
        <div className="resume-modal">
          <div className="resume-box">
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h3>Resume</h3>

            <input value={selectedJob} disabled />
            <input placeholder="Name" />
            <input placeholder="E-mail" />
            <textarea placeholder="Message" />
            <input type="file" />

            <button className="send-resume-btn">
              Send Resume!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
