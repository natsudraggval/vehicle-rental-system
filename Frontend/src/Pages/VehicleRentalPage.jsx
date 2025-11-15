import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VehicleRentalPage() {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetch(`http://localhost:3000/api/vehicles/vehicles/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch vehicle");
                return res.json();
            })
            .then((data) => setVehicle(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading)
        return (
            <div className="fixed inset-0 flex justify-center items-center">
                <img src="/spinner.svg" alt="Loading" className="h-15 w-15" />
            </div>
        );

    if (error) return <div className="p-6 text-red-500">{error}</div>;
    if (!vehicle) return <div className="p-6">Vehicle not found</div>;

    return (
        <div className="bg-gray-100 p-6">
            <div
                className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
                <div>
                    <img
                        src={vehicle.imageUrl}
                        className="w-full h-64 object-contain rounded-2xl shadow-sm"
                        alt={vehicle.name}
                    />

                    <h1 className="text-3xl font-bold text-gray-800 mt-6">{vehicle.name}</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Vehicle No: <strong>{vehicle.vehicleNumber ?? "N/A"}</strong>
                    </p>

                    <div className="grid grid-cols-3 gap-4 mt-6 text-gray-700">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Category</p>
                            <p className="font-semibold">{vehicle.category}</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Availability</p>
                            <p className="font-semibold text-green-600">Available</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Price (Per Day)</p>
                            <p className="font-semibold text-cyan-600">Rs {vehicle.price}</p>
                        </div>
                    </div>

                    <h2 className="text-lg font-semibold mt-6 mb-2">Description</h2>
                    <p className="text-gray-600 text-justify leading-relaxed">
                        {vehicle.description}
                    </p>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
                    <h2 className="text-2xl font-bold mb-6">Book This Vehicle</h2>

                    <form className="grid grid-cols-1 gap-6" novalidate>
                        <div>
                            <label className="font-medium text-gray-600">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-gray-600">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                pattern="[0-9]{10}"
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                placeholder="98XXXXXXXX"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium text-gray-600">Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    required
                                    min="<?= date('Y-m-d'); ?>"
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            <div>
                                <label className="font-medium text-gray-600">End Date</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    required
                                    min="<?= date('Y-m-d'); ?>"
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="font-medium text-gray-600">Total Price</label>
                            <input
                                type="text"
                                name="totalPrice"
                                readonly
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-not-allowed"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 text-white py-3 text-lg rounded-lg shadow-md transition"
                        >
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default VehicleRentalPage;
