import TopNav from "./TopNav"
import { Link, useNavigate } from "react-router-dom"
import AuthForm from "./AuthForm"

interface LoginPageProps {
  setIsLoggedIn: (value: boolean) => void
}

function LoginPage({ setIsLoggedIn }: LoginPageProps) {
  const navigate = useNavigate()

  function handleLoginSubmit(data: { fullName?: string; email: string; password: string }) {
    console.log(data)
    setIsLoggedIn(true)
    navigate('/Dashboard')
  }

  return (
    <>
      <TopNav />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl shadow-indigo-900/10 border border-indigo-100">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Welcome Back</h1>
            <p className="mt-3 text-sm text-gray-600">Login to your mastery dashboard</p>
          </div>

          <AuthForm mode="login" onSubmit={handleLoginSubmit} buttonText="Sign In" />

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/Register" className="font-semibold text-indigo-600 underline-offset-4 transition hover:text-indigo-700 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginPage
