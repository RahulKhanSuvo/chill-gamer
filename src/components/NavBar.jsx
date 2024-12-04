import { useContext } from "react";
import { LuGamepad2 } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const NavBar = () => {
  const { users, userLogout } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/all-reviews"}>All Reviews</NavLink>
      <NavLink to={"/add-review"}>Add Review</NavLink>
      <NavLink to={"/watchlist"}>Game WatchList</NavLink>
    </>
  );

  return (
    <nav className="flex container mx-auto items-center justify-between py-4">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <LuGamepad2 className="text-2xl" />
        <h3 className="text-lg font-bold">CHILL GAMER</h3>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">{links}</div>

      {/* Auth Section */}
      <div>
        {users ? (
          <div className="flex items-center gap-4">
            {/* Avatar with Tooltip/Dropdown */}
            <div className="relative group">
              <img
                src={users.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              {/* Tooltip/Dropdown */}
              <div className="absolute  hidden group-hover:block bg-gray-800 text-white text-sm py-1 px-2 rounded shadow-lg mt-2">
                {users.displayName}
              </div>
            </div>
            <button
              onClick={userLogout}
              className="btn bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to={"/login"}>
              <button className="btn bg-blue-500 text-white px-4 py-2 rounded">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="btn bg-green-500 text-white px-4 py-2 rounded">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
