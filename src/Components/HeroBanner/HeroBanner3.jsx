import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const HeroBanner3 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const heroContent = {
    bg: "/assets/img/hero/hero-bg-3.jpg",
    subtitle: "go for advertising",
    title:
      " Scale Your Brand with<span> Performance<br>Driven Marketing </br></span>",
    content:
      " We help businesses maximize their ROI with data-driven strategies, high-converting ads, and powerful digital campaigns.",
    img: "/assets/img/hero/hero-image-3.png",
    btnname: "Get a Free Consultation",
    btnname2: "Contact Us",
    btnurl: "/contact",
  };

  return (
    <section className="hero-section hero-3">
      <div className="container-fluid">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="hero-content">
              <h6 className="wow fadeInUp">{heroContent.subtitle}</h6>
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                {parse(heroContent.title)}
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                {heroContent.content}
              </p>
              <div className="hero-button d-flex gap-3">
                <div className="main-button wow fadeInUp" data-wow-delay=".3s">
                  <Link to={heroContent.btnurl}>
                    <span className="theme-btn">{heroContent.btnname}</span>
                  </Link>
                </div>
                <div className="main-button wow fadeInUp" data-wow-delay=".5s">
                  <Link to={heroContent.btnurl} className="contact-btn">
                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                    {heroContent.btnname2}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="hero-image wow img-custom-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.3s"
            >
              <img src={heroContent.img} alt="Hero" />
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for Contact Us Button */}
      <style>
        {`
          .contact-btn {
            background: transparent;
            border: 2px solid black;
            color: black;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            border-radius: 25px;
            gap: 8px;
            transition: all 0.3s ease-in-out;
          }

          .contact-btn:hover {
            background: black;
            color: white;
          }
        `}
      </style>
    </section>
  );
};

export default HeroBanner3;
