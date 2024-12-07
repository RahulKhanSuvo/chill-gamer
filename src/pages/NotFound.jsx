import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-9xl font-bold text-[#F80136]">404</h1>
      <p className="text-2xl text-gray-700 mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">
        Oops! The page you are looking for does not exist.
      </p>

      <p className="text-gray-500 mt-4">
        Tried to access: <span className="font-bold">{location.pathname}</span>
      </p>
      <Link
        to="/"
        className="mt-6 border-[#F9251D] text-black border  hover:text-white px-6 py-2  hover:bg-[#F9251D] transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
