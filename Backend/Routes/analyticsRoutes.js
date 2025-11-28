import express from "express";
import { getVehicleTypeAnalytics } from "../Controller/analyticsController.js";

const router = express.Router();

router.get("/vehicle-type", getVehicleTypeAnalytics);

export default router;
