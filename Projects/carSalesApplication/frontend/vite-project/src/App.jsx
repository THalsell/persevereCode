
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import CarList from "./components/CarList"
import HomePage from "./components/HomePage"
import CarDetails from './components/CarDetails';



function App() {
  

  return (
    
      <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cars" element={<CarList />} />
      <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  )
}

export default App
