import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Why = () => {
  return (
    <div className="container py-5">
      <div className="text-left">
        <h1
          className="display-3 fw-bold"
          style={{
            WebkitTextStroke: "2px black", // Stroke effect
            color: "transparent", // Removes fill color
          }}
        >
          WHAT
        </h1>

        <h2 className="display-2 font-weight-bolder text-dark"           style={{
            WebkitTextStroke: "3px black", // Stroke effect
          }}>SETS US APART</h2>
        <div className="mt-4">
          <i className="fas fa-chevron-down text-muted"></i>
          <i className="fas fa-chevron-down text-muted ml-2"></i>
          <i className="fas fa-chevron-down text-warning ml-2"></i>
        </div>
      </div>
      <div className="row mt-5">
        {/* Image Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src=""
            alt="Placeholder image for the section"
            className="img-fluid"
          />
        </div>
        {/* Content Section */}
        <div className="col-lg-6">
          <div className="d-flex align-items-center mb-4 gap-4">
            <div className="text-black display-4">01</div>
            <img
              src="https://storage.googleapis.com/a1aa/image/9ZqNSBt3oECYmUYDesZIM36AoeRPtgH-KYeGSYY2a8M.jpg"
              alt="Icon representing innovation-driven strategies"
              width="40"
              height="40"
            />
            <div>
              <h3 className="h5 fw-bold mb-2">
                Innovation-Driven Strategies
              </h3>
              <p className="mb-0">We believe in staying ahead of the curve.</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4 gap-4">
            <div className="text-black display-4">02</div>
            <img
              src="https://storage.googleapis.com/a1aa/image/AtJo7pNfsjd8A4DJMLCF7ZFn03dpM-V6XeyR-zgLYok.jpg"
              alt="Icon representing client-centric approach"
              width="40"
              height="40"
            />
            <div>
              <h3 className="h5 fw-bold mb-2">Client-Centric Approach</h3>
              <p className="mb-0">Our clients are at the heart of everything we do.</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4 gap-4">
            <div className="text-black display-4">03</div>
            <img
              src="https://storage.googleapis.com/a1aa/image/sEMFNr7IaSRRRL_igj1N1pKaiP-wQSEu4iKfXSlZFyU.jpg"
              alt="Icon representing industry expertise"
              width="40"
              height="40"
            />
            <div>
              <h3 className="h5 fw-bold mb-2">Industry Expertise</h3>
              <p className="mb-0">Trust is the foundation of all successful partnerships.</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4 gap-4">
            <div className="text-black display-4">04</div>
            <img
              src="https://storage.googleapis.com/a1aa/image/1VRK4AsD_Q0mpk6flDadeSnpuigkkjP8KHgmQd8T4kM.jpg"
              alt="Icon representing client-centric focus"
              width="40"
              height="40"
            />
            <div>
              <h3 className="h5 fw-bold mb-2">Client-Centric Focus</h3>
              <p className="mb-0">Our mission is to generate measurable outcomes.</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4 gap-4">
            <div className="text-black display-4">05</div>
            <img
              src="https://storage.googleapis.com/a1aa/image/4QPwVTyLY0P-zNbwLhz1XUbsx2-sYOGXeXfHScYTfao.jpg"
              alt="Icon representing collaboration and teamwork"
              width="40"
              height="40"
            />
            <div>
              <h3 className="h5 fw-bold mb-2">
                Collaboration and Teamwork
              </h3>
              <p className="mb-0">Trust is the foundation of all successful partnerships.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
