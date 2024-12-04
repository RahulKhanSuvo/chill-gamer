import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";

const ReviewDetails = () => {
  const details = useLoaderData();
  const { users } = useContext(AuthContext); // Access the logged-in user
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

  return (
    <div className="container mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Game Cover Image */}
        <img src={coverURL} alt={title} className="w-full rounded shadow-lg" />

        {/* Game Details */}
        <div>
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p>
            <span className="font-semibold">Year:</span> {year}
          </p>
          <p>
            <span className="font-semibold">Genre:</span> {genre}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {rating}/10
          </p>
          <p className="mt-4">
            <span className="font-semibold">Description:</span> {description}
          </p>
          <p className="mt-4">
            <span className="font-semibold">Reviewed By:</span> {userName} (
            {userEmail})
          </p>

          {/* Add to WatchList Button */}
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
