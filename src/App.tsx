import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import TopNav from './TopNav'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import TaskDashboard from './TaskDashboard'
import AddTask from './AddTask'
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path = '/Register' element={<RegisterPage />} />
        <Route path = '/Dashboard' element={<TaskDashboard />} />
        <Route path = '/Task' element={<AddTask />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App