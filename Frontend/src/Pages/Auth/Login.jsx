import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";

function Login({ onClose = () => {} }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const [loading, setLoading] = useState(false);

  // ---------------- Local Login ----------------
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        { email, password }
      );

      const { _id, fullname, email: userEmail, token, role } = response.data;

      // Save user info in localStorage
      localStorage.setItem("id", _id);
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("email", userEmail);
      localStorage.setItem("role", role);
      localStorage.setItem("token", token);

      toast.success("Login successful");
      console.log("Local login response:", response.data);

      onClose();
      navigate("/BrowseVehicles");
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Login failed: " + err.message
      );
    }
  };

  // ---------------- Google oAuth Login ----------------
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      setLoading(true);
      const idToken = credentialResponse.credential;

      const response = await axios.post(
        "http://localhost:3000/api/users/google-login",
        { id_token: idToken }
      );

      const { email, fullname, token, role, _id } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("fullname", fullname);
      localStorage.setItem("email", email);
      localStorage.setItem("role", role);
      localStorage.setItem("id", _id);

      toast.success("Login successful!");
      onClose();
      // resetForm();

      if (role === "admin") {
        navigate("/admin");
      } else {
        navigate("/BrowseVehicles");
      }
    } catch (err) {
      console.error(err);
      setError("Google login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLoginError = () => {
    setError("Google login failed. Please try again.");
  };

  // ---------------- Modal Behavior ----------------
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
          disabled={loading}
        >
          &times;
        </button>
        <div className="mx-auto mb-2 space-y-5">
          <h1 className="text-center text-3xl font-bold text-gray-700">
            Login
          </h1>
          <p className="text-gray-500 mb-4">Login to access your account</p>
        </div>

        {/* Local Login Form */}
        <form className="space-y-5" onSubmit={handlelogin}>
          <div className="relative mt-2 w-full">
            <input
              type="email"
              id="email"
              value={email}
              disabled={loading}
              onChange={(e) => setemail(e.target.value)}
              className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
              placeholder=" "
              required
              autoComplete="email"
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
              disabled={loading}
              onChange={(e) => setpassword(e.target.value)}
              className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
              placeholder=" "
              required
              minLength="6"
              autoComplete="current-password"
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
              disabled={loading}
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

        {/* Google Login */}
        <div className="flex justify-center mt-4">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
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
