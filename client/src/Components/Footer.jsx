import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/images/logob.png";
import { useLanguage } from "../context/LanguageContext";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const { language } = useLanguage();
  const isAR = language === "ar";

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-container">
          <div className="footer-brand">
            <img src={logo} alt="NDL Logo" className="footer-logo" />

            <p className="footer-tagline">
              {isAR ? (
                <>
                  من الفكرة إلى التنفيذ. <br />
                  حلول هندسية وتصميمية مبتكرة.
                </>
              ) : (
                <>
                  From concept to creation. <br />
                  Innovative engineering & design solutions.
                </>
              )}
            </p>

            <button
              className="scroll-top"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              aria-label={isAR ? "العودة إلى الأعلى" : "Scroll to top"}
            >
              ↑
            </button>
          </div>

          <div className="footer-nav">
            <h4>{isAR ? "روابط سريعة" : "Quick Links"}</h4>
            <ul>
              <li>
                <NavLink to="/" end>
                  {isAR ? "الرئيسية" : "Home"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  {isAR ? "من نحن" : "About Us"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/mechanical">
                  {isAR ? "التصاميم الميكانيكية" : "Mechanical Designs"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/embedded">
                  {isAR ? "التصاميم المدمجة" : "Embedded Designs"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/careers">
                  {isAR ? "الوظائف" : "Careers"}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="contact-btn">
                  {isAR ? "تواصل معنا" : "Contact Us"}
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{isAR ? "التواصل" : "Contact"}</h4>

            <p>
              <strong>{isAR ? "البريد الإلكتروني:" : "Email:"}</strong>
              <br />
              <a href="mailto:info@NDL.com">info@NDL.com</a>
            </p>

            <p>
              <strong>{isAR ? "الموقع:" : "Location:"}</strong>
              <br />
              {isAR ? "رام الله – فلسطين" : "Ramallah – Palestine"}
            </p>

            <div className="footer-social">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/970599000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            {isAR
              ? "© 2026 NDL. جميع الحقوق محفوظة."
              : "© 2026 NDL. All rights reserved."}
          </div>
        </div>
      </div>
    </footer>
  );
}