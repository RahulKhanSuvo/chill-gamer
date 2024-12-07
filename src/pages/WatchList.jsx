import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WatchList = () => {
  const { users } = useContext(AuthContext);
  const [watchList, setWatchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://chill-gamer-server-dusky.vercel.app/watchList?email=${users.email}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch watchlist");
        }
        return res.json();
      })
      .then((data) => {
        setWatchList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [users]);

  const handleDelete = (id) => {
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
        fetch(`https://chill-gamer-server-dusky.vercel.app/watchList/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The game has been removed.", "success");
              setWatchList(watchList.filter((game) => game._id !== id));
            }
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete the game.", "error");
          });
      }
    });
  };

  return (
    <div>
      <div className="container min-h-[calc(100vh-100px)] mx-auto px-4 py-8">
        <h1 className="text-3xl dark:text-white font-bold text-center mb-6 text-black">
          Game Watchlist
        </h1>

        {/* Handle loading state */}
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="size-8 border-4 border-[#F80136] border-dashed rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : watchList.length === 0 ? (
          <p className="text-center text-gray-500">Your watchlist is empty.</p>
        ) : (
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
                  <th className="px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody className="bg-white dark:bg-black">
                {watchList.map((game, index) => (
                  <tr key={game._id} className="border-b border-gray-200">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{game.title}</td>
                    <td className="px-4 py-2">{game.genre}</td>
                    <td className="px-4 py-2">{game.rating}/10</td>
                    <td className="px-4 py-2">{game.year}</td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center gap-2">
                        <Link
                          to={`/review/${game.id}`}
                          className="w-fit px-4 py-2 border-2 border-[#F80136] text-black dark:text-white hover:text-white hover:bg-[#F80136]"
                        >
                          DETAILS
                        </Link>
                        <button
                          onClick={() => handleDelete(game._id)}
                          className="bg-red-500 text-white px-4 py-2 text-sm hover:bg-red-600 transition duration-300"
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
      </div>
    </div>
  );
};

export default WatchList;
