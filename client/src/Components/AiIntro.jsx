import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import pppp1 from "../assets/images/pppp1.webp";
import pppp2 from "../assets/images/pppp2.jpg";
import pppp3 from "../assets/images/pppp3.png";
import pppp4 from "../assets/images/pppp4.webp";
import pppp5 from "../assets/images/pppp5.jpeg";
import pppp6 from "../assets/images/pppp6.jpg";

export default function AiIntro() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR ? "من البيانات إلى ذكاء قابل للتنفيذ" : "From Data to Actionable Intelligence",
      text: isAR
        ? [
            "يبدأ دمج الذكاء الاصطناعي بفهم واضح لأهداف النظام والبيانات التشغيلية وقدرات العتاد.",
            "يقوم فريقنا بتحديد طبقة الذكاء الأنسب لكل تطبيق لضمان تحقيق قيمة فعلية وأداء واقعي."
          ]
        : [
            "AI integration begins with a clear understanding of system objectives, operational data, and hardware capabilities.",
            "Our team defines the most effective intelligence layer for each application to ensure measurable value and real-world performance."
          ],
      bullets: isAR
        ? [
            "معالجة ذكاء اصطناعي على الحافة باستخدام الأنظمة المدمجة",
            "منصات تحليل ذكاء اصطناعي متصلة بالسحابة",
            "دمج الرؤية الحاسوبية مع الكاميرات الصناعية",
            "الصيانة التنبؤية واكتشاف الأعطال",
            "الأتمتة الذكية ومنطق اتخاذ القرار"
          ]
        : [
            "Edge-based AI processing on embedded systems",
            "Cloud-connected AI analytics platforms",
            "Computer vision integration with industrial cameras",
            "Predictive maintenance and anomaly detection",
            "Intelligent automation and decision logic"
          ],
      image: pppp2,
      alt: "Data to actionable intelligence"
    },

    {
      title: isAR ? "تطوير الذكاء الاصطناعي المدمج والحافّة" : "Embedded & Edge AI Development",
      text: isAR
        ? [
            "نقوم بدمج الذكاء مباشرة داخل الأنظمة المدمجة لتمكين المعالجة الفعالة بالقرب من العتاد.",
            "يعمل مهندسونا على تحسين نشر النماذج لتحقيق الاستقرار والسرعة والموثوقية."
          ]
        : [
            "We integrate intelligence directly into embedded platforms when required, enabling efficient processing close to the hardware layer.",
            "Our engineers optimize AI deployment for stability, speed, and reliability in field conditions."
          ],
      bullets: isAR
        ? [
            "تشغيل النماذج على المتحكمات والمعالجات",
            "استدلال فعال على الأجهزة محدودة الموارد",
            "دمج الحساسات وأنظمة الرؤية ووحدات التحكم",
            "معالجة فورية للتطبيقات الصناعية والروبوتية"
          ]
        : [
            "Optimized model deployment on microcontrollers and processors",
            "Resource-efficient inference on constrained hardware",
            "Integration with sensors, vision systems, and control units",
            "Real-time processing for industrial and robotic applications"
          ],
      image: pppp3,
      alt: "Embedded and edge AI development"
    },

    {
      title: isAR ? "الأتمتة الذكية وتحسين الأنظمة" : "Intelligent Automation & System Optimization",
      text: isAR
        ? [
            "نطوّر استراتيجيات تحكم قائمة على الذكاء الاصطناعي لتحسين الكفاءة وتقليل التوقف.",
            "هدفنا هو إنشاء أنظمة تدعم الأداء التشغيلي بشكل مباشر."
          ]
        : [
            "We develop AI-driven control strategies that improve efficiency, reduce downtime, and enable adaptive system behavior.",
            "Our goal is to create intelligence that directly supports operational and business performance."
          ],
      bullets: isAR
        ? [
            "مراقبة ذكية وتنبيهات تلقائية",
            "أنظمة فحص تعتمد على الرؤية",
            "روبوتات متكيفة وتحكم بالحركة",
            "أنظمة تحسين الطاقة",
            "تحليل الأداء المعتمد على البيانات"
          ]
        : [
            "Smart monitoring and automated alerts",
            "Vision-based inspection systems",
            "Adaptive robotics and motion control",
            "Energy optimization systems",
            "Data-driven performance analysis"
          ],
      image: pppp4,
      alt: "Intelligent automation and system optimization"
    },

    {
      title: isAR ? "قابل للتوسع والتشغيل طويل الأمد" : "Built for Scalability & Long-Term Deployment",
      text: isAR
        ? [
            "يجب أن تتطور أنظمة الذكاء الاصطناعي مع المنتجات والبيئات.",
            "نصمم بنى قابلة للتوسع تضمن الاستمرارية والتكامل."
          ]
        : [
            "AI systems must evolve alongside the products and environments they support.",
            "We design scalable architectures that ensure maintainability, secure operation, and seamless integration with enterprise infrastructure."
          ],
      bullets: isAR
        ? [
            "تحديث وإعادة تدريب النماذج",
            "ترقيات عن بعد",
            "حماية البيانات",
            "تكامل مع الأنظمة الحالية",
            "استدامة طويلة الأمد"
          ]
        : [
            "Model updates and retraining",
            "Remote system upgrades",
            "Secure data handling",
            "Integration with existing enterprise platforms",
            "Long-term maintainability and cybersecurity readiness"
          ],
      image: pppp5,
      alt: "Scalable AI deployment"
    }
  ];

  const whyChooseUs = isAR
    ? [
        "خبرة متكاملة في العتاد والأنظمة المدمجة",
        "ذكاء اصطناعي عملي للتطبيق الواقعي",
        "قدرة قوية على دمج الأنظمة",
        "تصميم آمن وقابل للتوسع",
        "شراكة تقنية طويلة الأمد"
      ]
    : [
        "Unified hardware, embedded, and intelligent software expertise",
        "Practical AI engineered for real-world deployment",
        "Strong system-level integration capability",
        "Scalable and secure architecture design",
        "Reliable long-term technical partnership"
      ];

  return (
    <section className="embedded-service-page" dir={isAR ? "rtl" : "ltr"}>
      <div className="site-container">
        <div className="service-main-header">
          <span className="service-label">
            {isAR ? "خدمة الذكاء الاصطناعي" : "AI Engineering Service"}
          </span>

          <h2>{isAR ? "تكامل الذكاء الاصطناعي" : "AI Integration"}</h2>

          <h3>
            {isAR
              ? "دمج الذكاء في الأنظمة الواقعية"
              : "Engineering Intelligence into Real-World Systems"}
          </h3>

          <p>
            {isAR
              ? "نقوم بدمج الذكاء الاصطناعي داخل الأنظمة لإنشاء حلول ذكية وفعالة."
              : "At our Electronics Design Lab, we integrate Artificial Intelligence into hardware and software platforms to create systems that are not only automated — but intelligent."}
          </p>

          <p>
            {isAR
              ? "نركز على حلول قابلة للتطبيق في البيئات الواقعية."
              : "Our approach combines embedded engineering, data processing, and system architecture to deliver AI-driven solutions that operate reliably in real-world environments."}
          </p>

          <div className="service-main-image">
            <img src={pppp1} alt="" />
          </div>
        </div>

        <div className="service-intro-block">
          <h4>
            {isAR
              ? "ذكاء عملي جاهز للتطبيق"
              : "Practical Intelligence, Engineered for Deployment"}
          </h4>
          <p>
            {isAR
              ? "نطور أنظمة ذكية قابلة للتوسع وقيمة عالية."
              : "We build AI-enabled systems that combine embedded hardware, intelligent software, and operational data."}
          </p>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`service-section ${index % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="service-section-text">
              <h4>{section.title}</h4>

              {section.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              <ul>
                {section.bullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="service-section-image">
              <img src={section.image} alt={section.alt} />
            </div>
          </div>
        ))}

        <div className="service-highlight-box">
          <div className="service-highlight-content">
            <h4>{isAR ? "لماذا نحن؟" : "Why Nexus Design Lab?"}</h4>

            <ul>
              {whyChooseUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-highlight-image">
            <img src={pppp6} alt="" />
          </div>
        </div>

        <div className="service-cta">
          <h4>
            {isAR
              ? "جاهز لدمج الذكاء في نظامك؟"
              : "Ready to Integrate Intelligence into Your System?"}
          </h4>

          <p>
            {isAR
              ? "تواصل معنا لتطوير حلول ذكاء اصطناعي مخصصة."
              : "Partner with Nexus Design Lab to develop AI-driven solutions tailored to your hardware, infrastructure, and operational goals."}
          </p>

          <div className="service-cta-buttons">
            <button type="button" className="primary-btn">
              {isAR ? "ابدأ مشروعك" : "Start Your AI Integration Project"}
            </button>

            <button type="button" className="secondary-btn">
              {isAR ? "ناقش فكرتك" : "Discuss Your System"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}