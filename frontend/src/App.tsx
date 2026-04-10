import './App.css'
import { Route, Routes } from 'react-router-dom'
import ReadMore from './components/dashboardViews/ReadMore'
import NavBar from './components/NavBar'
import Home from './components/dashboardViews/Home'
import HealthAdvice from './components/dashboardViews/HealthAdvice'
import LogInForm from './components/LogInPage'

function App() {
  return (
    <div className="container">
      <NavBar/>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Hälsoråd" element={<HealthAdvice/>}/>
        <Route path="/LäsMer" element={<ReadMore/>}/>
        <Route path="/LogIn" element={<LogInForm/>}/>
        <Route path="*" element={<h1 className="notFoundError">404 Not Found</h1>}/>
      </Routes>
      </div>
      <footer>© 2026 VetPrep</footer>
   </div>
  )
}

export default App
