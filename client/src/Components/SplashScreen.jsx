import React, { useEffect } from "react";
import "./SplashScreen.css";

import logo from "../assets/images/logob.png";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="logo-wrapper">
          <img src={logo} alt="Nexus Logo" className="splash-logo" />
        </div>

        <h1 className="splash-title">Nexus Design Lab</h1>
        <p className="splash-subtitle">Where Embedded Systems Meet Mechanical Design</p>

        <div className="loader"></div>
      </div>
    </div>
  );
};

export default SplashScreen;