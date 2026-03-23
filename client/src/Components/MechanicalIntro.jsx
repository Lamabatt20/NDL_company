import React from "react";
import MechanicalHomeIntro from "./MechanicalHomeIntro";


import SheetMetalIntro from "./SheetMetalIntro";
import AluminumIntro from "./AluminumIntro";
import EnclosureIntro from "./EnclosureIntro"; 
import SteelIntro from "./SteelIntro";
import ProductDesign from "./ProductDesignIntro";
import WoodIntro from "./WoodIntro";

export default function MechanicalIntro({ activeService }) {
  switch (activeService) {
    case "sheet-metal":
     return <SheetMetalIntro />;

    case "aluminum":
     return <AluminumIntro />;

    case "enclosure":
     return <EnclosureIntro />;

    case "steel":
     return <SteelIntro />;

    case "product-design":
     return <ProductDesign />;

    case "wood":
     return <WoodIntro />;

    case "home":
    default:
      return <MechanicalHomeIntro />;
  }
}