import express from "express";
import {
  createBooking,
  getBookingById,
  getUserBookings,
  getAllBookings,
  updateBookingStatus,
  markReturned,
  getBookingStats,
  addPayment,
} from "../Controller/bookingController.js";
import verifyToken from "../Middleware/verifyToken.js";
import Booking from "../Models/bookingModel.js";

const router = express.Router();

// Authenticated routes
router.post("/", verifyToken, createBooking);
router.get("/user/:userId", verifyToken, getUserBookings);
router.put("/:id/payment", verifyToken, addPayment);

// Specific static routes first
router.get("/stats", getBookingStats);

//for recent rentals
router.get("/recent", async (req, res) => {
  try {
    const rentals = await Booking.find().sort({ createdAt: -1 }).limit(5);

    res.json(rentals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching rentals" });
  }
});

router.put("/:id/status", verifyToken, updateBookingStatus);
router.put("/:id/return", verifyToken, markReturned);

// Dynamic routes last
router.get("/:id", getBookingById);
router.get("/", getAllBookings);

export default router;
