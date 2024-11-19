import PropTypes from "prop-types";

import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BrandCard = ({ brand }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-gray-200 shadow-lg rounded-lg p-5 hover:shadow-xl transition-shadow duration-300">
      {/* Left: Logo and Rating */}
      <div className="w-full md:w-1/4 flex flex-col items-center">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="w-32 h-32 object-contain rounded-full mb-3"
        />
        <div className="flex items-center gap-1 text-yellow-400 font-semibold">
          <FaStar />
          <span className="text-gray-800">{brand.rating}</span>
        </div>
      </div>

      {/* Middle: Brand Details */}
      <div className="flex-1 text-center md:text-left px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {brand.brand_name}
        </h3>
        <p className="text-gray-600 text-sm">{brand.description}</p>
        {brand.isSaleOn && (
          <p className="text-red-500 text-lg font-semibold mt-4 animate-bounce">
            Sale is on!
          </p>
        )}
      </div>

      {/* Right: Button */}
      <div className="mt-5 md:mt-0 md:w-1/4 flex flex-col items-center">
        <NavLink
          to={`/details/${brand.id}`}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          View Coupons
        </NavLink>
      </div>
    </div>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  brand: PropTypes.object.isRequired,
};
