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
import PrivateRoute from "./ProtectedRoute";

// User Dashboard imports
import UserDashboardLayout from "../Pages/UserDashboard/DashboardLayout";
import UserDashboardHome from "../Pages/UserDashboard/Home";
import UpdateProfile from "../Pages/UserDashboard/UpdateProfile";
import RentalHistory from "../Pages/UserDashboard/RentalHistory";
import UpdatePassword from "../Pages/UserDashboard/UpdatePassword";


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

          {/* Admin/login here as a child route so App is mounted and can show the modal */}
          <Route path="admin/login" element={<></>} />

          <Route element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>

        {/* Nested Admin and its Dashboard routes */}
        {/* remove standalone /admin/login route here (it's now a child) */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} /> {/* /admin */}
            <Route path="home" element={<DashboardHome />} /> {/* /admin/home */}
            <Route path="manage-vehicles" element={<ManageVehicles />} /> {/* /admin/manage-vehicles */}
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

        {/* Redirects any unknown route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
