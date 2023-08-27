// ContactMe.jsx

import React from 'react';
import '../styles/contactMe.scss';

const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission, e.g., send data to an API
    console.log('Form submitted');
  };


  
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactMe;
