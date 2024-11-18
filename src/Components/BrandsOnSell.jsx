import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BrandsOnSale = ({ data }) => {
  const brandsOnSale = data.filter((brand) => brand.isSaleOn);

  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
        Brands on Sale
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation
      >
        {brandsOnSale.map((brand) => (
          <SwiperSlide key={brand.id}>
            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-full h-48 sm:h-56 object-contain rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                  {brand.brand_name}
                </h3>
                <p className="text-gray-500 mb-2">
                  <strong>Category:</strong> {brand.category}
                </p>
                <p className="text-gray-500 mb-4">
                  <strong>Total Coupons:</strong> {brand.coupons.length}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandsOnSale;

BrandsOnSale.propTypes = {
  data: PropTypes.array.isRequired,
};
