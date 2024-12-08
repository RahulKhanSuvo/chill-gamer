import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegCalendarAlt,
  FaRegComments,
} from "react-icons/fa";
import "swiper/swiper-bundle.css";
import "../style/slider.css"; // For custom styles
import { CgProfile } from "react-icons/cg";
import { MdAccessTime } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Zoom } from "react-awesome-reveal";

const Slider = () => {
  const slides = [
    {
      image: "https://i.ibb.co.com/rbYvcjB/3-1020x600.jpg",
      date: "May 31, 2021",
      title: "Top 10 Gaming Reviews: Must-Play Titles of the Year",
      description:
        "Whether you are a fan of action-packed gameplay or immersive storytelling, this year’s top gaming titles have something for everyone, with outstanding graphics and innovative mechanics.",
      author: "Rahul",
      comments: 0,
      readTime: "2 minutes read",
    },
    {
      image: "https://i.ibb.co.com/XLDNxjM/4-1020x600.jpg",
      date: "June 15, 2021",
      title: "Best New Indie Games: Discover Hidden Gems",
      description:
        "This list highlights the most innovative indie games of the year. Get ready to explore captivating storylines, unique gameplay, and artistic designs that are pushing the boundaries of indie game development.",
      author: "Sarah",
      comments: 5,
      readTime: "3 minutes read",
    },
    {
      image: "https://i.ibb.co.com/mv5ZHx6/5.jpg",
      date: "July 25, 2021",
      title: "Upcoming Game Releases: What You Should Look Out For",
      description:
        "Get ready for some of the most exciting game releases of the year. Here’s a sneak peek at the titles you won’t want to miss.",
      author: "Rahul",
      comments: 0,
      readTime: "4 minutes read",
    },
  ];

  return (
    <div className="relative -z-0">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <img
                className="w-full h-full object-cover"
                src={slide.image}
                alt={slide.title}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Content */}
              <div className="absolute lg:container mx-4 md:mx-6 lg:mx-auto inset-0 flex flex-col justify-center items-start text-white ">
                <h3 className="flex items-center gap-2 text-sm sm:text-base">
                  <FaRegCalendarAlt className="text-[#F80136]" />
                  {slide.date}
                </h3>
                <Fade cascade>
                  <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold max-w-2xl hover:text-[#F80136] transition-colors duration-200 cursor-pointer">
                    <Typewriter
                      words={[slide.title]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={50}
                      deleteSpeed={30}
                      delaySpeed={2000}
                    />
                  </h1>
                </Fade>
                <Fade d>
                  <p className="mt-4 max-w-2xl text-sm sm:text-lg md:text-lg mb-3">
                    {slide.description}
                  </p>
                </Fade>
                <div className="flex flex-wrap gap-4 items-center">
                  <h3 className="flex items-center gap-1 text-sm">
                    <CgProfile className="text-[#F80136]" />
                    <p>by {slide.author}</p>
                  </h3>
                  <h3 className="flex items-center gap-1 text-sm">
                    <FaRegComments className="text-[#F80136]" />
                    <p>{slide.comments} comments</p>
                  </h3>
                  <h3 className="flex items-center gap-1 text-sm">
                    <MdAccessTime className="text-[#F80136]" />
                    <p>{slide.readTime}</p>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#F80136] text-white p-2 rounded-full cursor-pointer z-10">
          <FaChevronLeft size={24} />
        </div>
        <div className="custom-next hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#F80136] text-white p-2 rounded-full cursor-pointer z-10">
          <FaChevronRight size={24} />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
