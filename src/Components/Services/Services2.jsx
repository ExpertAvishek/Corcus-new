import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services2 = () => {
  const chooseContent = [
    {
      img: "/assets/img/service/01.gif",
      title: "Social Media Marketing",
    },
    {
      img: "/assets/img/service/05.gif",
      title: "Google & Meta Ads",
    },
    {
      img: "/assets/img/service/06.gif",
      title: "Video Production & Shoot",
    },
    {
      img: "/assets/img/service/07.gif",
      title: "Content Writing",
    },
    {
      img: "/assets/img/service/08.gif",
      title: "Web Development",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="service-section fix section-padding">
      <div className="bg-shape-2">
        <img src="/assets/img/service/bg-shape-2.png" alt="background" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title bg-color-2 wow fadeInUp">
            <span>OUR SERVICES</span>
          </div>
          <h2 className="wow fadeInUp text-dark-yellow" data-wow-delay=".3s">
            Use SEO to Drive Growth <br /> at Your Business
          </h2>
        </div>
        <Slider {...settings} className="service-slider">
          {chooseContent.map((item, i) => (
            <div
              key={i}
              className="service-card-items style-2 bg-dark-yellow shadow-sm p-6 rounded-md mx-1 text-center"
              style={{ maxWidth: "180px", margin: "auto" }}
            >
              <div className="service-thumb">
                <img src={item.img} alt="service" className="w-2/3 mx-auto" />
              </div>
              <div className="content text-center">
                <h3 className="title-2 text-xs">
                  <Link to="/service/service-details">{item.title}</Link>
                </h3>
                <Link
                  to="/service/service-details"
                  className="service-btn text-xs"
                >
                  Read more <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services2;
