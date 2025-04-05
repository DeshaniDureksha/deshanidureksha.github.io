import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! I will get back to you soon.'
    });

    setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container" id="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p className="contact-description">
            I'm currently available for freelance work, internships, and collaborative projects.
            If you have any questions or want to work together, feel free to contact me using the form or through my contact details below.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-location-dot"></i>
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>No. 56, Vivekananda Rd, Colombo 06</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>deshanidureksha123@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+94 (71) 190 9744</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/deshani-dureksha" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/DeshaniDureksha" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            {formStatus.message && (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}

            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary send-btn">
              Send Message <span className="send-icon">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
