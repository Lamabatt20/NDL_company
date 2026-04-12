import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import sw1 from "../assets/images/sw1.jpg";
import sw2 from "../assets/images/sw2.webp";
import sw3 from "../assets/images/sw3.jpeg";
import sw4 from "../assets/images/sw4.webp";
import sw5 from "../assets/images/sw5.jpg";
import sw6 from "../assets/images/sw6.jpg";
import sw7 from "../assets/images/sw7.png";

export default function ProductDesignIntro() {

  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR
        ? "منهجية تطوير المنتج"
        : "Strategic Product Development Approach",
      text: isAR
        ? [
            "يتطلب نجاح المنتج عملية تطوير منظمة.",
            "نقود المشروع من الفكرة إلى التنفيذ والتحقق."
          ]
        : [
            "Successful products require a structured development process.",
            "We guide projects from concept definition through engineering and validation."
          ],
      bullets: isAR
        ? [
            "تطوير الفكرة وتحليل الجدوى",
            "تصميم وظيفي وبيئي",
            "تخطيط الهيكل الميكانيكي",
            "اختيار المواد واستراتيجية التصنيع",
            "تحسين التكلفة والإنتاج"
          ]
        : [
            "Concept development and feasibility analysis",
            "Functional and ergonomic design",
            "Mechanical architecture planning",
            "Material selection and manufacturing strategy",
            "Cost and production optimization"
          ],
      image: sw2,
      alt: isAR ? "تطوير المنتج" : "Product development strategy"
    },

    {
      title: isAR
        ? "الهندسة والابتكار"
        : "Engineering Meets Innovation",
      text: isAR
        ? [
            "نقوم بدمج الميكانيك والإلكترونيات والأنظمة المدمجة منذ البداية.",
            "هذا يضمن تكامل جميع أجزاء النظام."
          ]
        : [
            "We integrate mechanical, electronic, and embedded considerations early in the design phase.",
            "This ensures seamless coordination between all system components."
          ],
      bullets: isAR
        ? [
            "تنظيم المساحات الداخلية",
            "توزيع الأحمال",
            "تصميم التبريد",
            "واجهة المستخدم",
            "متطلبات السلامة"
          ]
        : [
            "Internal layout and space optimization",
            "Structural integrity and load distribution",
            "Thermal and ventilation design",
            "User interface and accessibility",
            "Compliance and safety requirements"
          ],
      image: sw3,
      alt: isAR ? "الابتكار" : "Engineering and innovation"
    },

    {
      title: isAR
        ? "النمذجة والتحقق"
        : "Prototyping & Validation",
      text: isAR
        ? [
            "ندعم تطوير النماذج لتحسين الأداء.",
            "نختبر كل تصميم من حيث الاستخدام والمتانة."
          ]
        : [
            "We support iterative development to refine and validate product performance.",
            "Each design is tested for usability, durability, and functionality."
          ],
      bullets: isAR
        ? [
            "نمذجة ثلاثية الأبعاد",
            "طباعة ثلاثية الأبعاد",
            "اختبار الأداء",
            "التحقق من الجودة",
            "تحسين التصميم"
          ]
        : [
            "3D modeling and CAD development",
            "Rapid prototyping and 3D printing",
            "Functional testing",
            "Performance validation",
            "Design refinement"
          ],
      image: sw4,
      alt: isAR ? "النماذج" : "Prototyping"
    },

    {
      title: isAR
        ? "جاهز للتصنيع"
        : "Designed for Manufacturing & Scalability",
      text: isAR
        ? [
            "نجهز التصميم للإنتاج الواقعي.",
            "نضمن قابلية التوسع والنجاح طويل الأمد."
          ]
        : [
            "We prepare every design for real-world production environments.",
            "Our process ensures scalability and long-term product success."
          ],
      bullets: isAR
        ? [
            "تصنيع معدني",
            "CNC",
            "هياكل ألمنيوم",
            "حقن بلاستيك",
            "تصنيع هجين"
          ]
        : [
            "Sheet metal fabrication",
            "CNC machining",
            "Aluminum structures",
            "Injection molding",
            "Hybrid manufacturing methods"
          ],
      image: sw5,
      alt: isAR ? "التصنيع" : "Manufacturing"
    },

    {
      title: isAR
        ? "من الفكرة إلى المنتج"
        : "From Idea to Market-Ready Product",
      text: isAR
        ? [
            "نحوّل الأفكار إلى منتجات قابلة للتصنيع.",
            "نركز على الأداء والشكل."
          ]
        : [
            "We transform concepts into practical, manufacturable products.",
            "Our focus is on delivering solutions that are functional, aesthetic, and production-ready."
          ],
      bullets: isAR
        ? [
            "تصميم جاهز للسوق",
            "تحسين الإنتاج",
            "توازن الأداء والتكلفة",
            "تصميم موجه للمستخدم",
            "تخطيط دورة الحياة"
          ]
        : [
            "Market-ready design solutions",
            "Optimized production workflows",
            "Balanced performance and cost",
            "User-focused design",
            "Long-term product lifecycle planning"
          ],
      image: sw6,
      alt: isAR ? "المنتج" : "Product"
    }
  ];

  const whyChooseUs = isAR
    ? [
        "خبرة هندسية متعددة",
        "تركيز على الابتكار",
        "تصميم جاهز للإنتاج",
        "توازن الأداء والشكل",
        "نجاح طويل الأمد"
      ]
    : [
        "Multidisciplinary engineering expertise",
        "Strong focus on innovation and practicality",
        "Production-ready design approach",
        "Balanced aesthetics and performance",
        "Long-term product success mindset"
      ];

  return (
    <section className="embedded-service-page" dir={isAR ? "rtl" : "ltr"}>

      <div className="site-container">

        <div className="service-main-header">

          <span className="service-label">
            {isAR ? "خدمة التصميم الميكانيكي" : "Mechanical Design Service"}
          </span>

          <h2>
            {isAR ? "تصميم المنتج" : "Product Design"}
          </h2>

          <h3>
            {isAR
              ? "من الفكرة إلى المنتج"
              : "From Concept to Market-Ready Product"}
          </h3>

          <p>
            {isAR
              ? "نحوّل الأفكار إلى منتجات قابلة للتصنيع."
              : "We transform ideas into functional, manufacturable, and market-ready products."}
          </p>

          <p>
            {isAR
              ? "نجمع بين الإبداع والدقة الهندسية."
              : "Our approach combines creativity with engineering precision, ensuring that every concept evolves into a practical and scalable solution."}
          </p>

          <div className="service-main-image">
            <img src={sw1} alt="Product design"/>
          </div>

        </div>

        <div className="service-intro-block">
          <h4>
            {isAR
              ? "الهندسة والابتكار"
              : "Engineering Innovation into Real Products"}
          </h4>
          <p>
            {isAR
              ? "نطوّر منتجات متكاملة."
              : "We develop products that are visually refined, structurally sound, and optimized for production and long-term success."}
          </p>
        </div>

        <div className="service-section">

          <div className="service-section-text">
            <h4>
              {isAR
                ? "مراحل تطوير المنتج"
                : "Product Development Roadmap"}
            </h4>
            <p>
              {isAR
                ? "نضمن انتقالًا سلسًا من الفكرة للإنتاج."
                : "Our structured workflow ensures a smooth transition from concept to production through defined engineering stages."}
            </p>
          </div>

          <div className="service-main-image">
            <img src={sw7} alt="Product design"/>
          </div>

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
                ? "نقدّم منتجات عملية وقابلة للتوسع."
                : "We combine innovation with engineering discipline to deliver products that are practical, scalable, and built to last."}
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={sw6} alt="Product engineering"/>
          </div>

        </div>

        <div className="service-cta">

          <h4>
            {isAR
              ? "جاهز لتحويل فكرتك؟"
              : "Ready to Transform Your Idea into a Product?"}
          </h4>

          <p>
            {isAR
              ? "ابدأ تطوير منتجك معنا."
              : "Partner with Nexus Design Lab to develop innovative, engineered product solutions tailored to your vision."}
          </p>

          <p>
            {isAR
              ? "لننشئ منتج ناجح."
              : "Let’s build products designed for performance and long-term success."}
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              {isAR ? "ابدأ مشروعك" : "Start Your Product Project"}
            </button>

            <button className="secondary-btn">
              {isAR ? "ناقش فكرتك" : "Discuss Your Idea"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}