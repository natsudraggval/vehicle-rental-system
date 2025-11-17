import React from 'react';
import { BiSolidBellRing } from "react-icons/bi";
import DetailsImg from '../../assets/image/details.png'
import PopularVehicles from './PopularVehicles';

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

            <PopularVehicles />

            <div
                className="relative bg-white shadow-xl rounded-xl overflow-hidden grid md:grid-cols-2 items-stretch transition-all duration-300 mt-6"
                style={{
                    backgroundImage: `url(${DetailsImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right center",
                    backgroundSize: "40%"
                }}
            >
                <div className="p-11 bg-white bg-opacity-95 flex flex-col justify-center">
                    <h3
                        className="text-3xl font-semibold text-gray-800 mb-8 border-l-4 border-cyan-500 pl-4"
                    >
                        My Profile
                    </h3>

                    <div className="space-y-6">
                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">
                                Full Name
                            </p>
                            <p className="text-lg font-semibold text-gray-900 mt-1">
                                Natsu Dragg
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">
                                Email Address
                            </p>
                            <p className="text-lg font-semibold text-gray-900 mt-1">
                                natsudragg@email.com
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">
                                Phone Number
                            </p>
                            <p className="text-lg font-semibold text-gray-900 mt-1">
                                +977-9800000000
                            </p>
                        </div>

                        <div>
                            <p className="text-sm text-gray-500 uppercase tracking-wide">
                                Address
                            </p>
                            <p className="text-lg font-semibold text-gray-900 mt-1">
                                Kathmandu, Nepal
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <footer
                className="bg-white p-4 text-center text-sm text-gray-400 rounded-lg shadow-md border-t border-gray-200 mt-6"
            >
                © 2025 RentaRide. All rights reserved.
            </footer>
        </div>
    )
}

export default Home
