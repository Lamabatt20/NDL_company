import React from "react";
import "./OurClients.css";

import client1 from "../assets/images/client1.avif";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.svg";
import client4 from "../assets/images/client4.webp";
import client5 from "../assets/images/client5.svg";
import client6 from "../assets/images/client6.webp";

export default function OurClients() {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
  ];

  return (
    <section className="our-clients">
      <h2>Our Clients</h2>
      <p className="subtitle">
        Trusted by innovative companies across engineering and industry
      </p>

      <div className="clients-slider">
        <div className="clients-track">
          {[...clients, ...clients].map((logo, i) => (
            <div className="client-logo" key={i}>
              <img src={logo} alt="Client logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
