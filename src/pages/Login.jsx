import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  const { userLogin } = useContext(AuthContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen"></div>
    </div>
  );
};

export default Login;
