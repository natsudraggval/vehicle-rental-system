import React from 'react'

function UpdatePassword() {
    return (
        <div
            class="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition"
        >
            <h3 class="text-2xl font-bold text-gray-800 mb-6">Change Password</h3>

            <form class="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div class="md:col-span-2">
                    <label class="block text-gray-700 font-medium mb-1"
                    >Current Password</label
                    >
                    <input
                        type="password"
                        placeholder="Enter current password"
                        class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div>
                    <label class="block text-gray-700 font-medium mb-1"
                    >New Password</label
                    >
                    <input
                        type="password"
                        placeholder="Enter new password"
                        class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div>
                    <label class="block text-gray-700 font-medium mb-1"
                    >Confirm New Password</label
                    >
                    <input
                        type="password"
                        placeholder="Confirm new password"
                        class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                </div>

                <div class="md:col-span-2 flex space-x-4 pt-4">
                    <button
                        type="submit"
                        class="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-lg font-medium shadow transition"
                    >
                        Update Password
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

export default UpdatePassword
