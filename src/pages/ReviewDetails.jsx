import { FaRegCalendarAlt } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import CommentSection from "../components/Comment";
import toast from "react-hot-toast";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { MdPermIdentity } from "react-icons/md";
import Swal from "sweetalert2";

const ReviewDetails = () => {
  const details = useLoaderData();
  const { users } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    _id,
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
    id: _id,
    year,
    title,
    description,
    rating,
    genre,
    userEmail: users?.email,
    userName: users?.displayName,
  };

  const handelWatchList = () => {
    if (!users) {
      return navigate("/login");
    }
    fetch("https://chill-gamer-server-dusky.vercel.app/watchList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully added to your watchlist.",
            icon: "success",
            confirmButtonText: "OK",
            toast: true,
            timer: 3000,
            timerProgressBar: true,
            showCloseButton: true,
          });
        }
      });
  };

  return (
    <div className="bg-white  dark:bg-[#181A1B]">
      <div className="lg:container mx-4 md:mx-6 lg:mx-auto py-8 ">
        <div className="flex flex-col lg:flex-row  gap-5">
          <div className="flex-1">
            <img src={coverURL} alt={title} className="rounded" />
          </div>

          {/* Game Details */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between">
              {" "}
              <h3 className="md:text-4xl text-2xl font-bold text-gray-800 dark:text-white ">
                {title}
              </h3>
              <button
                onClick={handelWatchList}
                className="mt-4 w-fit px-2 md:px-4 md:py-2  border-2 border-[#F80136] text-black dark:text-white hover:text-white  hover:bg-[#F80136]"
              >
                Add to WatchList
              </button>
            </div>
            <div className="clipped-div pr-2 pl-1 py-1 bg-[#00c110]  mt-2">
              <p className="text-white">{genre}</p>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="font-semibold text-gray-700">Rating:</span>
              <ReactStars
                count={10}
                size={24}
                activeColor="#F80136"
                value={rating}
                edit={false}
              />
              <span className="ml-2 text-gray-600">{rating}/10</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegCalendarAlt className="text-[#F80136]" size={18} />
              <span className="font-semibold text-[#7E869B]">Year:</span>
              <p className="text-[#7E869B]">{year}</p>
            </div>
            <p className="mt-4"> {description}</p>

            <div className="mt-5 p-4 bg-gray-100 dark:bg-[#1E1F23] ">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-3">
                About Reviewer
              </p>
              <div className="flex items-center gap-4">
                {/* Icon or Avatar */}
                <MdPermIdentity className="text-[#F80136]" size={50} />

                {/* Reviewer Details */}
                <div className="flex flex-col">
                  <p className="text-xl font-medium text-gray-800 dark:text-white">
                    {userName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {userEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comment Section */}
      </div>
      <div className="mt-8 mb-4 mx-4">
        <CommentSection />
      </div>
    </div>
  );
};

export default ReviewDetails;
