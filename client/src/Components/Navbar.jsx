import React, { useState, useEffect } from "react";
import { NavLink, useLocation} from "react-router-dom";
import "./Navbar.css";

import logoDefault from "../assets/images/logob.png";
import logoEmbedded from "../assets/images/logow.png";

import globeIcon from "../assets/icons/icons8-global-language-50 (1).png";
import globeBlue from "../assets/icons/icons8-global-language-48.png";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const isHome = location.pathname === "/";

  const isEmbedded = location.pathname === "/embedded";
  const isMechanical = location.pathname === "/mechanical";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getNavbarConfig = () => {
    if (isEmbedded) return "navbar navbar-embedded";
    if (isMechanical) return "navbar navbar-mechanical";
    return "navbar navbar-default";
  };

  return (
    <>
        <nav
          className={`${getNavbarConfig()} ${
            isHome && !scrolled ? "navbar-hero" : "navbar-solid"
          }`}
        >
        <div className="site-container navbar-inner">

        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          <span></span><span></span><span></span>
        </div>

        <div className="navbar-logo">
          <NavLink to="/">
          <img
            src={isEmbedded || isMechanical ? logoEmbedded : logoDefault}
            alt="Logo"
          />
          </NavLink>
        </div>

        <ul className="navbar-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/mechanical">Mechanical Designs</NavLink></li>
          <li><NavLink to="/embedded">Embedded Designs</NavLink></li>
          <li><NavLink to="/careers">Careers</NavLink></li>
          <li>
            <NavLink to="/contact" className="contact-btn">Contact Us</NavLink>
          </li>
        </ul>

        <div className="language-selector">
          <img src={isEmbedded || isMechanical ? globeBlue : globeIcon} alt="Lang" />
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>

        </div>
      </nav>

      <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)} />

        <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>×</span>
        <ul>
          <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
          <li><NavLink to="/mechanical" onClick={() => setMenuOpen(false)}>Mechanical Designs</NavLink></li>
          <li><NavLink to="/embedded" onClick={() => setMenuOpen(false)}>Embedded Designs</NavLink></li>
          <li><NavLink to="/careers" onClick={() => setMenuOpen(false)}>Careers</NavLink></li>
          <li><NavLink to="/contact" className="contact-btn" onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;
