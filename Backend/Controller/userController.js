import UserModel from "../Models/UserModel.js";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import UserTokenModel from "../Models/UserTokenModel.js";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ---------------- LOGIN ----------------
const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jsonwebtoken.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.SECURE,
      { expiresIn: "1d" }
    );

    await UserTokenModel.create({ userId: user._id, token });

    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      token,
      message: "User logged in successfully",
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------- SIGNUP ----------------
const SignupController = async (req, res) => {
  try {
    const { fullname, email, phonenumber, password, confirmPassword, role } =
      req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password does not match" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await UserModel.create({
      fullname,
      email,
      phonenumber,
      password: hashedPassword,
      role: role || "user",
    });

    res.status(200).json({ user, message: "User created successfully" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ---------------- GOOGLE LOGIN ----------------
const GoogleLoginController = async (req, res) => {
  try {
    const { id_token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub, email, name } = payload;

    let user = await UserModel.findOne({ google_id: sub });

    if (!user) {
      user = await UserModel.findOne({ email });

      if (user && !user.google_id) {
        user.google_id = sub;
        user.is_google_account = true;
        await user.save();
      } else if (!user) {
        user = await UserModel.create({
          fullname: name,
          email,
          google_id: sub,
          is_google_account: true,
          is_verified: true,
          role: "user",
          password: "",
        });
      }
    }

    const token = jsonwebtoken.sign(
      { id: user._id, email: user.email },
      process.env.SECURE,
      { expiresIn: "1d" }
    );

    await UserTokenModel.findOneAndUpdate(
      { userId: user._id },
      { token },
      { upsert: true, new: true }
    );

    res.status(200).json({
      email: user.email,
      fullname: user.fullname,
      role: user.role,
      token,
      _id: user._id,
    });
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ message: "Google login failed" });
  }
};

// ---------------- OTHER CONTROLLERS ----------------
const UpdatePasswordController = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization token missing or invalid" });
    }

    const splitToken = authHeader.split(" ")[1];
    const decoded = jsonwebtoken.verify(splitToken, process.env.SECURE);
    req.user = decoded;

    const userToken = await UserTokenModel.findOne({ userId: req.user.id });
    if (!userToken) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(400).json({ message: "Both fields are required" });
    }

    const user = await UserModel.findById(req.user.id);
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Old password is incorrect" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    await UserModel.findByIdAndUpdate(req.user.id, {
      password: hashedPassword,
    });

    res.status(200).json({ message: "Password updated successfully" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

const UpdateProfileController = async (req, res) => {
  try {
    const { token } = req.headers;
    const splitToken = token.split(" ")[1];
    const decoded = jsonwebtoken.verify(splitToken, process.env.SECURE);
    req.user = decoded;

    const userToken = await UserTokenModel.findOne({ userId: req.user.id });
    if (!userToken) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const { email, fullname } = req.body;
    const user = await UserModel.findByIdAndUpdate(req.user.id, {
      email,
      fullname,
    });

    res.status(200).json({
      success: true,
      user,
      message: "Profile updated successfully",
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

const LogoutController = async (req, res) => {
  try {
    const { token } = req.headers;
    const splitToken = token.split(" ")[1];
    const decoded = jsonwebtoken.verify(splitToken, process.env.SECURE);
    req.user = decoded;

    await UserTokenModel.findOneAndDelete({ userId: req.user.id });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

const GetAllUserController = async (req, res) => {
  try {
    const users = await UserModel.find();
    res
      .status(200)
      .json({ success: true, users, message: "User fetched successfully" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Server error" });
  }
};

export {
  LoginController,
  SignupController,
  UpdatePasswordController,
  UpdateProfileController,
  LogoutController,
  GetAllUserController,
  GoogleLoginController,
};
