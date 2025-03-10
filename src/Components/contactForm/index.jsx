import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';


const ContactForm = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-white">
      <div className="contact-form container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h1 className="display-4">LET'S DISCUSS</h1>
            <h2 className="h2">YOUR NEXT PROJECT</h2>
            <p className="lead">
              <strong>Ready to turn your vision into reality?</strong> Whether you need branding, web design, packaging, or digital marketing, we're here to help. Let's brainstorm, create, and bring your ideas to life.
            </p>
            <button className="btn btn-custom px-4 py-2">BOOK AN APPOINTMENT</button>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name:</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">Contact Number:</label>
                <input type="text" className="form-control" id="contact" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message:</label>
                <textarea className="form-control" id="message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-custom px-4 py-2">Submit</button>
            </form>
            <div className="social-icons mt-4">
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
