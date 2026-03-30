import './App.css'
import { Route, Routes } from 'react-router-dom'
import BusinessPlan from './components/BusinessPlan'
import ProjectIdea from './components/ProjectIdea'
import ReadMore from './components/ReadMore'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<BusinessPlan/>}/>
        <Route path="/Projektidé" element={<ProjectIdea/>}/>
        <Route path="/LäsMer" element={<ReadMore/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
      </div>
      <footer>VetPrep - 2026</footer>
    </>
  )
}

export default App
