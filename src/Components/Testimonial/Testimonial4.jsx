import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

const ClientFeedback = () => {
  return (
    <div className="bg-white py-5">
      <div className="container text-center mb-5">
        <h1 className="display-4 font-weight-bold">CLIENT</h1>
        <h2 className="display-3 font-weight-bold">FEEDBACK</h2>
      </div>
      <div className="container d-flex align-items-center justify-content-between">
        <button className="btn btn-link text-warning display-4">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div className="row w-100">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Dan Gabreil</h5>
                <h6 className="card-subtitle mb-2 text-muted">Marketing Head | Coinsafe VPN</h6>
                <div className="text-warning mb-3">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="card-text">Working with Doodlo was a Game changer for us. They revamped our brand and website with unmatched creativity & precision. Their team's dedication and attention to detail is truly impressive. Highly recommended for design</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Charu Jain</h5>
                <h6 className="card-subtitle mb-2 text-muted">Marketing Head | Rishabh Industries Pvt Ltd</h6>
                <div className="text-warning mb-3">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="card-text">Doodlo Guys hyped our packaging design! Their creativity and attention to detail brought our product to life in ways we never imagined. couldn't be more pleased with the outcome!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Norman Dental</h5>
                <h6 className="card-subtitle mb-2 text-muted">CEO | Wurth Industries</h6>
                <div className="text-warning mb-3">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="card-text">Doodlo is definitely the right choice for our coffee table Project. The team came up with unique set of ideas that clearly sets us apart from being normal. We are very happy with the final book importantly very constructive and flexible collab. Good work</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Monika K</h5>
                <h6 className="card-subtitle mb-2 text-muted">Founder | K99 Solutions</h6>
                <div className="text-warning mb-3">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <p className="card-text">You guys nailed it! Their work on our brand and website was absolutely top- notch. It was so good to check the final results. From content to design everything exceeded our expectations.</p>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-link text-warning display-4">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ClientFeedback;
