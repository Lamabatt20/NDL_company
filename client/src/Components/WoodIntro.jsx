import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import ss1 from "../assets/images/ss1.png";
import ss2 from "../assets/images/ss2.png";
import ss3 from "../assets/images/ss3.png";
import ss4 from "../assets/images/ss4.png";
import ss5 from "../assets/images/ss5.webp";
import ss6 from "../assets/images/ss6.jpg";

export default function WoodIntro() {

  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR
        ? "تطوير الأثاث بأسلوب هندسي"
        : "Engineering-Based Furniture Development",
      text: isAR
        ? [
            "يتطلب تصميم الأثاث أكثر من الشكل.",
            "نوازن بين القوة والراحة والاستخدام."
          ]
        : [
            "Furniture design requires more than appearance — it demands proper structural planning and engineering precision.",
            "We ensure every design balances strength, comfort, and usability."
          ],
      bullets: isAR
        ? [
            "أثاث مخصص",
            "طاولات عمل",
            "أنظمة تخزين",
            "مكونات خشبية",
            "تصاميم مختلطة"
          ]
        : [
            "Custom furniture for residential and commercial spaces",
            "Workstations and industrial tables",
            "Storage systems and cabinetry",
            "Wooden structural components",
            "Hybrid wood-metal designs"
          ],
      image: ss2,
      alt: isAR ? "الأثاث" : "Furniture development"
    },

    {
      title: isAR
        ? "اختيار المواد والقوة"
        : "Material Selection & Structural Integrity",
      text: isAR
        ? [
            "نختار المواد بعناية.",
            "نضمن المتانة والأداء."
          ]
        : [
            "We carefully select materials and design joinery systems to ensure durability and performance.",
            "Each design is optimized for real-world use."
          ],
      bullets: isAR
        ? [
            "اختيار الخشب",
            "أنظمة التثبيت",
            "تعزيز الهيكل",
            "التشطيب",
            "تصميم مريح"
          ]
        : [
            "Wood type selection",
            "Joinery and fastening systems",
            "Structural reinforcement",
            "Surface finishing",
            "Ergonomic design planning"
          ],
      image: ss3,
      alt: isAR ? "المواد" : "Material and structure"
    },

    {
      title: isAR
        ? "جاهز للتصنيع"
        : "Designed for Fabrication & Assembly",
      text: isAR
        ? [
            "نصمّم مع مراعاة الإنتاج.",
            "نضمن انتقال سلس."
          ]
        : [
            "Our designs are created with production efficiency in mind.",
            "We ensure smooth transition from design to workshop."
          ],
      bullets: isAR
        ? [
            "نماذج CAD",
            "توثيق التجميع",
            "خطط القص",
            "BOM",
            "ملفات CNC"
          ]
        : [
            "Detailed CAD models",
            "Assembly documentation",
            "Cutting and layout plans",
            "Bill of materials (BOM)",
            "CNC-ready files"
          ],
      image: ss4,
      alt: isAR ? "التصنيع" : "Fabrication"
    },

    {
      title: isAR
        ? "تصميم متكامل"
        : "Integrated Design Perspective",
      text: isAR
        ? [
            "ندمج الأنظمة الحديثة.",
            "نخلق تصاميم مبتكرة."
          ]
        : [
            "We integrate wood structures with modern systems and technologies.",
            "This enables innovative and functional hybrid designs."
          ],
      bullets: isAR
        ? [
            "دمج إلكترونيات",
            "إضاءة",
            "هياكل معدنية",
            "أتمتة",
            "أثاث ذكي"
          ]
        : [
            "Embedded electronics integration",
            "Lighting systems",
            "Metal structural frames",
            "Automation components",
            "Smart furniture solutions"
          ],
      image: ss5,
      alt: isAR ? "التكامل" : "Integrated design"
    },

    {
      title: isAR
        ? "المتانة والجمال"
        : "Built for Durability & Aesthetics",
      text: isAR
        ? [
            "نوازن بين الشكل والقوة.",
            "نصمّم منتجات تدوم."
          ]
        : [
            "Our designs combine visual refinement with structural strength.",
            "We create products that are both elegant and long-lasting."
          ],
      bullets: isAR
        ? [
            "متانة طويلة",
            "مظهر احترافي",
            "تنظيم عملي",
            "تشطيب نظيف",
            "سهولة التجميع"
          ]
        : [
            "Long-term durability",
            "Professional appearance",
            "Functional layouts",
            "Clean finishing",
            "Efficient assembly"
          ],
      image: ss6,
      alt: isAR ? "المتانة" : "Durability"
    }
  ];

  const whyChooseUs = isAR
    ? [
        "تصميم هندسي للأثاث",
        "خبرة بالمواد",
        "جاهزية للإنتاج",
        "توازن الشكل والوظيفة",
        "متانة طويلة"
      ]
    : [
        "Engineering-driven furniture design",
        "Strong material and structural expertise",
        "Production-ready workflow",
        "Balanced aesthetics and functionality",
        "Long-term durability focus"
      ];

  return (
    <section className="embedded-service-page" dir={isAR ? "rtl" : "ltr"}>

      <div className="site-container">

        <div className="service-main-header">

          <span className="service-label">
            {isAR ? "خدمة التصميم الميكانيكي" : "Mechanical Design Service"}
          </span>

          <h2>
            {isAR ? "تصميم الأثاث والخشب" : "Wood & Furniture Design"}
          </h2>

          <h3>
            {isAR
              ? "تصاميم عملية ومتينة"
              : "Functional, Durable, and Precision-Crafted Designs"}
          </h3>

          <p>
            {isAR
              ? "نصمّم أثاث مخصص."
              : "We design custom wood and furniture solutions that combine structural integrity, functionality, and refined aesthetics."}
          </p>

          <p>
            {isAR
              ? "نجمع بين الهندسة والحرفية."
              : "Our approach blends engineering principles with craftsmanship to create designs that are visually compelling and mechanically sound."}
          </p>

          <div className="service-main-image">
            <img src={ss1} alt="Wood design"/>
          </div>

        </div>

        <div className="service-intro-block">
          <h4>
            {isAR ? "الهندسة والحرفية" : "Engineering Meets Craftsmanship"}
          </h4>
          <p>
            {isAR
              ? "نطوّر حلول متكاملة."
              : "We develop wood and furniture solutions that combine durability, usability, and refined design for real-world applications."}
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
              <img src={section.image} alt={section.alt}/>
            </div>

          </div>
        ))}

        <div className="service-highlight-box">

          <div className="service-highlight-content">

            <h4>{isAR ? "لماذا Nexus Design Lab؟" : "Why Nexus Design Lab?"}</h4>

            <p>
              {isAR
                ? "نقدّم تصاميم أثاث هندسية."
                : "We bring engineering precision into furniture design, ensuring durability, usability, and production efficiency."}
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={ss6} alt="Wood engineering"/>
          </div>

        </div>

        <div className="service-cta">

          <h4>
            {isAR
              ? "تحتاج أثاث مخصص؟"
              : "Looking to Build Custom Furniture or Wood Solutions?"}
          </h4>

          <p>
            {isAR
              ? "ابدأ مشروعك معنا."
              : "Partner with Nexus Design Lab to design functional and durable wood products tailored to your needs."}
          </p>

          <p>
            {isAR
              ? "لننشئ تصميم احترافي."
              : "Let’s create designs that combine craftsmanship with engineering precision."}
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              {isAR ? "ابدأ مشروعك" : "Start Your Furniture Project"}
            </button>

            <button className="secondary-btn">
              {isAR ? "ناقش التصميم" : "Discuss Your Design"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}