import React, { useState } from "react";
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
  const services = {
    home: {
      title: "Mechanical Systems Designs",
      heroImage: mainHero
    },
    "sheet-metal": {
      title: "Sheet Metal Design",
      heroImage: sheetHero
    },
    aluminum: {
      title: "Aluminum Structure Design",
      heroImage: aluminumHero
    },
    enclosure: {
      title: "Product Enclosure Design",
      heroImage: enclosureHero
    },
    robotics: {
      title: "Robotics Development",
      heroImage: roboticsHero
    },
    steel: {
      title: "Steel Structure Design",
      heroImage: steelHero
    },
    wood: {
      title: "Wood and Furniture Design",
      heroImage: woodHero
    }
  };

  // ⭐ الحالة الافتراضية
  const [activeService, setActiveService] = useState("home");

  return (
    <>
      <MechanicalHero
        activeService={activeService}
        setActiveService={setActiveService}
        services={services}
      />

      <MechanicalIntro activeService={activeService} />
      <MechanicalProjects activeService={activeService} />
    </>
  );
}