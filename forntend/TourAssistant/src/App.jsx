import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoarded from "./onBoarded";
import LoginScreen from "./pages/Login";
import Register from "./pages/Register";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen/>} />
        <Route path="/register" element={<Register/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
