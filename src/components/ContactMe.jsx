// ContactMe.jsx

import React from 'react';
import '../styles/contactMe.scss';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    emailjs
      .send(
        'service_oh0vc9s',
        'template_e9kecsx',
        templateParams,
        '6-XXak9coBW6-d6bV'
      )
      .then(
        (response) => {
          console.log(
            'Email sent successfully!',
            response.status,
            response.text
          );
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Failed to send email. Please try again.');
        }
      );
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
