import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import TopNav from './TopNav'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import TaskDashboard from './TaskDashboard'
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path = '/Register' element={<RegisterPage />} />
        <Route path = '/Dashboard' element={<TaskDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App