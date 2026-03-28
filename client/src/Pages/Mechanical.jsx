import React, { useEffect, useMemo, useState } from "react";
import { useParams} from "react-router-dom";
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
      heading: "Advanced Mechanical Engineering",
      description: "We deliver innovative mechanical designs that combine strength, efficiency, and precision",
      heroImage: mainHero
    },
    "sheet-metal": {
      title: "Sheet Metal Design",
      heading: "Precision Sheet Metal",
      description: "High-quality sheet metal designs optimized for durability and manufacturability",
      heroImage: sheetHero
    },
    aluminum: {
      title: "Aluminum Structure Design",
      heading: "Lightweight & Strong Structures",
      description: "We design aluminum structures that balance strength, weight, and cost efficiency",
      heroImage: aluminumHero
    },
    enclosure: {
      title: "Product Enclosure Design",
      heading: "Smart Enclosure Design",
      description: "Functional and aesthetic enclosures designed to protect and enhance your products",
      heroImage: enclosureHero
    },
    steel: {
      title: "Steel Structure Design",
      heading: "Robust Steel Engineering",
      description: "Durable steel structures engineered for maximum strength and reliability",
      heroImage: roboticsHero
    },
    "product-design": {
      title: "Product Design",
      heading: "Innovative Product Design",
      description: "We design products that combine usability, aesthetics, and engineering excellence",
      heroImage: steelHero
    },
    wood: {
      title: "Wood and Furniture Design",
      heading: "Creative Wood Designs",
      description: "Elegant and functional furniture and wood designs tailored to modern needs",
      heroImage: woodHero
    }
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