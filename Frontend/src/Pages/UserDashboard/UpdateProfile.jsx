import React from 'react'

function UpdateProfile() {
    return (
        <div
            class="bg-white shadow-md p-11 rounded-lg hover:shadow-md transition"
        >
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h3>

            <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label class="block text-gray-700 font-medium mb-1"
                    >Full Name</label
                    >
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value="Natsu Dragg"
                        class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div>
                    <label class="block text-gray-700 font-medium mb-1"
                    >Email Address</label
                    >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value="natsudragg@email.com"
                        class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div>
                    <label class="block text-gray-700 font-medium mb-1"
                    >Phone Number</label
                    >
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        value="+977-9800000000"
                        class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div>
                    <label class="block text-gray-700 font-medium mb-1"
                    >Address</label
                    >
                    <input
                        type="text"
                        placeholder="Enter your address"
                        value="Kathmandu, Nepal"
                        class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div class="md:col-span-2 flex space-x-4 pt-4">
                    <button
                        type="submit"
                        class="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-lg font-medium shadow transition"
                    >
                        Save Changes
                    </button>
                    <button
                        type="reset"
                        class="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-lg font-medium transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile
