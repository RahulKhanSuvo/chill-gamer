import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const GameStore = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://chill-gamer-server-dusky.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="lg:container px-4 md:px-6 bg-white lg:mx-auto pt-8 pb-6">
      <Fade>
        <h2 className="font-medium bg-[#F80136] text-white mb-4 text-xl py-4 px-4">
          Game Store
        </h2>
      </Fade>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Fade cascade damping={0.2}>
          {products.map((product, index) => (
            <div
              key={index}
              className="group cursor-pointer border p-4 rounded-md hover:shadow-md"
            >
              <div className="bg-white rounded-lg overflow-hidden  ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full transition-transform transform group-hover:scale-105 duration-300 h-40 object-contain mb-4"
                />
              </div>
              <Link to={`/product/${product._id}`}>
                <h3 className="text-lg font-medium group-hover:text-[#F80136] text-gray-800 dark:text-white">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default GameStore;
