import { Fade } from "react-awesome-reveal";
import SuTitle from "./SuTitle";
import { Link } from "react-router-dom";

const TechDeals = ({ data }) => {
  const articles = [
    {
      title: "Tom Clancy's the Division Server Problems Are Fixed",
      date: "07.18.2017",
      category: "Gaming News",
      description:
        "The release of Tom Clancy’s The Division was a disaster after game servers kept crashing...",
      image: "https://i.ibb.co.com/b7XW6Dn/post-25-copyright-760x567.jpg",
      views: 18,
    },
    {
      title: "E3 2017 — Top 10 Sports Games",
      date: "07.14.2017",
      category: "E3 Highlights",
      description:
        "Sports simulators have a small, but passionate audience. This E3 won’t disappoint them. We are...",
      image: "https://i.ibb.co.com/3spJ1Qv/image.png",
      views: 12,
    },
    {
      title: "Dishonored PC Release Scheduled on Summer 2018",
      date: "07.10.2017",
      category: "Upcoming Releases",
      description:
        "After all console gamers praised Dishonored and named it “Game Of The Year” Arkane Studios...",
      image: "https://i.ibb.co.com/CMnQ85D/image.png",
      views: 8,
    },
    {
      title: "Assassin’s Creed: Another One Bites The Dust",
      date: "07.10.2017",
      category: "Ubisoft",
      description:
        "Another year, another mediocre game from Ubisoft. Looks like the French studio is only aiming...",
      image: "https://i.ibb.co.com/sPvJ5bP/image.png",
      views: 8,
    },
  ];
  console.log(data);
  const guides = [
    {
      title: "Tom Clancy's The Division Review",
      date: "06.08.2017",
      views: 18647,
      image: "https://i.ibb.co.com/Kmn6hgB/image.png",
    },
    {
      title: "The Witcher 3: Blood & Wine — Best Endings",
      date: "12.12.2017",
      views: 8676,
      image: "https://i.ibb.co.com/s59sxNf/image.png",
    },
    {
      title: "Call of Duty WWII Review",
      date: "09.18.2017",
      views: 4425,
      image: "https://i.ibb.co.com/ZSndQV0/image.png",
    },
    {
      title: "Sign up for Giveaway of Uncharted 4",
      date: "09.10.2017",
      views: 4164,
      image: "https://i.ibb.co.com/pfjT7Mf/image.png",
    },
  ];
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
                <Fade key={index} cascade direction="up" duration={600}>
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
            <Fade direction="right">
              <h2 className="font-medium bg-[#F80136] text-white text-xl py-4 px-4">
                Best Guides
              </h2>
            </Fade>
            <Fade cascade direction="up" damping={0.1}>
              <div className="bg-white dark:bg-black rounded-lg shadow-md p-4 space-y-4">
                {guides.map((guide, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-sm font-semibold cursor-pointer hover:text-[#F80136]">
                        {guide.title}
                      </h3>
                      <div className="text-gray-400 text-xs">
                        <span>{guide.date}</span> •{" "}
                        <span>{guide.views} views</span>
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
