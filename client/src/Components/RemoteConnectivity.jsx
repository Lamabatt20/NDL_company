import React from "react";
import "./RemoteConnectivity.css";
import mapImage from "../assets/images/world-map-light.jpg";

export default function RemoteConnectivity() {

  // مركز الاتصال — فلسطين 🇵🇸
  const center = { x: 56.5, y: 52 };

  const locations = [
    { id: 1, top: "42%", left: "20%", delay: "0s" },
    { id: 2, top: "68%", left: "32%", delay: "0.6s" },
    { id: 3, top: "41%", left: "50%", delay: "1.2s" },
    { id: 4, top: "48%", left: "55%", delay: "1.8s" },
    { id: 5, top: "54%", left: "53%", delay: "2.4s" },
    { id: 6, top: "55%", left: "58%", delay: "3s" },
    { id: 7, top: "56%", left: "61%", delay: "3.6s" },
    { id: 8, top: "55%", left: "60%", delay: "4.2s" },
  ];

  return (
    <section className="remote-connectivity">
      <div className="site-container">
        <h2>Remote Connectivity</h2>
        <p className="subtitle">
          Break free from traditional boundaries. Work remotely with our clients worldwide.
        </p>

        <div className="map-wrapper">
        <img src={mapImage} alt="World Map" className="world-map" />

        <svg className="connections-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          {locations.map((loc) => {
            const targetX = parseFloat(loc.left);
            const targetY = parseFloat(loc.top);

            const cpX = (center.x + targetX) / 2;
            const cpY = center.y - 18;

            return (
              <path
                key={loc.id}
                d={`M ${center.x},${center.y} Q ${cpX},${cpY} ${targetX},${targetY}`}
                className="curve-path"
                style={{ animationDelay: loc.delay }}
              />
            );
          })}
        </svg>

        {/* نقطة فلسطين */}
        <div
          className="loca palestine"
          style={{ top: `${center.y}%`, left: `${center.x}%` }}
        >
          <span className="pulse"></span>
          <span className="dot"></span>
        </div>

        {/* باقي النقاط */}
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="loca end-point"
            style={{
              top: loc.top,
              left: loc.left,
              animationDelay: loc.delay
            }}
          >
            <span className="dot"></span>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}