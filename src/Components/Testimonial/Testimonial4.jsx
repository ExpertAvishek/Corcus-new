import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonial4 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100 p-2"
      style={{ background: "transparent" }}
    >
      <div className="text-center mb-">
        <h1 className="display-5 font-weight-bold text-dark">CLIENT</h1>
        <h2 className="display-6 font-weight-bold text-dark">FEEDBACK</h2>
      </div>
      <div className="w-100 px-3">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="d-flex justify-content-center">
              <div
                className="card text-center m-1"
                style={{
                  width: "16rem",
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                }}
              >
                <div className="card-body p-2">
                  <h5 className="card-title font-weight-bold mb-1">
                    {testimonial.name}
                  </h5>
                  <h6 className="card-subtitle mb-1 text-muted">
                    {testimonial.designation}
                  </h6>
                  <div className="my-1">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-warning"></i>
                    ))}
                  </div>
                  <p className="card-text mb-1" style={{ fontSize: "0.9rem" }}>
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Dan Gabreil",
    designation: "Marketing Head | Coinsafe VPN",
    feedback:
      "Working with Doodlo was a game changer for us. They revamped our brand and website with unmatched creativity & precision.",
  },
  {
    name: "Charu Jain",
    designation: "Marketing Head | Rishabh Industries Pvt.Ltd",
    feedback:
      "Doodlo Guys hyped our packaging design! Their creativity and attention to detail brought our product to life.",
  },
  {
    name: "Norman Dental",
    designation: "CEO | Wurth Industries",
    feedback:
      "Doodlo is definitely the right choice for our coffee table project. The team came up with unique ideas that set us apart.",
  },
  {
    name: "Monika K",
    designation: "Founder | K99 Solutions",
    feedback:
      "You guys nailed it! Their work on our brand and website was absolutely top-notch. Everything exceeded our expectations.",
  },
];

export default Testimonial4;
