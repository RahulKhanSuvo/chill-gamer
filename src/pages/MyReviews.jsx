import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyReviews = () => {
  const { users } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://chill-gamer-server-dusky.vercel.app/myReviews?email=${users.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [users]);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://chill-gamer-server-dusky.vercel.app/myReviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your review has been deleted.", "success");

              const remaining = myReviews.filter((review) => review._id !== id);
              setMyReviews(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="container min-h-[calc(100vh-100px)] mx-auto px-4 py-8">
      <h1 className="text-3xl dark:text-white font-bold text-center mb-6 text-gray-800">
        My Reviews
      </h1>

      {/* Show loading spinner */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="size-8 border-4 border-[#F80136] border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {myReviews.length === 0 ? (
            <p className="text-center text-gray-500">
              You have no reviews yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow-sm">
                {/* Table Head */}
                <thead className="bg-[#E6002B] text-white">
                  <tr>
                    <th className="px-4 py-2 text-left">#</th>
                    <th className="px-4 py-2 text-left">Game Name</th>
                    <th className="px-4 py-2 text-left">Genre</th>
                    <th className="px-4 py-2 text-left">Rating</th>
                    <th className="px-4 py-2 text-left">Year</th>
                    <th className="px-4 py-2 text-center">Actions</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody className="bg-white dark:bg-black">
                  {myReviews.map((myReview, index) => (
                    <tr key={myReview._id} className="border-b border-gray-200">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{myReview.title}</td>
                      <td className="px-4 py-2">{myReview.genre}</td>
                      <td className="px-4 py-2">{myReview.rating}/10</td>
                      <td className="px-4 py-2">{myReview.year}</td>
                      <td className="px-4 py-2">
                        <div className="flex justify-center gap-2">
                          <Link to={`/updateReview/${myReview._id}`}>
                            <button className="bg-blue-500 text-white px-4 py-2  text-sm hover:bg-blue-600 transition duration-300">
                              Update
                            </button>
                          </Link>
                          <button
                            onClick={() => handelDelete(myReview._id)}
                            className="bg-red-500 text-white px-4 py-2  text-sm hover:bg-red-600 transition duration-300"
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
          )}
        </>
      )}
    </div>
  );
};

export default MyReviews;
