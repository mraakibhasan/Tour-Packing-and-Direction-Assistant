import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/Home/HomePage";
function App() {


  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/" element={<LoginScreen />} />
          <Route path="/register/" element={<Register />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
