import { useContext } from "react";
import { LuGamepad2 } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import AuthContext from "../Context/AuthContext";
import { MdAccountCircle } from "react-icons/md";

const NavBar = () => {
  const { users, userLogout } = useContext(AuthContext);
  const links = (
    <>
      <NavLink to={"/"}>HOME</NavLink>
      <NavLink to={"/all-reviews"}>ALL REVIEWS</NavLink>
      {users && (
        <>
          <NavLink
            to="/add-review"
            className="hover:text-black"
            aria-label="Go to Add Review"
          >
            ADD REVIEW
          </NavLink>
          <NavLink
            to="/my-review"
            className="hover:text-black"
            aria-label="Go to My Reviews"
          >
            MY REVIEWS
          </NavLink>
          <NavLink
            to="/watchlist"
            className="hover:text-black"
            aria-label="Go to Game Watchlist"
          >
            GAME WATCHLIST
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="flex text-white container mx-auto items-center justify-between py-4">
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
            <div data-tip="This is a tooltip!" className="">
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={users.displayName}
                data-tooltip-place="top"
                src={users.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
              <Tooltip id="my-tooltip" />
            </div>
            <button
              onClick={userLogout}
              className="btn bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MdAccountCircle className="text-lg" />
              <Link to={"/login"}>
                <button className=" text-white ">Login</button>
              </Link>
            </div>
            <Link to={"/register"}>
              <button className=" text-white ">Register</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
