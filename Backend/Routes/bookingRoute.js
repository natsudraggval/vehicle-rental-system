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

const router = express.Router();

// Authenticated routes
router.post("/", verifyToken, createBooking);
router.get("/user/:userId", verifyToken, getUserBookings);
router.put("/:id/payment", verifyToken, addPayment);

// Specific static routes first
router.get("/stats", getBookingStats);
router.put("/:id/status", verifyToken, updateBookingStatus);
router.put("/:id/return", verifyToken, markReturned);

// Dynamic routes last
router.get("/:id", getBookingById);
router.get("/", getAllBookings);

export default router;
