import Navbar from "./Components/Navbar.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Login from "./Pages/Auth/Login.jsx";
import SignUp from "./Pages/Auth/SignUp.jsx";
import AdminLogin from "./Pages/Admin/Auth/AdminLogin.jsx";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const location = useLocation();

  // Detect when /admin/login is active
  const isAdminLogin = location.pathname === "/admin/login";

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
      />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* User Login / Signup Modals */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <SignUp onClose={() => setShowSignup(false)} />}

      {/* Admin Login Modal (triggered via route /admin/login) */}
      {isAdminLogin && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-xs flex justify-center items-center z-50">
          {/* Click outside should go back — keep behavior with history.back when close is pressed */}
          <AdminLogin />
        </div>
      )}
    </div>
  );
}

export default App;
