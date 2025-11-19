import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function PaymentSuccess() {
    const navigate = useNavigate();
    const hasRun = useRef(false);

    useEffect(() => {
        if (hasRun.current) return;  // block second run
        hasRun.current = true;

        const query = new URLSearchParams(window.location.search);
        const pidx = query.get("pidx");
        const bookingData = JSON.parse(localStorage.getItem("pendingBooking"));

        if (!pidx || !bookingData) {
            toast.error("Invalid payment session");
            navigate("/");
            return;
        }

        const verifyPayment = async () => {
            const res = await fetch("http://localhost:3000/api/payment/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pidx }),
            });

            const data = await res.json();

            if (data.status === "Completed") {
                // payment success → now create booking
                const token = localStorage.getItem("token");

                const create = await fetch("http://localhost:3000/api/booking", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        ...bookingData,
                        paymentId: pidx,
                        paymentStatus: "paid",
                    }),
                });

                const bookingRes = await create.json();

                if (create.ok) {
                    toast.success("Payment successful! Booking created.");
                    localStorage.removeItem("pendingBooking");
                    setTimeout(() => navigate("/browsevehicles"), 1500);
                } else {
                    toast.error("Payment succeeded but booking failed!");
                }
            } else {
                toast.error("Payment failed!");
                navigate(-1);
            }
        };

        verifyPayment();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center">
                <img src="/spinner.svg" alt="Processing" className="h-16 w-16 mb-4 animate-spin" />
                <h2 className="text-xl font-semibold text-gray-700">
                    Processing Payment...
                </h2>
            </div>
        </div>

    );
}

export default PaymentSuccess;
