import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1 className="font-bold felx justify-center text-center w-full h-full">Root Route</h1>}/>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
