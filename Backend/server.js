import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Connect from "./config/db.js";
import userRoute from "./Routes/userRoute.js";
import vehicleRoute from "./Routes/vehicleRoute.js";
import bookingRoute from "./Routes/bookingRoute.js";
import paymentRoutes from "./Routes/paymentRoutes.js";

import cron from "node-cron";
import notificationRoutes from "./Routes/notificationRoute.js";
import { dailyRentalCheck } from "./Controller/notificationController.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

Connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow your Vite dev server to call the API
const allowedOrigins = ["http://localhost:5173"];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);

app.use("/api/users", userRoute);
app.use("/api/vehicles", vehicleRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/payment", paymentRoutes);

app.use("/api/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.send("Hello! The server is working.");
});

cron.schedule("* * * * *", dailyRentalCheck); // Runs every minute for demonstration but keep 0 0 * * * for daily execution at midnight

app.listen(port, () => {
  console.log(`listening on Port ${port}`);
});
