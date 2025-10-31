import React from 'react'
import { BiSearch } from "react-icons/bi";

function ManageVehicles() {
    return (
        <div>
            {/* ADD VEHICLES FORM */}
            <div
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition"
            >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Add Vehicles</h3>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter vehicle name"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-1"
                        >Vehicle Number</label
                        >
                        <input
                            type="text"
                            placeholder="Enter vehicle number"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Price</label>
                        <input
                            type="text"
                            placeholder="e.g. Rs 500"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-2"
                        >Category</label
                        >
                        <div className="flex space-x-6">

                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Car"
                                    className="sr-only peer"
                                />
                                <span
                                    className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-cyan-500 peer-checked:bg-cyan-500 transition"
                                >
                                    <span
                                        className="w-3 h-3 rounded-full bg-white peer-checked:bg-white"
                                    ></span>
                                </span>
                                <span className="text-gray-700 font-medium">Car</span>
                            </label>


                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Bike"
                                    className="sr-only peer"
                                />
                                <span
                                    className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-cyan-500 peer-checked:bg-cyan-500 transition"
                                >
                                    <span
                                        className="w-3 h-3 rounded-full bg-white peer-checked:bg-white"
                                    ></span>
                                </span>
                                <span className="text-gray-700 font-medium">Bike</span>
                            </label>


                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="category"
                                    value="Scooter"
                                    className="sr-only peer"
                                />
                                <span
                                    className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:border-cyan-500 peer-checked:bg-cyan-500 transition"
                                >
                                    <span
                                        className="w-3 h-3 rounded-full bg-white peer-checked:bg-white"
                                    ></span>
                                </span>
                                <span className="text-gray-700 font-medium">Scooter</span>
                            </label>
                        </div>
                    </div>


                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-medium mb-1"
                        >Image URL</label
                        >
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-medium mb-1"
                        >Description</label
                        >
                        <textarea
                            rows="3"
                            placeholder="Enter description"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        ></textarea>
                    </div>


                    <div className="md:col-span-2 flex space-x-4 pt-4">
                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-lg font-medium shadow transition"
                        >
                            Save Vehicle
                        </button>
                        <button
                            type="reset"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-lg font-medium transition"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>

            {/* Manage Vehicles Table  */}
            <div
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition mt-6"
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Manage Vehicles</h3>


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
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Vehicle No.</th>
                                <th className="py-3 px-4 text-left">Category</th>
                                <th className="py-3 px-4 text-left">Price</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t border-gray-300 hover:bg-gray-50 transition">
                                <td className="py-3 px-4">1</td>
                                <td className="py-3 px-4">
                                    <img
                                        src="https://cdn.riderly.com/storage/media/img/bikes/Honda__Dio_100.png"
                                        alt="Dio"
                                        className="w-16 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="py-3 px-4 font-medium">Honda Dio</td>
                                <td className="py-3 px-4">BA 12 PA 1234</td>
                                <td className="py-3 px-4">Scooter</td>
                                <td className="py-3 px-4">Rs 500</td>
                                <td className="py-3 px-4 space-x-2">

                                    <button
                                        className="border border-gray-300 text-gray-700 hover:bg-cyan-50 hover:border-cyan-500 hover:text-cyan-600 py-1.5 px-4 rounded-lg text-sm shadow-sm transition"
                                    >
                                        Update
                                    </button>


                                    <button
                                        className="bg-rose-500 hover:bg-rose-600 text-white py-1.5 px-4 rounded-lg text-sm shadow transition"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>

                            <tr className="border-t border-gray-300 hover:bg-gray-50 transition">
                                <td className="py-3 px-4">2</td>
                                <td className="py-3 px-4">
                                    <img
                                        src="https://cdn.riderly.com/storage/media/img/bikes/KTM_Adventure_250.png"
                                        alt="Dio"
                                        className="w-16 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="py-3 px-4 font-medium">KTM Duke 200</td>
                                <td className="py-3 px-4">BA 4 PA 9876</td>
                                <td className="py-3 px-4">Bike</td>
                                <td className="py-3 px-4">Rs 800</td>
                                <td className="py-3 px-4 space-x-2">

                                    <button
                                        className="border border-gray-300 text-gray-700 hover:bg-cyan-50 hover:border-cyan-500 hover:text-cyan-600 py-1.5 px-4 rounded-lg text-sm shadow-sm transition"
                                    >
                                        Update
                                    </button>

                                    <button
                                        className="bg-rose-500 hover:bg-rose-600 text-white py-1.5 px-4 rounded-lg text-sm shadow transition"
                                    >
                                        Delete
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

export default ManageVehicles
