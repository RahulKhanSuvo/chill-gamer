import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { LuGamepad2 } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-[#0F1012]">
      <div className="container pt-20 pb-10 flex flex-col lg:flex-row justify-between gap-4 mx-auto">
        {/* Logo and Social Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="flex text-white items-center gap-2">
            <LuGamepad2 className="text-4xl" />
            <h3 className="text-lg font-bold">CHILL GAMER</h3>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Your ultimate destination for gaming insights and reviews. Stay
            updated with the latest trends in the gaming world.
          </p>
          <div className="flex gap-2 text-white mt-4">
            <p className="bg-[#3B3B3B] hover:bg-[#F80136] p-2">
              <FaFacebookF />
            </p>
            <p className="bg-[#3B3B3B] hover:bg-[#F80136] p-2">
              <FaTwitter />
            </p>
            <p className="bg-[#3B3B3B] hover:bg-[#F80136] p-2">
              <FaLinkedinIn />
            </p>
            <p className="bg-[#3B3B3B] hover:bg-[#F80136] p-2">
              <FaPinterestP />
            </p>
            <p className="bg-[#3B3B3B] hover:bg-[#F80136] p-2">
              <FaInstagram />
            </p>
          </div>
        </div>

        {/* Platform Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-white text-lg font-semibold mb-4">Platform</h3>

          <ul className="text-gray-400 mt-2 space-y-2">
            <li>PlayStation 4</li>
            <li>XBOX One</li>
            <li>PC</li>
            <li>Steam</li>
            <li>Origin</li>
          </ul>
        </div>

        {/* Additional Links Section */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-white text-lg font-semibold mb-4">
            Additional Links
          </h3>

          <ul className="mt-2 space-y-2">
            <li>
              <a href="" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-gray-400 hover:text-white">
                Store
              </a>
            </li>
            <li>
              <a href="" className="text-gray-400 hover:text-white">
                Gallery
              </a>
            </li>
            <li>
              <a href="" className="text-gray-400 hover:text-white">
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        {/* Corporate Office Section */}
        <div className="w-full md:w-1/4">
          <h3 className="text-white text-lg font-semibold mb-4">
            Corporate Office
          </h3>
          <div className="text-sm text-gray-400">
            <p>Phone:</p>
            <span className="block mb-4">+(123)-6418-8990</span>
          </div>
          <div className="text-sm text-gray-400">
            <p>Office Address: </p>
            <span className="block mb-4">
              29 Street, Melbourne City, Australia # 34 Road, House #10.
            </span>
          </div>
          <p className="text-sm min-w-sm text-gray-400 mb-4">
            Subscribe to our newsletter to receive the latest gaming updates and
            news directly in your inbox.
          </p>
          <div className="flex items-center">
            <input
              className="bg-[#2D2D2D] text-white focus:outline-none px-4 py-3 "
              type="email"
              placeholder="Enter Your Email"
            />
            <div className="py-[14px] cursor-pointer px-4 bg-[#F80136] ">
              <FaChevronRight className="text-xl text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-500">
        <p className="py-6 text-sm text-gray-400">
          © 2024 Chill Gamer. All Rights Reserved by Rahul KHan{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
