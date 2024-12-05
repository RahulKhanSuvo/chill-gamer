import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";

const WatchList = () => {
  const { users } = useContext(AuthContext);
  const [watchList, setWatchList] = useState([]);
  console.log(watchList);
  useEffect(() => {
    fetch(`http://localhost:4000/watchList?email=${users.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWatchList(data);
      });
  }, [users]);
  return <div></div>;
};

export default WatchList;
