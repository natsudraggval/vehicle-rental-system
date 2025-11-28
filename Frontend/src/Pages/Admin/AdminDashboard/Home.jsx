import React, { useState, useEffect } from 'react';
import { BsCalendarCheckFill, BsPeopleFill, BsCurrencyExchange } from "react-icons/bs";

function Home() {
    const [stats, setStats] = useState({
        totalBooking: 0,
        totalRentals: 0,
        totalSales: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/booking/stats');
                if (!response.ok) throw new Error('Failed to fetch data');

                const data = await response.json();
                setStats({
                    totalBooking: data.totalBooking,
                    totalRentals: data.totalRentals,
                    totalSales: data.totalSales
                });
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchStats();
    }, []);
    return (
        <div className="space-y-6">
            
            {/* STAT CARDS */}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <li className="bg-white shadow-lg p-6 rounded-lg flex items-center justify-between transform hover:scale-105 hover:shadow-lg transition">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">{stats.totalBooking}</h3>
                        <p className="text-gray-500">Total Booking</p>
                    </div>
                    <BsCalendarCheckFill className="text-4xl text-cyan-500" />
                </li>

                <li className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between transform hover:scale-105 hover:shadow-md transition">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">{stats.totalRentals}</h3>
                        <p className="text-gray-500">Total Rentals</p>
                    </div>
                    <BsPeopleFill className="text-4xl text-pink-500" />
                </li>

                <li className="bg-white shadow-md p-6 rounded-lg flex items-center justify-between transform hover:scale-105 hover:shadow-md transition">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">{stats.totalSales}</h3>
                        <p className="text-gray-500">Total Sales</p>
                    </div>
                    <BsCurrencyExchange className="text-4xl text-green-500" />
                </li>
            </ul>

            {/* RECENT RENTALS */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-lg transition">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Recent Rentals</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-gray-700">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="py-3 px-4 text-left">No.</th>
                                <th className="py-3 px-4 text-left">Vehicle</th>
                                <th className="py-3 px-4 text-left">Total</th>
                                <th className="py-3 px-4 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-gray-300 hover:bg-gray-50">
                                <td className="py-3 px-4">1</td>
                                <td>Pulsar 150</td>
                                <td>Rs 250</td>
                                <td>
                                    <span className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
                                        Completed
                                    </span>
                                </td>
                            </tr>
                            <tr className="border-t border-gray-300 hover:bg-gray-50">
                                <td className="py-3 px-4">2</td>
                                <td>Kona Electric</td>
                                <td>Rs 180</td>
                                <td>
                                    <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium">
                                        Pending
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MOST RENTED VEHICLES */}
            <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-lg transition">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Most Rented Vehicles</h3>
                </div>
                <ul className="divide-y divide-gray-300">
                    <li className="py-4 flex justify-between items-center">
                        <span>Kona Electric</span>
                        <span className="font-semibold">Rs 320</span>
                    </li>
                    <li className="py-4 flex justify-between items-center">
                        <span>Suzuki Celerio</span>
                        <span className="font-semibold">Rs 300</span>
                    </li>
                    <li className="py-4 flex justify-between items-center">
                        <span>Ktm Adventure</span>
                        <span className="font-semibold">Rs 140</span>
                    </li>
                </ul>
            </div>

            {/* FOOTER */}
            <footer className="bg-white p-4 text-center text-sm text-gray-400 rounded-lg shadow-lg border-t border-gray-200">
                © 2025 RentaRide. All rights reserved.
            </footer>
        </div>
    )
}

export default Home
