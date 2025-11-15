import React from 'react'

function VehicleRentalPage() {
    return (
        <div class="bg-gray-100 p-6">
            <div
                class="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
                <div>
                    <img
                        src="https://cdn.riderly.com/storage/media/img/bikes/Honda__Dio_100.png"
                        class="w-full h-64 object-contain rounded-2xl shadow-sm"
                        alt="Vehicle Image"
                    />

                    <h1 class="text-3xl font-bold text-gray-800 mt-6">Honda Dio</h1>
                    <p class="text-gray-500 text-sm mt-1">
                        Vehicle No: <strong>BA 12 PA 4567</strong>
                    </p>

                    <div class="grid grid-cols-3 gap-4 mt-6 text-gray-700">
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Category</p>
                            <p class="font-semibold">Scooter</p>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Availability</p>
                            <p class="font-semibold text-green-600">Available</p>
                        </div>

                        <div class="bg-gray-50 p-4 rounded-lg">
                            <p class="text-sm text-gray-500">Price (Per Day)</p>
                            <p class="font-semibold text-cyan-600">Rs 450</p>
                        </div>
                    </div>

                    <h2 class="text-lg font-semibold mt-6 mb-2">Description</h2>
                    <p class="text-gray-600 text-justify leading-relaxed">
                        The Honda Dio is a stylish, lightweight, fuel-efficient scooter
                        perfect for daily commuting. It offers smooth handling, good mileage,
                        LED lights, and a comfortable ride — ideal for city use.
                    </p>
                </div>

                <div class="bg-gray-50 p-8 rounded-2xl shadow-inner">
                    <h2 class="text-2xl font-bold mb-6">Book This Vehicle</h2>

                    <form class="grid grid-cols-1 gap-6" novalidate>
                        <div>
                            <label class="font-medium text-gray-600">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                class="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label class="font-medium text-gray-600">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                pattern="[0-9]{10}"
                                class="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="98XXXXXXXX"
                            />
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="font-medium text-gray-600">Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    required
                                    min="<?= date('Y-m-d'); ?>"
                                    class="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            <div>
                                <label class="font-medium text-gray-600">End Date</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    required
                                    min="<?= date('Y-m-d'); ?>"
                                    class="mt-1 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label class="font-medium text-gray-600">Total Price</label>
                            <input
                                type="text"
                                name="totalPrice"
                                readonly
                                class="mt-1 w-full p-3 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-not-allowed"
                            />
                        </div>

                        <button
                            type="submit"
                            class="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white py-3 text-lg rounded-lg shadow-md transition"
                        >
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VehicleRentalPage
