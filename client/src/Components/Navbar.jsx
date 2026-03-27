import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

import logoDefault from "../assets/images/logob.png";
import logoEmbedded from "../assets/images/logow.png";

import globeIcon from "../assets/icons/icons8-global-language-50 (1).png";
import globeBlue from "../assets/icons/icons8-global-language-48.png";

/* Embedded images */
import pcbImg from "../assets/images/service1.png";
import layoutImg from "../assets/images/service2.png";
import swImg from "../assets/images/service3.png";
import productImg from "../assets/images/service4.png";
import iotImg from "../assets/images/service5.png";
import aiImg from "../assets/images/Picture1.png";

/* Mechanical images */
import sheetImg from "../assets/images/service6.png";
import aluminumImg from "../assets/images/service7.png";
import enclosureImg from "../assets/images/service8.png";
import steelImg from "../assets/images/Picture2.png";
import productDesignImg from "../assets/images/Picture3.png";
import woodImg from "../assets/images/Picture4.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";
  const isEmbeddedPage = location.pathname.startsWith("/embedded");
  const isMechanicalPage = location.pathname.startsWith("/mechanical");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getNavbarConfig = () => {
    if (isEmbeddedPage) return "navbar navbar-embedded";
    if (isMechanicalPage) return "navbar navbar-mechanical";
    return "navbar navbar-default";
  };

  const embeddedServices = [
    {
      title: "PCB Schematic Design",
      image: pcbImg,
      path: "/embedded/pcb-schematic",
    },
    {
      title: "PCB Layout Design",
      image: layoutImg,
      path: "/embedded/pcb-layout",
    },
    {
      title: "Embedded Software Development",
      image: swImg,
      path: "/embedded/embedded-sw",
    },
    {
      title: "Electronic Products Development",
      image: productImg,
      path: "/embedded/product-dev",
    },
    {
      title: "IoT Smart Solutions",
      image: iotImg,
      path: "/embedded/iot",
    },
    {
      title: "AI Integration",
      image: aiImg,
      path: "/embedded/ai",
    },
  ];

  const mechanicalServices = [
    {
      title: "Sheet Metal Design",
      image: sheetImg,
      path: "/mechanical/sheet-metal",
    },
    {
      title: "Aluminum Structure Design",
      image: aluminumImg,
      path: "/mechanical/aluminum",
    },
    {
      title: "Product Enclosure Design",
      image: enclosureImg,
      path: "/mechanical/enclosure",
    },
    {
      title: "Steel Structure Design",
      image: steelImg,
      path: "/mechanical/steel",
    },
    {
      title: "Product Design",
      image: productDesignImg,
      path: "/mechanical/product-design",
    },
    {
      title: "Wood and Furniture Design",
      image: woodImg,
      path: "/mechanical/wood",
    },
  ];

  const renderDropdown = (items) => (
    <div className="mega-dropdown">
      <div className="mega-grid">
        {items.map((item) => (
          <div
            key={item.title}
            className="mega-card"
            onClick={() => navigate(item.path)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate(item.path);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={`${getNavbarConfig()} ${
          isHome && !scrolled ? "navbar-hero" : "navbar-solid"
        }`}
      >
        <div className="site-container navbar-inner">
          <div className="menu-icon" onClick={() => setMenuOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="navbar-logo">
            <NavLink to="/">
              <img
                src={isEmbeddedPage || isMechanicalPage ? logoEmbedded : logoDefault}
                alt="Logo"
              />
            </NavLink>
          </div>

          <ul className="navbar-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>

            <li className="nav-dropdown-item">
              <div
                className={`nav-dropdown-trigger ${
                  isMechanicalPage ? "active-trigger" : ""
                }`}
                onClick={() => navigate("/mechanical")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate("/mechanical");
                  }
                }}
              >
                <span>Mechanical Designs</span>
                <FaChevronDown />
              </div>

              {renderDropdown(mechanicalServices)}
            </li>

            <li className="nav-dropdown-item">
              <div
                className={`nav-dropdown-trigger ${
                  isEmbeddedPage ? "active-trigger" : ""
                }`}
                onClick={() => navigate("/embedded")}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate("/embedded");
                  }
                }}
              >
                <span>Embedded Designs</span>
                <FaChevronDown />
              </div>

              {renderDropdown(embeddedServices)}
            </li>

            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="contact-btn">
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="language-selector">
            <img
              src={isEmbeddedPage || isMechanicalPage ? globeBlue : globeIcon}
              alt="Lang"
            />
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
          </div>
        </div>
      </nav>

      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={() => setMenuOpen(false)}>
          ×
        </span>

        <ul>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink to="/mechanical" onClick={() => setMenuOpen(false)}>
              Mechanical Designs
            </NavLink>
          </li>

          <li>
            <NavLink to="/embedded" onClick={() => setMenuOpen(false)}>
              Embedded Designs
            </NavLink>
          </li>

          <li>
            <NavLink to="/careers" onClick={() => setMenuOpen(false)}>
              Careers
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="contact-btn"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;