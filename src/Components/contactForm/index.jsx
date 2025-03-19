import { useState } from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="shadow-lg p-5 rounded bg-white position-relative w-90"
        style={{ maxWidth: "1500px" }}
      >
        {/* Social Icons inside container (right side vertically aligned) */}
        <div className="position-absolute top-50 end-0 translate-middle-y d-flex flex-column gap-3 fs-4">
          <a href="#" className="text-dark">
            <FaLinkedin />
          </a>
          <a href="#" className="text-dark">
            <FaInstagram />
          </a>
          <a href="#" className="text-dark">
            <FaFacebook />
          </a>
        </div>

        <div className="row">
          {/* Left Side Text */}
          <div className="col-md-6 p-4">
            <h2 className="fw-bold">LET’S DISCUSS</h2>
            <h3 className="fw-bold mt-2">YOUR NEXT PROJECT</h3>
            <p className="mt-3 text-muted">
              <strong>Ready to turn your vision into reality?</strong> Whether
              you need branding, web design, packaging, or digital marketing,
              we’re here to help. Let’s brainstorm, create, and bring your ideas
              to life.
            </p>
            <button className="btn btn-dark mt-3">BOOK AN APPOINTMENT</button>
          </div>

          {/* Right Side Form */}
          <div className="col-md-6 p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Angled Marquee inside Contact Box */}
        <div
          className="w-100 mt-3 overflow-hidden"
          style={{ transform: "rotate(-10deg)" }}
        >
          <Marquee className="bg-dark text-white py-2 fw-bold text-uppercase">
            Reach Us &nbsp; Reach Us &nbsp; Reach Us &nbsp; Reach Us &nbsp;
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
