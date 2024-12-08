import { useLoaderData } from "react-router-dom";
import BestGames from "../components/BestGames";
import Slider from "../components/Slider";
import bannerBg from "../assets/aroplane-fight.jpg";
import TechDeals from "../components/TechDeals";
import GameStore from "../components/GameStore";
const Home = () => {
  const loadedGames = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <div style={{ backgroundImage: `url(${bannerBg})` }} className="">
        <div className="bg-[#f9fcff] dark:bg-[#181A1B]  bg-opacity-80">
          <BestGames loadedGames={loadedGames}></BestGames>
        </div>
      </div>
      <div className="bg-[#F2F2F2] dark:bg-[#181A1B]">
        <TechDeals></TechDeals>
      </div>
      <div className="bg-[#F6F6F6] dark:bg-[#1D2021]">
        <GameStore></GameStore>
      </div>
    </div>
  );
};

export default Home;
