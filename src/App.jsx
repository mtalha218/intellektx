import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import ComputerVision from './Pages/ComputerVision';
import DeepLearning from './Pages/DeepLearning';
import MachineLearning from './Pages/MachineLearning';
import DataAnalytics from './Pages/DataAnalytics';
import FullStack from './Pages/FullStack';
import AR_VR from './Pages/AR_VR';

function App() {

  return (
    <>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/services/computer-vision' element={<ComputerVision />} />
          <Route path='/services/deep-learning' element={<DeepLearning />} />
          <Route path='/services/machine-learning' element={<MachineLearning />} />
          <Route path='/services/data-analytics' element={<DataAnalytics />} />
          <Route path='/services/fullstack-develpoment' element={<FullStack />} />
          <Route path='/services/ar-vr' element={<AR_VR />} />
      </Routes>
    </>
  )
}

export default App
