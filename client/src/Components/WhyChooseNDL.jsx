import React, { useRef, useEffect, useState } from "react";
import {
  FiSettings,
  FiUsers,
  FiLayers,
  FiBriefcase,
  FiCheckCircle,
  FiTrendingUp,
} from "react-icons/fi";
import "./WhyChooseNDL.css";
import { useLanguage } from "../context/LanguageContext";

export default function WhyChooseNDL() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const features = [
    {
      icon: <FiSettings />,
      title: isAR ? "نهج مبتكر" : "Innovative Approach",
      description: isAR
        ? "نحن لا نتبع الاتجاهات فقط، بل نصنع حلولًا حديثة ومبتكرة تساعد أعمالك على البقاء في المقدمة والاستعداد لما هو قادم."
        : "We are not a trend follower: we create the trends. Our team employs the newest approaches and cool new tools to hammer out cool modern solutions, keeping your business ahead of the pack and ready for whatever’s next.",
    },
    {
      icon: <FiUsers />,
      title: isAR ? "حلول مخصصة" : "Tailored Solutions",
      description: isAR
        ? "نؤمن أن كل عمل مختلف عن الآخر، لذلك نصمم استراتيجيات وحلولًا تناسب احتياجاتك الخاصة بدلًا من اتباع أسلوب موحد للجميع."
        : "We realize that every business is unique. Instead of the same cookie-cutter approach that leaves people coming up empty, we always listen to your requests for results and devise hand-made strategies that cater to you personally.",
    },
    {
      icon: <FiLayers />,
      title: isAR ? "فريق محترف" : "Skilled Team",
      description: isAR
        ? "فريقنا هو مصدر قوتنا. يضم مطورين ومصممين وخبراء يمتلكون معرفة واسعة وإبداعًا وخبرة عملية في المجال."
        : "Our people are our strength. The teams are made up of developers to designers, marketing experts, and everyone has a wealth of knowledge, creativity, and years of experience in the industry.",
    },
    {
      icon: <FiBriefcase />,
      title: isAR ? "عملية واضحة" : "Transparent Process",
      description: isAR
        ? "لن تشعري بالانفصال عن مشروعك. نحافظ على تواصل واضح في كل مرحلة، ونوفر تحديثات مستمرة، ونضمن أن تكوني على اطلاع دائم."
        : "You will never feel disconnected from your project. We maintain an open line of communication each step of the way, provide frequent progress updates, and ensure you are always informed about your project.",
    },
    {
      icon: <FiCheckCircle />,
      title: isAR ? "دعم متكامل" : "End-to-End Support",
      description: isAR
        ? "نحن لا نبني المشروع ثم نغادر، بل نرافقك من الفكرة الأولى، وخلال الإطلاق، وبعده أيضًا كلما احتجتِ إلينا."
        : "We do not simply build and leave. From the initial concept, through launch and beyond, we work with you every step of the way, whenever you need us.",
    },
    {
      icon: <FiTrendingUp />,
      title: isAR ? "قيمة طويلة الأمد" : "Long-Term Value",
      description: isAR
        ? "نركز دائمًا على الصورة الكبيرة، ونبني حلولًا تساعدك على النمو والتوسع وتحقيق أداء قوي على المدى البعيد."
        : "Ours is the bigger picture, always, to notice. We generate solutions that don't hold you back from growing, scaling, and performing years later.",
    },
  ];

  useEffect(() => {
    const element = titleRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section className="why-choose-ndl">
      <div className="site-container">
        <h2
          ref={titleRef}
          className={`why-choose-title ${isTitleVisible ? "show" : ""}`}
        >
          {isAR ? "لماذا تختار NDL؟" : "Why Choose NDL?"}
        </h2>

        <div className="why-choose-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}