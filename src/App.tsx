import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import TopNav from './TopNav'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import TaskDashboard from './TaskDashboard'
import AddTask from './AddTask'
import Feature from './Features'
import { Camera } from 'lucide-react'

function App() {

   interface Task{
    id: number;
    category: string;
    status: string; 
    title: string;
    description: string;
    icon: React.ReactNode;
    }

    
    const [tasks, setTasks] = useState <Task[]>(
      [
        {
            id:1,
            category: 'Performance',
            status: 'To do',
            title: 'Optimize SQL Queries',
            description: 'Improve the performance of SQL queries in the application.',
            icon: <Camera />
        },
        {
            id:2,
            category: 'Security',
            status: 'In progress',
            title: 'Conduct Security Audit',
            description: 'Perform a comprehensive security audit of the application.',
            icon: <Camera />
        },
        {
                id:3,
                category: 'Usability',
                status: 'In review',
                title: 'Improve User Interface',
                description: 'Enhance the user interface for better usability.',
                icon: <Camera />
        },
        {
            id:4,
            category: 'Completion',
            status: 'Completed',
            title: 'Complete Project Documentation',
            description: 'Finish writing the project documentation.',
            icon: <Camera />
        },
        {
            id:5,
            category: 'Performance',
            status: 'To do',
            title: 'Optimize SQL Queries',
            description: 'Improve the performance of SQL queries in the application.',
            icon: <Camera />
        }

    ]
    )
  
   function addTask(category: string, status: string, title: string, description: string){
      const newTask: Task = {
        id: tasks.length + 1,
        category,
        status,
        title,
        description,
        icon: <Camera />
      }
      setTasks([...tasks, newTask])
    }
    function deleteTask(id: number){
      setTasks(tasks.filter(task => task.id != id))
    }

function updateTask(id:number){
  setTasks(tasks.map(task =>
    task.id === id ? {...task, status: "Completed"} : task // ternary
  ))
}

const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        
        <Route path='/' element={<LandingPage />} />
        <Route path='/features' element={<Feature/>}></Route>
        <Route path='/login' element={<LoginPage setIsLoggedIn={setIsLoggedIn } />} />
        <Route path = '/Register' element={<RegisterPage />} />
        {/* Protected Routes Layout Wrapper */}
        <Route element = {<ProtectedRoute isAuthenticated={isLoggedIn}/>}>
        <Route path='/dashboard' element={<TaskDashboard tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>} />
        {/* Pass addTask as a prop */}
        <Route path = '/Task' element={<AddTask addTask={addTask}/>} />
      </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App