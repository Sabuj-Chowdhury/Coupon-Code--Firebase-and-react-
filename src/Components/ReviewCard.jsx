import PropTypes from "prop-types";

const ReviewCard = ({ review }) => {
  return (
    <div className="p-3 bg-white rounded-md shadow-md w-36 md:w-40 flex-shrink-0">
      <img
        src={review.image}
        className="h-14 w-14 md:h-16 md:w-16 rounded-full mx-auto mb-2"
      />

      <h3 className="text-xs md:text-sm font-semibold text-center">
        {review.name}
      </h3>

      <div className="text-center text-yellow-500 text-xs mb-1">
        {"★".repeat(review.rating)}
      </div>

      <p className="text-[10px] md:text-xs text-gray-600 text-center">
        {review.review}
      </p>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object,
};

export default ReviewCard;
