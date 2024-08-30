import React, { useState } from "react";
import "../../styles/contactUs.css"; // Import the CSS file
import { useScroll } from "./ScrollProvider";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const { contactRef } = useScroll();

  return (
    <div className="container">
      <div className="contactus-container" ref={contactRef} id="contactus">
        <h2>Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="contactus-form"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contactus-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
