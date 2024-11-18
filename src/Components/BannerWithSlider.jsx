import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const BannerWithSlider = () => {
  const slides = [
    "https://i.ibb.co/G3W7Rqb/banner4.jpg",
    "https://i.ibb.co/FJByjWs/banner2.jpg",
    "https://i.ibb.co/TtNCvxc/banner3.jpg",
    "https://i.ibb.co/mGBmcNs/banner1.jpg",
  ];

  return (
    <div className="max-w-7xl mx-auto mt-10 h-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerWithSlider;
