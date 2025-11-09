import React from 'react'
import PassImg from '../../assets/image/pass.jpg'

function UpdatePassword() {
    return (
        <div
            className="relative bg-white shadow-md p-11 rounded-lg hover:shadow-md transition grid md:grid-cols-2 overflow-hidden"
            style={{
                backgroundImage: `url(${PassImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                backgroundSize: "40%",
            }}
        >

            <div className="bg-white bg-opacity-90 p-2 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Change Password
                </h3>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="md:col-span-2">
                        <label className="block text-gray-700 font-medium mb-1"
                        >Current Password</label
                        >
                        <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-1"
                        >New Password</label
                        >
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div>
                        <label className="block text-gray-700 font-medium mb-1"
                        >Confirm New Password</label
                        >
                        <input
                            type="password"
                            placeholder="Confirm new password"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                    </div>


                    <div className="md:col-span-2 flex space-x-4 pt-4">
                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-lg font-medium shadow transition"
                        >
                            Update Password
                        </button>
                        <button
                            type="reset"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-lg font-medium transition"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword
