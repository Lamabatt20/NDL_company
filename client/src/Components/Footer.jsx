import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/images/logob.png"; 

import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <img src={logo} alt="NDL Logo" className="footer-logo" />

          <p className="footer-tagline">
            From concept to creation. <br />
            Innovative engineering & design solutions.
          </p>

          <button
            className="scroll-top"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            ↑
          </button>
        </div>

        {/* NAV LINKS */}
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/mechanical">Mechanical Designs</NavLink></li>
            <li><NavLink to="/embedded">Embedded Designs</NavLink></li>
            <li><NavLink to="/careers">Careers</NavLink></li>
            <li>
              <NavLink to="/contact" className="contact-btn">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>

          <p>
            <strong>Email:</strong><br />
            <a href="mailto:info@NDL.com">
              info@NDL.com
            </a>
          </p>

          <p>
            <strong>Location:</strong><br />
            Ramallah – Palestine
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
          © 2026 NDL. All rights reserved.
        </div>
        </div>
        </div>
    </footer>
  );
}


