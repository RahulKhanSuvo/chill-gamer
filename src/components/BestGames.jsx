const BestGames = ({ loadedGames }) => {
  return (
    <div className="w-full -translate-y-9   z-30 p-6 bg-white  container mx-auto ">
      <h2 className="font-medium bg-[#F80136] text-white py-4 px-4">
        Best games
      </h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loadedGames.map((game) => (
            <div
              key={game.id}
              className="p-4 bg-white flex flex-col shadow-lg rounded-lg"
            >
              <div className="flex-grow">
                {" "}
                <img
                  src={game.image}
                  alt={game.name}
                  className="h-40 w-full object-cover transition-transform duration-300 hover:scale-110 ease-in-out rounded-sm"
                />
                <h2 className="text-lg font-bold mt-2">{game.name}</h2>
                <p className="text-gray-500">Rating: {game.rating}/10</p>
                <p className="text-gray-600">Genre: {game.genre}</p>
                <p className="text-gray-600">Platform: {game.platform}</p>
                <p className="text-gray-600 truncate">
                  Description: {game.description}
                </p>
                <p className="text-gray-600">
                  Release Date: {game.releaseDate}
                </p>
              </div>
              <div className="flex  justify-center">
                <button className="mt-3 w-fit px-4 py-2 border-2 border-[#F80136] text-black hover:text-white  hover:bg-[#F80136]">
                  Explore Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestGames;
