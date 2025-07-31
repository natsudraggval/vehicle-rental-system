import React from "react";
import { Route, Routes } from "react-router-dom";
import App from '../App';
import Home from "../Pages/Home";
import Login from '../Pages/Auth/Login';
import SignUp from '../Pages/Auth/SignUp';
import Auth from '../Pages/Auth/Auth';
import Vehicles from "../Pages/Vehicles";
import BrowseVehicles from "../Components/BrowseVehicles";
import AboutUs from "../Pages/Aboutus";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="browsevehicles" element={<BrowseVehicles />} />
          {/* <Route path="product/:id" element={<SingleProduct />} /> */}
          <Route element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default MyRoutes
