import React, { useEffect, useRef, useState } from "react";
import "./MechanicalIntro.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.avif";
import img4 from "../assets/images/img4.jpg";
import { useLanguage } from "../context/LanguageContext";

export default function MechanicalHomeIntro() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`mechanical-page ${show ? "show" : ""}`}
      dir={isAR ? "rtl" : "ltr"}
    >

      <div className="container">

        {/* ===== SECTION HEADER ===== */}
        <div className="section-heading">
          <span className="section-tag">
            {isAR ? "خدمات الهندسة الميكانيكية" : "Mechanical Engineering Services"}
          </span>

          <h2>
            {isAR
              ? "حلول متكاملة في التصميم والتحليل والتصنيع الميكانيكي"
              : "Integrated Solutions in Mechanical Design, Analysis, and Manufacturing"}
          </h2>

          <p>
            {isAR
              ? "نحن نقدم مجموعة شاملة من خدمات الهندسة الميكانيكية تشمل التصميم الإبداعي، التحليل الهندسي المتقدم، والمحاكاة الدقيقة، بالإضافة إلى إعداد المخططات التنفيذية والتصنيع. نعمل على تحويل أفكار العملاء إلى منتجات واقعية تلبي أعلى معايير الجودة والكفاءة، مع مراعاة الجوانب الاقتصادية والتقنية لكل مشروع."
              : "We offer a comprehensive suite of mechanical engineering services, including creative design, advanced engineering analysis, and precise simulation, as well as preparation of detailed manufacturing drawings and production support. Our team transforms client ideas into real-world products that meet the highest standards of quality and efficiency, while considering both technical and economic aspects for every project."}
          </p>
        </div>

        {/* ===== TOP CONTENT ===== */}
        <div className="mechanical-top">

          <div className="mechanical-text">
            <p>
              {isAR
                ? "نتميز بتقديم حلول هندسية متكاملة تبدأ من دراسة الفكرة وتحليل المتطلبات، مروراً بتصميم النماذج ثلاثية الأبعاد، وإجراء التحليلات الهندسية مثل تحليل الإجهادات والاهتزازات، وصولاً إلى إعداد رسومات التصنيع والإشراف على التنفيذ. نستخدم أحدث البرمجيات الهندسية لضمان دقة النتائج وتحقيق أفضل أداء للنظام."
                : "We excel in providing integrated engineering solutions starting from concept study and requirements analysis, through 3D modeling and advanced engineering analyses such as stress and vibration analysis, to preparing manufacturing drawings and supervising production. We utilize the latest engineering software to ensure accuracy and achieve optimal system performance."}
            </p>

            <div className="mechanical-features">
              <div>{isAR ? "تصميم ثلاثي الأبعاد احترافي" : "Professional 3D Design"}</div>
              <div>{isAR ? "تحليل إجهادات واهتزازات متقدم" : "Advanced Stress & Vibration Analysis"}</div>
              <div>{isAR ? "إعداد رسومات تصنيع تفصيلية" : "Detailed Manufacturing Drawings"}</div>
              <div>{isAR ? "دعم فني أثناء التنفيذ والتصنيع" : "Technical Support During Production"}</div>
            </div>
          </div>

          <div className="mechanical-image">
            <img src={img1} alt="mechanical" />
          </div>

        </div>

        {/* ===== GALLERY SECTION ===== */}
        <div className="mechanical-grid">
          {/* Card 1 - Analysis */}
          <div className="card mechanical-card card-down">
            <img src={img3} alt="analysis" />
            <h4>{isAR ? "التحليل الهندسي" : "Engineering Analysis"}</h4>
            <p>{isAR ? "نقدم خدمات تحليل الإجهادات، الاهتزازات، وانتقال الحرارة لضمان سلامة وكفاءة النظام قبل التصنيع." : "We provide stress, vibration, and thermal analysis services to ensure system safety and efficiency before manufacturing."}</p>
          </div>

          {/* Card 2 - Design */}
          <div className="card mechanical-card card-up">
            <img src={img2} alt="design" />
            <h4>{isAR ? "التصميم الهندسي" : "Engineering Design"}</h4>
            <p>{isAR ? "نقوم بتصميم أنظمة وأجزاء ميكانيكية مبتكرة باستخدام أحدث برامج التصميم لضمان الكفاءة وسهولة التصنيع." : "We design innovative mechanical systems and components using the latest CAD tools to ensure efficiency and manufacturability."}</p>
          </div>

          {/* Card 3 - Simulation & Manufacturing */}
          <div className="card mechanical-card">
            <img src={img4} alt="simulation-manufacturing" />
            <h4>{isAR ? "المحاكاة والتصنيع" : "Simulation & Manufacturing"}</h4>
            <p>{isAR ? "نستخدم تقنيات المحاكاة لاختبار أداء النظام في بيئة افتراضية، ونوفر دعمًا كاملاً في إعداد ملفات التصنيع والإشراف على التنفيذ لضمان تحقيق النتائج المرجوة." : "We use simulation technologies to test system performance in a virtual environment and provide full support in preparing manufacturing files and supervising production to ensure the desired results are achieved."}</p>
          </div>
        </div>

      </div>
    </section>
  );
}