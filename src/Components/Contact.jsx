import React from 'react';

const Contact = () => {
  return (
    <div className="page-container">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have a question about your order or want to partner with us? Drop us a line!</p>
          
          <div className="info-item">
            <span className="icon">📍</span>
            <p><strong>Headquarters:</strong> Delhi NCR, India</p>
          </div>
          <div className="info-item">
            <span className="icon">📧</span>
            <p><strong>Email:</strong> support@foodiezone.com</p>
          </div>
          <div className="info-item">
            <span className="icon">📞</span>
            <p><strong>Phone:</strong> +91 0000000000</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="How can we help you?" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;