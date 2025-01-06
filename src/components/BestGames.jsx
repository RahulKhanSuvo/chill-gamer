import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import SuTitle from "./SuTitle";
const BestGames = ({ loadedGames }) => {
  const truncateText = (text = "", limit) =>
    text.split(" ").length > limit
      ? text.split(" ").slice(0, limit).join(" ") + "..."
      : text;

  return (
    <div className="w-full -translate-y-12 z-30 p-4 lg:p-6 bg-white dark:bg-black lg:container lg:mx-auto">
      <SuTitle title={" Best Games on"}></SuTitle>
      <div>
        <div className="mt-3">
          <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4">
            {loadedGames.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-300">
                No games available at the moment.
              </p>
            ) : (
              <Fade>
                {loadedGames.map((game) => (
                  <div
                    key={game._id}
                    className="p-4 min-h-[500px] group bg-white dark:bg-[#d1d1d1] flex flex-col shadow-lg"
                  >
                    <div className="flex-grow dark:text-white">
                      <div className="overflow-hidden">
                        <img
                          src={game.coverURL}
                          alt={`Cover of ${game.title}`}
                          className="md:h-[250px] w-full object-cover transition-transform duration-300 group-hover:scale-110 ease-in-out rounded-sm"
                        />
                      </div>
                      <div className="clipped-div pr-2 pl-1 ">
                        <p className="text-white">{game.genre}</p>
                      </div>
                      <h2 className="text-lg font-bold mt-2">{game.title}</h2>
                      <p className="text-gray-500 dark:text-white">
                        Rating: {game.rating}/10
                      </p>
                      <p className="text-gray-600 truncate dark:text-gray-300">
                        {truncateText(game.description, 25)}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Year: {game.year}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <Link
                        to={`/review/${game._id}`}
                        className="mt-3 w-fit px-4 py-2 border-2 border-[#F80136] text-black hover:text-white dark:text-white hover:bg-[#F80136] transition-colors duration-300"
                      >
                        DETAILS
                      </Link>
                    </div>
                  </div>
                ))}
              </Fade>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestGames;
