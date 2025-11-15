import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VehicleRentalPage() {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [dateError, setDateError] = useState("");
    // User info state
    const [user, setUser] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");


    useEffect(() => {
        // Populate user info from multiple possible storage locations
        const userJson = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        let found = false;

        if (userJson) {
            try {
                const parsed = JSON.parse(userJson);
                setFullName(parsed.fullname ?? parsed.fullName ?? "");
                setEmail(parsed.email ?? "");
                setUser(parsed);
                found = true;
            } catch (err) {
                // ignore parse errors
            }
        }

        if (!found) {
            const storedName = localStorage.getItem("fullname");
            const storedEmail = localStorage.getItem("email");
            if (storedName || storedEmail) {
                setFullName(storedName || "");
                setEmail(storedEmail || "");
                setUser({}); // mark as logged (truthy) so inputs get disabled
                found = true;
            }
        }

        // If there's a token but no profile info, consider user logged in (disable fields)
        if (!found && token) {
            setUser({}); // truthy
        }
    }, []);




    // Calculate total price whenever dates change
    useEffect(() => {
        if (!startDate || !endDate) {
            setTotalPrice(0);
            setDateError("");
            return;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        const today = new Date();

        // Reset time for today to avoid time issues
        today.setHours(0, 0, 0, 0);

        // Prevent past start date
        if (start < today) {
            setTotalPrice(0);
            setDateError("Start date cannot be in the past.");
            return;
        }

        //  End date before start date
        if (end < start) {
            setTotalPrice(0);
            setDateError("End date cannot be before start date.");
            return;
        }

        // Calculate day difference
        const diffTime = end - start;
        let totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        //  Prevent same-day booking
        if (totalDays < 1) {
            setTotalPrice(0);
            setDateError("Start and end date cannot be the same.");
            return;
        }

        // All good
        setDateError("");
        setTotalPrice(totalDays * (vehicle?.price || 0));
    }, [startDate, endDate, vehicle?.price]);




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

                    <form className="grid grid-cols-1 gap-6" noValidate>
                        <div>
                            <label className="font-medium text-gray-600">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                disabled={!!user}
                                className={`mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${user ? "bg-gray-100 cursor-not-allowed" : ""
                                    }`}
                                placeholder="Enter your name"
                            />

                        </div>

                        <div>
                            <label className="font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={!!user}
                                className={`mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 ${user ? "bg-gray-100 cursor-not-allowed" : ""
                                    }`}
                                placeholder="Enter your email"
                            />


                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium text-gray-600">Start Date</label>
                                <input
                                    type="date"
                                    name="startDate"
                                    required
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>

                            <div>
                                <label className="font-medium text-gray-600">End Date</label>
                                <input
                                    type="date"
                                    name="endDate"
                                    required
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                            </div>
                        </div>

                        {/* Error message for invalid dates */}
                        {dateError && (
                            <p className="text-red-500 text-sm mt-[-10px]">{dateError}</p>
                        )}



                        <div>
                            <label className="font-medium text-gray-600">Total Price</label>
                            <input
                                type="text"
                                name="totalPrice"
                                readOnly
                                value={totalPrice ? `Rs ${totalPrice}` : ""}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none cursor-not-allowed"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={!!dateError || totalPrice === 0}
                            className={`w-full mt-1 text-white py-3 text-lg rounded-lg shadow-md transition 
                                    ${dateError || totalPrice === 0
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-cyan-500 hover:bg-cyan-600"
                                }`}
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
