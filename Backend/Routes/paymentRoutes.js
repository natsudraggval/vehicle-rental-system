import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/initiate", async (req, res) => {
  try {
    const { amount, purchaseOrderId, customer } = req.body;

    const payload = {
      return_url: "https://vehicle-rental-system-six-roan.vercel.app/payment-success",
      website_url: "https://vehicle-rental-system-six-roan.vercel.app",
      amount: amount * 100, // convert to paisa
      purchase_order_id: purchaseOrderId,
      purchase_order_name: "Vehicle Booking",
      customer_info: customer,
    };

    const response = await axios.post(
      "https://a.khalti.com/api/v2/epayment/initiate/",
      payload,
      { headers: { Authorization: `Key ${process.env.KHALTI_SECRET_KEY}` } }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.response.data);
    res.status(500).json({ message: "Payment initiation failed" });
  }
});

router.post("/verify", async (req, res) => {
  try {
    const { pidx } = req.body;

    const response = await axios.post(
      "https://a.khalti.com/api/v2/epayment/lookup/",
      { pidx },
      { headers: { Authorization: `Key ${process.env.KHALTI_SECRET_KEY}` } }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Payment verification failed" });
  }
});

export default router;
