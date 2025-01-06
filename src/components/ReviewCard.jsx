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
    <div className="flex border flex-col group bg-white dark:bg-black hover:shadow-xl pb-2  h-full ">
      <div className="flex-grow">
        <div className="overflow-hidden">
          <img
            className=" md:h-[250px] w-full object-cover   transition-transform duration-300 group-hover:scale-110 ease-in-out "
            src={coverURL}
            alt={`Cover of ${title}`}
          />
        </div>
        <div className="px-4 py-2">
          <div className="clipped-div pr-2 pl-1 py-1 bg-[#00c110]  mt-2">
            <p className="text-white">{genre}</p>
          </div>
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
          <p className="text-gray-600 mt-2">{truncateText(description, 10)}</p>

          {/* Rating Section */}
          <div className="mt-2 flex items-center gap-1">
            <span className="font-semibold text-gray-700">Rating:</span>
            <span className="ml-2 text-gray-600">{rating}/10 </span>
            <FaStar size={17} className="text-[#F80136]"></FaStar>
          </div>
        </div>
      </div>
      <div className="px-4 text-center py-4">
        <Link
          to={`/review/${_id}`}
          className=" px-4 py-2 border-2 border-[#F80136] text-black hover:text-white dark:text-white hover:bg-[#F80136] transition-colors duration-300"
        >
          DETAILS
        </Link>
      </div>
    </div>
  );
};

export default ReviewCard;
