import { FaRegCalendarAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import CommentSection from "../components/Comment";
import toast from "react-hot-toast";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const ReviewDetails = () => {
  const details = useLoaderData();
  const { users } = useContext(AuthContext);

  const {
    coverURL,
    year,
    title,
    description,
    rating,
    genre,
    userEmail,
    userName,
  } = details;

  const list = {
    year,
    title,
    description,
    rating,
    genre,
    userEmail,
    userName,
  };

  const handelWatchList = () => {
    fetch("http://localhost:4000/watchList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("added to watchList successful");
        }
      });
  };

  return (
    <div className="container mx-auto py-8">
      <div>
        {/* Game Cover Image */}
        <img
          src={coverURL}
          alt={title}
          className="w-full rounded-lg shadow-lg"
        />

        {/* Game Details */}
        <div className="mt-6">
          <div className="flex gap-2 items-center">
            <FaRegCalendarAlt className="text-[#F80136]" size={18} />
            <span className="font-semibold text-[#7E869B]">Year:</span>
            <p className="text-[#7E869B]">{year}</p>
          </div>
          <h3 className="text-4xl font-bold text-gray-800 mt-4">{title}</h3>
          <p className="mt-2">
            <span className="font-semibold text-gray-700">Genre:</span> {genre}
          </p>

          {/* Rating with react-rating-stars-component */}
          <div className="mt-2">
            <span className="font-semibold text-gray-700">Rating:</span>
            <ReactStars
              count={10} // 10 stars scale
              size={24}
              activeColor="#F80136"
              value={rating}
              edit={false} // Disable editing
            />
            <span className="ml-2 text-gray-600">{rating}/10</span>
          </div>

          {/* Description */}
          <p className="mt-4">
            <span className="font-semibold text-gray-700">Description:</span>{" "}
            {description}
          </p>

          {/* Reviewed By */}
          <p className="mt-4 text-gray-700">
            <span className="font-semibold">Reviewed By:</span> {userName} (
            {userEmail})
          </p>

          {/* Add to WatchList Button */}
          {users && (
            <button
              onClick={handelWatchList}
              className="mt-3 w-fit px-4 py-2 border-2 border-[#F80136] text-black hover:text-white  hover:bg-[#F80136]"
            >
              Add to WatchList
            </button>
          )}
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-8">
        <CommentSection />
      </div>
    </div>
  );
};

export default ReviewDetails;
