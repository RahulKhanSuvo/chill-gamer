import { useContext, useState } from "react";
import { LuGamepad2 } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import AuthContext from "../Context/AuthContext";
import { MdAccountCircle, MdClose } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";

const NavBar = () => {
  const { users, userLogout } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false); // Changed to false to make the menu closed by default
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
    <div>
      <nav className="flex z-30 text-white container mx-auto items-center justify-between py-4">
        {/* Logo Section */}
        <div className="lg:hidden">
          <button
            className="transition-transform duration-300 ease-in-out"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? (
              <MdClose size={30} className="transform rotate-180" />
            ) : (
              <HiMenuAlt1 size={30} className="transform rotate-0" />
            )}
          </button>
        </div>
        <Link to={"/"}>
          <div className="flex text-3xl items-center gap-2">
            <LuGamepad2 className="text-4xl" />
            <h3 className=" font-bold">CHILL GAMER</h3>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="space-x-4 hidden lg:block">{links}</div>

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
                className="hover:text-black underline text-white px-4 py-2 rounded"
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

      {/* Mobile Menu - Appears when menu is toggled */}
      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-[72px]" : "-translate-y-full"
        } lg:hidden`}
      >
        <div className="flex flex-col gap-2 container mx-auto p-4">{links}</div>
      </div>
    </div>
  );
};

export default NavBar;
