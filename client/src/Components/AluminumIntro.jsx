import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import eep1 from "../assets/images/eep1.png";
import eep2 from "../assets/images/eep2.jpg";
import eep3 from "../assets/images/eep3.jpg";
import eep4 from "../assets/images/eep4.jpg";
import eep5 from "../assets/images/eep5.jpg";
import eep6 from "../assets/images/eep6.jpg";

export default function AluminumIntro() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR
        ? "هندسة القوة والكفاءة"
        : "Engineering for Strength & Efficiency",
      text: isAR
        ? [
            "تتطلب الهياكل المصنوعة من الألمنيوم تصميمًا دقيقًا لضمان الصلابة والاستقرار والمتانة طويلة الأمد.",
            "يقوم فريقنا بتحليل الأحمال والظروف البيئية ومتطلبات التشغيل لبناء هياكل موثوقة."
          ]
        : [
            "Aluminum structures require precise design to ensure rigidity, stability, and long-term durability.",
            "Our team analyzes load conditions, environmental exposure, and operational demands to create reliable structural frameworks."
          ],
      bullets: isAR
        ? [
            "هياكل ألمنيوم مخصصة",
            "أنظمة تركيب معيارية",
            "منصات تثبيت المعدات",
            "هياكل قواعد الماكينات",
            "أغلفة صناعية خفيفة الوزن"
          ]
        : [
            "Custom aluminum frames and support systems",
            "Modular structural assemblies",
            "Equipment mounting platforms",
            "Machine base structures",
            "Lightweight industrial enclosures"
          ],
      image: eep2,
      alt: isAR ? "تصميم هياكل ألمنيوم" : "Aluminum structural design"
    },
    {
      title: isAR
        ? "التحليل الهيكلي والتحسين"
        : "Structural Analysis & Optimization",
      text: isAR
        ? [
            "نطبق مبادئ هندسية لضمان أداء كل هيكل في الظروف الواقعية.",
            "يتم تحسين كل تصميم لتحقيق التوازن بين القوة والوزن والكفاءة."
          ]
        : [
            "We apply engineering principles to ensure every structure performs under real-world conditions.",
            "Each design is optimized to balance strength, weight, and efficiency."
          ],
      bullets: isAR
        ? [
            "تحليل توزيع الأحمال والإجهاد",
            "تحليل الانحراف والاهتزاز",
            "استراتيجيات التعزيز",
            "تحسين الوصلات والتثبيت",
            "اعتبارات التمدد الحراري"
          ]
        : [
            "Load and stress distribution",
            "Deflection and vibration analysis",
            "Reinforcement strategies",
            "Joint and fastening optimization",
            "Thermal expansion considerations"
          ],
      image: eep3,
      alt: isAR ? "التحليل الهيكلي" : "Structural analysis"
    },
    {
      title: isAR
        ? "مصمم للتصنيع والتجميع"
        : "Designed for Fabrication & Assembly",
      text: isAR
        ? [
            "تم تصميم هياكل الألمنيوم لدينا مع مراعاة الكفاءة التصنيعية.",
            "نضمن أن يكون كل تصميم عمليًا في التصنيع وسهل التجميع."
          ]
        : [
            "Our aluminum structures are designed with manufacturing efficiency in mind.",
            "We ensure that every design is practical to fabricate and easy to assemble."
          ],
      bullets: isAR
        ? [
            "اختيار مقاطع البروفايل",
            "التوافق مع ماكينات CNC",
            "تقنيات اللحام والتثبيت",
            "إدارة التفاوتات",
            "سهولة الصيانة"
          ]
        : [
            "Extrusion profile selection",
            "CNC machining compatibility",
            "Welding and fastening techniques",
            "Tolerance management",
            "Ease of maintenance"
          ],
      image: eep4,
      alt: isAR ? "التصنيع والتجميع" : "Fabrication and assembly"
    },
    {
      title: isAR
        ? "تطوير الأنظمة المتكاملة"
        : "Integrated System Development",
      text: isAR
        ? [
            "غالبًا ما تشكل هياكل الألمنيوم العمود الفقري للأنظمة المعقدة.",
            "نتعاون مع فرق الإلكترونيات والأنظمة المدمجة لضمان التكامل الكامل للنظام."
          ]
        : [
            "Aluminum structures often serve as the backbone of complex systems.",
            "We collaborate with electronics and embedded teams to ensure full system integration."
          ],
      bullets: isAR
        ? [
            "دمج وحدات التحكم",
            "تثبيت الحساسات",
            "أنظمة التبريد والتهوية",
            "مكونات الأتمتة",
            "أنظمة الحركة الميكانيكية"
          ]
        : [
            "Control unit integration",
            "Sensor mounting",
            "Cooling and ventilation systems",
            "Automation components",
            "Mechanical motion systems"
          ],
      image: eep5,
      alt: isAR ? "تكامل الأنظمة" : "System integration"
    },
    {
      title: isAR
        ? "مصمم للأداء الصناعي"
        : "Built for Industrial Performance",
      text: isAR
        ? [
            "تم تصميم حلولنا للعمل في البيئات الواقعية حيث تكون المتانة والكفاءة عاملين أساسيين.",
            "نقدم هياكل معيارية قابلة للتوسع وجاهزة للإنتاج."
          ]
        : [
            "Our designs are engineered for real-world environments where durability and efficiency are critical.",
            "We deliver structures that are modular, scalable, and production-ready."
          ],
      bullets: isAR
        ? [
            "منهجية تصميم بمعايير صناعية",
            "هياكل خفيفة ولكن قوية",
            "أنظمة معيارية قابلة للتوسع",
            "اعتمادية طويلة الأمد",
            "حلول فعالة من حيث التكلفة"
          ]
        : [
            "Industrial-grade design approach",
            "Lightweight yet strong structures",
            "Scalable modular systems",
            "Long-term reliability",
            "Cost-efficient solutions"
          ],
      image: eep6,
      alt: isAR ? "هياكل ألمنيوم صناعية" : "Industrial aluminum structures"
    }
  ];

  const whyChooseUs = isAR
    ? [
        "خبرة قوية في الهندسة الهيكلية",
        "معرفة عملية بالتصنيع",
        "فلسفة تصميم خفيفة وفعالة",
        "منهجية تطوير أنظمة متكاملة",
        "حلول موثوقة طويلة الأمد"
      ]
    : [
        "Strong structural engineering expertise",
        "Practical manufacturing knowledge",
        "Lightweight and efficient design philosophy",
        "Integrated system development approach",
        "Reliable long-term solutions"
      ];

  return (
    <section className="embedded-service-page" dir={isAR ? "rtl" : "ltr"}>
      <div className="site-container">

        <div className="service-main-header">

          <span className="service-label">
            {isAR ? "خدمة التصميم الميكانيكي" : "Mechanical Design Service"}
          </span>

          <h2>
            {isAR ? "تصميم الهياكل الألمنيوم" : "Aluminum Structure Design"}
          </h2>

          <h3>
            {isAR
              ? "حلول هيكلية خفيفة مصممة للأداء"
              : "Lightweight Structural Solutions Engineered for Performance"}
          </h3>

          <p>
            {isAR
              ? "نقوم بتصميم هياكل ألمنيوم عالية المتانة مخصصة للأنظمة الصناعية ومنصات الأتمتة والتجميعات الميكانيكية."
              : "We design high-strength aluminum structures tailored for industrial systems, automation platforms, and mechanical assemblies."}
          </p>

          <p>
            {isAR
              ? "يركز نهجنا الهندسي على تحقيق التوازن الأمثل بين القوة وتقليل الوزن وقابلية التصنيع."
              : "Our engineering approach focuses on achieving the optimal balance between strength, weight reduction, and manufacturability."}
          </p>

          <div className="service-main-image">
            <img src={eep1} alt={isAR ? "هياكل ألمنيوم" : "Aluminum structures"} />
          </div>

        </div>

        <div className="service-intro-block">
          <h4>
            {isAR ? "هندسة هيكلية دقيقة" : "Precision Structural Engineering"}
          </h4>
          <p>
            {isAR
              ? "نطوّر هياكل ألمنيوم فعالة ومعيارية وجاهزة للإنتاج للبيئات الصناعية المتطلبة."
              : "We develop aluminum structures that are efficient, modular, and production-ready for demanding industrial environments."}
          </p>
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            className={`service-section ${index % 2 !== 0 ? "reverse" : ""}`}
          >

            <div className="service-section-text">

              <h4>{section.title}</h4>

              {section.text.map((p, i) => (
                <p key={i}>{p}</p>
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

            <h4>{isAR ? "لماذا Nexus Design Lab؟" : "Why Nexus Design Lab?"}</h4>

            <p>
              {isAR
                ? "يجمع فريقنا الهندسي بين خبرة التحليل الهيكلي والمعرفة العملية بالتصنيع لتقديم أنظمة ألمنيوم عالية الأداء."
                : "Our engineering team combines structural analysis expertise with practical manufacturing knowledge to deliver high-performance aluminum systems."}
            </p>

            <ul>
              {whyChooseUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={eep6} alt={isAR ? "الهندسة الألمنيوم" : "Aluminum engineering"} />
          </div>

        </div>

        <div className="service-cta">

          <h4>
            {isAR
              ? "هل تبحث عن حل هيكلي خفيف الوزن؟"
              : "Looking for a Lightweight Structural Solution?"}
          </h4>

          <p>
            {isAR
              ? "تعاون مع Nexus Design Lab لتطوير هياكل ألمنيوم مصممة بدقة ومخصصة لتطبيقك."
              : "Partner with Nexus Design Lab to develop precision-engineered aluminum structures tailored to your application."}
          </p>

          <p>
            {isAR
              ? "لنصمم أنظمة مبنية على القوة والكفاءة وقابلية التوسع."
              : "Let’s design systems built for strength, efficiency, and scalability."}
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              {isAR ? "ابدأ مشروعك الهيكلي" : "Start Your Structural Project"}
            </button>

            <button className="secondary-btn">
              {isAR ? "ناقش تصميمك" : "Discuss Your Design"}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}