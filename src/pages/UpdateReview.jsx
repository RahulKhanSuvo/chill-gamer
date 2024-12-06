import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import toast from "react-hot-toast";
import loginImage from "../assets/2.jpg";
const UpdateReview = () => {
  const loadedData = useLoaderData();
  const [rating, setRating] = useState(Number(loadedData.rating) || 0);
  const [year, setYear] = useState(
    new Date(loadedData.year || new Date().getFullYear())
  );
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const coverURL = form.coverURL.value;
    const title = form.title.value;
    const description = form.description.value;
    const genre = form.genre.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const review = {
      coverURL,
      title,
      description,
      rating,
      year: year.getFullYear(),
      genre,
      userEmail,
      userName,
    };

    fetch(`http://localhost:4000/updateReview/${loadedData._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Updated Successfully");
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="relative">
      <div style={{ backgroundImage: `url(${loginImage})` }} className="">
        <div className="bg-black bg-opacity-55 ">
          <div className="container mx-auto py-4">
            <h3 className="text-white text-center font-bold text-4xl">
              Update Review
            </h3>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${loadedData.coverURL})` }}
        className="inset-0 bg-cover bg-center bg-opacity-60"
      >
        <div className="bg-opacity-55 bg-slate-500">
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
                  defaultValue={loadedData.coverURL}
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
                  defaultValue={loadedData.title}
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
                  defaultValue={loadedData.description}
                  placeholder="Write your review here"
                  required
                ></textarea>
              </div>

              {/* Rating - ReactStars component with Half Stars enabled */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">
                  Rating (1-10)
                </label>
                <ReactStars
                  count={10}
                  onChange={setRating}
                  size={24}
                  activeColor="#F80136"
                  value={rating}
                  half={true}
                />
              </div>

              {/* Publishing Year - React DatePicker for Year */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">
                  Publishing Year
                </label>
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
                  defaultValue={loadedData.genre}
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
                  name="userEmail"
                  value={loadedData?.userEmail || ""}
                  readOnly
                  className="w-full px-4 py-2 border rounded-md bg-gray-100"
                />
              </div>

              {/* User Name */}
              <div className="mb-4">
                <label className="block font-semibold mb-2">User Name</label>
                <input
                  type="text"
                  name="userName"
                  value={loadedData?.userName || ""}
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
                  Update Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Form Container */}
    </div>
  );
};

export default UpdateReview;
