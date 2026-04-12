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
import { useLanguage } from "../context/LanguageContext";

export default function GetQuote() {
  const location = useLocation();
  const projectName = location.state?.projectName || "";

  const { language } = useLanguage();
  const isAR = language === "ar";

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="contact-hero-new">
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>

        <div className="contact-hero-container">
          <div className="contact-hero-text">
            <span className="contact-label">
              {isAR ? "طلب عرض سعر" : "GET A QUOTE"}
            </span>

            <h1>
              {isAR ? "اطلب " : "Request a "}
              <span>{isAR ? "عرض سعر" : "Quote"}</span>
              <br />
              {isAR ? "لمشروعك القادم" : "For Your Next Project"}
            </h1>

            <p>
              {isAR
                ? "شارك تفاصيل مشروعك معنا وسنقدم لك عرض سعر مناسب حسب احتياجاتك ونطاق العمل."
                : "Share your project requirements with us and receive a tailored quotation based on your needs, scope, and technical goals."}
            </p>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 700, behavior: "smooth" })
              }
            >
              {isAR ? "ابدأ الطلب" : "Start Your Request"}
            </button>
          </div>

          <div className="contact-hero-image">
            <div className="contact-hero-image-wrap">
              <img
                src={heroImage}
                alt={isAR ? "طلب عرض سعر" : "Get a Quote"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contact-content">
        {/* LEFT */}
        <div className="left-column">
          <div className="contact-form card">
            <h2>{isAR ? "طلب عرض سعر" : "Request a Quote"}</h2>

            <p>
              {isAR
                ? "أدخل تفاصيل مشروعك وسنقوم بإرسال عرض مناسب لك."
                : "Share your project details with us and we’ll provide you with a tailored quotation."}
            </p>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    {isAR ? "الاسم الكامل" : "Full Name"} <span>*</span>
                  </label>
                  <input type="text" required />
                </div>

                <div className="form-group">
                  <label>
                    {isAR ? "البريد الإلكتروني" : "Email Address"} <span>*</span>
                  </label>
                  <input type="email" required />
                </div>
              </div>

              <div className="form-group phone-group">
                <label>
                  {isAR ? "رقم الهاتف" : "Phone Number"} <span>*</span>
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

              <div className="form-group">
                <label>
                  {isAR ? "اسم المشروع" : "Project Name"} <span>*</span>
                </label>
                <input type="text" value={projectName} readOnly />
              </div>

              <div className="form-group">
                <label>
                  {isAR ? "الميزانية المتوقعة" : "Estimated Budget"} <span>*</span>
                </label>
                <input
                  type="number"
                  placeholder={isAR ? "مثال: 5000 دولار" : "e.g. 5000 USD"}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  {isAR ? "الرسالة" : "Message"} <span>*</span>
                </label>
                <textarea rows="5" required />
              </div>

              <button type="submit">
                {isAR ? "إرسال الطلب" : "Submit Request"}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right-column">
          <div className="contact-info card">
            <h3>{isAR ? "معلومات التواصل" : "Contact Information"}</h3>

            <div className="info-item">
              <FaMapMarkerAlt />
              <div>
                <strong>{isAR ? "الموقع" : "Location"}</strong>
                <p>{isAR ? "رام الله - فلسطين" : "Ramallah, Palestine"}</p>
              </div>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <div>
                <strong>{isAR ? "البريد" : "Email"}</strong>
                <p>info@NDL.com</p>
              </div>
            </div>

            <div className="social-icons">
              <FaLinkedinIn />
              <FaFacebookF />
              <FaWhatsapp />
            </div>
          </div>

          <div className="business-hours card">
            <h3>
              <FaClock /> {isAR ? "ساعات العمل" : "Business Hours"}
            </h3>

            <div className="hours-row">
              <span>{isAR ? "الأحد - الخميس" : "Sunday - Thursday"}</span>
              <strong>9:00 - 5:00</strong>
            </div>

            <div className="hours-row">
              <span>{isAR ? "الجمعة - السبت" : "Friday - Saturday"}</span>
              <strong>{isAR ? "مغلق" : "Closed"}</strong>
            </div>

            <div className="response-time">
              {isAR ? "الرد خلال 24 ساعة" : "Response within 24 hours"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}