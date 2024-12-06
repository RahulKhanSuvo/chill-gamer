import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import loginImage from "../assets/2.jpg";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
        toast.error("login failed please provide valid email & password");
      });
  };

  const handleGoogleSignIn = () => {
    userGoogleSignIn()
      .then(() => {
        toast.success("Login successful! Welcome back!");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("failed please try again");
      });
  };

  const handleGitHubSignIn = () => {
    userGitHubSignIn()
      .then(() => {
        toast.success("Login successful! Welcome back!");
        navigate(location.state ? location.state : "/");
      })
      .catch(() => {
        toast.error("failed please try again");
      });
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${loginImage})` }} className="">
        <div className="bg-black bg-opacity-55 ">
          <div className="container mx-auto py-24">
            {" "}
            <h3 className="text-white font-bold text-4xl">Login</h3>
          </div>
        </div>
      </div>
      <div className="container my-20 mx-auto">
        {" "}
        <div className=" flex flex-col text-black">
          <p className="mb-6 font-medium text-2xl">Welcome Back</p>
          <form onSubmit={handelSubmit}>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className=" md:w-[55%] lg:w-[35%] p-3 border border-black  text-b focus:outline-none  placeholder-white"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                className="md:w-[55%]  lg:w-[35%] p-3 border border-black  text-black focus:outline-none focus:ring-red-500 placeholder-white"
              />
            </div>
            <div className="mb-6">
              <a href="#" className="text-red-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className=" bg-[#F80136] hover:bg-red-700 text-white p-3 px-4 "
            >
              LOG IN
            </button>
          </form>
          <div className="mt-4">
            <p>
              Don't have an account?{" "}
              <Link className="text-red-600" to={"/register"}>
                Register now !
              </Link>{" "}
            </p>
          </div>

          <div className="flex items-center gap-1">
            {/* Google Sign-In Button */}
            <div className="mt-4">
              <button
                onClick={handleGoogleSignIn}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded"
              >
                Sign In with Google
              </button>
            </div>
            <h3>or</h3>
            {/* GitHub Sign-In Button */}
            <div className="mt-4">
              <button
                onClick={handleGitHubSignIn}
                className=" bg-gray-800 hover:bg-gray-900 text-white p-3 rounded"
              >
                Sign In with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
