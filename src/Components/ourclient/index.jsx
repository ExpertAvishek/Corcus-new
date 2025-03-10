import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Client = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}+`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = `${target}+`;
        }
      };
      updateCounter();
    });
  }, []);

  return (
    <div className="container py-5 bg-gradient">
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-left">
          <h1 className="display-4 font-weight-bold">OUR</h1>
          <h2 className="display-3 font-weight-bold">CLIENTELE</h2>
        </div>
        <div className="text-right">
          <p className="h5 text-primary">Trusted by 1000K plus customers</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-6 col-md-3 mb-4">
          <img src="public\assets\clients\01.png" alt="Fresh On Need logo" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src="public\assets\clients\02.png" alt="Dr. Punkesh's logo" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src="public\assets\clients\03.png" alt="Birla Open Minds logo" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src="public\assets\clients\04.png" alt="Fresh Supermall logo" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src="public\assets\clients\05.png" alt="Jiffit logo" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src="public\assets\clients\06.png" alt="Murga logo" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src="public\assets\clients\07.png" alt="Haridwar Farm logo" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src="public\assets\clients\08.png" alt="Paidavaar logo" className="img-fluid" />
        </div>
        <div className="col-6 col-md-3 mb-4">
          <img src="public\assets\clients\09.png" alt="Satguru Textiles logo" className="img-fluid" />
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-6 col-md-2 mb-4">
          <p className="display-4 font-weight-bold counter" data-target="387">0</p>
          <p className="h5">Project Delivered & Counting</p>
        </div>
        <div className="col-6 col-md-2 mb-4">
          <p className="display-4 font-weight-bold counter" data-target="22">0</p>
          <p className="h5">Years of Combined Experience</p>
        </div>
        <div className="col-6 col-md-2 mb-4">
          <p className="display-4 font-weight-bold counter" data-target="65">0</p>
          <p className="h5">Brands Shaped</p>
        </div>
        <div className="col-6 col-md-2 mb-4">
          <p className="display-4 font-weight-bold counter" data-target="4.2">0</p>
          <p className="h5">Trust Score</p>
        </div>
        <div className="col-6 col-md-2 mb-4">
          <p className="display-4 font-weight-bold counter" data-target="14">0</p>
          <p className="h5">Industries served</p>
        </div>
      </div>
    </div>
  );
};

export default Client;







