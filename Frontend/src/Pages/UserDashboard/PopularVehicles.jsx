import React, { useEffect, useState } from "react";
import axios from "axios";

function PopularVehicles() {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopularVehicles = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/vehicles/popular-vehicles");
                setVehicles(res.data);
            } catch (error) {
                console.error("Error fetching popular vehicles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularVehicles();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-4">
                <img src="/spinner.svg" alt="Loading" className="h-14 w-14" />
            </div>
        );
    }

    return (
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Popular Vehicles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
                {vehicles.map((v, index) => (
                    <div
                        key={index}
                        className="relative bg-white border border-gray-300 rounded-2xl p-4 shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition duration-300 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-300 opacity-0 group-hover:opacity-20 transition duration-300 rounded-2xl"></div>

                        <img
                            src={v.image || "/placeholder-vehicle.png"}
                            alt={v.vehicleName}
                            className="w-full h-30 object-cover rounded-xl mb-4 relative z-10"
                        />



                        <h4 className="text-lg font-bold text-gray-800 mb-1 relative z-10">
                            {v.vehicleName}
                        </h4>

                        <span className="bg-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full relative z-10">
                            Booked {v.count} times
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularVehicles;
