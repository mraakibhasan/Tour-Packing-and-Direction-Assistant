import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginScreen from "./pages/Login";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {


  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen/>} />
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
