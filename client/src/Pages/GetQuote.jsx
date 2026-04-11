import React from "react";
import { useLocation } from "react-router-dom";
import "./Contact.css";
import heroImage from "../assets/images/co.png";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function GetQuote() {
  const location = useLocation();
  const projectName = location.state?.projectName || "";

  return (
    <div className="contact-page">
            {/* HERO */}
      <section className="contact-hero-new">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>

        <div className="contact-hero-container">
          <div className="contact-hero-text">
            <span className="contact-label">GET A QUOTE</span>

            <h1>
              Request a <span>Quote</span>
              <br />
              For Your Next Project
            </h1>

            <p>
              Share your project requirements with us and receive a tailored
              quotation based on your needs, scope, and technical goals.
            </p>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 700, behavior: "smooth" })
              }
            >
              Start Your Request
            </button>
          </div>

          <div className="contact-hero-image">
            <div className="contact-hero-image-wrap">
              <img src={heroImage} alt="Get a Quote Illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        {/* LEFT SIDE – FORM */}
        <div className="left-column">
          <div className="contact-form card">
            <h2>Request a Quote</h2>
            <p>
              Share your project details with us and we’ll provide you with a
              tailored quotation.
            </p>

            <form>
              {/* Full Name + Email */}
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Full Name <span>*</span>
                  </label>
                  <input type="text" required />
                </div>

                <div className="form-group">
                  <label>
                    Email Address <span>*</span>
                  </label>
                  <input type="email" required />
                </div>
              </div>

              {/* Phone */}
              <div className="form-group phone-group">
                <label>
                  Phone Number <span>*</span>
                </label>
                <div className="phone-row">
                  <select>
                    <option>+970</option>
                    <option>+972</option>
                    <option>+966</option>
                  </select>
                  <input type="text" required />
                </div>
              </div>

              {/* Project Name (auto-filled) */}
              <div className="form-group">
                <label>
                  Project Name <span>*</span>
                </label>
                <input
                  type="text"
                  value={projectName}
                  readOnly
                />
              </div>

              {/* Budget */}
              <div className="form-group">
                <label>
                  Estimated Budget <span>*</span>
                </label>
                <input
                  type="number"
                  placeholder="e.g. 5000 USD"
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label>
                  Message <span>*</span>
                </label>
                <textarea rows="5" required />
              </div>

              <button type="submit">Submit Request</button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE – SAME AS CONTACT */}
        <div className="right-column">
          {/* CONTACT INFO */}
          <div className="contact-info card">
            <h3>Contact Information</h3>

            <div className="info-item">
              <div className="info-icon location">
                <FaMapMarkerAlt />
              </div>
              <div>
                <strong>Location</strong>
                <p>Ramallah, Palestine</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon email">
                <FaEnvelope />
              </div>
              <div>
                <strong>Email</strong>
                <p>info@NDL.com</p>
              </div>
            </div>

            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/970599000000"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* BUSINESS HOURS */}
          <div className="business-hours card">
            <h3>
              <span className="clock-icon">
                <FaClock />
              </span>
              Business Hours
            </h3>

            <div className="hours-row">
              <span>Sunday - Thursday</span>
              <strong>9:00 AM - 5:00 PM</strong>
            </div>

            <div className="hours-row">
              <span>Friday - Saturday</span>
              <strong>Closed</strong>
            </div>

            <div className="response-time">
              Response Time: Within 24 hours during business days
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
