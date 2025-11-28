import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

function Rentals() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");


    // Fetch All Bookings
    const fetchBookings = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch("http://localhost:3000/api/booking", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            setBookings(data);
        } catch (err) {
            console.error("Error fetching bookings:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBookings();
    }, []);


    // Update Booking Status
    const updateBookingStatus = async (id, status) => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`http://localhost:3000/api/booking/${id}/status`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ status }),
            });

            if (res.ok) {
                fetchBookings();
            }
        } catch (err) {
            console.error("Status update error:", err);
        }
    };


    // Mark Returned
    const markReturned = async (id) => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch(`http://localhost:3000/api/booking/${id}/return`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (res.ok) {
                const updatedBooking = await res.json();
                setBookings((prev) =>
                    prev.map((b) => (b._id === id ? updatedBooking.booking : b))
                );
            }
        } catch (err) {
            console.error("Return update error:", err);
        }
    };


    // Search Filter 
    const filteredBookings = bookings.filter((b) =>
        b.vehicleName?.toLowerCase().includes(search.toLowerCase()) ||
        b.vehicleNumber?.toLowerCase().includes(search.toLowerCase()) ||
        b.fullname?.toLowerCase().includes(search.toLowerCase()) ||
        b.status?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">Rental Requests</h3>

                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="Search rentals..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="p-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition w-64 bg-gray-50"
                        />
                        <BiSearch className="absolute left-3 top-2.5 text-gray-500 text-lg" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-gray-700">
                        <thead>
                            <tr className="bg-gray-100 text-gray-600">
                                <th className="py-3 px-4 text-left">No.</th>
                                <th className="py-3 px-4 text-left">Image</th>
                                <th className="py-3 px-4 text-left">Vehicle</th>
                                <th className="py-3 px-4 text-left">Vehicle No.</th>
                                <th className="py-3 px-4 text-left">Requested By</th>
                                <th className="py-3 px-4 text-left">Requested Date</th>
                                <th className="py-3 px-4 text-left">Status</th>
                                <th className="py-3 px-4 text-left">Fine</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="8" className="py-6">
                                        <img src="/spinner.svg" alt="Loading" className="h-14 w-14 mx-auto block" />
                                    </td>
                                </tr>
                            ) : filteredBookings.length === 0 ? (
                                <tr>
                                    <td colSpan="8" className="text-center py-6 text-gray-500">
                                        No bookings found
                                    </td>
                                </tr>
                            ) : (
                                filteredBookings.map((b, index) => (
                                    <tr
                                        key={b._id}
                                        className="border-t border-gray-300 hover:bg-gray-50 transition"
                                    >
                                        <td className="py-3 px-4">{index + 1}</td>

                                        <td className="py-3 px-4">
                                            <img
                                                src={b.vehicleId?.imageUrl}
                                                alt={b.vehicleId?.name}
                                                className="w-16 h-12 object-cover rounded"
                                            />
                                        </td>

                                        <td className="py-3 px-4 font-medium">{b.vehicleName}</td>

                                        <td className="py-3 px-4">{b.vehicleNumber}</td>

                                        <td className="py-3 px-4">{b.fullname}</td>

                                        <td className="py-3 px-4">
                                            {new Date(b.createdAt).toLocaleDateString()}
                                        </td>

                                        <td className="py-3 px-4">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-medium ${b.status === "pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : b.status === "approved"
                                                        ? "bg-green-200 text-green-700"
                                                        : b.status === "declined"
                                                            ? "bg-rose-200 text-rose-700"
                                                            : "bg-cyan-200 text-cyan-700"
                                                    }`}
                                            >
                                                {b.status}
                                            </span>
                                        </td>

                                        <td className="py-3 px-4">Rs.{b.fine}</td>

                                        <td className="py-3 px-4 space-x-2">
                                            {b.status === "approved" || b.status === "returned" ? (
                                                // Only show Returned button if approved, or no buttons if already returned
                                                b.status === "approved" && (
                                                    <button
                                                        onClick={() => markReturned(b._id)}
                                                        className="border border-gray-300 text-gray-700 hover:bg-cyan-50 hover:border-cyan-500 hover:text-cyan-600 py-1.5 px-3 rounded-lg text-sm shadow-sm transition"
                                                    >
                                                        Return
                                                    </button>
                                                )
                                            ) : (
                                                // Show Approve and Decline buttons for pending/declined bookings
                                                <>
                                                    <button
                                                        onClick={() => updateBookingStatus(b._id, "approved")}
                                                        className="bg-emerald-500 hover:bg-emerald-600 text-white py-1.5 px-4 rounded-lg text-sm shadow transition"
                                                    >
                                                        Approve
                                                    </button>

                                                    <button
                                                        onClick={() => updateBookingStatus(b._id, "declined")}
                                                        className="bg-rose-500 hover:bg-rose-600 text-white py-1.5 px-4 rounded-lg text-sm shadow transition"
                                                    >
                                                        Decline
                                                    </button>
                                                </>
                                            )}
                                        </td>

                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Rentals;
