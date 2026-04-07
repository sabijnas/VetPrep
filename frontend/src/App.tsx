import './App.css'
import { Route, Routes } from 'react-router-dom'
import ReadMore from './components/ReadMore'
import NavBar from './components/NavBar'
import Home from './components/Home'
import HealthAdvice from './components/HealthAdvice'

function App() {
  return (
    <div className="container">
      <NavBar/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Hälsoråd" element={<HealthAdvice/>}/>
        <Route path="/LäsMer" element={<ReadMore/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
      </div>
      <footer>© 2026 VetPrep</footer>
   </div>
  )
}

export default App
