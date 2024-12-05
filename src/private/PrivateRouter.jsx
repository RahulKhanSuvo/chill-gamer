import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { users } = useContext(AuthContext);
  const location = useLocation();
  if (users) {
    return children;
  }
  return (
    <div>
      <Navigate state={location.pathname} to={"/login"}></Navigate>
    </div>
  );
};

export default PrivateRouter;
