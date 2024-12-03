import { LuGamepad2 } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink>All Reviews</NavLink>
      <NavLink>Add Review</NavLink>
      <NavLink>Game WatchList</NavLink>
    </>
  );
  return (
    <nav className="flex container mx-auto  items-center justify-between">
      <div className="flex items-center gap-2">
        <LuGamepad2 />
        <h3>CHILL GAMER</h3>
      </div>
      <div className="space-x-3">{links}</div>
      <div>
        <button className="btn">Login</button>
        <button className="btn">Register</button>
      </div>
    </nav>
  );
};

export default NavBar;
