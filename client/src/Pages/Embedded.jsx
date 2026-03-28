import React, { useEffect, useMemo, useState } from "react";
import { useParams} from "react-router-dom";
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
      heading: "Smart Embedded Solutions",
      description: "We design intelligent embedded systems that power modern devices with efficiency and reliability",
      heroImage: mainHero
    },
    "pcb-schematic": {
      title: "PCB Schematic Design",
      heading: "Accurate Circuit Design",
      description: "We create precise and optimized schematics to ensure strong and reliable electronic systems",
      heroImage: pcbHero
    },
    "pcb-layout": {
      title: "PCB Layout Design",
      heading: "High-Quality PCB Layouts",
      description: "Professional PCB layouts focused on performance, signal integrity, and manufacturability",
      heroImage: layoutHero
    },
    "embedded-sw": {
      title: "Embedded Software Development",
      heading: "Reliable Embedded Software",
      description: "We develop efficient and scalable embedded software tailored for real-time systems",
      heroImage: swHero
    },
    "product-dev": {
      title: "Electronic Products Development",
      heading: "From Idea to Product",
      description: "We transform concepts into fully functional electronic products ready for real-world use",
      heroImage: productHero
    },
    iot: {
      title: "IoT Smart Solutions",
      heading: "Connected Smart Systems",
      description: "We build IoT solutions that connect devices and enable smart, data-driven environments",
      heroImage: iotHero
    },
    ai: {
      title: "AI Integration",
      heading: "AI-Powered Systems",
      description: "We integrate AI into embedded systems to enhance automation and decision-making",
      heroImage: aiHero
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
      <EmbeddedHero
        activeService={activeService}
        services={services}
      />
      <EmbeddedIntro activeService={activeService} />

      
      <EmbeddedProjects activeService={activeService} />
      
    </>
  );
}