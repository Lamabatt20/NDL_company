import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import ee1 from "../assets/images/ee1.jpg";
import ee2 from "../assets/images/ee2.avif";
import ee3 from "../assets/images/ee3.jpg";
import ee4 from "../assets/images/ee4.jpg";
import ee5 from "../assets/images/ee5.webp";
import ee6 from "../assets/images/ee6.png";

export default function SteelIntro() {

  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR
        ? "الهندسة لضمان القوة الهيكلية"
        : "Engineering for Structural Integrity",
      text: isAR
        ? [
            "تتطلب الهياكل الفولاذية تحليلًا دقيقًا لضمان الأداء.",
            "نطبّق مبادئ هندسية لإنشاء أنظمة مستقرة."
          ]
        : [
            "Steel structures require detailed analysis and careful planning to ensure performance under real-world conditions.",
            "We apply engineering principles to create stable and efficient structural systems."
          ],
      bullets: isAR
        ? [
            "هياكل صناعية ودعامات",
            "منصات معدات",
            "أنظمة تركيب",
            "أساسات الماكينات",
            "تجميعات مخصصة"
          ]
        : [
            "Industrial frames and support structures",
            "Equipment platforms and heavy-duty bases",
            "Structural racks and mounting systems",
            "Machinery foundations",
            "Custom load-bearing assemblies"
          ],
      image: ee2,
      alt: isAR ? "هياكل فولاذية" : "Steel structural engineering"
    },

    {
      title: isAR
        ? "تحليل الأحمال والأداء"
        : "Load Analysis & Performance Considerations",
      text: isAR
        ? [
            "نأخذ الأحمال بعين الاعتبار لضمان الأداء.",
            "نركّز على السلامة والمتانة."
          ]
        : [
            "Our design process accounts for static and dynamic loads, ensuring long-term performance.",
            "Each structure is optimized for safety and durability."
          ],
      bullets: isAR
        ? [
            "تحليل الأحمال",
            "تحليل الاهتزاز",
            "العوامل البيئية",
            "تعزيز الهياكل",
            "حسابات الأمان"
          ]
        : [
            "Static and dynamic load evaluation",
            "Vibration and fatigue analysis",
            "Environmental impact considerations",
            "Reinforcement strategies",
            "Safety factor calculations"
          ],
      image: ee3,
      alt: isAR ? "تحليل الأحمال" : "Load analysis"
    },

    {
      title: isAR
        ? "جاهزية التصنيع والتركيب"
        : "Fabrication & Installation Ready",
      text: isAR
        ? [
            "نصمّم مع مراعاة التصنيع والتركيب.",
            "نضمن تنسيقًا سلسًا."
          ]
        : [
            "We develop steel structures with full awareness of manufacturing and installation processes.",
            "Our designs ensure smooth coordination between engineering and field teams."
          ],
      bullets: isAR
        ? [
            "رسومات تفصيلية",
            "مواصفات اللحام",
            "توزيع البراغي",
            "توثيق المواد",
            "إرشادات التركيب"
          ]
        : [
            "Detailed structural drawings",
            "Welding specifications",
            "Bolt and fastening layouts",
            "Material documentation",
            "Installation guidelines"
          ],
      image: ee4,
      alt: isAR ? "التصنيع" : "Fabrication"
    },

    {
      title: isAR
        ? "دعم الأنظمة المتكاملة"
        : "Integrated System Support",
      text: isAR
        ? [
            "الهياكل جزء من نظام أكبر.",
            "نضمن التكامل مع الأنظمة الأخرى."
          ]
        : [
            "Steel structures serve as the backbone of larger systems.",
            "We ensure full integration with electrical and mechanical components."
          ],
      bullets: isAR
        ? [
            "دمج لوحات التحكم",
            "تنظيم الكابلات",
            "تثبيت المعدات",
            "سهولة الصيانة",
            "تكامل الأمان"
          ]
        : [
            "Control panel integration",
            "Cable routing solutions",
            "Equipment mounting",
            "Maintenance access design",
            "Safety system integration"
          ],
      image: ee5,
      alt: isAR ? "التكامل" : "Integration"
    },

    {
      title: isAR
        ? "موثوقية صناعية"
        : "Built for Industrial Reliability",
      text: isAR
        ? [
            "تصاميمنا مخصصة للبيئات الصناعية.",
            "نركّز على المتانة."
          ]
        : [
            "Our steel designs are engineered for demanding industrial environments.",
            "We deliver solutions focused on durability and long-term performance."
          ],
      bullets: isAR
        ? [
            "تصميم ثقيل",
            "متانة عالية",
            "توافق مع المعايير",
            "موثوقية طويلة",
            "تصنيع فعال"
          ]
        : [
            "Heavy-duty structural design",
            "Industrial-grade durability",
            "Compliance with standards",
            "Long-term reliability",
            "Efficient fabrication approach"
          ],
      image: ee6,
      alt: isAR ? "الأداء" : "Performance"
    }
  ];

  const whyChooseUs = isAR
    ? [
        "خبرة هندسية قوية",
        "معرفة تصنيع",
        "تصاميم آمنة",
        "هياكل فعالة",
        "حلول طويلة الأمد"
      ]
    : [
        "Strong structural engineering expertise",
        "Practical fabrication knowledge",
        "Safe and compliant designs",
        "Efficient and scalable structures",
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
            {isAR ? "تصميم الهياكل الفولاذية" : "Steel Structure Design"}
          </h2>

          <h3>
            {isAR
              ? "هندسة قوية وموثوقة"
              : "Heavy-Duty Structural Engineering Built for Strength and Reliability"}
          </h3>

          <p>
            {isAR
              ? "نصمّم هياكل فولاذية قوية."
              : "We design robust steel structures engineered to withstand demanding operational and environmental conditions."}
          </p>

          <p>
            {isAR
              ? "حلول للأنظمة الصناعية."
              : "Our engineering team develops solutions for industrial facilities, equipment platforms, and infrastructure applications."}
          </p>

          <div className="service-main-image">
            <img src={ee1} alt="Steel structures"/>
          </div>

        </div>

        <div className="service-intro-block">
          <h4>
            {isAR ? "هندسة للقوة" : "Engineered for Strength and Safety"}
          </h4>
          <p>
            {isAR
              ? "نطوّر هياكل آمنة."
              : "We deliver steel structures designed for performance, safety, and long-term operational reliability."}
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
                ? "نقدّم حلول فولاذية متكاملة."
                : "We combine structural engineering expertise with practical fabrication knowledge to deliver steel designs that are safe, efficient, and production-ready."}
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={ee6} alt="Steel engineering"/>
          </div>

        </div>

        <div className="service-cta">

          <h4>
            {isAR
              ? "تحتاج هيكل فولاذي؟"
              : "Need a Reliable Steel Structural Solution?"}
          </h4>

          <p>
            {isAR
              ? "ابدأ مشروعك معنا."
              : "Partner with Nexus Design Lab to develop strong, engineered steel structures tailored to your requirements."}
          </p>

          <p>
            {isAR
              ? "لنصمّم نظام قوي."
              : "Let’s build systems designed for durability and long-term success."}
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              {isAR ? "ابدأ مشروعك" : "Start Your Steel Project"}
            </button>

            <button className="secondary-btn">
              {isAR ? "ناقش الهيكل" : "Discuss Your Structure"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}