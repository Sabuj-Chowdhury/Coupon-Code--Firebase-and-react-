import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BrandCard from "../Components/BrandCard";

const Brands = () => {
  const brands = useLoaderData();
  const [search, setSearch] = useState("");

  // Filter brands based on the search term
  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-5">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
        Explore Our Brands
      </h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search for a brand..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Brand Cards */}
      <div className="space-y-10">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand, idx) => (
            <BrandCard key={idx} brand={brand} />
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No brands match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default Brands;
