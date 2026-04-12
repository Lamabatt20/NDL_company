import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import img1 from "../assets/images/layout1.png";
import img2 from "../assets/images/layout2.png";
import img3 from "../assets/images/layout3.png";
import img4 from "../assets/images/layout4.png";
import img5 from "../assets/images/layout5.png";
import img6 from "../assets/images/layout6.png";
import img7 from "../assets/images/layout7.png";

export default function PcbLayoutIntro() {

  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR
        ? "تصميم PCB متعدد الطبقات وعالي الكثافة"
        : "Multilayer & High-Density PCB Design",
      text: isAR
        ? [
            "نقوم بتصميم لوحات متعددة الطبقات معقدة محسّنة للأداء والحجم.",
            "يتم تحسين التصميم لتحقيق الكفاءة والمتانة وقابلية التوسع."
          ]
        : [
            "We design complex multilayer boards optimized for performance and compact form factors.",
            "Our layouts are optimized for efficiency, durability, and long-term scalability."
          ],
      bullets: isAR
        ? [
            "لوحات من طبقتين إلى متعددة الطبقات",
            "توزيع مكونات عالي الكثافة",
            "توجيه بإمبيدانس مضبوط",
            "حزم BGA و fine-pitch",
            "أنظمة HDI"
          ]
        : [
            "2 to high-layer-count PCBs",
            "High-density component placement",
            "Controlled impedance routing",
            "Fine-pitch and BGA packages",
            "HDI embedded systems"
          ],
      image: img2
    },

    {
      title: isAR
        ? "تحسين تكامل الإشارة"
        : "Signal Integrity Optimization",
      text: isAR
        ? [
            "نطبق تقنيات توجيه متقدمة لضمان أداء مستقر في الأنظمة عالية السرعة."
          ]
        : [
            "We implement advanced routing practices to ensure stable performance in high-speed digital systems."
          ],
      bullets: isAR
        ? [
            "توجيه أزواج تفاضلية",
            "تحكم بالإمبيدانس",
            "مطابقة الأطوال",
            "تقليل الضوضاء",
            "تقليل التداخل"
          ]
        : [
            "Differential pair routing",
            "Impedance control",
            "Length matching",
            "Noise reduction",
            "Crosstalk mitigation"
          ],
      image: img3
    },

    {
      title: isAR
        ? "توزيع الطاقة وإدارة الحرارة"
        : "Power Distribution & Thermal Management",
      text: isAR
        ? [
            "تصميم الطاقة الموثوق ضروري لاستقرار النظام."
          ]
        : [
            "Reliable power architecture is critical to electronic system stability."
          ],
      bullets: isAR
        ? [
            "طبقات طاقة محسّنة",
            "استراتيجيات تبديد الحرارة",
            "مساحات نحاس واسعة",
            "تقنيات تقليل EMI"
          ]
        : [
            "Optimized power planes",
            "Thermal relief strategies",
            "Wide copper pours",
            "EMI reduction techniques"
          ],
      image: img4
    },

    {
      title: isAR
        ? "جاهزية التصنيع والتوافق"
        : "Manufacturing & Compliance Ready",
      text: isAR
        ? [
            "نأخذ جاهزية الإنتاج بعين الاعتبار أثناء التصميم."
          ]
        : [
            "Layouts are developed with full consideration of production readiness."
          ],
      bullets: isAR
        ? [
            "تصميم للتصنيع DFM",
            "تصميم للتجميع DFA",
            "تصميم للاختبار DFT",
            "توافق EMC/EMI"
          ]
        : [
            "Design for Manufacturability (DFM)",
            "Design for Assembly (DFA)",
            "Design for Testing (DFT)",
            "EMC/EMI compliance"
          ],
      image: img5
    },

    {
      title: isAR
        ? "سير العمل الهندسي والتعاون"
        : "Engineering Workflow & Collaboration",
      text: isAR
        ? [
            "يتعاون مهندسو التصميم مع فرق العتاد والبرمجيات والميكانيك."
          ]
        : [
            "Our layout engineers collaborate with hardware, firmware, and mechanical teams."
          ],
      bullets: isAR
        ? [
            "نماذج أولية سريعة",
            "تعديلات التصميم",
            "تحقق من المكونات",
            "توثيق الإنتاج"
          ]
        : [
            "Rapid prototyping",
            "Design revisions",
            "Component verification",
            "Production documentation"
          ],
      image: img6
    }
  ];

  const whyChooseUs = isAR
    ? [
        "متخصصون في تصميم PCB",
        "خبرة في الأنظمة المدمجة",
        "خبرة قوية في الإشارة",
        "جاهزية للإنتاج",
        "دعم طويل الأمد"
      ]
    : [
        "Dedicated PCB layout specialists",
        "Experience in complex embedded systems",
        "Strong signal integrity expertise",
        "Production-ready engineering workflow",
        "Long-term engineering support"
      ];

  return (
    <section className="embedded-service-page" dir={isAR ? "rtl" : "ltr"}>

      <div className="site-container">

        <div className="service-main-header">

          <span className="service-label">
            {isAR ? "خدمة تصميم الإلكترونيات" : "Electronics Design Service"}
          </span>

          <h2>
            {isAR ? "تصميم PCB" : "PCB Layout Design"}
          </h2>

          <h3>
            {isAR
              ? "تصميم دقيق لإلكترونيات عالية الأداء"
              : "Precision Layout Engineering for High-Performance Electronics"}
          </h3>

          <p>
            {isAR
              ? "نحوّل المخططات إلى تصميم PCB جاهز للإنتاج."
              : "Our engineering team transforms validated schematics into optimized, production-ready PCB layouts tailored for industrial, automotive, and embedded applications."}
          </p>

          <div className="service-main-image">
            <img src={img1} alt="PCB layout design"/>
          </div>

        </div>

        <div className="service-intro-block">
          <h4>
            {isAR ? "قدرات تصميم متقدمة" : "Advanced Layout Capabilities"}
          </h4>
          <p>
            {isAR
              ? "نقدّم تصاميم PCB دقيقة تجمع الأداء والتصنيع."
              : "We deliver precision PCB layouts combining electrical performance, compact design strategy, and manufacturing readiness."}
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
              <img src={section.image} alt={section.title}/>
            </div>

          </div>

        ))}

        <div className="service-highlight-box">

          <div className="service-highlight-content">

            <h4>{isAR ? "لماذا Nexus Design Lab؟" : "Why Nexus Design Lab?"}</h4>

            <p>
              {isAR
                ? "نصمم PCB يضمن الأداء والموثوقية."
                : "We don't just place components — we engineer layouts that ensure performance, reliability, and manufacturability."}
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={img7} alt="Engineering team"/>
          </div>

        </div>

        <div className="service-cta">

          <h4>
            {isAR
              ? "جاهز لإنتاج تصميم PCB؟"
              : "Ready to Bring Your PCB Design to Production?"}
          </h4>

          <p>
            {isAR
              ? "دعنا نصمم لك PCB احترافي."
              : "Let our engineering team develop a precision-optimized layout that ensures performance and reliability."}
          </p>

          <div className="service-cta-buttons">

            <button type="button" className="primary-btn">
              {isAR ? "طلب استشارة" : "Request Consultation"}
            </button>

            <button type="button" className="secondary-btn">
              {isAR ? "ناقش مشروعك" : "Discuss Your Project"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}