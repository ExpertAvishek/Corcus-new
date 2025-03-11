import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="service-slider"
        >
          {chooseContent.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="service-card-items style-2 bg-dark-yellow shadow-sm p-4 rounded-lg">
                <div className="service-thumb">
                  <img src={item.img} alt="service" />
                </div>
                <div className="content">
                  <h3 className="title-2 text-sm">
                    <Link to="/service/service-details">{item.title}</Link>
                  </h3>
                  <p>{item.content}</p>
                  <Link to="/service/service-details" className="service-btn">
                    Read more <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: darkyellow !important;
          }
        `}
      </style>
    </section>
  );
};

export default Services2;
