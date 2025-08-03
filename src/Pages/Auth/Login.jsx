import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../services/LoginService";
import { toast } from "react-toastify";
import axios from "axios";

function Login({ onClose = () => {} }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState();
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      // call your local login endpoint, for example:
      const response = await axios.get(
        "https://api-vehicles.vercel.app/api/users",
        {
          params: { email, password },
        }
      );

      const users = response.data;

      // Find the user with matching email and password
      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        // Store matched user's ID and email in localStorage
        localStorage.setItem("id", matchedUser.id); // use correct ID field
        localStorage.setItem("email", matchedUser.email);

        toast.success("Login successful");
        console.log("Local login response:", matchedUser);

        onClose();
        navigate("BrowseVehicles");
      } else {
        toast.error("Invalid email or password");
      }
    } catch (err) {
      toast.error("Login failed: " + err.message);
    }
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-xs flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="relative flex w-96 flex-col space-y-5 rounded-lg border border-gray-300 bg-white px-5 py-10 shadow-xl"
      >
        <button
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-800 text-3xl font-extrabold focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="mx-auto mb-2 space-y-5">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            Login
          </h1>
          <p className="text-gray-500 mb-4">Login to access your account</p>
        </div>

        <form className="space-y-5" onSubmit={handlelogin}>
          <div className="relative mt-2 w-full">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
            >
              Enter Your Email
            </label>
          </div>

          <div className="relative mt-2 w-full">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
              placeholder=" "
              required
              minLength="6"
            />
            <label
              htmlFor="password"
              className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-500"
            >
              Enter Your Password
            </label>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="flex w-full items-center justify-between">
            <button
              type="submit"
              className="shrink-0 inline-block w-36 rounded-lg bg-cyan-500 hover:bg-cyan-700 py-3 font-bold text-white"
            >
              Login
            </button>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </form>

        <div className="flex items-center justify-center my-4 space-x-4 mt-0">
          <div className="h-px bg-gray-300 w-36"></div>
          <p className="text-md text-gray-800">or</p>
          <div className="h-px bg-gray-300 w-36"></div>
        </div>

        <div className="flex items-center justify-center bg-white">
          <button className="w-84 flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg
              className="h-6 w-8 mr-2"
              width="800px"
              height="800px"
              viewBox="-0.5 0 48 48"
              version="1.1"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  fill="#FBBC05"
                  d="M9.83 24c0-1.52.25-2.98.7-4.36L2.62 13.6C1.08 16.73.21 20.26.21 24c0 3.74.87 7.26 2.41 10.39l7.9-6.05c-.45-1.36-.7-2.82-.7-4.34z"
                />
                <path
                  fill="#EB4335"
                  d="M23.71 10.13c3.31 0 6.3 1.17 8.65 3.1l6.84-6.83c-4.17-3.63-9.51-5.9-15.5-5.9-9.29 0-17.27 5.31-21.09 13.07l7.91 6.04c1.82-5.53 6.99-9.42 13.19-9.42z"
                />
                <path
                  fill="#34A853"
                  d="M23.71 37.87c-6.16 0-11.36-3.99-13.18-9.51L2.62 34.4c3.82 7.76 11.8 13.07 21.09 13.07 5.73 0 11.2-2.04 15.31-5.85l-7.5-5.8c-2.11 1.34-4.77 2.02-7.71 2.02z"
                />
                <path
                  fill="#4285F4"
                  d="M46.15 24c0-1.39-.21-2.88-.54-4.27H23.71v9.07h12.6c-.63 3.09-2.34 5.46-4.79 6.99l7.51 5.8C43.34 37.61 46.15 31.65 46.15 24z"
                />
              </g>
            </svg>
            <span>Continue with Google</span>
          </button>
        </div>

        <p className="text-center text-gray-600">
          Don't have an account?
          <Link
            to="/SignUp"
            className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
          >
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
