import TopNav from "./TopNav"
import { Link } from "react-router-dom"
function Feature(){
return(
    <>
    <TopNav />
   <section className="hero-section center" >
        <div className="hero-copy">
          <span className="eyebrow">Mastery Framework</span>
          <h1>Master your workflow with TaskMate</h1>
          <p>
            Build fullstack skills through a structured journey from initial Awareness to complete Mastery. Focus on what matters: shipping clean, production-ready code.
          </p>

          <div className="hero-actions center">
            <Link to="/get-started" className="button primary">
              Get Started
            </Link>
            <Link to="/view-code" className="button secondary">
              View Code
            </Link>
            </div>
            </div>
            </section>
            </>

)
}
export default Feature