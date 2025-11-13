import React from 'react'

function RentalsHistory() {
  return (
     <div div className="min-h-screen bg-gray-100">
    <div
          className="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition"
        >
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
                <tr className="border-t border-gray-300 hover:bg-gray-50 transition">
                  <td className="py-3 px-4">1</td>
                  <td>Honda Dio</td>
                  <td>05 Nov 2025 - 07 Nov 2025</td>
                  <td>Rs 500</td>
                  <td>
                    <span
                      className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium"
                      >Completed</span
                    >
                  </td>
                </tr>
                <tr className="border-t border-gray-300 hover:bg-gray-50 transition">
                  <td className="py-3 px-4">2</td>
                  <td>KTM Duke 200</td>
                  <td>08 Nov 2025 - 10 Nov 2025</td>
                  <td>Rs 800</td>
                  <td>
                    <span
                      className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium"
                      >Pending</span
                    >
                  </td>
                </tr>
                <tr className="border-t border-gray-300 hover:bg-gray-50 transition">
                  <td className="py-3 px-4">3</td>
                  <td>Kona Electric</td>
                  <td>01 Nov 2025 - 03 Nov 2025</td>
                  <td>Rs 320</td>
                  <td>
                    <span
                      className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                      >Canceled</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
  )
}

export default RentalsHistory
