import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginAnimation from "../assets/login.json";
import Lottie from "lottie-react";

const Login = () => {
  const { userLogin, userGoogleSignIn, userGitHubSignIn } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    userLogin(email, password)
      .then(() => {
        toast.success("Login successful! Welcome back!");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Login failed. Please provide a valid email & password.");
      });
  };

  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then(() => {
        toast.success("Login successful! Welcome back!");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("Google login failed. Please try again.");
      });
  };

  const handleGitHubSignIn = () => {
    userGitHubSignIn()
      .then(() => {
        toast.success("Login successful! Welcome back!");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("GitHub login failed. Please try again.");
      });
  };

  return (
    <div>
      <div className="lg:container dark:bg-[#181A1B] my-10 lg:my-0 mx-4 md:mx-6 lg:mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Lottie Animation */}
        <div className="w-full md:w-2/3 lg:w-1/2">
          <Lottie animationData={loginAnimation} loop={true} />
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col text-black">
          <p className="mb-6 dark:text-white font-medium text-2xl">
            Welcome Back
          </p>
          <form onSubmit={handelSubmit}>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl dark:text-white">Email</span>
              <input
                type="email"
                name="email"
                className="md:w-[90%] lg:w-[80%] p-3 dark:border-white border border-black focus:outline-none dark:text-white"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl dark:text-white">
                Password
              </span>
              <input
                type="password"
                name="password"
                className="md:w-[90%] lg:w-[80%] p-3 dark:border-white border border-black focus:outline-none dark:text-white"
              />
            </div>
            <div className="mb-6">
              <a href="#" className="text-red-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#F80136] hover:bg-red-700 text-white p-3 px-4"
            >
              LOG IN
            </button>
          </form>
          <div className="mt-4">
            <p>
              <span className="dark:text-white">Don't have an account?</span>{" "}
              <Link className="text-red-600" to={"/register"}>
                Register now!
              </Link>
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
            <button
              onClick={handleGoogleSignIn}
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded"
            >
              Sign In with Google
            </button>
            <h3 className="dark:text-white">or</h3>
            <button
              onClick={handleGitHubSignIn}
              className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded"
            >
              Sign In with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
