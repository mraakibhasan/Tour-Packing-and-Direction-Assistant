import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/Home/HomePage";
import LoveCalculator from './pages/LoveCalculator';
import Chocolate from "./pages/Chocolate/Chocolate";
function App() {


  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/" element={<LoginScreen />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/love-calculator/" element={<LoveCalculator />} />
          <Route path="/chocolate/" element={<Chocolate />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
