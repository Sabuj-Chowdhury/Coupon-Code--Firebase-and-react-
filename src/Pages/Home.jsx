import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerWithSlider from "../Components/BannerWithSlider";
import TopBrands from "../Components/TopBrands";
import BrandsOnSale from "../Components/BrandsOnSell";

const Home = () => {
  const data = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div>
      {/* Banner with slides */}
      <div data-aos="fade-down">
        <BannerWithSlider></BannerWithSlider>
      </div>

      {/* Top Brands */}
      <div data-aos="fade-up" data-aos-delay="200">
        <TopBrands data={data}></TopBrands>
      </div>

      {/* Brands on Sale */}
      <div data-aos="fade-right" data-aos-delay="400">
        <BrandsOnSale data={data}></BrandsOnSale>
      </div>
    </div>
  );
};

export default Home;
