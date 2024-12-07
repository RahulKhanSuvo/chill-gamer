const GameStore = () => {
  const products = [
    {
      name: "Razer Naga Expert MMO",
      price: "$65.00 – $75.00",
      image: "https://i.ibb.co.com/Ssdy6TC/image.png",
    },
    {
      name: "XBOX Original Gamepad",
      price: "$150.00 – $170.00",
      image: "https://i.ibb.co.com/v3fqn2X/image.png",
    },
    {
      name: "Thrustmaster Ferrari 458",
      price: "$180.00 – $210.00",
      image: "https://i.ibb.co.com/mXSVM5F/image.png",
    },
    {
      name: "PS3 Original Gamepad",
      price: "$340.00 – $350.00",
      image: "https://i.ibb.co.com/6YxpHpS/image.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="font-medium bg-[#F80136] text-white mb-4 text-xl py-4 px-4">
        Game Store
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={` r ${product.outOfStock ? "opacity-60" : ""}`}
          >
            <div className="bg-white rounded-lg ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white">
              {product.name}
            </h3>
            <p className="text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameStore;
