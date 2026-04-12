import React from "react";
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

export default function Contact() {
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
              {isAR ? "تواصل مع NDL" : "CONTACT NDL"}
            </span>

            <h1>
              {isAR ? "دعنا " : "Let’s "}
              <span>{isAR ? "نتواصل" : "Connect"}</span>
              <br />
              {isAR
                ? "ونبني شيئًا رائعًا"
                : "And Build Something Great"}
            </h1>

            <p>
              {isAR
                ? "سواء كان لديك سؤال أو فكرة مشروع أو فرصة تعاون، نحن جاهزون لمساعدتك."
                : "Whether you have a question, project idea, or collaboration opportunity, our team is ready to help you turn your vision into reality."}
            </p>

            <button
              onClick={() =>
                window.scrollTo({ top: 600, behavior: "smooth" })
              }
            >
              {isAR ? "ابدأ التواصل" : "Get in Touch"}
            </button>
          </div>

          <div className="contact-hero-image">
            <div className="contact-hero-image-wrap">
              <img
                src={heroImage}
                alt={isAR ? "تواصل" : "Contact Illustration"}
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
            <h2>{isAR ? "تواصل معنا" : "Get in Touch"}</h2>

            <p>
              {isAR
                ? "هل لديك سؤال أو ترغب بالعمل معنا؟ املأ النموذج وسنرد عليك قريبًا."
                : "Have questions or want to work with us? Fill out the form below and we’ll get back to you shortly."}
            </p>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    {isAR ? "الاسم الكامل" : "Full Name"} <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={isAR ? "اسمك" : "Your name"}
                  />
                </div>

                <div className="form-group">
                  <label>
                    {isAR ? "البريد الإلكتروني" : "Email"} <span>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder={isAR ? "example@mail.com" : "you@example.com"}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    {isAR ? "الشركة (اختياري)" : "Company"}
                  </label>
                  <input
                    type="text"
                    placeholder={isAR ? "اسم الشركة" : "Your company"}
                  />
                </div>

                <div className="form-group phone-group">
                  <label>
                    {isAR ? "رقم الهاتف" : "Phone"} <span>*</span>
                  </label>
                  <div className="phone-row">
                    <select>
                      <option>+970</option>
                      <option>+966</option>
                      <option>+972</option>
                    </select>
                    <input
                      type="text"
                      placeholder={isAR ? "رقم الهاتف" : "Phone number"}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>
                  {isAR ? "الموضوع" : "Subject"} <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder={
                    isAR ? "كيف يمكننا مساعدتك؟" : "How can we help?"
                  }
                />
              </div>

              <div className="form-group">
                <label>
                  {isAR ? "الرسالة" : "Message"} <span>*</span>
                </label>
                <textarea
                  rows="5"
                  placeholder={
                    isAR
                      ? "اشرح فكرتك أو طلبك"
                      : "Describe your project"
                  }
                ></textarea>
              </div>

              <button type="submit">
                {isAR ? "إرسال" : "Send Message"}
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
              <FaClock />{" "}
              {isAR ? "ساعات العمل" : "Business Hours"}
            </h3>

            <div className="hours-row">
              <span>
                {isAR ? "الأحد - الخميس" : "Sunday - Thursday"}
              </span>
              <strong>9:00 - 5:00</strong>
            </div>

            <div className="hours-row">
              <span>
                {isAR ? "الجمعة - السبت" : "Friday - Saturday"}
              </span>
              <strong>{isAR ? "مغلق" : "Closed"}</strong>
            </div>

            <div className="response-time">
              {isAR
                ? "الرد خلال 24 ساعة"
                : "Response within 24 hours"}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}