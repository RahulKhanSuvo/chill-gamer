import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
  const details = useLoaderData();

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
        console.log(data);
      });
  };
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
          <button
            onClick={handelWatchList}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
