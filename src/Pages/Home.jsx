import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerWithSlider from "../Components/BannerWithSlider";
import TopBrands from "../Components/TopBrands";
import BrandsOnSale from "../Components/BrandsOnSell";
import Testimonials from "../Components/Testimonials";
import About from "../Components/About";

const Home = () => {
  const { couponData, reviewData } = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      offset: 200,
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Banner with slides */}
      <div data-aos="fade-down">
        <BannerWithSlider />
      </div>

      {/* Top Brands */}
      <div data-aos="fade-up" data-aos-delay="200">
        <TopBrands data={couponData} />
      </div>

      {/* About Section */}
      <div data-aos="zoom-in" data-aos-delay="300">
        <About />
      </div>

      {/* Brands on Sale */}
      <div data-aos="fade-right" data-aos-delay="400">
        <BrandsOnSale data={couponData} />
      </div>

      {/* Testimonials */}
      <div data-aos="fade-left" data-aos-delay="500">
        <Testimonials reviewData={reviewData} />
      </div>
    </div>
  );
};

export default Home;
