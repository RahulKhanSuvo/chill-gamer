import bg from "../assets/post-bg2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";

const MostExiting = ({ loadedGames }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="lg:container px-4 pb-8 md:px-6 lg:mx-auto"
    >
      <h3 className="text-white py-2 text-xl font-medium">
        Most Exciting Games
      </h3>
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {loadedGames.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden group">
              <div
                className="relative  transition-transform duration-300 w-full md:h-[250px] h-[150px] group-hover:scale-110 bg-cover bg-center"
                style={{
                  backgroundImage: `
                    linear-gradient(to bottom, rgba(255, 240, 0, 0) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.9) 100%),
                    url(${slide.coverURL})
                  `,
                }}
              ></div>

              {/* Text Content */}
              <div className="absolute bottom-4 left-3">
                <div className="clipped-div pr-2 pl-1 py-1 bg-[#00c110] mt-2">
                  <p className="text-white">{slide.genre}</p>
                </div>
                <Link to={`/review/${slide._id}`}>
                  <h3 className="hover:text-[#F80136] text-white text-2xl mt-3">
                    {slide.title}
                  </h3>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MostExiting;
