import { useContext, useEffect, useState } from "react";
import { LuGamepad2 } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import AuthContext from "../Context/AuthContext";
import { MdAccountCircle, MdClose } from "react-icons/md";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  const { users, userLogout } = useContext(AuthContext);
  console.log(users);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (isOpen) setOpen(false);
    };
    window.addEventListener("scroll", handelScroll);
  }, [isOpen]);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-black" : "")}
      >
        HOME
      </NavLink>
      <NavLink
        to="/all-reviews"
        className={({ isActive }) => (isActive ? "text-black" : "")}
      >
        ALL REVIEWS
      </NavLink>
      <NavLink
        to="/add-review"
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-black"
        }
        aria-label="Go to Add Review"
      >
        ADD REVIEW
      </NavLink>
      <NavLink
        to="/my-review"
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-black"
        }
        aria-label="Go to My Reviews"
      >
        MY REVIEWS
      </NavLink>
      <NavLink
        to="/watchlist"
        className={({ isActive }) =>
          isActive ? "text-black" : "hover:text-black"
        }
        aria-label="Go to Game Watchlist"
      >
        GAME WATCHLIST
      </NavLink>
    </>
  );

  const smLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#F80136]" : "text-black "
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/all-reviews"
        className={({ isActive }) =>
          isActive ? "text-[#F80136]" : "text-black"
        }
      >
        ALL REVIEWS
      </NavLink>
      <NavLink
        to="/add-review"
        className={({ isActive }) =>
          isActive ? "text-[#F80136]" : "text-black hover:text-black"
        }
        aria-label="Go to Add Review"
      >
        ADD REVIEW
      </NavLink>
      <NavLink
        to="/my-review"
        className={({ isActive }) =>
          isActive ? "text-[#F80136]" : "text-black hover:text-black"
        }
        aria-label="Go to My Reviews"
      >
        MY REVIEWS
      </NavLink>
      <NavLink
        to="/watchlist"
        className={({ isActive }) =>
          isActive ? "text-[#F80136]" : "text-black hover:text-black"
        }
        aria-label="Go to Game Watchlist"
      >
        GAME WATCHLIST
      </NavLink>
    </>
  );

  return (
    <div>
      <nav className="flex z-30 text-white lg:container mx-3 md:mx-6 lg:mx-auto items-center justify-between py-4">
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
        {/* logo section */}
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <LuGamepad2 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl" />
            <h3 className="font-bold   md:text-3xl lg:text-4xl">CHILL GAMER</h3>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="space-x-4 hidden lg:block">{links}</div>

        {/* Auth Section */}
        <div>
          {users ? (
            <div className="flex items-center gap-2 md:gap-4">
              <div data-tip="This is a tooltip!">
                {users?.photoURL ? (
                  <>
                    <img
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={users.displayName}
                      data-tooltip-place="top"
                      src={users.photoURL}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full cursor-pointer"
                    />
                    <Tooltip id="my-tooltip" />
                  </>
                ) : (
                  <div>
                    <FaUserAlt
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={users.displayName}
                      data-tooltip-place="top"
                      className="w-10 h-10 text-white cursor-pointer"
                    />
                    <Tooltip id="my-tooltip" />
                  </div>
                )}
              </div>
              <button
                onClick={userLogout}
                className="hover:text-black underline text-white "
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MdAccountCircle size={30} className="text-lg" />
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "text-black" : "text-white"
                  }
                >
                  Login
                </NavLink>
              </div>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-black" : "text-white"
                }
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 w-full bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-y-[72px]" : "hidden"
        } lg:hidden`}
      >
        <div className="flex flex-col gap-2 lg:container md:mx-4  lg:mx-auto p-4">
          {smLinks}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
