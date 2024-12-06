import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import loginImage from "../assets/2.jpg";
import toast from "react-hot-toast";
const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
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
      .then(() => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Registration successful! Welcome!");
          })
          .catch(() => {
            toast.error("failed please provide valid information");
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email is already in use.");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password is too weak.");
        } else {
          toast.error(error.message || "An error occurred.");
        }
      });
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${loginImage})` }} className="">
        <div className="bg-black bg-opacity-55 ">
          <div className="container mx-auto py-24">
            {" "}
            <h3 className="text-white font-bold text-4xl">Registration</h3>
          </div>
        </div>
      </div>
      <div className="container my-20 mx-auto">
        {" "}
        <div className=" flex flex-col text-black">
          <p className="mb-6 font-medium text-2xl">Welcome Back</p>
          <form onSubmit={handelSubmit}>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl">Name</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Email"
                className=" md:w-[55%] lg:w-[35%] p-3 border border-black  text-b focus:outline-none  placeholder-white"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl">PhotoURL</span>
              <input
                type="text"
                name="photo"
                required
                placeholder="Enter Email"
                className=" md:w-[55%] lg:w-[35%] p-3 border border-black  text-b focus:outline-none  placeholder-white"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl">Email</span>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Email"
                className=" md:w-[55%] lg:w-[35%] p-3 border border-black  text-b focus:outline-none  placeholder-white"
              />
            </div>
            <div className="mb-4 flex flex-col">
              <span className="font-medium text-xl">Password</span>
              <input
                type="password"
                required
                name="password"
                placeholder="Enter Password"
                className="md:w-[55%]  lg:w-[35%] p-3 border border-black  text-black focus:outline-none focus:ring-red-500 placeholder-white"
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
            <p>
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
