import { useLoaderData } from "react-router-dom";
import BestGames from "../components/BestGames";
import Slider from "../components/Slider";

const Home = () => {
  const loadedGames = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <BestGames loadedGames={loadedGames}></BestGames>
    </div>
  );
};

export default Home;
