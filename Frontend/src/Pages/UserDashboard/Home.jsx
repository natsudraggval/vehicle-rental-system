import React from 'react';
import { BiSolidBellRing } from "react-icons/bi";

function Home() {
    return (
        <div>
            <div
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition mb-6"
            >
                <h2 className="text-3xl font-bold text-gray-800">
                    Welcome back, <span className="text-cyan-500">Natsu Dragg</span>!
                </h2>
                <p className="text-gray-500 mt-1">
                    Manage your rentals, profile, and account settings here.
                </p>
            </div>


            <div
                className="bg-amber-100 border border-amber-200 text-amber-700 px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition mb-6"
            >
                <div className="flex items-center space-x-3">
                    <BiSolidBellRing className="text-2xl text-amber-500" />
                    <span className="font-medium">
                        Reminder: Your <strong>Honda Dio</strong> rental ends in 1 day!
                    </span>
                </div>
            </div>


            <div
                className="bg-white rounded-2xl shadow-2xl p-8 transition-shadow duration-300"
            >
                <h3
                    className="text-2xl font-bold text-gray-800 mb-8 border-b pb-3"
                >
                    My Profile
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 transition"
                    >
                        <span className="text-indigo-500 text-2xl">👤</span>
                        <div>
                            <p className="text-gray-500 font-medium mb-1">Full Name</p>
                            <p className="text-gray-900 font-semibold">John Doe</p>
                        </div>
                    </div>


                    <div
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition"
                    >
                        <span className="text-green-500 text-2xl">📧</span>
                        <div>
                            <p className="text-gray-500 font-medium mb-1">Email Address</p>
                            <p className="text-gray-900 font-semibold">johndoe@email.com</p>
                        </div>
                    </div>


                    <div
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 transition"
                    >
                        <span className="text-yellow-500 text-2xl">📞</span>
                        <div>
                            <p className="text-gray-500 font-medium mb-1">Phone Number</p>
                            <p className="text-gray-900 font-semibold">+977-9800000000</p>
                        </div>
                    </div>


                    <div
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition"
                    >
                        <span className="text-pink-500 text-2xl">🏠</span>
                        <div>
                            <p className="text-gray-500 font-medium mb-1">Address</p>
                            <p className="text-gray-900 font-semibold">Kathmandu, Nepal</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer
                className="bg-white p-4 text-center text-sm text-gray-400 rounded-lg shadow-md border-t border-gray-200"
            >
                © 2025 RentaRide. All rights reserved.
            </footer>
        </div>
    )
}

export default Home
