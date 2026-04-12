import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import e1 from "../assets/images/e1.jpg";
import e2 from "../assets/images/e2.jpg";
import e3 from "../assets/images/e3.jpg";
import e4 from "../assets/images/e4.png";
import e5 from "../assets/images/e5.webp";
import e6 from "../assets/images/e6.webp";

export default function EnclosureIntro() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR
        ? "نهج تصميم قائم على الهندسة"
        : "Engineering-Driven Design Approach",
      text: isAR
        ? [
            "يجب أن يدمج الغلاف الفعّال بين القوة الميكانيكية وإدارة الحرارة وسهولة الوصول.",
            "يقوم فريقنا بتطوير حلول مخصصة حسب وظيفة المنتج وبيئة التشغيل."
          ]
        : [
            "An effective enclosure must integrate mechanical strength, thermal management, and system accessibility.",
            "Our team develops solutions tailored to the product’s function and operating environment."
          ],
      bullets: isAR
        ? [
            "أغلفة للأجهزة الصناعية والإلكترونية",
            "لوحات تحكم وهياكل الأجهزة",
            "تصاميم مقاومة للعوامل الجوية",
            "حلول تثبيت مختلفة",
            "أغلفة مخصصة لأنظمة الأتمتة"
          ]
        : [
            "Industrial and electronic device enclosures",
            "Control panels and instrument housings",
            "Weather-resistant and IP-rated designs",
            "Wall-mounted, portable, and rack-mounted solutions",
            "Custom enclosures for automation and IoT systems"
          ],
      image: e2,
      alt: isAR ? "تصميم الغلاف" : "Engineering enclosure design"
    },

    {
      title: isAR
        ? "الأداء والحماية"
        : "Performance & Protection Considerations",
      text: isAR
        ? [
            "نصمم الأغلفة لضمان أعلى درجات الحماية والموثوقية.",
            "كل تصميم يعزز أداء النظام."
          ]
        : [
            "We engineer enclosures to ensure maximum protection and long-term reliability.",
            "Each design enhances system performance instead of limiting it."
          ],
      bullets: isAR
        ? [
            "مقاومة الصدمات",
            "إدارة الحرارة",
            "تنظيم الكابلات",
            "حماية EMI",
            "العزل البيئي"
          ]
        : [
            "Impact resistance and structural reinforcement",
            "Thermal management and airflow",
            "Cable routing and accessibility",
            "EMI shielding",
            "Environmental sealing"
          ],
      image: e3,
      alt: isAR ? "الحماية" : "Enclosure protection"
    },

    {
      title: isAR
        ? "مصمم للتصنيع"
        : "Designed for Manufacturing",
      text: isAR
        ? [
            "نراعي تقنيات التصنيع منذ المراحل الأولى.",
            "نضمن انتقالًا سلسًا للإنتاج."
          ]
        : [
            "From early stages, we consider fabrication methods and cost-efficiency.",
            "We ensure a smooth transition from design to production."
          ],
      bullets: isAR
        ? [
            "تصنيع صفائح معدنية",
            "CNC",
            "ألمنيوم",
            "حقن بلاستيك",
            "مواد مركبة"
          ]
        : [
            "Sheet metal fabrication",
            "CNC machining",
            "Aluminum extrusion",
            "Injection molding",
            "Hybrid material assemblies"
          ],
      image: e4,
      alt: isAR ? "التصنيع" : "Manufacturing"
    },

    {
      title: isAR
        ? "تكامل الأنظمة"
        : "Integrated System Compatibility",
      text: isAR
        ? [
            "نضمن التكامل الكامل مع الأنظمة الداخلية.",
            "هذا يقلل الأخطاء ويسرّع التطوير."
          ]
        : [
            "We ensure perfect integration with internal systems including electronics and mechanical components.",
            "This reduces conflicts and accelerates development."
          ],
      bullets: isAR
        ? [
            "دمج PCB",
            "تنظيم الأسلاك",
            "التبريد",
            "الهياكل",
            "الدعم الميكانيكي"
          ]
        : [
            "PCB and power system fitment",
            "Wiring harness organization",
            "Cooling system integration",
            "Mounting structures",
            "Mechanical support alignment"
          ],
      image: e5,
      alt: isAR ? "تكامل" : "Integration"
    },

    {
      title: isAR
        ? "أداء واقعي"
        : "Built for Real-World Performance",
      text: isAR
        ? [
            "تصاميمنا مخصصة للبيئات الواقعية.",
            "نوازن بين الأداء والشكل."
          ]
        : [
            "Our enclosures are designed for real environments, combining durability, usability, and aesthetics.",
            "We create solutions that perform and represent your product professionally."
          ],
      bullets: isAR
        ? [
            "متانة صناعية",
            "تنظيم داخلي",
            "مظهر احترافي",
            "موثوقية",
            "سهولة الصيانة"
          ]
        : [
            "Industrial-grade durability",
            "Optimized internal layout",
            "Professional product appearance",
            "Long-term reliability",
            "Efficient assembly and maintenance"
          ],
      image: e6,
      alt: isAR ? "أداء" : "Performance"
    }
  ];

  const whyChooseUs = isAR
    ? [
        "خبرة هندسية قوية",
        "تركيز على الاستخدام",
        "جاهزية للإنتاج",
        "جودة عالية",
        "تكامل كامل"
      ]
    : [
        "Mechanical and system-level expertise",
        "Strong focus on real-world usability",
        "Production-ready engineering workflow",
        "Durable and high-quality designs",
        "Seamless integration with electronics"
      ];

  return (
    <section className="embedded-service-page" dir={isAR ? "rtl" : "ltr"}>
      <div className="site-container">

        <div className="service-main-header">

          <span className="service-label">
            {isAR ? "خدمة التصميم الميكانيكي" : "Mechanical Design Service"}
          </span>

          <h2>
            {isAR ? "تصميم أغلفة المنتجات" : "Product Enclosure Design"}
          </h2>

          <h3>
            {isAR
              ? "أغلفة عملية ومتينة"
              : "Functional, Durable, and Production-Ready Enclosures"}
          </h3>

          <p>
            {isAR
              ? "نصمم أغلفة تجمع بين القوة وسهولة الاستخدام."
              : "We design product enclosures that combine structural integrity, usability, and refined aesthetics."}
          </p>

          <p>
            {isAR
              ? "نضمن حماية المكونات وسهولة التصنيع."
              : "Our approach goes beyond appearance — we engineer enclosures that protect internal components, support system performance, and ensure smooth manufacturing."}
          </p>

          <div className="service-main-image">
            <img src={e1} alt="" />
          </div>

        </div>

        <div className="service-intro-block">
          <h4>
            {isAR
              ? "مصمم للأداء والحماية"
              : "Engineered for Protection and Performance"}
          </h4>
          <p>
            {isAR
              ? "نطور أغلفة تعزز الأداء والمتانة."
              : "We develop enclosure systems that enhance product performance while ensuring durability, accessibility, and production efficiency."}
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

            <h4>{isAR ? "لماذا Nexus Design Lab؟"  : "Why Nexus Design Lab?"}</h4>

            <p>
              {isAR
                ? "نصمم أغلفة عملية واحترافية."
                : "We combine mechanical engineering expertise with system-level understanding to design enclosures that are practical, durable, and market-ready."}
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={e6} alt="" />
          </div>

        </div>

        <div className="service-cta">

          <h4>
            {isAR
              ? "جاهز لتصميم غلاف منتجك؟"
              : "Ready to Develop a Professional Product Enclosure?"}
          </h4>

          <p>
            {isAR
              ? "نصمم أغلفة احترافية مخصصة."
              : "Partner with Nexus Design Lab to design enclosures engineered for protection, performance, and production efficiency."}
          </p>

          <p>
            {isAR
              ? "لننشئ الحل المناسب لمنتجك."
              : "Let’s create a housing solution tailored to your product."}
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              {isAR ? "ابدأ مشروعك" : "Start Your Enclosure Design Project"}
            </button>

            <button className="secondary-btn">
              {isAR ? "ناقش منتجك" : "Discuss Your Product"}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}