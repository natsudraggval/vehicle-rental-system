import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import App from '../App';
import Home from "../Pages/Home";
import Login from '../Pages/Auth/Login';
import SignUp from '../Pages/Auth/SignUp';
import Auth from '../Pages/Auth/Auth';
import BrowseVehicles from "../Components/BrowseVehicles";
import AboutUs from "../Pages/Aboutus";
import { ToastContainer } from "react-toastify";

// Admin Dashboard imports
import DashboardLayout from "../Pages/Admin/AdminDashboard/DashboardLayout";
import DashboardHome from "../Pages/Admin/AdminDashboard/Home";
import ManageVehicles from "../Pages/Admin/AdminDashboard/ManageVehicles";
import Rentals from "../Pages/Admin/AdminDashboard/Rentals";
import RentalsHistory from "../Pages/Admin/AdminDashboard/RentalsHistory";
import Analytics from "../Pages/Admin/AdminDashboard/Analytics";
import PrivateRoute from "./ProtectedRoute";

// User Dashboard imports
import UserDashboardLayout from "../Pages/UserDashboard/DashboardLayout";
import UserDashboardHome from "../Pages/UserDashboard/Home";
import UpdateProfile from "../Pages/UserDashboard/UpdateProfile";
import RentalHistory from "../Pages/UserDashboard/RentalHistory";
import UpdatePassword from "../Pages/UserDashboard/UpdatePassword";
import VehicleRentalPage from "../Pages/VehicleRentalPage";
import Features from "../Components/Features";

// Payment imports
import PaymentSuccess from "../Pages/PaymentSuccess";

function MyRoutes() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Main app routes */}
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="browsevehicles" element={<BrowseVehicles />} />
          <Route path="features" element={<Features />} />

          {/* Admin/login here as a child route so App is mounted and can show the modal */}
          <Route path="admin/login" element={<></>} />

          <Route element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>

        {/* Nested Admin and its Dashboard routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} /> 
            <Route path="home" element={<DashboardHome />} /> 
            <Route path="manage-vehicles" element={<ManageVehicles />} /> 
            <Route path="rentals" element={<Rentals />} /> 
            <Route path="rentals-history" element={<RentalsHistory />} /> 
            <Route path="analytics" element={<Analytics />} /> 
          </Route>
        </Route>

        {/* User Dashboard Routes */}
        <Route element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route path="/dashboard" element={<UserDashboardLayout />}>
            <Route index element={<UserDashboardHome />} />
            <Route path="home" element={<UserDashboardHome />} />
            <Route path="update-profile" element={<UpdateProfile />} />
            <Route path="rental-history" element={<RentalHistory />} />
            <Route path="update-password" element={<UpdatePassword />} />
          </Route>
        </Route>

        {/* single vehicle page */}
        <Route path="/vehicle/:id" element={<VehicleRentalPage />} />

        {/* Payment Success Page */}
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* Redirects any unknown route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
