import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Analytics = () => {
    // ====== BAR CHART DATA ======
    const vehicleTypeData = {
        labels: ["Scooter", "Bike", "Car"],
        datasets: [
            {
                label: "Requests",
                data: [12, 19, 7],
                backgroundColor: ["#0284C7", "#0EA5E9", "#334155"],
                borderRadius: 6,
            },
        ],
    };

    const vehicleTypeOptions = {
        plugins: { legend: { display: false } },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "#4B5563" },
            },
            y: {
                beginAtZero: true,
                grid: { color: "#E5E7EB" },
                ticks: { color: "#4B5563" },
            },
        },
    };

    // ====== LINE CHART DATA ======
    const requestTrendData = {
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [
            {
                label: "Requests",
                data: [8, 12, 15, 10, 18, 20],
                borderColor: "#06B6D4",
                backgroundColor: "rgba(6, 182, 212, 0.2)",
                tension: 0.4,
                fill: true,
                pointBackgroundColor: "#06B6D4",
                pointBorderWidth: 2,
            },
        ],
    };

    const requestTrendOptions = {
        plugins: { legend: { display: false } },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: "#4B5563" },
            },
            y: {
                beginAtZero: true,
                grid: { color: "#E5E7EB" },
                ticks: { color: "#4B5563" },
            },
        },
    };

    return (
        <div div className="min-h-screen bg-gray-100">
            <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-md transition mt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Analytics Overview
                </h3>

                {/* SIDE-BY-SIDE CHARTS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* BAR CHART */}
                    <div className="p-4 border rounded-lg bg-gray-50 shadow-sm">
                        <h4 className="text-lg font-semibold mb-2 text-gray-700">
                            Requests by Vehicle Type
                        </h4>
                        <Bar data={vehicleTypeData} options={vehicleTypeOptions} height={180} />
                    </div>

                    {/* LINE CHART */}
                    <div className="p-4 border rounded-lg bg-gray-50 shadow-sm">
                        <h4 className="text-lg font-semibold mb-2 text-gray-700">
                            Requests Trend (Last 6 Months)
                        </h4>
                        <Line data={requestTrendData} options={requestTrendOptions} height={180} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
