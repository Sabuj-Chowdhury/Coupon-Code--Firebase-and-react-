import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";

const TopBrands = ({ data }) => {
  //   console.log(data);

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Top Brands
      </h2>
      <div className="overflow-hidden">
        <Marquee
          pauseOnHover
          gradient={false}
          speed={50}
          className="flex items-center"
        >
          {data.map((brand, idx) => (
            <div
              key={idx}
              className="mx-6 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={brand.brand_logo}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;

TopBrands.propTypes = {
  data: PropTypes.array,
};
