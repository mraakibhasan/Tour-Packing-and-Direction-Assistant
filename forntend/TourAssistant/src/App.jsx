import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1 className="font-bold felx justify-center text-center w-full h-full">Root Route</h1>} />
        {/* Demo rou */}
        {/* second demo */}
      </Routes>

    </BrowserRouter>
  )
}

export default App
