import Booking from "../Models/bookingModel.js";
import Vehicle from "../Models/vehicleModel.js";

import mongoose from "mongoose";

export const getVehicleTypeAnalytics = async (req, res) => {
  try {
    const results = await Booking.aggregate([
      {
        $lookup: {
          from: "vehicles",
          localField: "vehicleId",
          foreignField: "_id",
          as: "vehicleData",
        },
      },
      {
        $unwind: {
          path: "$vehicleData",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $group: {
          _id: "$vehicleData.category",
          count: { $sum: 1 },
        },
      },
    ]);

    const response = {
      scooter:
        results.find((r) => r._id?.toLowerCase() === "scooter")?.count || 0,
      bike: results.find((r) => r._id?.toLowerCase() === "bike")?.count || 0,
      car: results.find((r) => r._id?.toLowerCase() === "car")?.count || 0,
    };

    console.log("Analytics result:", response);
    res.json(response);
  } catch (err) {
    console.error("Analytics error:", err);
    res.status(500).json({ message: err.message });
  }
};
