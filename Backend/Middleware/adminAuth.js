import User from "../Models/userModel.js";
import jwt from "jsonwebtoken";

// Admin authorization middleware
const checkAdminModels = async (req, res, next) => {
  try {
    // Check if Authorization header exists
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Please Login" });
    }

    // Extract the token from the header
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Please Login" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECURE);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Fetch the user from the database using the decoded ID
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user has an "admin" role
    if (user.role === "admin") {
      // Attached the user object to req.user so it can be accessed in controllers
      req.user = user;
      console.log("User attached to request:", req.user); 
      next();
    } else {
      return res.status(401).json({ message: "You are not an admin" });
    }
  } catch (e) {
    console.error("Admin middleware error: ", e);
    return res
      .status(400)
      .json({ message: "Something went wrong. Please try again." });
  }
};

export default checkAdminModels;
