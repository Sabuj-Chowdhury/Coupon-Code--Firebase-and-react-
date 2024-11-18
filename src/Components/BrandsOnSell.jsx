import PropTypes from "prop-types";

const BrandsOnSale = ({ data }) => {
  const brandsOnSale = data.filter((brand) => brand.isSaleOn);

  return (
    <div className="py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
        Brands on Sale
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {brandsOnSale.map((brand) => (
          <div
            key={brand.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-full h-48 sm:h-56 md:h-64 object-contain rounded-t-lg"
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
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Visit Store
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSale;

BrandsOnSale.propTypes = {
  data: PropTypes.array,
};
