import React from "react";
import HomeIntro from "./HomeIntro";
import PcbSchematicIntro from "./PcbSchematicIntro";

import PcbLayoutIntro from "./PcbLayoutIntro";
import EmbeddedSwIntro from "./EmbeddedSwIntro";
import ProductDevIntro from "./ProductDevIntro";
import IotIntro from "./IotIntro";
import AiIntro from "./AiIntro";

export default function EmbeddedIntro({ activeService }) {
  switch (activeService) {
    case "pcb-schematic":
      return <PcbSchematicIntro />;

     case "pcb-layout":
      return <PcbLayoutIntro />;

    case "embedded-sw":
      return <EmbeddedSwIntro />;

    case "product-dev":
      return <ProductDevIntro />;

    case "iot":
      return <IotIntro />;

    case "ai":
      return <AiIntro />;

    case "home":
    default:
      return <HomeIntro />;
  }
}