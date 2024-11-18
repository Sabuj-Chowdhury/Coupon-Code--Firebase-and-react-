import { useLoaderData } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const CouponDetails = () => {
  const singleData = useLoaderData();

  const handleCopy = () => {
    toast.success("Coupon code copied!");
  };

  return (
    <div className="max-w-7xl mx-auto mb-5 lg:mb-10">
      {/* Brand Header */}
      <div className="text-center  p-6 ">
        <img
          src={singleData.brand_logo}
          alt={singleData.brand_name}
          className="mx-auto w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-full"
        />
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mt-4">
          {singleData.brand_name}
        </h1>
        <div className="flex justify-center items-center mt-2 gap-1 text-yellow-400 font-semibold">
          <span className="text-gray-800">{singleData.rating}</span>
          <span className="text-lg">
            <FaStar></FaStar>
          </span>
        </div>
      </div>

      {/* Coupons Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {singleData.coupons.map((coupon, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between"
          >
            {/* Coupon Details */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {coupon.coupon_code}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-2">
                <strong>Description:</strong> {coupon.description}
              </p>
              <p className="text-gray-600 text-sm sm:text-base mb-2">
                <strong>Expiry Date:</strong> {coupon.expiry_date}
              </p>
              <p className="text-gray-600 text-sm sm:text-base mb-2">
                <strong>Condition:</strong> {coupon.condition}
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                <strong>Type:</strong> {coupon.coupon_type}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-col gap-2">
              {/* Copy Code */}
              <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                  Copy Code
                </button>
              </CopyToClipboard>

              {/* Use Now */}
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                onClick={() => window.open(singleData.shop_Link, "_blank")}
              >
                Use Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponDetails;
