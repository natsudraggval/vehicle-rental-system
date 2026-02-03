import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VehicleRentalPage() {
    const { id } = useParams();

    const navigate = useNavigate();

    const [vehicle, setVehicle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [dateError, setDateError] = useState("");
    const [user, setUser] = useState(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const backendURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
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
            } catch (err) { }
        }

        if (!found) {
            const storedName = localStorage.getItem("fullname");
            const storedEmail = localStorage.getItem("email");
            if (storedName || storedEmail) {
                setFullName(storedName || "");
                setEmail(storedEmail || "");
                setUser({});
                found = true;
            }
        }

        if (!found && token) {
            setUser({});
        }
    }, []);

    useEffect(() => {
        if (!startDate || !endDate) {
            setTotalPrice(0);
            setDateError("");
            return;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (start < today) {
            setTotalPrice(0);
            setDateError("Start date cannot be in the past.");
            return;
        }
        if (end < start) {
            setTotalPrice(0);
            setDateError("End date cannot be before start date.");
            return;
        }

        const diffTime = end - start;
        const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (totalDays < 1) {
            setTotalPrice(0);
            setDateError("Start and end date cannot be the same.");
            return;
        }

        setDateError("");
        setTotalPrice(totalDays * (vehicle?.price || 0));
    }, [startDate, endDate, vehicle?.price]);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetch(`${backendURL}/api/vehicles/vehicles/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch vehicle");
                return res.json();
            })
            .then((data) => setVehicle(data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!vehicle) return;

        // Store booking form data until payment succeeds
        const bookingData = {
            vehicleId: vehicle._id,
            startDate,
            endDate,
            fullname: fullName,
            email,
        };
        localStorage.setItem("pendingBooking", JSON.stringify(bookingData));

        try {
            const res = await fetch(`${backendURL}/api/payment/initiate`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    amount: totalPrice,
                    purchaseOrderId: "order_" + Date.now(),
                    customer: {
                        name: fullName,
                        email,
                        phone: "9800000000",
                    },
                }),
            });

            const data = await res.json();

            if (data.payment_url) {
                window.location.href = data.payment_url;
            } else {
                toast.error("Failed to initialize payment");
            }
        } catch (err) {
            console.error(err);
            toast.error("Payment error");
        }
    };


    if (loading) return <img src="/spinner.svg" alt="Loading" className="h-15 w-15" />;
    if (error) return <div className="text-red-500">{error}</div>;
    if (!vehicle) return <div>Vehicle not found</div>;

    return (
        <div className="bg-gray-100 p-6">
            <ToastContainer />
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <img src={vehicle.imageUrl} alt={vehicle.name} className="w-full h-64 object-contain rounded-2xl shadow-sm" />
                    <h1 className="text-3xl font-bold text-gray-800 mt-6">{vehicle.name}</h1>
                    <p className="text-gray-500 text-sm mt-1">Vehicle No: <strong>{vehicle.vehicleNumber ?? "N/A"}</strong></p>
                    <div className="grid grid-cols-3 gap-4 mt-6 text-gray-700">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Category</p>
                            <p className="font-semibold">{vehicle.category}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Availability</p>
                            {vehicle.isAvailable ? (
                                <p className="font-semibold text-green-600">Available</p>
                            ) : (
                                <p className="font-semibold text-rose-600">Not Available</p>
                            )}
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500">Price (Per Day)</p>
                            <p className="font-semibold text-cyan-600">Rs {vehicle.price}</p>
                        </div>
                    </div>
                    <h2 className="text-lg font-semibold mt-6 mb-2">Description</h2>
                    <p className="text-gray-600 text-justify leading-relaxed">{vehicle.description}</p>
                </div>

                <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
                    <h2 className="text-2xl font-bold mb-6">Book This Vehicle</h2>
                    <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit} noValidate>
                        <div>
                            <label className="font-medium text-gray-600">Full Name</label>
                            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} disabled={!!user} className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>
                        <div>
                            <label className="font-medium text-gray-600">Email</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!!user} className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="font-medium text-gray-600">Start Date</label>
                                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                            </div>
                            <div>
                                <label className="font-medium text-gray-600">End Date</label>
                                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                            </div>
                        </div>
                        {dateError && <p className="text-red-500 text-sm">{dateError}</p>}
                        <div>
                            <label className="font-medium text-gray-600">Total Price</label>
                            <input type="text" value={totalPrice ? `Rs ${totalPrice}` : ""} readOnly className="mt-1 w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed" />
                        </div>
                        <button type="submit" disabled={!!dateError || totalPrice === 0 || !vehicle.isAvailable} className="w-full mt-1 text-white py-3 text-lg rounded-lg shadow-md bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-400">
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default VehicleRentalPage;
