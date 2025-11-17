import React from 'react'
import { HiOutlineMenu, HiOutlineSearch, HiBell } from "react-icons/hi";
import profileImg from '../../../assets/image/profile.jpg';

function Navbar() {
    return (
        <nav className="bg-white flex items-center justify-between p-4 shadow-lg sticky top-0 z-10">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                <HiOutlineMenu className="text-2xl text-gray-700 cursor-pointer" />
                <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-5">
                {/* Notification */}
                <a
                    href="#"
                    className="relative bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
                >
                    <HiBell className="text-xl text-gray-700" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                        2
                    </span>
                </a>

                {/* Profile */}
                <a
                    href="#"
                    className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500 shadow"
                >
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
