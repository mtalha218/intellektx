import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';

function App() {

  return (
    <>
      <Routes>
          <Route index element={<Home />} />
      </Routes>
    </>
  )
}

export default App
