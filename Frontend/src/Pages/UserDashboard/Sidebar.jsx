import React from 'react'
import { FaTableColumns } from "react-icons/fa6";
import { FaUserCircle, FaHistory } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoArrowBackOutline } from "react-icons/io5";
import logo from '../../assets/image/dash.png';
import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside
            className="bg-gray-900 w-64 min-h-screen p-6 shadow-xl fixed top-0 left-0 flex flex-col justify-between"
        >
            {/* Top Section */}
            <div>
                <a href="#" className="flex items-center space-x-2 text-2xl font-bold mb-10 text-white">
                    <img src={logo} alt="Logo" className="w-14 h-8" />
                    <span>RentaRide</span>
                </a>
                <ul className="space-y-2">
                    <li>
                        <NavLink
                            to="home"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-3 rounded-lg ${isActive
                                    ? "bg-cyan-500 text-white"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                                }`
                            }
                        >
                            <FaTableColumns className="text-xl" />
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="update-profile"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-3 rounded-lg ${isActive
                                    ? "bg-cyan-500 text-white"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                                }`
                            }
                        >
                            <FaUserCircle className="text-xl" />
                            <span>Edit Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="rental-history"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-3 rounded-lg ${isActive
                                    ? "bg-cyan-500 text-white"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                                }`
                            }
                        >
                            <FaHistory className="text-xl" />
                            <span>Rental History</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="update-password"
                            className={({ isActive }) =>
                                `flex items-center space-x-3 p-3 rounded-lg ${isActive
                                    ? "bg-cyan-500 text-white"
                                    : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                                }`
                            }
                        >
                            <RiLockPasswordFill className="text-xl" />
                            <span>Change Password</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Bottom Section */}
            <div>
                <NavLink
                    to="/BrowseVehicles"
                    className={({ isActive }) =>
                        `flex items-center space-x-3 p-3 rounded-lg ${isActive
                            ? "bg-cyan-500 text-white"
                            : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                        }`
                    }
                >
                    <IoArrowBackOutline className="text-xl" />
                    <span>Go back</span>
                </NavLink>
            </div>
        </aside>

    )
}

export default Sidebar
