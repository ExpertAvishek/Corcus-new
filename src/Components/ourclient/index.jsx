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

  return (
    <div
      className="container py-5 bg-gradient"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="text-right mb-4">
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
        <p className="h5 text-primary text-end text-black">
          Trusted by 1000K plus customers
        </p>
      </div>
      <div className="row mt-5">
        {[
          "01.png",
          "02.png",
          "03.png",
          "04.png",
          "05.png",
          "06.png",
          "07.png",
          "08.png",
          "09.png",
        ].map((img, index) => (
          <div className="col-6 col-md-3 mb-4" key={index}>
            <img
              src={`public/assets/clients/${img}`}
              alt={`Client ${index + 1} logo`}
              className="img-fluid"
            />
          </div>
        ))}
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
              style={{
                WebkitTextStroke: "2px black", // Stroke effect for counter
                color: "transparent", // Removes fill color
              }}
            >
              0
            </p>
            <p className="h5 text-black fw-bold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
