import React from 'react'

function UserProfile() {
    return (
        <div
            class="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition"
        >
            <h3 class="text-2xl font-bold text-gray-800 mb-6">My Profile</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p class="text-gray-500 font-medium mb-1">Full Name</p>
                    <p class="text-gray-800">John Doe</p>
                </div>

                <div>
                    <p class="text-gray-500 font-medium mb-1">Email Address</p>
                    <p class="text-gray-800">johndoe@email.com</p>
                </div>

                <div>
                    <p class="text-gray-500 font-medium mb-1">Phone Number</p>
                    <p class="text-gray-800">+977-9800000000</p>
                </div>

                <div>
                    <p class="text-gray-500 font-medium mb-1">Address</p>
                    <p class="text-gray-800">Kathmandu, Nepal</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
