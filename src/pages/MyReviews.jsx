import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router-dom";

const MyReviews = () => {
  const { users } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/myReviews?email=${users.email}`)
      .then((res) => res.json())
      .then((data) => setMyReviews(data));
  }, [users]);

  const handelDelete = (id) => {
    fetch(`http://localhost:4000/myReviews/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = myReviews.filter((review) => review._id !== id);
          setMyReviews(remaining);
        }
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        My Reviews
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-sm">
          {/* Table Head */}
          <thead className="bg-[#F80136] text-white">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Game Name</th>
              <th className="px-4 py-2 text-left">Genre</th>
              <th className="px-4 py-2 text-left">Rating</th>
              <th className="px-4 py-2 text-left">Year</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="bg-white">
            {myReviews.map((myReview, index) => (
              <tr key={myReview._id} className="border-b border-gray-200">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{myReview.title}</td>
                <td className="px-4 py-2">{myReview.genre}</td>
                <td className="px-4 py-2">{myReview.rating}/10</td>
                <td className="px-4 py-2">{myReview.year}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <Link to={`/updateReview/${myReview._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition duration-300">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handelDelete(myReview._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
