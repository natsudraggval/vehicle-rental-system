import Navbar from "./Components/Navbar.jsx";
import Body from "./Components/Body.jsx";
import Footer from "./Components/Footer.jsx";
import { Outlet } from "react-router-dom";


function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
      <Outlet /> 
      </main>
      <Footer />
      </div>
  )
}

export default App
