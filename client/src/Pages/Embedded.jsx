import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import EmbeddedHero from "../Components/EmbeddedHero";
import EmbeddedIntro from "../Components/EmbeddedIntro";
import EmbeddedProjects from "../Components/EmbeddedProjects";

import mainHero from "../assets/images/emimage.png";
import pcbHero from "../assets/images/service1.png";
import layoutHero from "../assets/images/service2.png";
import swHero from "../assets/images/service3.png";
import productHero from "../assets/images/service4.png";
import iotHero from "../assets/images/service5.png";
import aiHero from "../assets/images/Picture1.png";

export default function Embedded() {
  const { service } = useParams();

  const services = useMemo(
    () => ({
      home: {
        title: "Embedded Systems Designs",
        titleAr: "تصاميم الأنظمة المدمجة",
        heading: "Smart Embedded Solutions",
        headingAr: "حلول الأنظمة المدمجة الذكية",
        description:
          "We design intelligent embedded systems that power modern devices with efficiency and reliability.",
        descriptionAr:
          "نقوم بتصميم أنظمة مدمجة ذكية تدعم الأجهزة الحديثة بكفاءة واعتمادية.",
        heroImage: mainHero,
      },

      "pcb-schematic": {
        title: "PCB Schematic Design",
        titleAr: "تصميم مخططات PCB",
        heading: "Accurate Circuit Design",
        headingAr: "تصميم دوائر بدقة عالية",
        description:
          "We create precise and optimized schematics to ensure strong and reliable electronic systems.",
        descriptionAr:
          "نقوم بإنشاء مخططات دقيقة ومحسنة لضمان أنظمة إلكترونية قوية وموثوقة.",
        heroImage: pcbHero,
      },

      "pcb-layout": {
        title: "PCB Layout Design",
        titleAr: "تصميم PCB Layout",
        heading: "High-Quality PCB Layouts",
        headingAr: "تصميمات PCB عالية الجودة",
        description:
          "Professional PCB layouts focused on performance, signal integrity, and manufacturability.",
        descriptionAr:
          "تصميمات PCB احترافية تركز على الأداء وسلامة الإشارة وقابلية التصنيع.",
        heroImage: layoutHero,
      },

      "embedded-sw": {
        title: "Embedded Software Development",
        titleAr: "تطوير البرمجيات المدمجة",
        heading: "Reliable Embedded Software",
        headingAr: "برمجيات مدمجة موثوقة",
        description:
          "We develop efficient and scalable embedded software tailored for real-time systems.",
        descriptionAr:
          "نقوم بتطوير برمجيات مدمجة فعالة وقابلة للتوسع ومناسبة للأنظمة اللحظية.",
        heroImage: swHero,
      },

      "product-dev": {
        title: "Electronic Products Development",
        titleAr: "تطوير المنتجات الإلكترونية",
        heading: "From Idea to Product",
        headingAr: "من الفكرة إلى المنتج",
        description:
          "We transform concepts into fully functional electronic products ready for real-world use.",
        descriptionAr:
          "نحوّل الأفكار إلى منتجات إلكترونية متكاملة وجاهزة للاستخدام الواقعي.",
        heroImage: productHero,
      },

      iot: {
        title: "IoT Smart Solutions",
        titleAr: "حلول إنترنت الأشياء الذكية",
        heading: "Connected Smart Systems",
        headingAr: "أنظمة ذكية مترابطة",
        description:
          "We build IoT solutions that connect devices and enable smart, data-driven environments.",
        descriptionAr:
          "نقوم ببناء حلول إنترنت الأشياء التي تربط الأجهزة وتوفر بيئات ذكية قائمة على البيانات.",
        heroImage: iotHero,
      },

      ai: {
        title: "AI Integration",
        titleAr: "دمج الذكاء الاصطناعي",
        heading: "AI-Powered Systems",
        headingAr: "أنظمة مدعومة بالذكاء الاصطناعي",
        description:
          "We integrate AI into embedded systems to enhance automation and decision-making.",
        descriptionAr:
          "نقوم بدمج الذكاء الاصطناعي داخل الأنظمة المدمجة لتعزيز الأتمتة واتخاذ القرار.",
        heroImage: aiHero,
      },
    }),
    []
  );

  const [activeService, setActiveService] = useState("home");

  useEffect(() => {
    if (service && services[service]) {
      setActiveService(service);
    } else {
      setActiveService("home");
    }
  }, [service, services]);

  return (
    <>
      <EmbeddedHero
        activeService={activeService}
        services={services}
      />

      <EmbeddedIntro activeService={activeService} />

      <EmbeddedProjects activeService={activeService} />
    </>
  );
}