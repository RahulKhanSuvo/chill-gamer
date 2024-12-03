const BestGames = ({ loadedGames }) => {
  return (
    <div className="w-full container mx-auto ">
      <h2 className="font-medium bg-[#F80136] text-white py-4 px-4">
        Best games
      </h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {loadedGames.map((game) => (
            <div key={game.id} className="p-4 bg-white shadow-lg rounded-lg">
              <img
                src={game.image}
                alt={game.name}
                className="h-40 w-full object-cover rounded-md"
              />
              <h2 className="text-lg font-bold mt-2">{game.name}</h2>
              <p className="text-gray-500">Rating: {game.rating}/10</p>
              <p className="text-gray-600">Genre: {game.genre}</p>
              <p className="text-gray-600">Platform: {game.platform}</p>
              <p className="text-gray-600 truncate">
                Description: {game.description}
              </p>
              <p className="text-gray-600">Release Date: {game.releaseDate}</p>
              <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Explore Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestGames;
