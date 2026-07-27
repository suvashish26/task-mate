import TopNav from "./TopNav"
import { Link } from "react-router-dom"
import Footer from './Footer'

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

            <section className="feature-moreover px-6 py-16 sm:px-10 lg:px-16">
              <div className="mx-auto max-w-6xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Moreover</p>
                <h2 className="mb-6 text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Built to keep teams aligned and developers in flow.
                </h2>
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-semibold text-slate-950">Smart prioritization</h3>
                    <p className="text-sm leading-7 text-slate-600">
                      Prioritize the work that moves the needle with context-aware task cards and progress summaries.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-semibold text-slate-950">Seamless handoffs</h3>
                    <p className="text-sm leading-7 text-slate-600">
                      Keep handoffs smooth with clear status updates, notes, and review checkpoints built into every task.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-3 text-xl font-semibold text-slate-950">Actionable insights</h3>
                    <p className="text-sm leading-7 text-slate-600">
                      Turn work patterns into improvements with lightweight analytics and better daily planning.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
            </>

)
}
export default Feature