import express from "express";
import {
  createVehicle,
  getAllVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
  updateVehicleAvailability,
  getPopularVehicles,
} from "../Controller/vehicleController.js";
import verifyToken from "../Middleware/verifytoken.js";
import checkAdminModels from "../Middleware/adminAuth.js";

const router = express.Router();

// Public routes
router.get("/get-vehicles", getAllVehicles);
router.get("/vehicles/:id", getVehicleById);
router.get("/popular-vehicles", getPopularVehicles);

// Protected admin routes
router.post("/create-vehicles", verifyToken, checkAdminModels, createVehicle);
router.put("/vehicles/:id", verifyToken, checkAdminModels, updateVehicle);
router.delete("/vehicles/:id", verifyToken, checkAdminModels, deleteVehicle);
router.patch(
  "/vehicles/:id/availability",
  verifyToken,
  checkAdminModels,
  updateVehicleAvailability
);

export default router;
