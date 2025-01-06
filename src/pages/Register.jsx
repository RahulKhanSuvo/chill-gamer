import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import loginImage from "../assets/2.jpg";
import toast from "react-hot-toast";
const Register = () => {
  const { createUser, updateUser, setLoading, setUsers } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photo.value;
    if (!email || !name || !password || !photo) {
      toast.error("your input field is empty");
      return;
    }
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    if (!hasMinLength) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    if (!hasUppercase) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!hasLowercase) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createUser = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUsers({ ...createUser, displayName: name, photoURL: photo });
            setLoading(false);
            toast.success("Registration successful!");
            navigate(location.state ? location.state : "/");
          })
          .catch((updateError) => {
            console.error("Error updating user profile:", updateError);
            toast.error("Failed to update user profile.");
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        toast.error(error.message || "An error occurred.");
      });
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${loginImage})` }} className="">
        <div className="bg-black bg-opacity-55 ">
          <div className="lg:container py-20 lg:mx-auto mx-4 md:mx-6">
            {" "}
            <h3 className="text-white font-bold text-4xl">Registration</h3>
          </div>
        </div>
      </div>
      <div className="lg:container my-20 lg:mx-auto mx-4 md:m-6">
        {" "}
        <div className=" flex flex-col text-black">
          <p className="mb-6 dark:text-white font-medium text-2xl">
            Welcome Back
          </p>
          <form onSubmit={handelSubmit}>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl dark:text-white">Name</span>
              <input
                type="text"
                name="name"
                required
                className=" md:w-[55%] lg:w-[35%] p-3 border border-black dark:border-white dark:text-white focus:outline-none  placeholder-white"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl dark:text-white">
                PhotoURL
              </span>
              <input
                type="text"
                name="photo"
                required
                className="  md:w-[55%] lg:w-[35%] p-3 border dark:text-white border-black dark:border-white  focus:outline-none  placeholder-white"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl dark:text-white">Email</span>
              <input
                type="email"
                name="email"
                required
                className="  md:w-[55%] lg:w-[35%] p-3 dark:text-white border border-black  dark:border-white text-b focus:outline-none  placeholder-white"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl dark:text-white">
                Password
              </span>
              <input
                type="password"
                required
                name="password"
                className="md:w-[55%]  lg:w-[35%] p-3 dark:text-white border border-black  text-black dark:border-white focus:outline-none focus:ring-red-500 placeholder-white"
              />
            </div>

            <button
              type="submit"
              className=" bg-[#F80136] hover:bg-red-700 text-white p-3 px-6 "
            >
              REGISTER
            </button>
          </form>
          <div className="mt-4">
            <p className="dark:text-white">
              Already have an account?{" "}
              <Link className="text-red-600" to={"/login"}>
                Login now !
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
