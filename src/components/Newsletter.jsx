import mail from "../assets/Animation - 1736230280757.json";
import Lottie from "lottie-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (email) {
      toast.success(`Thank you for subscribing with email: ${email}`);
    } else {
      toast.error("Please enter a valid email!");
    }
  };

  return (
    <div className="lg:container md:px-8 py-10 lg:mx-auto bg-gradient-to-r from-[#F80136] to-[#FF2C3B] text-white rounded-xl shadow-lg space-x-8">
      {/* Text Section */}
      <div className=" text-center ">
        <h5 className="text-3xl text-center font-bold mb-3">
          Subscribe to Our Newsletter
        </h5>
        <p className="text-lg font-medium mb-4">
          Get the latest updates and offers directly in your inbox!
        </p>
        <div className="w-[250px] md:w-[300px] mx-auto mt-8 md:mt-0">
          <Lottie animationData={mail} loop={true} />
        </div>

        {/* Email Input and Subscribe Button */}
        <div className="flex flex-col md:flex-row mt-8 justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="px-6 py-2 w-[280px] md:w-[350px] rounded-lg text-black text-lg placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF2C3B] transition duration-300"
          />
          <button
            onClick={handleSubmit}
            className="bg-white border text-black px-6 py-2 rounded-lg text-lg font-semibold hover:bg-[#FF2C3B] hover:text-white transition duration-300"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Animation Section */}
    </div>
  );
};

export default Newsletter;
