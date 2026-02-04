import React from "react";
import "./Contact.css";
import heroImage from "../assets/images/6852140_28535.jpg";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <img src={heroImage} alt="Contact Us" />
        <div className="contact-hero-overlay">
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        {/* LEFT SIDE */}
        <div className="left-column">
          {/* FORM CARD */}
          <div className="contact-form card">
            <h2>Get in Touch</h2>
            <p>
              Have questions or want to work with us? Fill out the form below and
              we’ll get back to you shortly.
            </p>

            <form>
            {/* Full Name + Email */}
            <div className="form-row">
                <div className="form-group">
                <label>
                    Full Name <span>*</span>
                </label>
                <input type="text" placeholder="Your name" maxLength={50} required />
                <small>0/50 characters</small>
                </div>

                <div className="form-group">
                <label>
                    Email Address <span>*</span>
                </label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    required
                />
                </div>
            </div>

            {/* Company + Phone */}
            <div className="form-row">
                <div className="form-group">
                <label>Company Name (Optional)</label>
                <input type="text" placeholder="Your company" maxLength={100} />
                <small>0/100 characters</small>
                </div>

                <div className="form-group phone-group">
                <label>
                    Phone Number <span>*</span>
                </label>
                <div className="phone-row">
                    <select>
                    <option>+966</option>
                    <option>+970</option>
                    <option>+972</option>
                    </select>
                    <input type="text" placeholder="Phone number" required />
                </div>
                </div>
            </div>

            {/* Subject */}
            <div className="form-group">
                <label>
                Subject <span>*</span>
                </label>
                <input
                type="text"
                placeholder="How can we help you?"
                maxLength={100}
                required
                />
                <small>0/100 characters</small>
            </div>

            {/* Message */}
            <div className="form-group">
                <label>
                Message <span>*</span>
                </label>
                <textarea
                placeholder="Describe your project or inquiry"
                rows="5"
                maxLength={1000}
                required
                ></textarea>
                <small>0/1000 characters</small>
            </div>

            <button type="submit">Send Message</button>
            </form>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-column">
          {/* CONTACT INFO CARD */}
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

          {/* BUSINESS HOURS CARD */}
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
