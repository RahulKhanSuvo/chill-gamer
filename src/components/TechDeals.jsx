import { Fade } from "react-awesome-reveal";
import SuTitle from "./SuTitle";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const TechDeals = ({ data }) => {
  const [bestGide, setBestGide] = useState([]);
  console.log(bestGide);
  useEffect(() => {
    fetch("https://chill-gamer-server-dusky.vercel.app/bestGide")
      .then((res) => res.json())
      .then((data) => setBestGide(data));
  }, []);
  const truncateText = (text, limit) =>
    text.split(" ").length > limit
      ? text.split(" ").slice(0, limit).join(" ") + "..."
      : text;
  return (
    <div className="lg:container  py-10 mx-auto">
      <div className=" bg-white p-4 md:px-6 py-6 lg:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-3">
            <SuTitle title={" Latest News"}></SuTitle>
            <div className="space-y-6 mt-4">
              {data.slice(0, 4).map((article, index) => (
                <Fade
                  triggerOnce={true}
                  key={index}
                  cascade
                  direction="up"
                  duration={600}
                >
                  <div className="group flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 bg-white dark:bg-black p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="overflow-hidden">
                      <img
                        src={article.coverURL}
                        alt={article.title}
                        className="w-full md:h-28 object-cover rounded-md group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-green-500">
                        {article.genre}
                      </span>
                      <Link to={`/review/${article._id}`}>
                        <h3 className="text-lg font-semibold cursor-pointer group-hover:text-[#F80136] transition-colors duration-300">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm hidden sm:block">
                        {truncateText(article.description, 10)}
                      </p>
                      <div className="text-gray-400 text-xs mt-2 flex justify-between">
                        <span>{40}</span>
                        <span>{40 + 15} views</span>
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
          {/* Best Guides */}
          <div>
            <Fade triggerOnce={true} direction="right">
              <h2 className="font-medium bg-[#F80136] text-white text-xl py-4 px-4">
                Best Guides
              </h2>
            </Fade>
            <Fade cascade triggerOnce={true} direction="up" damping={0.1}>
              <div className="bg-white mt-4 dark:bg-black rounded-lg shadow-md p-4 space-y-4">
                {bestGide.map((guide, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={guide.coverURL}
                      alt={guide.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <Link to={`/review/${guide._id}`}>
                        <h3 className="text-sm font-semibold cursor-pointer hover:text-[#F80136]">
                          {guide.title}
                        </h3>
                      </Link>
                      <div className="text-gray-400 text-xs">
                        <span> </span> May 25,2024{" "}
                        <span> {index + 15}views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechDeals;
