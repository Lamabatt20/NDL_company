import React from "react";
import "./RemoteConnectivity.css";
import mapImage from "../assets/images/world-map-light.jpg"; 

export default function RemoteConnectivity() {
  return (
    <section className="remote-connectivity">
      <h2>Remote Connectivity</h2>
      <p className="subtitle">
        Break free from traditional boundaries. Work remotely with our clients.
      </p>

      <div className="map-wrapper">
        <img src={mapImage} alt="World Map" className="world-map" />

        {/* Palestine Point */}
        <div className="loca palestine">
          <span className="pulse"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* Location tags */}
      <div className="loca">
        <span className="loca-tag active">Palestine</span>
      </div>
    </section>
  );
}
