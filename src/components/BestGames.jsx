import { Link } from "react-router-dom";
import backgroundImage from "../assets/aroplane-fight.jpg";
const BestGames = ({ loadedGames }) => {
  console.log(loadedGames);
  const truncateText = (text, limit) =>
    text.split(" ").length > limit
      ? text.split(" ").slice(0, limit).join(" ") + "..."
      : text;
  return (
    <div className="w-full -translate-y-12   z-30 p-6 bg-white  container mx-auto ">
      <h2 className="font-medium bg-[#F80136] text-white text-xl py-4 px-4">
        Highest Rated Games
      </h2>
      <div style={{ backgroundImage: `url(${backgroundImage})` }} className="">
        <div className="bg-[#9a9a9b]  bg-opacity-80 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {loadedGames.map((game) => (
              <div
                key={game._id}
                className="p-4 bg-white flex flex-col shadow-lg "
              >
                <div className="flex-grow ">
                  {" "}
                  <div className="overflow-hidden">
                    <img
                      src={game.coverURL}
                      alt={game.title}
                      className="h-[350px] w-full object-cover transition-transform duration-300 hover:scale-110 ease-in-out rounded-sm"
                    />
                  </div>
                  <div className="clipped-div pr-2 pl-1 py-1 mt-2">
                    <p className="text-white"> {game.genre}</p>
                  </div>
                  <h2 className="text-lg font-bold mt-2">{game.title}</h2>
                  <p className="text-gray-500">Rating: {game.rating}/10</p>
                  <p className="text-gray-600 truncate">
                    {truncateText(game.description, 25)}
                  </p>
                  <p className="text-gray-600">Year: {game.year}</p>
                </div>
                <div className="flex  justify-center">
                  <Link
                    to={`/review/${game._id}`}
                    className="mt-3 w-fit px-4 py-2 border-2 border-[#F80136] text-black hover:text-white  hover:bg-[#F80136]"
                  >
                    EXPLORE DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestGames;
