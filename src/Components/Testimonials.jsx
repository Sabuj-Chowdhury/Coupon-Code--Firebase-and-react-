import PropTypes from "prop-types";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";

const Testimonials = ({ reviewData }) => {
  return (
    <div className="py-10 bg-gradient-to-r from-purple-500 to-pink-500">
      <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-6">
        What Our Customers Say
      </h2>
      <Marquee pauseOnHover gradient={false} speed={80}>
        <div className="flex space-x-3 md:space-x-4 px-2 md:px-6">
          {reviewData.map((review, idx) => (
            <ReviewCard key={idx} review={review}></ReviewCard>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Testimonials;

Testimonials.propTypes = {
  reviewData: PropTypes.array,
};
