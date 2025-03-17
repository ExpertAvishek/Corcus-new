import BreadCumb from "../Components/Common/BreadCumb";
import Cta2 from "../Components/Cta/Cta2";
import Pricing1 from "../Components/Pricing/Pricing1";
import Services2 from "../Components/Services/Services2";
import Testimonial2 from "../Components/Testimonial/Testimonial2";
import WhyChoose4 from "../Components/WhyChoose/WhyChoose4";

const ServicesPage = () => {
  return (
    <div>
      
      <Services2></Services2>
      <WhyChoose4></WhyChoose4>
      <Pricing1 CoulmnClass="pricing-section section-padding"></Pricing1>
      <Cta2></Cta2>
      <Testimonial2></Testimonial2>
    </div>
  );
};

export default ServicesPage;
