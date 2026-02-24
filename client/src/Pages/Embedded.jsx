import React, { useState } from "react";
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
  const services = {
    home: {
      title: "Embedded Systems Designs",
      heroImage: mainHero
    },
    "pcb-schematic": {
      title: "PCB Schematic Design",
      heroImage: pcbHero
    },
    "pcb-layout": {
      title: "PCB Layout Design",
      heroImage: layoutHero
    },
    "embedded-sw": {
      title: "Embedded Software Development",
      heroImage: swHero
    },
    "product-dev": {
      title: "Electronic Products Development",
      heroImage: productHero
    },
    iot: {
      title: "IoT Smart Solutions",
      heroImage: iotHero
    },
    ai: {
      title: "AI Integration",
      heroImage: aiHero
    }
  };

  
  const [activeService, setActiveService] = useState("home");

  return (
    <>
      <EmbeddedHero
        activeService={activeService}
        setActiveService={setActiveService}
        services={services}
      />

      <EmbeddedIntro activeService={activeService} />
      <EmbeddedProjects activeService={activeService} />
    </>
  );
}