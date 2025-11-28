import Booking from "../Models/bookingModel.js";
import Vehicle from "../Models/vehicleModel.js";
import VerifyToken from "../Middleware/verifyToken.js";
import mongoose from "mongoose";

// For booking and authentication middleware sets req.userId, it will be used as userId.
export const createBooking = async (req, res) => {
  try {
    const {
      vehicleId,
      startDate,
      endDate,
      fullname,
      email,
      paymentMethod,
      paymentDetails,
      paymentId,
      paymentStatus,
    } = req.body;
    const userId = req.user?._id || null; // auth middleware sets req.user (make sure)

    if (!vehicleId || !startDate || !endDate) {
      return res
        .status(400)
        .json({ message: "vehicleId, startDate and endDate are required" });
    }

    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) return res.status(404).json({ message: "Vehicle not found" });

    const s = new Date(startDate);
    const e = new Date(endDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (s < today)
      return res
        .status(400)
        .json({ message: "Start date cannot be in the past" });
    if (e < s)
      return res
        .status(400)
        .json({ message: "End date cannot be before start date" });

    const diffTime = e - s;
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (totalDays < 1)
      return res
        .status(400)
        .json({ message: "Booking must be at least 1 day" });

    const totalPrice = totalDays * (vehicle.price || 0);

    try {
      const booking = new Booking({
        userId,
        vehicleId,
        fullname: fullname || req.user?.fullname || "",
        email: email || req.user?.email || "",
        vehicleName: vehicle.name,
        vehicleNumber: vehicle.vehicleNumber,
        startDate: s,
        endDate: e,
        totalPrice,
        paymentId: paymentId || null,
        paymentStatus: paymentStatus || "pending",
        paymentMethod: paymentMethod || "khalti",
        paymentDetails: paymentDetails || {},
      });

      await booking.save();

      return res.status(201).json({ message: "Booking created", booking });
    } catch (err) {
      console.error("Booking creation error:", err);
      return res
        .status(500)
        .json({ message: "Server error", error: err.message });
    }
  } catch (err) {
    console.error("CreateBooking controller error:", err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid id" });

    const booking = await Booking.findById(id)
      .populate("vehicleId")
      .populate("userId", "fullname email");

    if (!booking) return res.status(404).json({ message: "Booking not found" });
    return res.json(booking);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    // Prefered authenticated user id; fallback to :userId param
    const userId = req.userId || req.params.userId;
    if (!userId) return res.status(400).json({ message: "userId is required" });
    if (!mongoose.Types.ObjectId.isValid(userId))
      return res.status(400).json({ message: "Invalid userId" });

    const bookings = await Booking.find({ userId })
      .sort({ createdAt: -1 })
      .populate("vehicleId");
    return res.json(bookings);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    // Admin check in route/middleware if required
    const bookings = await Booking.find()
      .sort({ createdAt: -1 })
      .populate("vehicleId")
      .populate("userId", "fullname email");
    return res.json(bookings);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const allowed = ["pending", "approved", "declined", "returned"];
    if (!allowed.includes(status))
      return res.status(400).json({ message: "Invalid status" });

    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    booking.status = status;
    await booking.save();

    // update vehicle availability based on status
    if (booking.vehicleId) {
      const vehicle = await Vehicle.findById(booking.vehicleId);
      if (vehicle) {
        if (status === "approved") {
          vehicle.isAvailable = false; // Vehicle is now booked
        } else if (status === "declined" || status === "returned") {
          vehicle.isAvailable = true; // Vehicle is free again
        }
        await vehicle.save();
      }
    }

    return res.json({ message: "Status updated", booking });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

// For marking booking as returned and Calculates fine if returned late
export const markReturned = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id).populate("vehicleId");
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    const now = new Date();
    booking.actualReturnDate = now;
    booking.status = "returned";

    const scheduledEnd = booking.endDate ? new Date(booking.endDate) : null;
    let fine = 0;
    if (scheduledEnd && now > scheduledEnd && booking.vehicleId) {
      const diff = now - scheduledEnd;
      const lateDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
      fine = lateDays * (booking.vehicleId.price || 0); // for adjusting fine according to needs
    }
    booking.fine = fine;

    await booking.save();

    // Make vehicle available again in Vehicle model
    if (booking.vehicleId) {
      const vehicle = await Vehicle.findById(booking.vehicleId._id);
      if (vehicle) {
        vehicle.isAvailable = true;
        await vehicle.save();
      }
    }

    return res.json({ message: "Vehicle marked returned", booking });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

// Stats updater - admin 
export const getBookingStats = async (req, res) => {
  try {
    const totalBooking = await Booking.countDocuments(); // total bookings
    const totalSalesAgg = await Booking.aggregate([
      { $group: { _id: null, totalSales: { $sum: "$totalPrice" } } },
    ]);
    const totalSales = totalSalesAgg[0]?.totalSales || 0;

    // Count distinct vehicles rented
    const totalRentals = await Booking.distinct("vehicleId").then(
      (arr) => arr.length
    );

    return res.json({ totalBooking, totalRentals, totalSales });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

// Add / update payment info for a booking
export const addPayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { paymentId, paymentStatus, paymentMethod, paymentDetails } =
      req.body;
    const booking = await Booking.findById(id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    if (paymentId) booking.paymentId = paymentId;
    if (paymentStatus) booking.paymentStatus = paymentStatus;
    if (paymentMethod) booking.paymentMethod = paymentMethod;
    if (paymentDetails) booking.paymentDetails = paymentDetails;

    await booking.save();
    return res.json({ message: "Payment updated", booking });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server error", error: err.message });
  }
};

export default {
  createBooking,
  getBookingById,
  getUserBookings,
  getAllBookings,
  updateBookingStatus,
  markReturned,
  getBookingStats,
  addPayment,
};
