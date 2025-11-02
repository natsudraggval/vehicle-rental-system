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

          <Route element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>

        {/* Nested Admin Dashboard routes */}
        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} /> {/* /admin */}
          <Route path="home" element={<DashboardHome />} /> {/* /admin/home */}
          <Route path="manage-vehicles" element={<ManageVehicles />} /> {/* /admin/manage-vehicles */}
        </Route>

        {/* Redirects any unknown route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
