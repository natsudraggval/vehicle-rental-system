import React from 'react'
import { BsSpeedometer, BsReceipt, BsClockHistory, BsFileEarmarkBarGraph, BsBoxArrowLeft, BsCarFrontFill } from "react-icons/bs";
import logo from '../../../assets/image/dash.png';
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Sidebar() {
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
        <aside className="bg-gray-900 w-64 min-h-screen p-6 shadow-xl fixed top-0 left-0 flex-shrink-0">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 text-2xl font-bold mb-10 text-white">
                <img src={logo} alt="Logo" className="w-14 h-8" />
                <span>RentaRide</span>
            </a>

            {/* Nav Links */}
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
                        <BsSpeedometer className="text-xl" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="manage-vehicles"
                        className={({ isActive }) =>
                            `flex items-center space-x-3 p-3 rounded-lg ${isActive
                                ? "bg-cyan-500 text-white"
                                : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                            }`
                        }
                    >
                        <BsCarFrontFill className="text-xl" />
                        <span>Manage Vehicles</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="rentals"
                        className={({ isActive }) =>
                            `flex items-center space-x-3 p-3 rounded-lg ${isActive
                                ? "bg-cyan-500 text-white"
                                : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                            }`
                        }
                    >
                        <BsReceipt className="text-xl" />
                        <span>Rentals</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="rentals-history"
                        className={({ isActive }) =>
                            `flex items-center space-x-3 p-3 rounded-lg ${isActive
                                ? "bg-cyan-500 text-white"
                                : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                            }`
                        }
                    >
                        <BsClockHistory className="text-xl" />
                        <span>History</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="analytics"
                        className={({ isActive }) =>
                            `flex items-center space-x-3 p-3 rounded-lg ${isActive
                                ? "bg-cyan-500 text-white"
                                : "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                            }`
                        }
                    >
                        <BsFileEarmarkBarGraph className="text-xl" />
                        <span>Analytics</span>
                    </NavLink>
                </li>

                <li>
                    <a
                        href="#" onClick={handleLogout}
                        className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-cyan-400 transition"
                    >
                        <BsBoxArrowLeft className="text-xl" />
                        <span>Logout</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
