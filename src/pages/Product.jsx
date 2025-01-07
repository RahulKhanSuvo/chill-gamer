import { useLoaderData } from "react-router-dom";

const Product = () => {
  const product = useLoaderData();

  return (
    <div className="lg:container flex mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-md mb-6"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {product.name}
        </h1>
        <p className="text-sm text-gray-500 mb-2">
          <span className="font-medium">Category:</span> {product.category}
        </p>
        <p className="text-lg text-gray-700 font-semibold mb-4">
          <span className="font-medium">Price:</span> {product.price}
        </p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-sm text-gray-500">
          <span className="font-medium">Product ID:</span> {product.productId}
        </p>
      </div>
    </div>
  );
};

export default Product;
