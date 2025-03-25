import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Client = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const increment = target / 200;
            const updateCounter = () => {
              if (count < target) {
                count += increment;
                counter.innerText = `${Math.ceil(count)}+`;
                setTimeout(updateCounter, 10);
              } else {
                counter.innerText = `${target}+`;
              }
            };
            updateCounter();
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll(".counter").forEach((counter) => {
      observer.observe(counter);
    });
  }, []);

  useEffect(() => {
    const scrollContainer = document.getElementById("logo-scroll");
    let scrollAmount = 0;
    const speed = 1; // Adjust speed
    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += speed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
        requestAnimationFrame(scrollStep);
      }
    };
    scrollStep();
  }, []);

  return (
    <div
      className="container py-5 bg-gradient"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="text-left mb-4">
        <h1 className="display-4 fw-bold text-black">OUR</h1>
        <h2
          className="display-3 fw-bold"
          style={{
            WebkitTextStroke: "2px black", // Stroke effect
            color: "transparent", // Removes fill color
          }}
        >
          CLIENTS
        </h2>
        <p className="h5 text-primary  text-start text-black">
          Trusted by 1000K plus customers
        </p>
      </div>
      <div
        id="logo-scroll"
        className="d-flex flex-column align-items-start overflow-hidden"
        style={{ maxWidth: "300%", whiteSpace: "nowrap" }}
      >
        <div className="d-flex flex-nowrap gap-3 mb-3">
          {[
            "01.png",
            "02.png",
            "03.png",
            "04.png",
            "05.png",
            "01.png",
            "02.png",
            "03.png",
            "04.png",
            "05.png",
            "01.png",
            "02.png",
            "03.png",
            "04.png",
            "05.png",
          ].map((img, index) => (
            <div className="flex-shrink-0" key={index}>
              <img
                src={`public/assets/clients/${img}`}
                alt={`Client ${index + 1} logo`}
                className="img-fluid"
                style={{ width: "120px", height: "auto" }}
              />
            </div>
          ))}
        </div>
        <div className="d-flex flex-nowrap gap-3">
          {[
            "06.png",
            "07.png",
            "08.png",
            "09.png",
            "06.png",
            "07.png",
            "08.png",
            "09.png",
            "06.png",
            "07.png",
            "08.png",
            "09.png",
            "06.png",
            "07.png",
            "08.png",
            "09.png",
          ].map((img, index) => (
            <div className="flex-shrink-0" key={index}>
              <img
                src={`public/assets/clients/${img}`}
                alt={`Client ${index + 6} logo`}
                className="img-fluid"
                style={{ width: "120px", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-5 text-center">
        {[
          { target: 387, text: "Project Delivered & Counting" },
          { target: 7, text: "Years of Combined Experience" },
          { target: 65, text: "Brands Shaped" },
          { target: 4.2, text: "Trust Score" },
          { target: 14, text: "Industries Served" },
          { target: 20, text: "Countries" },
        ].map((item, index) => (
          <div className="col-24 col-md-2 mb-4" key={index}>
            <p
              className="display-4 fw-bold counter"
              data-target={item.target}
              style={{ color: "black" }}
            >
              0
            </p>
            <p className="h6 text-black fw-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
