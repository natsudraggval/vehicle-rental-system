import React from 'react'

function RentalHistory() {
    return (
        <div
            class="bg-white shadow-md p-11 rounded-lg hover:shadow-md transition"
        >
            <h3 class="text-2xl font-bold text-gray-800 mb-6">
                My Rental History
            </h3>

            <div class="overflow-x-auto">
                <table class="w-full text-gray-700">
                    <thead>
                        <tr class="bg-gray-100 text-gray-600">
                            <th class="py-3 px-4 text-left">No.</th>
                            <th class="py-3 px-4 text-left">Vehicle</th>
                            <th class="py-3 px-4 text-left">Rental Period</th>
                            <th class="py-3 px-4 text-left">Total Amount</th>
                            <th class="py-3 px-4 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-t hover:bg-gray-50 transition">
                            <td class="py-3 px-4">1</td>
                            <td>Honda Dio</td>
                            <td>05 Nov 2025 - 07 Nov 2025</td>
                            <td>Rs 500</td>
                            <td>
                                <span
                                    class="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium"
                                >Completed</span
                                >
                            </td>
                        </tr>
                        <tr class="border-t hover:bg-gray-50 transition">
                            <td class="py-3 px-4">2</td>
                            <td>KTM Duke 200</td>
                            <td>08 Nov 2025 - 10 Nov 2025</td>
                            <td>Rs 800</td>
                            <td>
                                <span
                                    class="bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm font-medium"
                                >Pending</span
                                >
                            </td>
                        </tr>
                        <tr class="border-t hover:bg-gray-50 transition">
                            <td class="py-3 px-4">3</td>
                            <td>Kona Electric</td>
                            <td>01 Nov 2025 - 03 Nov 2025</td>
                            <td>Rs 320</td>
                            <td>
                                <span
                                    class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                                >Canceled</span
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RentalHistory
