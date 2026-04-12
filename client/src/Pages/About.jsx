import React from "react";
import "./About.css";
import heroImg from "../assets/images/4583.png";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isAR = language === "ar";

  return (
   <div className="aboutsd-page" dir={isAR ? "rtl" : "ltr"}>
      {/* ================= HERO ================= */}
      <section className="aboutsd-hero">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>

        <div className="aboutsd-container">
          <div className="aboutsd-text">
            <span className="aboutsd-label">
              {isAR ? "عن NDL" : "ABOUT NDL"}
            </span>

            <h1>
              {isAR ? "الهندسة" : "Engineering"}{" "}
              <span>{isAR ? "والابتكار" : "Innovation"}</span>
              <br />
              {isAR ? "بتأثير واقعي" : "With Real-World Impact"}
            </h1>

            <p>
              {isAR
                ? "نقدم حلولًا هندسية موثوقة في الأنظمة المدمجة، والتصميم الميكانيكي، والتقنيات الذكية، مع الجمع بين الابتكار والدقة والتنفيذ العملي."
                : "We create reliable engineering solutions across embedded systems, mechanical design, and smart technologies, combining innovation, precision, and practical execution."}
            </p>

            <div className="aboutsd-hero-actions">
              <button
                className="aboutsd-btn"
                onClick={() => navigate("/contact")}
              >
                {isAR ? "تواصل معنا" : "Contact Us"}
              </button>

              <button
                className="aboutsd-btn aboutsd-btn-outline"
                onClick={() => navigate("/services")}
              >
                {isAR ? "استكشف الخدمات" : "Explore Services"}
              </button>
            </div>
          </div>

          <div className="aboutsd-image">
            <div className="aboutsd-image-wrap">
              <img src={heroImg} alt={isAR ? "من نحن" : "About Us"} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="aboutsd-section aboutsd-section-intro">
        <div className="container narrow">
          <span className="section-tag">
            {isAR ? "من نحن" : "Who We Are"}
          </span>

          <h2>
            {isAR
              ? "نقود بالجودة والدقة والابتكار"
              : "Driven by Quality, Precision, and Innovation"}
          </h2>

          <p>
            {isAR
              ? "NDL هي شركة هندسية تركز على تقديم حلول موثوقة ومتقدمة تلبي احتياجات الصناعة الواقعية. نحن نحول الأفكار إلى منتجات عملية من خلال مزيج متوازن من الخبرة التقنية، وحل المشكلات الإبداعي، والانتباه للتفاصيل."
              : "NDL is an engineering-focused company dedicated to delivering dependable and forward-thinking solutions tailored to real industry needs. We transform ideas into practical products through a balanced combination of technical expertise, creative problem solving, and attention to detail."}
          </p>

          <p>
            {isAR
              ? "يمتد عملنا عبر عدة تخصصات هندسية، مما يتيح لنا بناء حلول ليست فقط عملية وفعالة، بل أيضًا قابلة للتوسع وجاهزة للتطبيق في الواقع."
              : "Our work spans multiple engineering disciplines, allowing us to build solutions that are not only functional and efficient, but also scalable and ready for real-world application."}
          </p>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="aboutsd-section diagonal-section mission-vision-section">
        <div className="diagonal-bg"></div>

        <div className="container">
          <div className="section-heading">
            <span className="section-tag">
              {isAR ? "اتجاهنا" : "Our Direction"}
            </span>

            <h2>{isAR ? "الرؤية والرسالة" : "Mission & Vision"}</h2>

            <p>
              {isAR
                ? "ما الذي يقود عملنا، ويشكل قراراتنا، ويحدد المستقبل الذي نسعى إلى بنائه."
                : "What drives our work, shapes our decisions, and defines the future we aim to build."}
            </p>
          </div>

          <div className="two-col mission-grid">
            <div className="info-box">
              <div className="mini-icon">M</div>
              <h3>{isAR ? "رسالتنا" : "Our Mission"}</h3>
              <p>
                {isAR
                  ? "تقديم حلول هندسية مبتكرة وموثوقة وفعالة تعالج التحديات الواقعية بدقة وجودة وقيمة طويلة الأمد."
                  : "To deliver innovative, reliable, and efficient engineering solutions that solve real-world challenges with precision, quality, and long-term value."}
              </p>
            </div>

            <div className="info-box">
              <div className="mini-icon">V</div>
              <h3>{isAR ? "رؤيتنا" : "Our Vision"}</h3>
              <p>
                {isAR
                  ? "أن نصبح جهة موثوقة ورائدة في الابتكار الهندسي من خلال تطوير حلول مؤثرة تدفع الصناعات إلى الأمام وتدعم النمو."
                  : "To become a trusted leader in engineering innovation by creating impactful solutions that advance industries and empower growth."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="about-section what-we-do-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">
              {isAR ? "ماذا نقدم" : "What We Do"}
            </span>

            <h2>
              {isAR
                ? "خدمات هندسية مصممة لإحداث أثر"
                : "Engineering Services Designed for Impact"}
            </h2>

            <p>
              {isAR
                ? "نقدم حلولًا تقنية متكاملة عبر مجالات متعددة، مصممة لتلبية التحديات الحديثة بدقة ومرونة."
                : "We provide integrated technical solutions across multiple domains, built to meet modern challenges with precision and flexibility."}
            </p>
          </div>

          <div className="grid servicese-grid">
            <div className="card servicese-card">
              <div className="card-dot"></div>
              <h4>{isAR ? "الأنظمة المدمجة" : "Embedded Systems"}</h4>
              <p>
                {isAR
                  ? "تصميم وتطوير حلول مدمجة ذكية للأجهزة والتطبيقات الحديثة."
                  : "Design and development of intelligent embedded solutions for modern devices and applications."}
              </p>
            </div>

            <div className="card servicese-card">
              <div className="card-dot"></div>
              <h4>{isAR ? "تصميم PCB" : "PCB Design"}</h4>
              <p>
                {isAR
                  ? "تطوير مخططات ولوحات PCB عالية الجودة مع تركيز قوي على الأداء والاعتمادية."
                  : "High-quality schematic and PCB layout development with strong focus on performance and reliability."}
              </p>
            </div>

            <div className="card servicese-card">
              <div className="card-dot"></div>
              <h4>{isAR ? "التصميم الميكانيكي" : "Mechanical Design"}</h4>
              <p>
                {isAR
                  ? "تصميم منتجات عملية ونمذجة ثلاثية الأبعاد مخصصة للمتطلبات الهندسية الواقعية."
                  : "Functional product design and 3D modeling tailored to practical engineering requirements."}
              </p>
            </div>

            <div className="card servicese-card">
              <div className="card-dot"></div>
              <h4>{isAR ? "الأنظمة الذكية" : "Smart Systems"}</h4>
              <p>
                {isAR
                  ? "أنظمة ذكية وحلول مترابطة مصممة للكفاءة والأتمتة والابتكار."
                  : "Intelligent systems and connected solutions built for efficiency, automation, and innovation."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="aboutsd-section values-section">
        <div className="values-shape values-shape-left"></div>
        <div className="values-shape values-shape-right"></div>

        <div className="container">
          <div className="section-heading">
            <span className="section-tag">
              {isAR ? "قيمنا" : "Our Values"}
            </span>

            <h2>{isAR ? "ما الذي نمثله" : "What We Stand For"}</h2>

            <p>
              {isAR
                ? "المبادئ التي توجه طريقة تفكيرنا وبنائنا وتقديمنا لكل حل."
                : "The principles that guide how we think, build, and deliver every solution."}
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>{isAR ? "الابتكار" : "Innovation"}</h4>
              <p>
                {isAR
                  ? "نتجاوز التفكير التقليدي لنبتكر حلولًا هندسية حديثة وفعالة وجاهزة للمستقبل."
                  : "We go beyond conventional thinking to create engineering solutions that are modern, effective, and future-ready."}
              </p>
            </div>

            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>{isAR ? "المسؤولية" : "Accountability"}</h4>
              <p>
                {isAR
                  ? "نتحمل مسؤولية كل مرحلة من مراحل العمل ونحافظ على مستوى عالٍ من الجودة من الفكرة حتى التسليم."
                  : "We take ownership of every phase of the process and maintain a high standard from concept to delivery."}
              </p>
            </div>

            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>{isAR ? "التركيز على العميل" : "Client Focus"}</h4>
              <p>
                {isAR
                  ? "نصمم بهدف واضح، ونربط كل حل بأهداف عملائنا واحتياجاتهم ونجاحهم طويل الأمد."
                  : "We design with purpose, aligning every solution with our clients’ real goals, needs, and long-term success."}
              </p>
            </div>

            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>{isAR ? "الجودة" : "Quality"}</h4>
              <p>
                {isAR
                  ? "نؤمن أن التميز يكمن في التفاصيل، لذلك نعطي الأولوية للدقة والاعتمادية والتنفيذ القوي في كل مشروع."
                  : "We believe excellence is in the details, and we prioritize precision, reliability, and strong execution in every project."}
              </p>
            </div>

            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>{isAR ? "النزاهة" : "Integrity"}</h4>
              <p>
                {isAR
                  ? "الشفافية والصدق والثقة عناصر أساسية في طريقة عملنا وتواصلنا وبنائنا لشراكات طويلة الأمد."
                  : "Transparency, honesty, and trust are essential to how we work, communicate, and build long-lasting partnerships."}
              </p>
            </div>

            <div className="value-card">
              <div className="value-top-line"></div>
              <h4>{isAR ? "التعاون" : "Collaboration"}</h4>
              <p>
                {isAR
                  ? "أفضل النتائج تُبنى معًا، ولذلك نقدر العمل الجماعي وتبادل الأفكار وحل المشكلات بشكل مشترك."
                  : "Great outcomes are built together, and we value teamwork, shared ideas, and collective problem solving."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="aboutsd-section diagonal-section choose-section">
        <div className="diagonal-bg diagonal-bg-light"></div>

        <div className="container">
          <div className="section-heading">
            <span className="section-tag">
              {isAR ? "لماذا نحن" : "Why Choose Us"}
            </span>

            <h2>
              {isAR
                ? "شريك موثوق للحلول الهندسية الذكية"
                : "A Trusted Partner for Smart Engineering Solutions"}
            </h2>

            <p>
              {isAR
                ? "نجمع بين القدرة التقنية القوية والتنفيذ الواضح والالتزام بتقديم قيمة حقيقية."
                : "We combine strong technical capability with clear execution and a commitment to delivering real value."}
            </p>
          </div>

          <div className="choose-grid">
            <div className="choose-item">
              <span></span>
              <p>
                {isAR
                  ? "حلول هندسية عملية وقابلة للتوسع"
                  : "Practical and scalable engineering solutions"}
              </p>
            </div>
            <div className="choose-item">
              <span></span>
              <p>
                {isAR
                  ? "تركيز قوي على الجودة والدقة"
                  : "Strong focus on quality and precision"}
              </p>
            </div>
            <div className="choose-item">
              <span></span>
              <p>
                {isAR
                  ? "منهجية مرنة حسب احتياجات المشروع"
                  : "Flexible approach tailored to project needs"}
              </p>
            </div>
            <div className="choose-item">
              <span></span>
              <p>
                {isAR
                  ? "عقلية مدفوعة بالابتكار في جميع الخدمات"
                  : "Innovation-driven mindset across all services"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRE FOOTER CTA ================= */}
      <section className="pre-footer-section">
        <div className="container pre-footer-box">
          <div className="pre-footer-text">
            <span className="section-tag light-tag">
              {isAR ? "لنتواصل" : "Let’s Connect"}
            </span>

            <h2>
              {isAR
                ? "لنصنع شيئًا ذا معنى معًا"
                : "Let’s Build Something Meaningful Together"}
            </h2>

            <p>
              {isAR
                ? "سواء كنت بحاجة إلى حل هندسي كامل أو خدمة تقنية متخصصة، فنحن جاهزون لمساعدتك في تحويل رؤيتك إلى واقع."
                : "Whether you need a full engineering solution or a specialized technical service, we’re ready to help bring your vision to life."}
            </p>
          </div>

          <div className="pre-footer-action">
            <button
              className="aboutsd-btn"
              onClick={() => navigate("/contact")}
            >
              {isAR ? "تواصل معنا" : "Contact Us"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}