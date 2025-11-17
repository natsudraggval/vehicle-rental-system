import React from 'react'

function PopularVehicles() {
    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Popular Vehicles
            </h3>

            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center"
            >
                <div
                    className="relative bg-white border border-gray-300 rounded-2xl p-4 shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 group"
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-400 opacity-0 group-hover:opacity-20 transition duration-300 rounded-2xl"
                    ></div>
                    <img
                        src="https://cdn.riderly.com/storage/media/img/bikes/Honda__CRF_300L_rally_2.png"
                        alt="KTM Duke 200"
                        className="w-full h-32 object-cover rounded-xl mb-4 relative z-10"
                    />
                    <h4 className="text-lg font-bold text-gray-800 mb-1 relative z-10">
                        KTM Duke 200
                    </h4>
                    <span
                        className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full relative z-10"
                    >Rs 400/day</span
                    >
                </div>

                <div
                    className="relative bg-white border border-gray-300 rounded-2xl p-4 shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 group"
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-green-300 opacity-0 group-hover:opacity-20 transition duration-300 rounded-2xl"
                    ></div>
                    <img
                        src="https://cdn.riderly.com/storage/media/img/bikes/honda__grazia_125.png"
                        alt="Hyundai Creta"
                        className="w-full h-32 object-cover rounded-xl mb-4 relative z-10"
                    />
                    <h4 className="text-lg font-bold text-gray-800 mb-1 relative z-10">
                        Hyundai Creta
                    </h4>
                    <span
                        className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full relative z-10"
                    >Rs 1200/day</span
                    >
                </div>

                <div
                    className="relative bg-white border border-gray-300 rounded-2xl p-4 shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 group"
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-orange-300 opacity-0 group-hover:opacity-20 transition duration-300 rounded-2xl"
                    ></div>
                    <img
                        src="https://laxmihyundai.com/laravel-filemanager/files/1/creta/Hyundai_CRETA_SUV_Thumbanail_PC_460x250.png"
                        alt="Honda Activa"
                        className="w-full h-32 object-cover rounded-xl mb-4 relative z-10"
                    />
                    <h4 className="text-lg font-bold text-gray-800 mb-1 relative z-10">
                        Honda Activa
                    </h4>
                    <span
                        className="bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full relative z-10"
                    >Rs 250/day</span
                    >
                </div>

                <div
                    className="relative bg-white border border-gray-300 rounded-2xl p-4 shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 group"
                >
                    <div
                        className="absolute inset-0 bg-gradient-to-tr from-red-400 to-pink-500 opacity-0 group-hover:opacity-20 transition duration-300 rounded-2xl"
                    ></div>
                    <img
                        src="https://suzuki.com.np/uploads/product/da72b62dd88d3e544ee39b89d6f5cc1a.png"
                        alt="Tesla Model 3"
                        className="w-full h-32 object-cover rounded-xl mb-4 relative z-10"
                    />
                    <h4 className="text-lg font-bold text-gray-800 mb-1 relative z-10">
                        Tesla Model 3
                    </h4>
                    <span
                        className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full relative z-10"
                    >Rs 2500/day</span
                    >
                </div>
            </div>
        </div>
    )
}

export default PopularVehicles
