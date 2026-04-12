import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

import { useLanguage } from "../context/LanguageContext";

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
  const desktopDropdownRef = useRef(null);

  const { language, setLanguage } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isHome = location.pathname === "/";
  const isEmbeddedPage = location.pathname.startsWith("/embedded");
  const isMechanicalPage = location.pathname.startsWith("/mechanical");
  const isCareersPage = location.pathname === "/careers";
  const isContactPage =
    location.pathname === "/contact" || location.pathname === "/get-a-quote";
  const isAboutPage = location.pathname === "/about";

  const hasHeroPage =
    isHome ||
    isEmbeddedPage ||
    isMechanicalPage ||
    isCareersPage ||
    isContactPage ||
    isAboutPage;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenMobileSection(null);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getText = (en, ar) => {
    return language === "ar" ? ar : en;
  };

  const getNavbarConfig = () => {
    if (isEmbeddedPage) return "navbar navbar-embedded";
    if (isMechanicalPage) return "navbar navbar-mechanical";
    return "navbar navbar-default";
  };

  const embeddedServices = [
    {
      id: "pcbSchematic",
      title: getText("PCB Schematic Design", "تصميم مخططات PCB"),
      image: pcbImg,
      path: "/embedded/pcb-schematic",
    },
    {
      id: "pcbLayout",
      title: getText("PCB Layout Design", "تصميم PCB Layout"),
      image: layoutImg,
      path: "/embedded/pcb-layout",
    },
    {
      id: "embeddedSoftware",
      title: getText(
        "Embedded Software Development",
        "تطوير برمجيات الأنظمة المدمجة"
      ),
      image: swImg,
      path: "/embedded/embedded-sw",
    },
    {
      id: "electronicProducts",
      title: getText(
        "Electronic Products Development",
        "تطوير المنتجات الإلكترونية"
      ),
      image: productImg,
      path: "/embedded/product-dev",
    },
    {
      id: "iotSolutions",
      title: getText("IoT Smart Solutions", "حلول إنترنت الأشياء الذكية"),
      image: iotImg,
      path: "/embedded/iot",
    },
    {
      id: "aiIntegration",
      title: getText("AI Integration", "دمج الذكاء الاصطناعي"),
      image: aiImg,
      path: "/embedded/ai",
    },
  ];

  const mechanicalServices = [
    {
      id: "sheetMetal",
      title: getText("Sheet Metal Design", "تصميم الصفائح المعدنية"),
      image: sheetImg,
      path: "/mechanical/sheet-metal",
    },
    {
      id: "aluminumStructure",
      title: getText("Aluminum Structure Design", "تصميم هياكل الألمنيوم"),
      image: aluminumImg,
      path: "/mechanical/aluminum",
    },
    {
      id: "enclosure",
      title: getText("Product Enclosure Design", "تصميم أغلفة المنتجات"),
      image: enclosureImg,
      path: "/mechanical/enclosure",
    },
    {
      id: "steelStructure",
      title: getText("Steel Structure Design", "تصميم الهياكل الفولاذية"),
      image: steelImg,
      path: "/mechanical/steel",
    },
    {
      id: "productDesign",
      title: getText("Product Design", "تصميم المنتجات"),
      image: productDesignImg,
      path: "/mechanical/product-design",
    },
    {
      id: "woodFurniture",
      title: getText("Wood and Furniture Design", "تصميم الخشب والأثاث"),
      image: woodImg,
      path: "/mechanical/wood",
    },
  ];

  const toggleDesktopDropdown = (section) => {
    setOpenDropdown((prev) => (prev === section ? null : section));
  };

  const renderDropdown = (items, section) => (
    <div className={`mega-dropdown ${openDropdown === section ? "open" : ""}`}>
      <div className="mega-grid">
        {items.map((item) => (
          <div
            key={item.id}
            className="mega-card"
            onClick={() => {
              navigate(item.path);
              setOpenDropdown(null);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                navigate(item.path);
                setOpenDropdown(null);
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

  const toggleMobileSection = (section) => {
    setOpenMobileSection((prev) => (prev === section ? null : section));
  };

  const renderMobileServiceCards = (items) =>
    items.map((service) => (
      <li key={service.id}>
        <NavLink to={service.path} onClick={() => setMenuOpen(false)}>
          <div className="sidebar-service-card">
            <img src={service.image} alt={service.title} />
            <span>{service.title}</span>
          </div>
        </NavLink>
      </li>
    ));

  return (
    <>
      <nav
        className={`${getNavbarConfig()} ${
          hasHeroPage && !scrolled ? "navbar-hero" : "navbar-solid"
        }`}
      >
        <div className="site-container navbar-inner">
          {!menuOpen ? (
            <div className="menu-icon" onClick={() => setMenuOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            <button
              className="nav-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label={getText("Close menu", "إغلاق القائمة")}
              type="button"
            >
              ×
            </button>
          )}

          <div className="navbar-logo">
            <NavLink to="/">
              <img
                src={
                  hasHeroPage && !scrolled
                    ? logoDefault
                    : isEmbeddedPage || isMechanicalPage
                    ? logoEmbedded
                    : logoDefault
                }
                alt="Logo"
              />
            </NavLink>
          </div>

          <ul className="navbar-links" ref={desktopDropdownRef}>
            <li>
              <NavLink to="/" end>
                {getText("Home", "الرئيسية")}
              </NavLink>
            </li>

            <li>
              <NavLink to="/about">{getText("About Us", "من نحن")}</NavLink>
            </li>

            <li className="nav-dropdown-item">
              <div
                className={`nav-dropdown-trigger ${
                  isMechanicalPage || openDropdown === "mechanical"
                    ? "active-trigger"
                    : ""
                }`}
              >
                <span
                  className="nav-dropdown-title"
                  onClick={() => {
                    navigate("/mechanical");
                    setOpenDropdown(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate("/mechanical");
                      setOpenDropdown(null);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {getText("Mechanical Designs", "التصاميم الميكانيكية")}
                </span>

                <FaChevronDown
                  className={openDropdown === "mechanical" ? "rotate" : ""}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDesktopDropdown("mechanical");
                  }}
                />
              </div>

              {renderDropdown(mechanicalServices, "mechanical")}
            </li>

            <li className="nav-dropdown-item">
              <div
                className={`nav-dropdown-trigger ${
                  isEmbeddedPage || openDropdown === "embedded"
                    ? "active-trigger"
                    : ""
                }`}
              >
                <span
                  className="nav-dropdown-title"
                  onClick={() => {
                    navigate("/embedded");
                    setOpenDropdown(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate("/embedded");
                      setOpenDropdown(null);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {getText("Embedded Designs", "التصاميم المدمجة")}
                </span>

                <FaChevronDown
                  className={openDropdown === "embedded" ? "rotate" : ""}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDesktopDropdown("embedded");
                  }}
                />
              </div>

              {renderDropdown(embeddedServices, "embedded")}
            </li>

            <li>
              <NavLink to="/careers">{getText("Careers", "الوظائف")}</NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="contact-btn">
                {getText("Contact Us", "تواصل معنا")}
              </NavLink>
            </li>
          </ul>

          <div className="language-selector">
            <img
              src={
                hasHeroPage && !scrolled
                  ? globeIcon
                  : isEmbeddedPage || isMechanicalPage
                  ? globeBlue
                  : globeIcon
              }
              alt={getText("Language", "اللغة")}
            />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label={getText("Language", "اللغة")}
            >
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
        <ul className="sidebar-links">
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              {getText("Home", "الرئيسية")}
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              {getText("About Us", "من نحن")}
            </NavLink>
          </li>

          <li className="sidebar-group">
            <div
              className="sidebar-group-title"
              onClick={() => toggleMobileSection("mechanical")}
            >
              <span>{getText("Mechanical Designs", "التصاميم الميكانيكية")}</span>
              <FaChevronDown
                className={openMobileSection === "mechanical" ? "rotate" : ""}
              />
            </div>

            <ul
              className={`sidebar-submenu sidebar-cards ${
                openMobileSection === "mechanical" ? "open" : ""
              }`}
            >
              {renderMobileServiceCards(mechanicalServices)}
            </ul>
          </li>

          <li className="sidebar-group">
            <div
              className="sidebar-group-title"
              onClick={() => toggleMobileSection("embedded")}
            >
              <span>{getText("Embedded Designs", "التصاميم المدمجة")}</span>
              <FaChevronDown
                className={openMobileSection === "embedded" ? "rotate" : ""}
              />
            </div>

            <ul
              className={`sidebar-submenu sidebar-cards ${
                openMobileSection === "embedded" ? "open" : ""
              }`}
            >
              {renderMobileServiceCards(embeddedServices)}
            </ul>
          </li>

          <li>
            <NavLink to="/careers" onClick={() => setMenuOpen(false)}>
              {getText("Careers", "الوظائف")}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="contact-btn"
              onClick={() => setMenuOpen(false)}
            >
              {getText("Contact Us", "تواصل معنا")}
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Navbar;