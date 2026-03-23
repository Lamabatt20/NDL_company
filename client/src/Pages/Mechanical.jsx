import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const services = useMemo(
    () => ({
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
      steel: {
        title: "Steel Structure Design",
        heroImage: roboticsHero
      },
      "product-design": {
        title: "Product Design",
        heroImage: steelHero
      },
      wood: {
        title: "Wood and Furniture Design",
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

  const handleSetActiveService = (nextService) => {
    setActiveService(nextService);

    if (nextService === "home") {
      navigate("/mechanical");
    } else {
      navigate(`/mechanical/${nextService}`);
    }
  };

  return (
    <>
      <MechanicalHero
        activeService={activeService}
        setActiveService={handleSetActiveService}
        services={services}
      />

      <MechanicalIntro activeService={activeService} />

      {activeService === "home" && (
        <MechanicalProjects activeService={activeService} />
      )}
    </>
  );
}