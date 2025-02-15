import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import loginImage from "../assets/2.jpg";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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
  const [rating, setRating] = useState(0);

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

    fetch("https://chill-gamer-server-dusky.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Review added successfully",
            toast: true,
            position: "center",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          });

          form.reset();
          setYear(null);
          setRating(0);
        }
      });
  };

  return (
    <div className="">
      <div style={{ backgroundImage: `url(${loginImage})` }} className="">
        <div className="bg-black bg-opacity-55 ">
          <div className="container mx-auto py-4">
            <h3 className="text-white text-center font-bold text-2xl md:text-4xl">
              Add Review
            </h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 relative z-20">
        <form
          className="md:max-w-3xl mx-4 md:mx-auto p-6 bg-white dark:bg-black shadow-md rounded-md"
          onSubmit={handleSubmit}
        >
          {/* Game Cover URL */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Game Cover Image (URL)
            </label>
            <input
              type="text"
              name="coverURL"
              required
              className="w-full px-4 py-2 border  rounded-md focus:outline-[#F80136]"
              placeholder="Enter image URL"
            />
          </div>

          {/* Game Title */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Game Title</label>
            <input
              type="text"
              name="title"
              className="w-full px-4 py-2 border rounded-md focus:outline-[#F80136]"
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
              className="w-full px-4 py-2 border rounded-md focus:outline-[#F80136]"
              rows="5"
              placeholder="Write your review here"
              required
            ></textarea>
          </div>

          {/* Rating (1-10) Buttons */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Rating (1-10)</label>
            <div className="flex justify-between">
              {[...Array(10)].map((_, index) => (
                <button
                  key={index + 1}
                  type="button"
                  onClick={() => setRating(index + 1)}
                  className={`w-8 h-8 bg- rounded-full text-center flex items-center justify-center ${
                    rating === index + 1 ? "bg-[#F80136] text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Publishing Year */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Publishing Year</label>
            <DatePicker
              selected={year}
              onChange={setYear}
              showYearPicker
              dateFormat="yyyy"
              className="w-full px-4 py-2 border rounded-md focus:outline-[#F80136]"
              placeholderText="Select a year"
            />
          </div>

          {/* Genres */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Genre</label>
            <select
              name="genre"
              className="w-full px-4 py-2 border rounded-md focus:outline-[#F80136]"
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
              className="w-full px-4 py-2 border focus:outline-[#F80136] rounded-md bg-gray-100"
            />
          </div>

          {/* User Name */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">User Name</label>
            <input
              type="text"
              value={users?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 border focus:outline-[#F80136]  rounded-md bg-gray-100"
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
