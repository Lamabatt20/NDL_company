import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import MechanicalHero from "../Components/MechanicalHero";
import MechanicalIntro from "../Components/MechanicalIntro";
import MechanicalProjects from "../Components/MechanicalProjects";

import mainHero from "../assets/images/bimage.avif";
import sheetHero from "../assets/images/service6.png";
import aluminumHero from "../assets/images/service7.png";
import enclosureHero from "../assets/images/service8.png";
import roboticsHero from "../assets/images/Picture2.png";
import steelHero from "../assets/images/Picture3.png";
import woodHero from "../assets/images/Picture4.png";

export default function Mechanical() {
  const { service } = useParams();

  const services = useMemo(
    () => ({
      home: {
        title: "Mechanical Systems Designs",
        titleAr: "تصاميم الأنظمة الميكانيكية",
        heading: "Advanced Mechanical Engineering",
        headingAr: "هندسة ميكانيكية متقدمة",
        description:
          "We deliver innovative mechanical designs that combine strength, efficiency, and precision.",
        descriptionAr:
          "نقدم تصاميم ميكانيكية مبتكرة تجمع بين القوة والكفاءة والدقة.",
        heroImage: mainHero,
      },

      "sheet-metal": {
        title: "Sheet Metal Design",
        titleAr: "تصميم الصفائح المعدنية",
        heading: "Precision Sheet Metal",
        headingAr: "تصميم صفائح معدنية بدقة عالية",
        description:
          "High-quality sheet metal designs optimized for durability and manufacturability.",
        descriptionAr:
          "تصاميم صفائح معدنية عالية الجودة محسنة للمتانة وقابلية التصنيع.",
        heroImage: sheetHero,
      },

      aluminum: {
        title: "Aluminum Structure Design",
        titleAr: "تصميم هياكل الألمنيوم",
        heading: "Lightweight & Strong Structures",
        headingAr: "هياكل خفيفة وقوية",
        description:
          "We design aluminum structures that balance strength, weight, and cost efficiency.",
        descriptionAr:
          "نصمم هياكل ألمنيوم توازن بين القوة والوزن والكفاءة من حيث التكلفة.",
        heroImage: aluminumHero,
      },

      enclosure: {
        title: "Product Enclosure Design",
        titleAr: "تصميم أغلفة المنتجات",
        heading: "Smart Enclosure Design",
        headingAr: "تصميم أغلفة ذكية",
        description:
          "Functional and aesthetic enclosures designed to protect and enhance your products.",
        descriptionAr:
          "أغلفة عملية وجذابة مصممة لحماية منتجاتك وتعزيزها.",
        heroImage: enclosureHero,
      },

      steel: {
        title: "Steel Structure Design",
        titleAr: "تصميم الهياكل الفولاذية",
        heading: "Robust Steel Engineering",
        headingAr: "هندسة فولاذية قوية",
        description:
          "Durable steel structures engineered for maximum strength and reliability.",
        descriptionAr:
          "هياكل فولاذية متينة مصممة لتحقيق أعلى درجات القوة والاعتمادية.",
        heroImage: roboticsHero,
      },

      "product-design": {
        title: "Product Design",
        titleAr: "تصميم المنتجات",
        heading: "Innovative Product Design",
        headingAr: "تصميم منتجات مبتكر",
        description:
          "We design products that combine usability, aesthetics, and engineering excellence.",
        descriptionAr:
          "نصمم منتجات تجمع بين سهولة الاستخدام والجمال والتميز الهندسي.",
        heroImage: steelHero,
      },

      wood: {
        title: "Wood and Furniture Design",
        titleAr: "تصميم الخشب والأثاث",
        heading: "Creative Wood Designs",
        headingAr: "تصاميم خشب وأثاث إبداعية",
        description:
          "Elegant and functional furniture and wood designs tailored to modern needs.",
        descriptionAr:
          "تصاميم خشب وأثاث أنيقة وعملية مخصصة للاحتياجات الحديثة.",
        heroImage: woodHero,
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
      <MechanicalHero
        activeService={activeService}
        services={services}
      />

      <MechanicalIntro activeService={activeService} />

      <MechanicalProjects activeService={activeService} />
    </>
  );
}