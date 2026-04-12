import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import ppp1 from "../assets/images/ppp1.jpg";
import ppp2 from "../assets/images/ppp2.webp";
import ppp3 from "../assets/images/ppp3.jpg";
import ppp4 from "../assets/images/ppp4.jpg";
import ppp5 from "../assets/images/ppp5.webp";
import ppp6 from "../assets/images/ppp6.png";

export default function IotIntro() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR ? "تطوير الأجهزة الذكية" : "Smart Device Development",
      text: isAR
        ? [
            "نقوم بتصميم أجهزة طرفية ذكية تعمل بشكل موثوق في البيئات الواقعية.",
            "يتم تصميم كل جهاز للاستخدام طويل الأمد مع التركيز على الكفاءة والمتانة."
          ]
        : [
            "We design intelligent edge devices that operate reliably in real-world environments.",
            "Each device is engineered for long-term deployment with strong focus on efficiency and durability."
          ],
      bullets: isAR
        ? [
            "تصميم PCB وأنظمة مدمجة مخصصة",
            "دمج الحساسات وجمع البيانات",
            "أنظمة منخفضة الطاقة تعمل بالبطارية",
            "أغلفة صناعية",
            "برمجيات آمنة وإدارة الأجهزة"
          ]
        : [
            "Custom PCB and embedded system design",
            "Sensor integration and data acquisition",
            "Low-power and battery-operated systems",
            "Industrial-grade enclosures",
            "Secure firmware and device management"
          ],
      image: ppp2
    },

    {
      title: isAR ? "الاتصال والتواصل" : "Connectivity & Communication",
      text: isAR
        ? [
            "الاتصال الموثوق هو أساس أي نظام IoT.",
            "نقوم بدمج تقنيات اتصال قصيرة وطويلة المدى."
          ]
        : [
            "Reliable communication is the foundation of any IoT ecosystem.",
            "We integrate both short-range and long-range communication technologies."
          ],
      bullets: isAR
        ? [
            "اتصال Wi-Fi و Ethernet",
            "وحدات GSM / LTE / NB-IoT",
            "أنظمة LoRa",
            "بروتوكولات CAN و RS-485",
            "أنظمة GPS"
          ]
        : [
            "Wi-Fi and Ethernet connectivity",
            "GSM / LTE / NB-IoT modules",
            "LoRa communication systems",
            "CAN and RS-485 protocols",
            "GPS tracking systems"
          ],
      image: ppp3
    },

    {
      title: isAR ? "تكامل السحابة والبيانات" : "Cloud & Data Integration",
      text: isAR
        ? [
            "نربط الأجهزة بالسحابة لتمكين المراقبة والتحليل.",
            "نحوّل البيانات إلى معلومات قابلة للاستخدام."
          ]
        : [
            "We connect field devices to cloud platforms to enable real-time monitoring and analytics.",
            "Our solutions transform raw data into actionable insights."
          ],
      bullets: isAR
        ? [
            "نقل بيانات آمن",
            "لوحات تحكم فورية",
            "تحديثات عن بعد",
            "تحليل البيانات",
            "تكامل API"
          ]
        : [
            "Secure data transmission",
            "Real-time dashboards",
            "Remote firmware updates",
            "Data logging and analytics",
            "API integration with enterprise systems"
          ],
      image: ppp4
    },

    {
      title: isAR ? "الأتمتة والتحكم الذكي" : "Automation & Intelligent Control",
      text: isAR
        ? [
            "نقوم ببناء أنظمة قادرة على اتخاذ القرار.",
            "نهدف لتحسين الكفاءة وتقليل التدخل اليدوي."
          ]
        : [
            "We go beyond monitoring by building intelligent systems capable of autonomous decision-making.",
            "Our systems are designed to improve efficiency and reduce manual intervention."
          ],
      bullets: isAR
        ? [
            "منطق تحكم تلقائي",
            "أنظمة تنبيه",
            "صيانة تنبؤية",
            "معالجة AI",
            "إدارة عن بعد"
          ]
        : [
            "Automated control logic",
            "Alert and notification systems",
            "Predictive maintenance",
            "AI-enhanced processing",
            "Remote system management"
          ],
      image: ppp5
    },

    {
      title: isAR
        ? "الأمان وقابلية التوسع والموثوقية"
        : "Security, Scalability & Reliability",
      text: isAR
        ? [
            "نصمم الأنظمة مع التركيز على الأمان والتوسع.",
            "نطور حلول تنمو مع عملك."
          ]
        : [
            "All IoT systems are designed with strong emphasis on security, scalability, and long-term reliability.",
            "We build solutions that can grow with your business and operate safely in industrial environments."
          ],
      bullets: isAR
        ? [
            "أمن سيبراني",
            "بنية قابلة للتوسع",
            "إدارة الأجهزة",
            "معايير صناعية",
            "إدارة الطاقة"
          ]
        : [
            "Cybersecurity best practices",
            "Scalable architecture",
            "Device lifecycle management",
            "Industrial reliability standards",
            "Efficient power management"
          ],
      image: ppp6
    }
  ];

  const whyChooseUs = isAR
    ? [
        "تطوير IoT متكامل",
        "خبرة بالعتاد والبرمجيات",
        "خبرة صناعية",
        "أنظمة آمنة وقابلة للتوسع",
        "شراكة طويلة الأمد"
      ]
    : [
        "Full-stack IoT development capability",
        "Integrated hardware and firmware expertise",
        "Experience in industrial systems",
        "Secure and scalable architecture",
        "Long-term technical partnership"
      ];

  return (
    <section className="embedded-service-page" dir={isAR ? "rtl" : "ltr"}>
      <div className="site-container">

        <div className="service-main-header">

          <span className="service-label">
            {isAR ? "خدمة IoT" : "IoT Engineering Service"}
          </span>

          <h2>
            {isAR ? "حلول IoT الذكية" : "IoT Smart Solutions"}
          </h2>

          <h3>
            {isAR
              ? "أنظمة ذكية مترابطة"
              : "Intelligent Connected Systems Built for the Real World"}
          </h3>

          <p>
            {isAR
              ? "نصمم حلول IoT تربط الأجهزة والأنظمة."
              : "We design and develop secure, scalable IoT solutions that connect devices, systems, and data into intelligent platforms."}
          </p>

          <p>
            {isAR
              ? "نقوم بدمج العتاد والبرمجيات لإنشاء أنظمة ذكية."
              : "Our engineering team integrates hardware, embedded software, communication technologies, and cloud infrastructure to create reliable smart systems for industrial and commercial applications."}
          </p>

          <div className="service-main-image">
            <img src={ppp1} alt="" />
          </div>

        </div>

        <div className="service-intro-block">
          <h4>
            {isAR ? "بنية IoT متكاملة" : "End-to-End IoT Architecture"}
          </h4>
          <p>
            {isAR
              ? "نقدم أنظمة IoT كاملة."
              : "We deliver complete IoT ecosystems that combine smart devices, connectivity, cloud platforms, and intelligent control systems."}
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
              <img src={section.image} alt={section.title} />
            </div>

          </div>
        ))}

        <div className="service-highlight-box">

          <div className="service-highlight-content">

            <h4>{isAR ? "لماذا Nexus Design Lab؟" : "Why Nexus Design Lab?"}</h4>

            <p>
              {isAR
                ? "نحن لا نربط الأجهزة فقط، بل نبني أنظمة ذكية."
                : "We don’t just connect devices — we build intelligent ecosystems that enable smarter decision-making."}
            </p>

            <ul>
              {whyChooseUs.map((item,index)=>(
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={ppp6} alt="" />
          </div>

        </div>

        <div className="service-cta">

          <h4>
            {isAR
              ? "جاهز لبناء نظام ذكي؟"
              : "Ready to Build a Connected Intelligent System?"}
          </h4>

          <p>
            {isAR
              ? "صمم نظام IoT مخصص مع فريقنا."
              : "Partner with Nexus Design Lab to design scalable IoT solutions tailored to your operational needs."}
          </p>

          <p>
            {isAR
              ? "حوّل بياناتك إلى أنظمة ذكية."
              : "Let’s transform your data into intelligent systems."}
          </p>

          <div className="service-cta-buttons">

            <button className="primary-btn">
              {isAR ? "ابدأ مشروعك" : "Start Your IoT Project"}
            </button>

            <button className="secondary-btn">
              {isAR ? "ناقش نظامك" : "Discuss Your System"}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}