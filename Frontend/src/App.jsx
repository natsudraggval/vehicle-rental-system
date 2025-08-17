import Navbar from "./Components/Navbar.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";
import Login from "./Pages/Auth/Login.jsx";
import SignUp from "./Pages/Auth/SignUp.jsx";
import { useState } from "react";


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onLoginClick={() => setShowLogin(true)}
      onSignupClick={() => setShowSignup(true)} />
      <main className="flex-grow">
      <Outlet /> 
      </main>
      <Footer />

      
      {/* Conditionally render login popup */}
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignup && <SignUp onClose={() => setShowSignup(false)} />}
        
      </div>
  )
}

export default App;
