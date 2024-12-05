import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const WatchList = () => {
  const { user } = useContext(AuthContext);

  return <div></div>;
};

export default WatchList;
