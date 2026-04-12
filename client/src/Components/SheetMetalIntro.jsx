import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import ep1 from "../assets/images/ep1.png";
import ep2 from "../assets/images/ep2.jpg";
import ep3 from "../assets/images/ep3.webp";
import ep4 from "../assets/images/ep4.png";
import ep5 from "../assets/images/ep5.webp";
import ep6 from "../assets/images/ep6.jpg";

export default function SheetMetalIntro() {

  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR
        ? "التصميم للتصنيع من البداية"
        : "Design for Manufacturing from Day One",
      text: isAR
        ? [
            "يتطلب تصميم الصفائح المعدنية أكثر من الشكل. نأخذ بعين الاعتبار عمليات التصنيع والتجميع والأداء.",
            "يتم تطوير كل تصميم بدقة مع مراعاة السماكات والانحناءات واختيار المواد."
          ]
        : [
            "Successful sheet metal products require more than geometry. We design with full awareness of fabrication constraints, assembly processes, and structural performance to ensure smooth production and long-term durability.",
            "Each design is developed with accurate tolerances, bend allowances, and material selection tailored to the application."
          ],
      bullets: isAR
        ? [
            "أغلفة وأنظمة إلكترونية",
            "خزائن ولوحات صناعية",
            "هياكل ودعامات",
            "حوامل ومثبتات",
            "أنظمة جاهزة للتجميع"
          ]
        : [
            "Enclosures and chassis for electronic systems",
            "Industrial cabinets and control panels",
            "Structural frames and mechanical supports",
            "Brackets, mounts, and precision components",
            "Assembly-ready sheet metal systems"
          ],
      image: ep2,
      alt: isAR ? "تصميم التصنيع" : "Design for manufacturing sheet metal"
    },

    {
      title: isAR
        ? "القوة الهيكلية والتحسين"
        : "Structural Integrity & Optimization",
      text: isAR
        ? [
            "نحلل الأحمال والاهتزازات لضمان الثبات.",
            "نوازن بين القوة والوزن والتكلفة."
          ]
        : [
            "We analyze mechanical loads, vibration, and environmental conditions to ensure structural stability and operational reliability.",
            "This ensures every product balances strength, weight, and cost-effectiveness."
          ],
      bullets: isAR
        ? [
            "تحسين سماكة المواد",
            "تعزيز الهياكل",
            "تصميم الوصلات",
            "إدارة الحرارة",
            "مقاومة التآكل"
          ]
        : [
            "Material thickness optimization",
            "Reinforcement strategies and rib structures",
            "Fastening and joint design",
            "Thermal and airflow considerations",
            "Corrosion resistance planning"
          ],
      image: ep3,
      alt: isAR ? "القوة" : "Structural integrity"
    },

    {
      title: isAR
        ? "توثيق جاهز للإنتاج"
        : "Production-Ready Documentation",
      text: isAR
        ? [
            "نوفّر ملفات كاملة تدعم الإنتاج.",
            "نقلل الأخطاء ونزيد الكفاءة."
          ]
        : [
            "To support seamless manufacturing, we provide complete documentation packages that reduce fabrication errors and improve production efficiency.",
            "Our goal is to ensure every design transitions smoothly from engineering to fabrication."
          ],
      bullets: isAR
        ? [
            "رسومات تصنيع",
            "جداول انحناء",
            "رسومات تجميع",
            "BOM",
            "ملفات CNC"
          ]
        : [
            "Detailed fabrication drawings",
            "Flat patterns and bend tables",
            "Assembly drawings and exploded views",
            "Bill of materials (BOM)",
            "DXF and CNC-ready production files"
          ],
      image: ep4,
      alt: isAR ? "التوثيق" : "Documentation"
    },

    {
      title: isAR
        ? "تكامل الأنظمة"
        : "Integration with Electronic & Mechanical Systems",
      text: isAR
        ? [
            "نضمن التكامل مع الأنظمة الأخرى.",
            "نعمل مع فرق متعددة التخصصات."
          ]
        : [
            "Sheet metal components often form the backbone of larger systems. We coordinate closely with electronics and embedded teams to ensure precise fitment and reliable system integration.",
            "This multidisciplinary collaboration allows us to deliver fully integrated industrial solutions."
          ],
      bullets: isAR
        ? [
            "تثبيت PCB",
            "تنظيم الأسلاك",
            "أنظمة تبريد",
            "تجميع ميكانيكي",
            "تكامل النظام"
          ]
        : [
            "PCB fitment and mounting support",
            "Wiring harness accommodation",
            "Cooling system integration",
            "Mechanical assembly coordination",
            "System-level enclosure alignment"
          ],
      image: ep5,
      alt: isAR ? "التكامل" : "Integration"
    },

    {
      title: isAR
        ? "أداء صناعي"
        : "Built for Industrial Performance",
      text: isAR
        ? [
            "تصاميمنا مخصصة للبيئات الواقعية.",
            "نركز على المتانة والكفاءة."
          ]
        : [
            "Our sheet metal solutions are engineered for demanding real-world environments where durability, manufacturability, and operational efficiency are essential.",
            "We focus on designs that are practical to fabricate, easy to assemble, and reliable over long-term use."
          ],
      bullets: isAR
        ? [
            "تصميم صناعي",
            "تصنيع فعال",
            "موثوقية",
            "حلول اقتصادية",
            "جاهزية للتطبيق"
          ]
        : [
            "Industrial-grade design approach",
            "Optimized fabrication workflow",
            "Reliable long-term performance",
            "Cost-efficient structural solutions",
            "Real-world deployment readiness"
          ],
      image: ep6,
      alt: isAR ? "الأداء" : "Performance"
    }
  ];

  const whyChooseUs = isAR
    ? [
        "خبرة تصنيع عملية",
        "تصميم ميكانيكي متقدم",
        "جاهزية للإنتاج",
        "حلول متينة",
        "انتقال سلس للإنتاج"
      ]
    : [
        "Practical fabrication knowledge",
        "Advanced mechanical design expertise",
        "Production-ready engineering workflow",
        "Durable and cost-efficient solutions",
        "Smooth transition from CAD to manufacturing"
      ];

  return (
    <section className="embedded-service-page" dir={isAR ? "rtl" : "ltr"}>

      <div className="site-container">

        <div className="service-main-header">

          <span className="service-label">
            {isAR ? "خدمة التصميم الميكانيكي" : "Mechanical Design Service"}
          </span>

          <h2>
            {isAR ? "تصميم الصفائح المعدنية" : "Sheet Metal Design"}
          </h2>

          <h3>
            {isAR
              ? "هندسة دقيقة للتطبيقات الصناعية"
              : "Precision Sheet Metal Engineering for Industrial Applications"}
          </h3>

          <p>
            {isAR
              ? "نقدّم خدمات تصميم احترافية."
              : "At our mechanical design lab, we provide professional sheet metal design services focused on strength, manufacturability, and cost efficiency."}
          </p>

          <p>
            {isAR
              ? "نطوّر تصاميم جاهزة للإنتاج."
              : "Our mechanical engineering team develops production-ready designs optimized for fabrication processes such as laser cutting, CNC punching, bending, and welding. We don’t just design parts — we engineer sheet metal solutions that perform reliably in real-world industrial environments."}
          </p>

          <div className="service-main-image">
            <img src={ep1} alt="Sheet metal design" />
          </div>

        </div>

        <div className="service-intro-block">
          <h4>
            {isAR ? "تصميم للإنتاج" : "Engineering for Real Production"}
          </h4>
          <p>
            {isAR
              ? "نطوّر أنظمة جاهزة للتصنيع."
              : "We develop sheet metal systems that combine structural strength, fabrication efficiency, and production-ready detailing for industrial applications."}
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

            <h4>{isAR ? "لماذا Nexus Design Lab؟" : "Why Nexus Design Lab?"}</h4>

            <p>
              {isAR
                ? "نقدّم حلول هندسية متكاملة."
                : "We combine practical fabrication knowledge with advanced mechanical design expertise. Our sheet metal solutions are engineered for durability, manufacturability, and long-term operational performance."}
            </p>

            <ul>
              {whyChooseUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={ep6} alt="Sheet metal engineering team" />
          </div>

        </div>

        <div className="service-cta">

          <h4>
            {isAR
              ? "تحتاج حل صفائح معدنية؟"
              : "Need a Production-Ready Sheet Metal Solution?"}
          </h4>

          <p>
            {isAR
              ? "ابدأ مشروعك معنا."
              : "Partner with Nexus Design Lab to develop precision-engineered sheet metal components tailored to your application."}
          </p>

          <p>
            {isAR
              ? "لنصمم هيكل قوي."
              : "Let’s design structures built for strength, efficiency, and real-world deployment."}
          </p>

          <div className="service-cta-buttons">

            <button type="button" className="primary-btn">
              {isAR ? "ابدأ مشروعك" : "Start Your Mechanical Project"}
            </button>

            <button type="button" className="secondary-btn">
              {isAR ? "ناقش التطبيق" : "Discuss Your Application"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}