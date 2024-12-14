import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

// Page Components
import HomePage from "./pages/Home/HomePage";
import LoveCalculator from "./pages/LoveCalculator";
import Chocolate from "./pages/Chocolate/Chocolate";
import LoginScreen from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <>
      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <BrowserRouter>
        <Routes>
          {/* Private Route for HomePage */}
          <Route
            path="/home"
            element={
            
                <HomePage />
           
            }
          />

          {/* Public Routes */}
          <Route path="/love-calculator" element={<LoveCalculator />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
