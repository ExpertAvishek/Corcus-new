import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowRight } from "react-icons/fa";

const OurJourney = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Journey</h1>
      <div className="bg-black text-white rounded p-4 d-flex flex-column flex-md-row justify-content-between">
        
        <div className="flex-fill mb-4 mb-md-0">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <a href="#" className="text-success d-flex align-items-center">
            Learn More <FaArrowRight className="ml-2" />
          </a>
        </div>

        <div className="d-none d-md-block border-left border-secondary mx-3"></div>

        <div className="flex-fill mb-4 mb-md-0">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <a href="#" className="text-success d-flex align-items-center">
            Learn More <FaArrowRight className="ml-2" />
          </a>
        </div>

        <div className="d-none d-md-block border-left border-secondary mx-3"></div>

        <div className="flex-fill">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.
          </p>
          <a href="#" className="text-success d-flex align-items-center">
            Learn More <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
