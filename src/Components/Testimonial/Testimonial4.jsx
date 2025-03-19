import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Testimonial4 = () => {
  return (
    <div className="container py-5">
      <div className="feedback-title">
        <h1>CLIENT</h1>
        <h2>FEEDBACK</h2>
      </div>
      <div className="row mt-4">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="feedback-card">
            <h3>Dan Gabreil</h3>
            <p>Marketing Head | Coinsafe VPN</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="feedback-text">Corcus Studio transformed our online presence. Our ROAS doubled in just 3 months
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="feedback-card">
            <h3>Charu Jain</h3>
            <p>Marketing Head | Rishabh Industries Pvt</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="feedback-text"> Exceptional team! Their ad campaigns brought us quality leads at an unbeatable cost.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="feedback-card">
            <h3>Norman Dental</h3>
            <p>CEO | Wurth Industries</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="feedback-text">The best decision we made for our brand! Their creative team and ad strategy are top-notch.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="feedback-card">
            <h3>Monika K</h3>
            <p>Founder | K99 Solutions</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p className="feedback-text">I would highly recommend Corcus Studio to anyone looking for top-tier design services.</p>
          </div>
        </div>
      </div>
      <div className="navigation-buttons">
        <button>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};
export default Testimonial4;
 