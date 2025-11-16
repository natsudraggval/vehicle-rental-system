import express from "express";
import {
  createBooking,
  getBookingById,
  getUserBookings,
  getAllBookings,
  updateBookingStatus,
  markReturned,
  addPayment,
} from "../Controller/bookingController.js";
import verifyToken from "../Middleware/verifyToken.js";

const router = express.Router();


// Routes that require authentication, create booking, get bookings for a user, add/update payment information
router.post("/", verifyToken, createBooking); // Auth required
router.get("/user/:userId", verifyToken, getUserBookings); // Auth required
router.patch("/:id/payment", verifyToken, addPayment); // Auth required


// Routes that can be public or admin-only, Get booking by ID (could be public or protected), Get all bookings (admin), Update booking status (admin), Mark returned (admin)
router.get("/:id", getBookingById); // Public for now
router.get("/", getAllBookings); // Consider adding admin middleware
router.patch("/:id/status", updateBookingStatus); // Consider admin middleware
router.patch("/:id/return", markReturned); // Consider admin middleware

export default router;
