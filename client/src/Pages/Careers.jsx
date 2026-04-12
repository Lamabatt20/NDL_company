import React, { useState } from "react";
import "./Career.css";
import heroImage from "../assets/images/career.png";
import { useLanguage } from "../context/LanguageContext";

export default function Career() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const [openJobs, setOpenJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [location, setLocation] = useState("All");

  const jobs = [
    {
      id: 1,
      title: isAR ? "مهندس Embedded C/C++" : "Embedded C/C++ Engineer",
      category: "Embedded",
      type: "Full Time",
      location: "Remote",
      details: {
        skills: isAR
          ? [
              "خبرة لا تقل عن سنتين في Embedded C/C++",
              "خبرة في STM32 و ESP32 و Nordic nRF52",
              "معرفة في RTOS مثل FreeRTOS",
              "بروتوكولات: UART و SPI و I2C و CAN و MQTT",
              "استخدام Git",
            ]
          : [
              "Minimum 2 years experience in Embedded C/C++",
              "Experience with STM32, ESP32, Nordic nRF52",
              "Knowledge of RTOS (FreeRTOS)",
              "Protocols: UART, SPI, I2C, CAN, MQTT",
              "Version control: Git",
            ],
        offer: isAR
          ? [
              "راتب منافس",
              "ساعات عمل مرنة",
              "إمكانية العمل عن بُعد",
              "بيئة عمل احترافية",
            ]
          : [
              "Competitive salary",
              "Flexible working hours",
              "Remote work option",
              "Professional team environment",
            ],
        responsibilities: isAR
          ? [
              "تطوير البرمجيات المدمجة",
              "التصحيح وتحسين الأداء",
              "توثيق الكود",
              "التعاون مع فريق الهاردوير",
            ]
          : [
              "Embedded firmware development",
              "Debugging and optimization",
              "Code documentation",
              "Collaboration with hardware team",
            ],
      },
    },
    {
      id: 2,
      title: isAR ? "مهندس تصميم ميكانيكي" : "Mechanical Design Engineer",
      category: "Mechanical",
      type: "Full Time",
      location: "Ramallah",
      details: {
        skills: isAR
          ? [
              "بكالوريوس في الهندسة الميكانيكية",
              "خبرة في SolidWorks أو AutoCAD",
              "معرفة بعمليات التصنيع",
              "مهارات تحليلية قوية",
            ]
          : [
              "Bachelor degree in Mechanical Engineering",
              "Experience with SolidWorks / AutoCAD",
              "Knowledge of manufacturing processes",
              "Strong analytical skills",
            ],
        offer: isAR
          ? ["بيئة عمل حديثة", "فرص للتطور الوظيفي", "راتب منافس"]
          : [
              "Modern work environment",
              "Career growth opportunities",
              "Competitive salary",
            ],
        responsibilities: isAR
          ? [
              "تصميم الأنظمة الميكانيكية",
              "تطوير النماذج الأولية",
              "التوثيق الفني",
              "دعم فريق الإنتاج",
            ]
          : [
              "Mechanical system design",
              "Prototype development",
              "Technical documentation",
              "Support production team",
            ],
      },
    },
  ];

  const toggleJob = (id) => {
    setOpenJobs((prev) =>
      prev.includes(id)
        ? prev.filter((jobId) => jobId !== id)
        : [...prev, id]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || job.category === category;
    const matchType = type === "All" || job.type === type;
    const matchLocation = location === "All" || job.location === location;

    return matchSearch && matchCategory && matchType && matchLocation;
  });

  return (
    <div className="career-page" dir={isAR ? "rtl" : "ltr"}>
      <section className="career-hero-new">
        <div className="career-shape career-shape-1"></div>
        <div className="career-shape career-shape-2"></div>

        <div className="career-hero-container">
          <div className="career-hero-text">
            <span className="career-label">
              {isAR ? "الوظائف في NDL" : "CAREERS AT NDL"}
            </span>

            <h1>
              {isAR ? "انضم إلى " : "Join Our "}
              <span>{isAR ? "فريقنا" : "Team"}</span>
              <br />
              {isAR ? "وانمو معنا بالابتكار" : "And Grow With Innovation"}
            </h1>

            <p>
              {isAR
                ? "اكتشف فرصًا مميزة للعمل على حلول هندسية مؤثرة في الأنظمة المدمجة، والتصميم الميكانيكي، والتقنيات الذكية."
                : "Explore exciting opportunities to work on impactful engineering solutions across embedded systems, mechanical design, and smart technologies."}
            </p>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 700, behavior: "smooth" })
              }
            >
              {isAR ? "استكشف الوظائف المتاحة" : "Explore Open Roles"}
            </button>
          </div>

          <div className="career-hero-image">
            <div className="career-hero-image-wrap">
              <img
                src={heroImage}
                alt={isAR ? "الوظائف" : "Careers Illustration"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="career-header">
        <h1>
          {isAR
            ? "لنرتقِ معًا في عالم التقنية!"
            : "Let’s Elevate with Tech Adventures!"}
        </h1>

        <div className="career-filters">
          <input
            type="text"
            placeholder={isAR ? "ابحث" : "Search"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">
              {isAR ? "كل فئات الوظائف" : "All Job Category"}
            </option>
            <option value="Embedded">
              {isAR ? "الأنظمة المدمجة" : "Embedded"}
            </option>
            <option value="Mechanical">
              {isAR ? "الميكانيك" : "Mechanical"}
            </option>
          </select>

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="All">
              {isAR ? "كل أنواع الوظائف" : "All Job Type"}
            </option>
            <option value="Full Time">
              {isAR ? "دوام كامل" : "Full Time"}
            </option>
            <option value="Part Time">
              {isAR ? "دوام جزئي" : "Part Time"}
            </option>
          </select>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="All">
              {isAR ? "كل المواقع" : "All Job Location"}
            </option>
            <option value="Ramallah">
              {isAR ? "رام الله" : "Ramallah"}
            </option>
            <option value="Remote">
              {isAR ? "عن بُعد" : "Remote"}
            </option>
          </select>
        </div>
      </section>

      <section className="career-content">
        {filteredJobs.length === 0 && (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            {isAR ? "لا توجد وظائف مطابقة." : "No jobs found."}
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
                ? isAR
                  ? "تفاصيل أقل ↑"
                  : "Less Details ↑"
                : isAR
                ? "تفاصيل أكثر ←"
                : "More Details →"}
            </button>

            {openJobs.includes(job.id) && (
              <div className="job-details">
                <h4>{isAR ? "المهارات المطلوبة" : "Required Skills"}</h4>
                <ul>
                  {job.details.skills.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h4>{isAR ? "نحن نقدم" : "We Offer"}</h4>
                <ul>
                  {job.details.offer.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h4>{isAR ? "المسؤوليات" : "Responsibilities"}</h4>
                <ul>
                  {job.details.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <button
                  className="send-resume"
                  onClick={() => {
                    setSelectedJob(job.title);
                    setShowModal(true);
                  }}
                >
                  {isAR ? "أرسل السيرة الذاتية!" : "Send Resume!"}
                </button>
              </div>
            )}
          </div>
        ))}
      </section>

      {showModal && (
        <div className="resume-modal">
          <div className="resume-box">
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ✕
            </button>

            <h3>{isAR ? "السيرة الذاتية" : "Resume"}</h3>

            <input value={selectedJob} disabled />
            <input placeholder={isAR ? "الاسم" : "Name"} />
            <input placeholder={isAR ? "البريد الإلكتروني" : "E-mail"} />
            <textarea placeholder={isAR ? "الرسالة" : "Message"} />
            <input type="file" />

            <button className="send-resume-btn">
              {isAR ? "أرسل السيرة الذاتية!" : "Send Resume!"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}