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

            <footer
                class="bg-white p-4 text-center text-sm text-gray-400 rounded-lg shadow-md border-t border-gray-200"
            >
                © 2025 RentaRide. All rights reserved.
            </footer>
        </div>
    )
}

export default Home
