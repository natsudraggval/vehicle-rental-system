import React from 'react'
import { FaTableColumns } from "react-icons/fa6";
import { FaUserCircle, FaHistory } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Sidebar() {
    return (
        <aside
            className="bg-gray-900 w-64 min-h-screen p-6 shadow-xl fixed top-0 left-0 flex-shrink-0"
        >
            <a
                href="#"
                className="flex items-center space-x-2 text-2xl font-bold mb-10 text-white"
            >
                <img src="image/dash.png" alt="Logo" className="w-14 h-8" />
                <span>RentaRide</span>
            </a>
            <ul className="space-y-2">
                <li>
                    <a
                        href="#"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium shadow-md transition"
                    >
                        <FaTableColumns className="text-xl" />
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-cyan-400 transition"
                    >
                        <FaUserCircle className="text-xl" />
                        <span>My Profile</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-cyan-400 transition"
                    >
                        <FaHistory className="text-xl" />
                        <span>Rental History</span>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-cyan-400 transition"
                    >
                        <RiLockPasswordFill className="text-xl" />
                        <span>Change Password</span>
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar
