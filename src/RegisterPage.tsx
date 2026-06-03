import { Link } from "react-router-dom"
import { useState } from "react"
function RegisterPage() {
 const [fullName,setFullName]= useState('')
 const [email, setEmail]= useState('')
 const [password, setPassword]= useState('')
 function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    console.log(fullName,email,password)
 }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-slate-100">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white">Create Your Account</h1>
          <p className="mt-3 text-sm text-slate-400">Join TaskMate and start mastering your workflow today.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-slate-300">
            Full Name
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e)=> setFullName(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-slate-500 focus:ring-slate-500/30"
            />
          </label>

          <label className="block text-sm font-medium text-slate-300">
            Email
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-slate-500 focus:ring-slate-500/30"
            />
          </label>

          <label className="block text-sm font-medium text-slate-300">
            Password
            <input
              type="password"
              placeholder="Password"
              value= {password}
              onChange={(e)=> setPassword(e.target.value)}
              className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none ring-1 ring-transparent transition focus:border-slate-500 focus:ring-slate-500/30"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-3xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-slate-50 underline-offset-4 transition hover:text-white hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage