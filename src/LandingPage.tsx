import screen from './assets/screen.png'
import TopNav from './TopNav'
import Card from './Card'
import { Link } from 'react-router-dom'
import { Heart, Shield, Sparkles } from 'lucide-react'
import './LandingPage.css'
import { useState } from 'react'
import AuthForm from './AuthForm'

function LandingPage() {
  const [activeTab, setActiveTab] = useState('register')

  function handleAuthSubmit(data: { fullName?: string; email: string; password: string }) {
    console.log(data)
  }

  return (
    <div className="landing-page">
      <TopNav />

      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Mastery Framework</span>
          <h1>Master your workflow with TaskMate</h1>
          <p>
            Build fullstack skills through a structured journey from initial Awareness to complete Mastery. Focus on what matters: shipping clean, production-ready code.
          </p>

          <div className="hero-actions">
            <Link to="/get-started" className="button primary">
              Get Started
            </Link>
            <Link to="/view-code" className="button secondary">
              View Code
            </Link>
          </div>

          <div className="pill-list">
            <div>
              <strong>61%</strong> faster onboarding
            </div>
            <div>
              <strong>4.9/5</strong> community rating
            </div>
          </div>
        </div>

        <div className="hero-media">
          <img src={screen} alt="TaskMate dashboard" />
        </div>
      </section>

      <section className="feature-cards">
        <Card
          title="Mastery Map"
          description="Follow a structured learning path. Level up your fullstack skills as you complete projects."
          icon={<Sparkles size={28} color="#4338ca" />}
        />
        <Card
          title="Team Collab"
          description="Seamlessly sync with your team. Review code, share resources, and ship faster together."
          icon={<Heart size={28} color="#4338ca" />}
        />
        <Card
          title="Secure Workflow"
          description="Keep your work safe with secure refresh logic and polished production-ready flows."
          icon={<Shield size={28} color="#4338ca" />}
        />
      </section>

      <section className="workspace-section">
        <div className="workspace-copy">
          <span className="eyebrow">The Focused Workspace</span>
          <h2>A minimalist Kanban system designed to keep you in flow. No noise, just your next task.</h2>
          <p>
            TaskMate helps you organize tasks by stages, so you can stay focused on what matters and ship your best work faster.
          </p>
          <Link to="/dashboard" className="link-button">
            View Full Dashboard
          </Link>
        </div>

        <div className="workspace-cards">
          <div className="workspace-card">
            <div className="workspace-card-label">To Do</div>
            <div className="workspace-card-task">Optimize SQL queries</div>
            <p>Improve performance on the main dashboard feed.</p>
          </div>
          <div className="workspace-card">
            <div className="workspace-card-label">In Progress</div>
            <div className="workspace-card-task">Fix JWT Refresh Logic</div>
            <p>Implement sliding window expiration.</p>
          </div>
          <div className="workspace-card">
            <div className="workspace-card-label">In Review</div>
            <div className="workspace-card-task">API Endpoint Documentation</div>
            <p>Review docs for your latest REST API endpoints.</p>
          </div>
          <div className="workspace-card">
            <div className="workspace-card-label">Completed</div>
            <div className="workspace-card-task">Initialize Project Structure</div>
            <p>Set up a clean foundation for the TaskMate app.</p>
          </div>
        </div>
      </section>

      <section className="signup-section">
        <div className="signup-copy">
          <span className="eyebrow">Ready to accelerate your learning?</span>
          <h2>Join thousands of developers building their future with TaskMate.</h2>
          <ul className="benefits-list">
            <li>Personalized Mastery Roadmap</li>
            <li>Community Code Reviews</li>
            <li>Portfolio-ready projects</li>
          </ul>
        </div>

        <div className="signup-card">
          <div className="signup-tabs">
            <button 
              className={activeTab === 'register' ? 'active' : ''} 
              type="button"
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
            <button 
              className={activeTab === 'login' ? 'active' : ''}
              type="button"
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
          </div>

          <AuthForm 
            mode={activeTab as 'register' | 'login'} 
            onSubmit={handleAuthSubmit}
            buttonText={activeTab === 'register' ? 'Create Free Account' : 'Sign In'}
          />
        </div>
  
      </section>
    </div>
  )
}

export default LandingPage
