import { useState } from 'react'
import './LandingPage.css'
import screen from './assets/screen.png'
import TopNav from './TopNav'
import Card from './Card'
import { Camera, Heart } from 'lucide-react';
function LandingPage(){
    
    return(
       <>
       {/* Reusable Component */}
       <TopNav/>
       <div className="main-section">
        <h4>Mastery Tasks</h4>
        <h1>Master your workflow with TaskMate</h1>
        <p>Build fullstack skills through a structured journey from initial Awareness to complete Mastery. Focus on what matters: shipping clean, production-ready code.</p>
        <button>Get Started</button>
        <button>View Code</button>
       </div>

       <div className="image-section">
       <img src={screen} alt="TaskMate Screen" />
       </div>

{/* Props Usage Link with Card Component */}
        <Card  title='Hello, World!' description='This is a simple card component.' icon={<Camera size={48} color="#fff" />}/>
         <Card title='New, World!' description='This is the props' icon={<Heart size={48} color="#fff" />}/>
               
               </>
    )
    
}
export default LandingPage