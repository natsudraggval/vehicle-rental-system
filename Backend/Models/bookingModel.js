import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },

    fullname: String,
    email: String,

    vehicleName: String,

    vehicleNumber: {
      type: String,
      required: true,
      trim: true,
    },

    startDate: Date,
    endDate: Date,

    totalPrice: Number,

    status: {
      type: String,
      enum: ["pending", "approved", "declined", "returned"],
      default: "pending",
    },

    actualReturnDate: { type: Date, default: null },

    fine: { type: Number, default: 0 },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },

    paymentId: { type: String, default: null }, // Khalti pidx
    paymentMethod: { type: String, default: "khalti" },
    paymentDetails: { type: Object, default: {} }, // optional
  },

  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
