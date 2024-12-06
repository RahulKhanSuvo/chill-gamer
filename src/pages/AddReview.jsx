import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactStars from "react-rating-stars-component"; // Import the ReactStars component
import loginImage from "../assets/2.jpg";
import toast from "react-hot-toast";

const AddReview = () => {
  const { users } = useContext(AuthContext);
  const genres = [
    "Action",
    "RPG",
    "Adventure",
    "Strategy",
    "Puzzle",
    "First-Person Shooter",
    "Action-Adventure",
    "Battle Royale",
  ];
  const [year, setYear] = useState(null);
  const [rating, setRating] = useState(0); // State for storing rating from stars

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const coverURL = form.coverURL.value;
    const title = form.title.value;
    const description = form.description.value;
    const genre = form.genre.value;
    const review = {
      coverURL,
      title,
      description,
      rating,
      year: year?.getFullYear(),
      genre,
      userEmail: users?.email,
      userName: users?.displayName,
    };
    console.log(review);
    fetch("http://localhost:4000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review add successfully");
        }
      });
  };

  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div
        style={{ backgroundImage: `url(${loginImage})` }}
        className="absolute inset-0 bg-cover bg-center bg-opacity-60"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#6e6e6e] bg-opacity-80"></div>
        <div className="relative z-10 py-24 text-center">
          <h3 className="text-white font-bold text-4xl">Add Review</h3>
        </div>
      </div>

      {/* Form Container */}
      <div className="container mx-auto py-8 relative z-20">
        <form
          className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md"
          onSubmit={handleSubmit}
        >
          {/* Game Cover URL */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Game Cover Image (URL)
            </label>
            <input
              type="url"
              name="coverURL"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              placeholder="Enter image URL"
            />
          </div>

          {/* Game Title */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Game Title</label>
            <input
              type="text"
              name="title"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              placeholder="Enter game title"
              required
            />
          </div>

          {/* Review Description */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Review Description
            </label>
            <textarea
              name="description"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              rows="5"
              placeholder="Write your review here"
              required
            ></textarea>
          </div>

          {/* Rating - ReactStars component with Half Stars enabled */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Rating (1-10)</label>
            <ReactStars
              count={10}
              onChange={(newRating) => setRating(newRating)}
              size={24}
              activeColor="#F80136"
              value={rating}
              half={true}
            />
          </div>

          {/* Publishing Year - React DatePicker for Year */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Publishing Year</label>
            <DatePicker
              selected={year}
              onChange={setYear}
              showYearPicker
              dateFormat="yyyy"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              placeholderText="Select a year"
            />
          </div>

          {/* Genres */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Genre</label>
            <select
              name="genre"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              required
            >
              <option value="">Select a genre</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          {/* User Email */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">User Email</label>
            <input
              type="email"
              value={users?.email || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          {/* User Name */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">User Name</label>
            <input
              type="text"
              value={users?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#F80136] text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
