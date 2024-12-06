import { FaCalendarAlt, FaStar } from "react-icons/fa";
import { MdPermIdentity } from "react-icons/md";
import { Link } from "react-router-dom";

const truncateText = (text, limit) =>
  text.split(" ").length > limit
    ? text.split(" ").slice(0, limit).join(" ") + "..."
    : text;

const ReviewCard = ({ review }) => {
  const { _id, coverURL, title, rating, year, genre, userName, description } =
    review;

  return (
    <div className="flex flex-col bg-white shadow-md rounded-md">
      <div className="flex-grow">
        <img
          className="h-[400px] w-full object-cover rounded-t-md"
          src={coverURL}
          alt={`Cover of ${title}`}
        />
        <div className="px-4 py-2">
          <h3 className="text-sm text-gray-600">{genre}</h3>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-2 items-center text-sm text-gray-500">
              <FaCalendarAlt className="text-[#F80136]" />
              <p>{year}</p>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MdPermIdentity className="text-[#F80136]" />
              <span className="ml-1">by {userName}</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">{truncateText(description, 25)}</p>

          {/* Rating Section */}
          <div className="mt-2 flex items-center gap-1">
            <span className="font-semibold text-gray-700">Rating:</span>
            <span className="ml-2 text-gray-600">{rating}/10 </span>
            <FaStar size={17} className="text-[#F80136]"></FaStar>
          </div>
        </div>
      </div>
      <div className="px-4 py-4">
        <Link
          to={`/review/${_id}`}
          className="hover:text-white hover:bg-[#FA4904] font-semibold text-sm w-fit border-2 border-[#F80136] px-4 py-2 rounded-md"
        >
          EXPLORE DETAILS
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
