import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
    const [counts, setCounts] = useState({ scooter: 0, bike: 0, car: 0 });

    const backendURL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const res = await fetch(`${backendURL}/api/analytics/vehicle-type`);
                const data = await res.json();
                setCounts(data);
            } catch (err) {
                console.error("Failed to load analytics:", err);
            }
        };

        fetchAnalytics();
    }, []);

    const vehicleTypeData = {
        labels: ["Scooter", "Bike", "Car"],
        datasets: [
            {
                label: "Requests",
                data: [counts.scooter, counts.bike, counts.car],
                backgroundColor: ["#0284C7", "#0EA5E9", "#334155"],
                borderRadius: 6,
            },
        ],
    };

    const vehicleTypeOptions = {
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: { color: "#4B5563" } },
            y: { beginAtZero: true, grid: { color: "#E5E7EB" }, ticks: { color: "#4B5563" } },
        },
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-5">
            <div className="bg-white shadow p-6 rounded-lg max-w-2xl w-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-5">
                    Analytics Overview
                </h3>

                <div className="p-4 border rounded-lg bg-gray-50 shadow-sm">
                    <h4 className="text-lg font-semibold mb-3 text-gray-700">
                        Total Rentals by Vehicle Type
                    </h4>
                    <Bar data={vehicleTypeData} options={vehicleTypeOptions} height={180} />
                </div>
            </div>
        </div>
    );
};

export default Analytics;
