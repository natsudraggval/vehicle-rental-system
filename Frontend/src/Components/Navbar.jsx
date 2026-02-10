import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { FaTableColumns } from "react-icons/fa6";

function Navbar({ onLoginClick, onSignupClick }) {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Do you really want to logout?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#06b6d4",
      cancelButtonColor: "#e11d48",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear(); // clear all tokens
        navigate("/", { replace: true }); // no entry from browser's history
        toast.success("Successfully logged out!");
      }
    });
  };

  return (
    <nav className="bg-white border-gray-200 py-2.5 shadow-md sticky top-0 z-50">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <NavLink to="/" className="flex items-center">
          <img
            src="/image/logo.png"
            alt="RentaRide Logo"
            className="h-10 sm:h-12"
          />
        </NavLink>

        {/* Desktop buttons and mobile hamburger */}
        <div className="flex items-center lg:order-2">
          {/* Desktop auth buttons */}
          {!email ? (
            <span
              onClick={onSignupClick}
              className="ml-4 text-gray-700 hover:text-cyan-500 cursor-pointer hidden sm:inline"
            >
              Sign up
            </span>
          ) : (
            <button
              onClick={handleDashboardClick}
              type="button"
              className="flex items-center gap-3 text-gray-700 border border-gray-700 hover:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:inline"
            >
              <FaTableColumns size={15} />
              Go to Dashboard
            </button>
          )}

          {!email ? (
            <button
              onClick={onLoginClick}
              className="ml-4 bg-cyan-500 text-white px-4 py-1.5 rounded-md font-medium hover:bg-cyan-700 sm:inline lg:inline"
            >
              Login
            </button>

          ) : (
            <button
              onClick={handleLogout}
              className="ml-4 bg-cyan-500 text-white px-4 py-2 rounded-md text-md font-medium hover:bg-cyan-700 hidden sm:inline"
            >
              <span className="hidden md:inline">Logout</span>
            </button>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`w-full lg:flex lg:w-auto lg:order-1 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"} `}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

            {/* Navigation Links */}
            <li>
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0
                  hover:bg-gray-50 lg:hover:bg-transparent
                  ${isActive ? "text-cyan-500" : "text-gray-700 lg:hover:text-cyan-500"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="browsevehicles"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0
                  hover:bg-gray-50 lg:hover:bg-transparent
                  ${isActive ? "text-cyan-500" : "text-gray-700 lg:hover:text-cyan-500"}`
                }
              >
                Browse Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink
                to="features"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0
                  hover:bg-gray-50 lg:hover:bg-transparent
                  ${isActive ? "text-cyan-500" : "text-gray-700 lg:hover:text-cyan-500"}`
                }
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="aboutus"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0
                  hover:bg-gray-50 lg:hover:bg-transparent
                  ${isActive ? "text-cyan-500" : "text-gray-700 lg:hover:text-cyan-500"}`
                }
              >
                About Us
              </NavLink>
            </li>

            {/* Mobile auth buttons */}
            {!email ? (
              <>
                <li>
                  <span
                    onClick={() => { onSignupClick(); setIsMenuOpen(false); }}
                    className="block py-2 pl-3 pr-4 text-gray-700 hover:text-cyan-500 cursor-pointer lg:hidden"
                  >
                    Sign up
                  </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button
                    onClick={() => { handleDashboardClick(); setIsMenuOpen(false); }}
                    className="w-full text-left flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-md mt-2 lg:hidden hover:bg-gray-200"
                  >
                    <FaTableColumns size={15} /> Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                    className="w-full text-left bg-cyan-500 text-white px-4 py-2 rounded-md mt-2 lg:hidden hover:bg-cyan-700"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
