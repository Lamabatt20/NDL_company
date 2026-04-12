import React from "react";
import "./EmbeddedServiceIntro.css";
import { useLanguage } from "../context/LanguageContext";

import mcuImg from "../assets/images/pcb-mcu-processors.png";
import systemDesignImg from "../assets/images/pcb-complex-system.png";
import powerProtectionImg from "../assets/images/pcb-power-protection.png";
import manufacturingImg from "../assets/images/pcb-manufacturing.png";
import developmentImg from "../assets/images/pcb-development.png";
import whyImg from "../assets/images/mm.png";

export default function PcbSchematicIntro() {

  const { language } = useLanguage();
  const isAR = language === "ar";

  const sections = [
    {
      title: isAR
        ? "دمج المتحكمات والمعالجات المتقدمة"
        : "Advanced MCU & Processor Integration",
      text: isAR
        ? [
            "نقوم بتصميم أنظمة تعتمد على مجموعة واسعة من المتحكمات والمعالجات مع تحقيق التوازن بين الأداء والتكلفة."
          ]
        : [
            "We design systems based on a wide range of microcontrollers and processors, ensuring the right balance between performance, availability, lifecycle, and cost-efficiency."
          ],
      bullets: isAR
        ? [
            "متحكمات ARM Cortex",
            "STM32 و ESP و NXP و Microchip و TI",
            "متحكمات صناعية وسيارات",
            "أنظمة متعددة المعالجات"
          ]
        : [
            "ARM Cortex-based MCUs",
            "STM32, ESP series, NXP, Microchip, and TI platforms",
            "Industrial and automotive-grade controllers",
            "Multi-processor and distributed control systems"
          ],
      image: mcuImg,
      alt: isAR ? "دمج المعالجات" : "MCU and processor integration"
    },

    {
      title: isAR
        ? "تصميم الأنظمة المعقدة"
        : "Complex System Design",
      text: isAR
        ? [
            "نطوّر مخططات لأنظمة إلكترونية معقدة مع تكامل كامل بين جميع الأجزاء.",
            "نضمن عمل جميع الأنظمة الفرعية معًا بشكل متكامل."
          ]
        : [
            "Our team develops schematics for complex electronic systems with strong architectural integration across all functional blocks.",
            "We ensure that every subsystem works cohesively within the complete system architecture."
          ],
      bullets: isAR
        ? [
            "أنظمة رقمية متعددة الطبقات",
            "تصاميم مختلطة (تماثلي + رقمي)",
            "واجهات اتصال CAN و RS-485 و UART و SPI و I2C و Ethernet",
            "إدارة الطاقة",
            "دمج الحساسات",
            "أنظمة IoT و AI"
          ]
        : [
            "Multi-layer high-speed digital systems",
            "Mixed-signal designs (analog + digital integration)",
            "Communication interfaces such as CAN, RS-485, UART, SPI, I2C, and Ethernet",
            "Power management and wide-input industrial power stages",
            "Sensor integration and signal conditioning circuits",
            "AI-enabled and IoT-connected hardware platforms"
          ],
      image: systemDesignImg,
      alt: isAR ? "أنظمة معقدة" : "Complex electronic system design"
    },

    {
      title: isAR
        ? "هندسة الطاقة والحماية"
        : "Power & Protection Engineering",
      text: isAR
        ? [
            "نقوم بتصميم أنظمة طاقة موثوقة تعمل بكفاءة ضمن نطاقات جهد مختلفة.",
            "كل تصميم يركز على الاستقرار والحماية."
          ]
        : [
            "We design reliable power stages that operate efficiently across wide voltage ranges while maintaining safety, durability, and compliance.",
            "Every schematic is engineered with long-term stability and protection in mind."
          ],
      bullets: isAR
        ? [
            "حماية من زيادة التيار والجهد",
            "حماية من عكس القطبية",
            "فلترة EMI/EMC",
            "إدارة الحرارة",
            "أنظمة بطارية"
          ]
        : [
            "Overcurrent and overvoltage protection",
            "Reverse polarity protection",
            "EMI/EMC filtering considerations",
            "Thermal management strategy",
            "Battery-powered and energy-efficient designs"
          ],
      image: powerProtectionImg,
      alt: isAR ? "الطاقة والحماية" : "Power and protection engineering"
    },

    {
      title: isAR
        ? "جاهز للتصنيع والمعايير"
        : "Designed for Standards & Manufacturing",
      text: isAR
        ? [
            "نصمم المخططات مع مراعاة الإنتاج والمعايير الصناعية.",
            "نوفر مخططات منظمة تدعم الانتقال للإنتاج."
          ]
        : [
            "Our schematic designs are developed with full awareness of industrial requirements and production readiness.",
            "We deliver organized, well-documented schematics that support a smooth transition into PCB layout, prototyping, and mass production."
          ],
      bullets: isAR
        ? [
            "معايير صناعية",
            "توافق EMC/EMI",
            "DFM",
            "DFT",
            "قابلية التوسع"
          ]
        : [
            "Industrial and automotive design practices",
            "EMC/EMI compliance requirements",
            "Design for Manufacturability (DFM)",
            "Design for Testing (DFT)",
            "Production scalability"
          ],
      image: manufacturingImg,
      alt: isAR ? "التصنيع" : "Manufacturing-ready schematic design"
    },

    {
      title: isAR
        ? "تطوير سريع ومنظم"
        : "Fast, Structured, and Collaborative Development",
      text: isAR
        ? [
            "نقدم تطويرًا سريعًا ومرنًا بالتعاون مع العملاء.",
            "نضمن شفافية تقنية وشراكة طويلة الأمد."
          ]
        : [
            "With an experienced and dedicated engineering team, we can support projects through flexible and efficient development cycles.",
            "We work closely with clients throughout the development process, ensuring technical transparency and long-term partnership."
          ],
      bullets: isAR
        ? [
            "تطوير سريع",
            "نماذج أولية",
            "حلول مخصصة",
            "تحسين الأنظمة"
          ]
        : [
            "Rapid development cycles",
            "Iterative prototyping",
            "Custom electrical solutions from scratch",
            "Design upgrades and legacy system improvements"
          ],
      image: developmentImg,
      alt: isAR ? "التطوير" : "Collaborative electronics development"
    }
  ];

  const whyChooseUs = isAR
    ? [
        "فريق إلكترونيات متخصص",
        "خبرة في الأنظمة المعقدة",
        "اختيار مكونات قوي",
        "تصميم صناعي",
        "دعم طويل الأمد"
      ]
    : [
        "Dedicated electronics engineering team",
        "Proven experience in complex embedded systems",
        "Strong component selection and sourcing knowledge",
        "Industrial-grade design philosophy",
        "Long-term technical support mindset"
      ];

  return (
    <section className="embedded-service-page" dir={isAR ? "rtl" : "ltr"}>

      <div className="site-container">

        <div className="service-main-header">

          <span className="service-label">
            {isAR ? "خدمة تصميم الإلكترونيات" : "Electronics Design Service"}
          </span>

          <h2>
            {isAR ? "تصميم مخططات PCB" : "PCB Schematic Design"}
          </h2>

          <h3>
            {isAR
              ? "تصميم دوائر موثوقة"
              : "Engineering-Driven Circuit Architecture for Reliable Products"}
          </h3>

          <p>
            {isAR
              ? "تصميم المخططات هو أساس الأنظمة الإلكترونية."
              : "At our Electronics Design Lab, PCB schematic design is more than just drawing circuits — it is the foundation of reliable, high-performance electronic systems."}
          </p>

          <p>
            {isAR
              ? "نصمم مخططات قابلة للتوسع والإنتاج."
              : "We create scalable, production-ready schematics that support signal integrity, power stability, protection compliance, and long-term reliability in real-world environments."}
          </p>

        </div>

        <div className="service-intro-block">
          <h4>
            {isAR ? "قدراتنا التقنية" : "Our Technical Capabilities"}
          </h4>
          <p>
            {isAR
              ? "نقدم مخططات متقدمة للأنظمة المدمجة."
              : "We develop advanced schematic architectures tailored for complex embedded and intelligent electronic products."}
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
                ? "نصمم دوائر موثوقة للمنتجات."
                : "We do not just design circuits — we build reliable electronic foundations for products designed to last."}
            </p>

            <ul>
              {whyChooseUs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div className="service-highlight-image">
            <img src={whyImg} alt="Engineering illustration" />
          </div>

        </div>

        <div className="service-cta">

          <h4>
            {isAR
              ? "لنصمم نظامك الإلكتروني"
              : "Let’s Engineer Your Next Electronic System"}
          </h4>

          <p>
            {isAR
              ? "نحن جاهزون لدعم مشروعك."
              : "Whether you are developing a new product or upgrading an existing platform, our engineering team is ready to support your schematic design requirements."}
          </p>

          <p>
            {isAR
              ? "ابدأ مشروعك معنا."
              : "Start your project with Nexus Design Lab and build electronics designed for performance, compliance, and long-term success."}
          </p>

          <div className="service-cta-buttons">

            <a href="#consultation" className="primary-btn">
              {isAR ? "طلب استشارة" : "Request a Consultation"}
            </a>

            <a href="#project-discussion" className="secondary-btn">
              {isAR ? "ناقش مشروعك" : "Discuss Your Project"}
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}