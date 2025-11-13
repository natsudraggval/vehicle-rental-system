import React from 'react'
import { BiSearch } from 'react-icons/bi'

function Rentals() {
    return (
        < div className="min-h-screen bg-gray-100">
            <div
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition "
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Rental Requests</h3>

                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search vehicles..."
                            className="p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition w-64 bg-gray-50"
                        />

                        <BiSearch className="absolute left-3 top-2.5 text-gray-500 text-lg" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-gray-700">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600">
                                <th className="py-3 px-4 text-left">No.</th>
                                <th className="py-3 px-4 text-left">Image</th>
                                <th className="py-3 px-4 text-left">Vehicle</th>
                                <th className="py-3 px-4 text-left">Vehicle No.</th>
                                <th className="py-3 px-4 text-left">Requested By</th>
                                <th className="py-3 px-4 text-left">Requested Date</th>
                                <th className="py-3 px-4 text-left">Status</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-t border-gray-300 hover:bg-gray-50 transition">
                                <td className="py-3 px-4">1</td>
                                <td className="py-3 px-4">
                                    <img
                                        src="https://cdn.riderly.com/storage/media/img/bikes/Honda__Dio_100.png"
                                        alt="Honda Dio"
                                        className="w-16 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="py-3 px-4 font-medium">Honda Dio</td>
                                <td className="py-3 px-4">BA 1 PA 1234</td>
                                <td className="py-3 px-4">Ramesh Thapa</td>
                                <td className="py-3 px-4">Nov 10, 2025</td>
                                <td className="py-3 px-4">
                                    <span
                                        className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        Pending
                                    </span>
                                </td>
                                <td className="py-3 px-4 space-x-2">
                                    <button
                                        className="border border-gray-300 text-gray-700 hover:bg-cyan-50 hover:border-cyan-500 hover:text-cyan-600 py-1.5 px-4 rounded-lg text-sm shadow-sm transition"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="bg-rose-500 hover:bg-rose-600 text-white py-1.5 px-4 rounded-lg text-sm shadow transition"
                                    >
                                        Decline
                                    </button>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-300 hover:bg-gray-50 transition">
                                <td className="py-3 px-4">2</td>
                                <td className="py-3 px-4">
                                    <img
                                        src="https://cdn.riderly.com/storage/media/img/bikes/KTM_Adventure_250.png"
                                        alt="KTM Duke 200"
                                        className="w-16 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="py-3 px-4 font-medium">KTM Duke 200</td>
                                <td className="py-3 px-4">BA 4 PA 9876</td>
                                <td className="py-3 px-4">Sita Karki</td>
                                <td className="py-3 px-4">Nov 9, 2025</td>
                                <td className="py-3 px-4">
                                    <span
                                        className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        Pending
                                    </span>
                                </td>
                                <td className="py-3 px-4 space-x-2">
                                    <button
                                        className="border border-gray-300 text-gray-700 hover:bg-cyan-50 hover:border-cyan-500 hover:text-cyan-600 py-1.5 px-4 rounded-lg text-sm shadow-sm transition"
                                    >
                                        Approve
                                    </button>

                                    <button
                                        className="bg-rose-500 hover:bg-rose-600 text-white py-1.5 px-4 rounded-lg text-sm shadow transition"
                                    >
                                        Decline
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Rentals
