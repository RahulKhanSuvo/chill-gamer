import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegCalendarAlt,
  FaRegComments,
} from "react-icons/fa";
import slide1 from "../assets/5.jpg";
import slide2 from "../assets/3-1020x600.jpg";
import slide3 from "../assets/4-1020x600.jpg";
import "swiper/swiper-bundle.css";
import "../style/slider.css"; // For the custom styles
import { CgProfile } from "react-icons/cg";
import { MdAccessTime } from "react-icons/md";

const Slider = () => {
  return (
    <div className="relative -z-0">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <img className="w-full h-full " src={slide1} alt="" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute container inset-0 flex justify-center flex-col mx-auto text-white">
              <h3 className=" flex items-center gap-2">
                <FaRegCalendarAlt className="text-[#F80136]" />
                May 31,2021
              </h3>
              <h1 className="text-4xl font-semibold max-w-2xl  hover:text-[#F80136] transition-colors duration-200 cursor-pointer ">
                Top 10 Gaming Reviews: Must-Play Titles of the Year
              </h1>
              <p className="mt-4 max-w-2xl  text-lg mb-3">
                Whether you are a fan of action-packed gameplay or immersive
                storytelling, this year’s top gaming titles have something for
                everyone, with outstanding graphics and innovative mechanics.
              </p>
              <div className="flex gap-2 items-center">
                <h3 className="flex items-center gap-1">
                  <CgProfile className="text-[#F80136]" />
                  <p>by Rahul</p>
                </h3>
                <h3 className="flex items-center gap-1">
                  <FaRegComments className="text-[#F80136]" />
                  <p>0 comments </p>
                </h3>
                <h3 className="flex items-center gap-1">
                  <MdAccessTime className="text-[#F80136]" />
                  <p>2 minutes read </p>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <img className="w-full h-full " src={slide2} alt="" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute container inset-0 flex justify-center flex-col mx-auto text-white">
              <h3 className=" flex items-center gap-2">
                <FaRegCalendarAlt className="text-[#F80136]" />
                June 15,2021
              </h3>
              <h1 className="text-4xl font-semibold max-w-2xl hover:text-[#F80136] transition-colors duration-200 cursor-pointer ">
                Best New Indie Games: Discover Hidden Gems
              </h1>
              <p className="mt-4 max-w-2xl text-lg mb-3">
                This list highlights the most innovative indie games of the
                year. Get ready to explore captivating storylines, unique
                gameplay, and artistic designs that are pushing the boundaries
                of indie game development.
              </p>
              <div className="flex gap-2 items-center">
                <h3 className="flex items-center gap-1">
                  <CgProfile className="text-[#F80136]" />
                  <p>by Sarah</p>
                </h3>
                <h3 className="flex items-center gap-1">
                  <FaRegComments className="text-[#F80136]" />
                  <p>5 comments </p>
                </h3>
                <h3 className="flex items-center gap-1">
                  <MdAccessTime className="text-[#F80136]" />
                  <p>3 minutes read </p>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[600px]">
            <img className="w-full h-full " src={slide3} alt="" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute container inset-0 flex justify-center flex-col mx-auto text-white">
              <h3 className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-[#F80136]" />
                July 25, 2021
              </h3>
              <h1 className="text-4xl font-semibold max-w-2xl hover:text-[#F80136] transition-colors duration-200 cursor-pointer">
                Upcoming Game Releases: What You Should Look Out For
              </h1>
              <p className="mt-4 max-w-2xl text-lg mb-3">
                Get ready for some of the most exciting game releases of the
                year. Here’s a sneak peek at the titles you won’t want to miss.
              </p>
              <div className="flex gap-2 items-center">
                <h3 className="flex items-center gap-1">
                  <CgProfile className="text-[#F80136]" />
                  <p>by Rahul</p>
                </h3>
                <h3 className="flex items-center gap-1">
                  <FaRegComments className="text-[#F80136]" />
                  <p>0 comments </p>
                </h3>
                <h3 className="flex items-center gap-1">
                  <MdAccessTime className="text-[#F80136]" />
                  <p>4 minutes read </p>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Custom Navigation Buttons */}
        <div className="custom-prev">
          <FaChevronLeft />
        </div>
        <div className="custom-next">
          <FaChevronRight />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
