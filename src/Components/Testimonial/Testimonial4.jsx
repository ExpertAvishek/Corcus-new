import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonial4 = () => {
  return (
    <div className="bg-light d-flex flex-column align-items-center justify-content-center min-vh-100 p-4">
      <div className="text-center mb-4">
        <h1 className="display-4 font-weight-bold text-dark">CLIENT</h1>
        <h2 className="display-3 font-weight-bold text-dark">FEEDBACK</h2>
      </div>
      <div className="d-flex align-items-center justify-content-end w-100">
        <button className="btn btn-warning text-white rounded-circle mr-2">
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-end w-100">
          <div className="card text-center m-2" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Dan Gabreil</h5>
              <h6 className="card-subtitle mb-2 text-muted">Marketing Head | Coinsafe VPN</h6>
              <div className="my-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </div>
              <p className="card-text">Working with Doodlo was a Game changer for us. They revamped our brand and website with unmatched creativity & precision. Their team's dedication and attention to detail is truly impressive. Highly recommended for design</p>
            </div>
          </div>
          <div className="card text-center m-2" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Charu Jain</h5>
              <h6 className="card-subtitle mb-2 text-muted">Marketing Head | Rishabh Industries Pvt.Ltd</h6>
              <div className="my-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </div>
              <p className="card-text">Doodlo Guys hyped our packaging design! Their creativity and attention to detail brought our product to life in ways we never imagined. We couldn't be more pleased with the outcome!</p>
            </div>
          </div>
          <div className="card text-center m-2" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Norman Dental</h5>
              <h6 className="card-subtitle mb-2 text-muted">CEO | Wurth Industries</h6>
              <div className="my-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </div>
              <p className="card-text">Doodlo is definitely the right choice for our coffee table Project. The team came up with unique set of ideas that clearly sets us apart from being normal. We are very happy with the final book importantly very constructive and flexible collab. Good work</p>
            </div>
          </div>
          <div className="card text-center m-2" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title font-weight-bold">Monika K</h5>
              <h6 className="card-subtitle mb-2 text-muted">Founder | K99 Solutions</h6>
              <div className="my-2">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </div>
              <p className="card-text">You guys nailed it! Their work on our brand and website was absolutely top-notch. It was so good to check the final results. From content to design everything exceeded our expectations.</p>
            </div>
          </div>
        </div>
        <button className="btn btn-warning text-white rounded-circle ml-2">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Testimonial4;

