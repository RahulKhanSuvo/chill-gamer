import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const AddReview = () => {
  const { users } = useContext(AuthContext);
  const genres = ["Action", "RPG", "Adventure", "Strategy", "Puzzle"];
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const coverURL = form.coverURL.value;
    const title = form.title.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const year = form.year.value;
    const genre = form.genre.value;
    const review = {
      coverURL,
      title,
      description,
      rating,
      year,
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
        console.log(data);
      });
  };
  return (
    <div>
      <div className="container mx-auto py-8">
        <h2 className="text-2xl font-bold text-center mb-6">Add New Review</h2>
        <form
          className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded"
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
              className="w-full px-4 py-2 border rounded"
              placeholder="Enter image URL"
            />
          </div>

          {/* Game Title */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Game Title</label>
            <input
              type="text"
              name="title"
              className="w-full px-4 py-2 border rounded"
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
              className="w-full px-4 py-2 border rounded"
              rows="5"
              placeholder="Write your review here"
              required
            ></textarea>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Rating (1-10)</label>
            <input
              type="number"
              name="rating"
              className="w-full px-4 py-2 border rounded"
              min="1"
              max="10"
              placeholder="Enter rating"
              required
            />
          </div>

          {/* Publishing Year */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Publishing Year</label>
            <input
              type="number"
              name="year"
              className="w-full px-4 py-2 border rounded"
              placeholder="Enter publishing year (e.g., 2023)"
              required
            />
          </div>

          {/* Genres */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Genre</label>
            <select
              name="genre"
              className="w-full px-4 py-2 border rounded"
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
              className="w-full px-4 py-2 border rounded bg-gray-100"
            />
          </div>

          {/* User Name */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">User Name</label>
            <input
              type="text"
              value={users?.displayName || ""}
              readOnly
              className="w-full px-4 py-2 border rounded bg-gray-100"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded"
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
