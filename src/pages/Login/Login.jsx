import Navbar from "../Shared/Navbar/Navbar";
import logo from "../../assets/logos/logo.png";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useRef, useState } from "react";
import { AuthContex } from "../../assets/providers/AuthContex";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const { loginUser, resetPassword } = useContext(AuthContex);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const emailRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"; //<-- it returns the page address where user wanted to go, before the user was forced to login page.

  //Handle login function
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setSuccessMessage("");
    setErrorMessage("");

    // Logging in
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        setSuccessMessage("**Logged in successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => setErrorMessage(`**${error.message}`));
  };

  //Handle reset password function
  const handlePasswordReset = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value?.trim();

    if (!email) {
      alert("Please enter your email address first.");
      return;
    }

    resetPassword(email)
      .then(() => alert("Password reset email sent!"))
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="relative">
      <Navbar textColor="black" logo={logo} borderColor="black" />
      <div className="hero min-h-screen">
        <div className="card-body w-1/3 border border-gray-300 rounded-lg p-10">
          <h2 className="font-bold text-3xl mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <div className="mb-5">
                <label className="label text-black font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full text-black font-medium"
                  placeholder="Email"
                  autoComplete="nope"
                  required
                  ref={emailRef}
                />
              </div>
              <div className="mb-4">
                <label className="label text-black font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "password" : "text"}
                    name="password"
                    className="input w-full text-black font-medium"
                    placeholder="Password"
                    autoComplete="new-password"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-3 right-0 text-sm text-gray-400 px-2"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <div>
                <button
                  onClick={handlePasswordReset}
                  className="link link-hover text-amber-600"
                >
                  Forgot password?
                </button>
              </div>
              <button className="btn btn-warning mt-4">Login</button>
            </fieldset>
          </form>
          <div className="text-center mt-3">
            Don't have an account?{" "}
            <Link
              to="/create-account"
              className="text-amber-600 font-medium hover:underline"
            >
              Create an account
            </Link>
          </div>
          <div className="mt-2 text-center">
            <p className="text-red-600 text-base font-semibold">
              {errorMessage}
            </p>
            <p className="text-green-600 text-base font-semibold">
              {successMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
