import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar({ onLoginClick, onSignupClick }) {
  const email = localStorage.getItem("email");

  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you really want to logout?");
    if (confirmLogout) {
      localStorage.clear(); // clear all tokens
      navigate("/", { replace: true }); // replace history entry
      toast.success("Successfully logged out!");
    }
  };

  return (
    <nav className="bg-white border-gray-200 py-2.5 shadow-md">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <img
            src="/image/logo.png"
            alt="RentaRide Logo"
            className="h-10 sm:h-12"
          />
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <span
            onClick={onSignupClick}
            className="ml-4 text-gray-700 hover:text-cyan-500 cursor-pointer"
          >
            Sign up
          </span>

          {/* <button
            type="button"
            onClick={onLoginClick}
            className="ml-4 text-white bg-cyan-500 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
          >
            Login
          </button> */}

          {!email ? (
            <button
              onClick={onLoginClick}
              className="ml-4 bg-cyan-500 text-white px-4 py-2 rounded-md text-md font-medium hover:bg-cyan-700"
            >
              <span className="hidden md:inline ml-2">Login</span>
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="ml-4 bg-cyan-500 text-white px-4 py-2 rounded-md text-md font-medium hover:bg-cyan-700"
            >
              {/* <FaUser /> */}
              <span className="hidden md:inline ml-2">Logout</span>
            </button>
          )}


          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-cyan-500 rounded lg:bg-transparent lg:text-cyan-500 lg:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <Link
                to="browsevehicles"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-500 lg:p-0"
              >
                Browse Vehicles
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-500 lg:p-0"
              >
                Features
              </a>
            </li>
            <li>
              <Link
                to="aboutus"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-cyan-500 lg:p-0"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
