import { Link } from "react-router";
import logo from "../../assets/logos/logo.png";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContex } from "../../assets/providers/AuthContex";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CreateAccount = () => {
  const { createUser } = useContext(AuthContex);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);

  const handleCreateAccount = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirm-password");
    const terms = form.has("terms");
    console.log(email, password);
    setSuccessMessage("");
    setErrorMessage("");
    setErrorMessage("");

    // Checking password matching
    if (password !== confirmPassword) {
      setErrorMessage("**Password doesn't match!");
      return;
    }

    // Checking if Terms & Conditions checked
    if (!terms) {
      setErrorMessage("*Accept Terms & Conditions to continue.");
      return;
    }

    // Creating account/user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("*User created successfully!");
      })
      .catch((error) => setErrorMessage(`**${error.message}`));
  };

  return (
    <div className="relative">
      <Navbar textColor="black" logo={logo} borderColor="black" />
      <div className="hero min-h-screen">
        <div className="card-body w-1/3 border border-gray-300 rounded-lg p-10">
          <h2 className="font-bold text-3xl mb-6">Create an account</h2>
          <form onSubmit={handleCreateAccount}>
            <fieldset className="fieldset">
              <div className="mb-5">
                <label className="label text-black font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full text-black font-medium"
                  placeholder="Your name"
                  autoComplete="nope"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="label text-black font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full text-black font-medium"
                  placeholder="Email"
                  autoComplete="nope"
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Please enter a valid email address (e.g. example@gmail.com)"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="label text-black font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "password" : "text"}
                    name="password"
                    className="input w-full text-black font-medium"
                    placeholder="Password"
                    autoComplete="new-password"
                    pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}"
                    title="Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
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
              <div className="mb-5">
                <label className="label text-black font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword2 ? "password" : "text"}
                    name="confirm-password"
                    className="input w-full text-black font-medium"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                    required
                  />
                  <span
                    onClick={() => setShowPassword2(!showPassword2)}
                    className="absolute top-3 right-0 text-sm text-gray-400 px-2"
                  >
                    {showPassword2 ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <div>
                <label className="label font-medium text-black">
                  <input type="checkbox" name="terms" className="checkbox" />
                  Accept our{" "}
                  <Link to="#" className="link link-warning">
                    Terms & Conditions
                  </Link>
                </label>
              </div>
              <button className="btn btn-warning mt-4">
                Create an account
              </button>
            </fieldset>
          </form>
          <div className="text-center mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-amber-600 font-medium hover:underline"
            >
              Login
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

export default CreateAccount;
