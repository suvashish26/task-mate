import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import TopNav from './TopNav'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import TaskDashboard from './TaskDashboard'
import AddTask from './AddTask'
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

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path = '/Register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<TaskDashboard tasks={tasks} deleteTask={deleteTask} />} />
        {/* Pass addTask as a prop */}
        <Route path = '/Task' element={<AddTask addTask={addTask}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App