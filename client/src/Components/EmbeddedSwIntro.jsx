import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpeg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";

export default function EmbeddedSwIntro() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR
        ? "أنظمة المتحكمات والمعالجات"
        : "Microcontroller & Processor-Based Systems",
      text: isAR
        ? [
            "نقوم بتطوير برمجيات مدمجة لمجموعة واسعة من المنصات، مع ضمان الأداء والقابلية للتوسع وسهولة الصيانة طويلة الأمد في الأنظمة الصناعية والسيارات وإنترنت الأشياء."
          ]
        : [
            "We develop firmware for a wide range of platforms, ensuring performance, scalability, and long-term maintainability across industrial, automotive, IoT, and intelligent systems."
          ],
      bullets: isAR
        ? [
            "متحكمات ARM Cortex",
            "STM32 و ESP و NXP و Microchip و TI وغيرها",
            "أنظمة متعددة المعالجات",
            "أنظمة RTOS و bare-metal"
          ]
        : [
            "ARM Cortex-based MCUs",
            "STM32, ESP series, NXP, Microchip, TI, and other industrial-grade controllers",
            "Multi-core and distributed control systems",
            "RTOS-based and bare-metal architectures"
          ],
      image: p2,
      alt: isAR
        ? "أنظمة المتحكمات"
        : "Microcontroller and processor-based systems"
    },

    {
      title: isAR
        ? "البرمجة الزمن الحقيقي منخفضة المستوى"
        : "Real-Time & Low-Level Programming",
      text: isAR
        ? [
            "نطوّر برمجيات منخفضة المستوى للتطبيقات الحساسة زمنيًا حيث يكون الأداء المستقر أمرًا أساسيًا.",
            "نضمن تشغيلًا ثابتًا حتى في البيئات الواقعية الصعبة."
          ]
        : [
            "Our engineering team develops robust low-level firmware for time-critical applications where deterministic behavior and system stability are essential.",
            "We ensure stable and predictable operation even in demanding real-world environments."
          ],
      bullets: isAR
        ? [
            "جدولة المهام الزمنية",
            "تطوير الدرايفرات (UART, SPI, I2C, CAN)",
            "Bootloaders وآليات التحديث",
            "تحسين الذاكرة والطاقة",
            "تصميم HAL"
          ]
        : [
            "Real-time task scheduling and interrupt-driven systems",
            "Peripheral driver development (UART, SPI, I2C, CAN, ADC, PWM, Ethernet)",
            "Bootloaders and firmware update mechanisms",
            "Memory optimization and power management strategies",
            "Hardware abstraction layer (HAL) design"
          ],
      image: p3,
      alt: isAR ? "برمجة زمن حقيقي" : "Real-time programming"
    },

    {
      title: isAR
        ? "الاتصال والربط"
        : "Communication & Connectivity Integration",
      text: isAR
        ? [
            "نقوم بتطوير أنظمة اتصال موثوقة تتيح التكامل بين العتاد والأجهزة والأنظمة السحابية."
          ]
        : [
            "We implement reliable communication stacks and connectivity protocols that enable seamless interaction between hardware, external devices, and cloud-based platforms."
          ],
      bullets: isAR
        ? [
            "CAN و CAN-FD",
            "RS-485 و Modbus",
            "TCP/IP و Ethernet",
            "Wi-Fi و Bluetooth و GSM",
            "GPS وأنظمة الحساسات"
          ]
        : [
            "CAN and CAN-FD",
            "RS-485 and Modbus",
            "TCP/IP and Ethernet-based systems",
            "Wireless communication (Wi-Fi, Bluetooth, GSM, LoRa)",
            "GPS and sensor data acquisition systems"
          ],
      image: p4,
      alt: isAR ? "الاتصال" : "Connectivity"
    },

    {
      title: isAR
        ? "تكامل الأنظمة"
        : "System-Level Integration",
      text: isAR
        ? [
            "يتم تطوير البرمجيات المدمجة بالتنسيق مع فرق العتاد والميكانيك لضمان التكامل الكامل.",
            "نضمن عملية تطوير منظمة تدعم الاختبار والصيانة."
          ]
        : [
            "Embedded software at Nexus Design Lab is developed in close coordination with hardware and mechanical teams to ensure complete system alignment.",
            "Our structured development process supports integration, validation, documentation, and long-term maintainability."
          ],
      bullets: isAR
        ? [
            "تطوير متكامل Hardware/Software",
            "دمج الحساسات",
            "خوارزميات التحكم",
            "معالجة AI على الحافة",
            "اختبار الأداء"
          ]
        : [
            "Hardware-software co-development",
            "Sensor integration and calibration",
            "Control algorithms and automation logic",
            "AI-enabled edge processing",
            "Field testing and performance validation"
          ],
      image: p5,
      alt: isAR ? "تكامل الأنظمة" : "System integration"
    }
  ];

  const whyChooseUs = isAR
    ? [
        "فريق متخصص بالأنظمة المدمجة",
        "خبرة قوية بالأنظمة الصناعية",
        "تكامل مع تصميم PCB والميكانيك",
        "منهجية تطوير منظمة",
        "شراكة طويلة الأمد"
      ]
    : [
        "Dedicated embedded engineering team",
        "Strong experience in industrial and intelligent systems",
        "Seamless integration with PCB and mechanical design",
        "Structured development workflow",
        "Long-term technical partnership approach"
      ];

  return (
    <section className="embedded-service-page" dir={isAR ? "rtl" : "ltr"}>
      <div className="site-container">
        <div className="service-main-header">
          <span className="service-label">
            {isAR ? "خدمة الأنظمة المدمجة" : "Embedded Engineering Service"}
          </span>

          <h2>
            {isAR
              ? "تطوير البرمجيات المدمجة"
              : "Embedded Software Development"}
          </h2>

          <h3>
            {isAR
              ? "برمجيات موثوقة للأداء الواقعي"
              : "Reliable Firmware Engineered for Real-World Performance"}
          </h3>

          <p>
            {isAR
              ? "نقوم بتطوير برمجيات مدمجة لأنظمة إلكترونية ذكية وعالية الأداء."
              : "At our Electronics Design Lab, we develop embedded software that powers intelligent, high-performance electronic systems."}
          </p>

          <p>
            {isAR
              ? "نصمم أنظمة تعمل بثبات في البيئات الواقعية."
              : "We build embedded systems that operate reliably under real-world conditions — not just in controlled lab environments."}
          </p>

          <div className="service-main-image">
            <img src={p1} alt="" />
          </div>
        </div>

        <div className="service-intro-block">
          <h4>
            {isAR ? "قدراتنا الأساسية" : "Core Development Capabilities"}
          </h4>
          <p>
            {isAR
              ? "نقدم حلول برمجية تجمع الأداء والموثوقية."
              : "We deliver embedded firmware solutions that combine performance, reliability, connectivity, and long-term maintainability."}
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
            <h4>
              {isAR ? "لماذا Nexus Design Lab؟"  : "Why Nexus Design Lab?"}
            </h4>

            <p>
              {isAR
                ? "نطور برمجيات موثوقة تشكل أساس النظام."
                : "We engineer firmware that becomes the reliable core of your product."}
            </p>

            <ul>
              {whyChooseUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="service-highlight-image">
            <img src={p5} alt="" />
          </div>
        </div>

        <div className="service-cta">
          <h4>
            {isAR
              ? "جاهز لتطوير نظامك؟"
              : "Ready to Power Your Hardware with Intelligent Firmware?"}
          </h4>

          <p>
            {isAR
              ? "تعاون معنا لبناء أنظمة مدمجة قوية."
              : "Partner with our embedded engineering team to develop scalable software."}
          </p>

          <p>
            {isAR
              ? "لنصمم أنظمة موثوقة وقابلة للتوسع."
              : "Let’s build embedded systems designed for reliability and long-term success."}
          </p>

          <div className="service-cta-buttons">
            <button type="button" className="primary-btn">
              {isAR ? "ابدأ مشروعك" : "Start Your Embedded Project"}
            </button>

            <button type="button" className="secondary-btn">
              {isAR ? "استشارة تقنية" : "Request a Technical Consultation"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}