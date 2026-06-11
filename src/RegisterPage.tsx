import { Link, useNavigate } from "react-router-dom"
import AuthForm from "./AuthForm"

function RegisterPage() {
  const navigate = useNavigate()

  function handleRegisterSubmit(data: { fullName?: string; email: string; password: string }) {
    console.log(data)
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl shadow-indigo-900/10 border border-indigo-100">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create Your Account</h1>
          <p className="mt-3 text-sm text-gray-600">Join TaskMate and start mastering your workflow today.</p>
        </div>

        <AuthForm mode="register" onSubmit={handleRegisterSubmit} />

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-indigo-600 underline-offset-4 transition hover:text-indigo-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
