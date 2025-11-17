import React, { useEffect, useState } from "react";

function RentalsHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all bookings for the logged-in user
  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("id");

      const res = await fetch(
        `http://localhost:3000/api/booking`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error loading history:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Rental History</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-gray-700">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="py-3 px-4 text-left">No.</th>
                <th className="py-3 px-4 text-left">Vehicle</th>
                <th className="py-3 px-4 text-left">Rental Period</th>
                <th className="py-3 px-4 text-left">Total Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    Loading...
                  </td>
                </tr>
              ) : bookings.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No rental history found
                  </td>
                </tr>
              ) : (
                bookings.map((b, index) => (
                  <tr
                    key={b._id}
                    className="border-t border-gray-300 hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">{index + 1}</td>

                    <td className="py-3 px-4">{b.vehicleName}</td>

                    <td className="py-3 px-4">
                      {new Date(b.startDate).toLocaleDateString()} -{" "}
                      {new Date(b.endDate).toLocaleDateString()}
                    </td>

                    <td className="py-3 px-4">Rs {b.totalPrice}</td>

                    {/* Status with inline mapping (NO function) */}
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${b.status === "approved"
                          ? "bg-cyan-200 text-cyan-700" // Active Rental
                          : b.status === "declined"
                            ? "bg-yellow-200 text-yellow-700" // Pending
                            : b.status === "returned"
                              ? "bg-green-200 text-green-700" // Completed
                              : "bg-yellow-200 text-yellow-700" // Pending
                          }`}
                      >
                        {b.status === "approved"
                          ? "Active Rental"
                          : b.status === "declined"
                            ? "Declined"
                            : b.status === "returned"
                              ? "Completed"
                              : "Pending"}
                      </span>
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

export default RentalsHistory;
