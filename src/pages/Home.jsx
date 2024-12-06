import { useLoaderData } from "react-router-dom";
import BestGames from "../components/BestGames";
import Slider from "../components/Slider";
import bannerBg from "../assets/aroplane-fight.jpg";
import TechDeals from "../components/TechDeals";
const Home = () => {
  const loadedGames = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <div style={{ backgroundImage: `url(${bannerBg})` }} className="">
        <div className="bg-[#f9fcff]  bg-opacity-80">
          <BestGames loadedGames={loadedGames}></BestGames>
          <TechDeals></TechDeals>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
