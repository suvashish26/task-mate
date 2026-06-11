import { useState } from 'react'

type AuthFormProps = {
  mode?: 'register' | 'login'
  onSubmit?: (data: { fullName?: string; email: string; password: string }) => void
  buttonText?: string
  className?: string
}

function AuthForm({ 
  mode = 'register', 
  onSubmit,
  buttonText,
  className = ''
}: AuthFormProps) {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const isRegister = mode === 'register'

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (isRegister && fullName === '') {
      setError('Full name is required')
      return
    }
    if (email === '') {
      setError('Email is required')
      return
    }
    if (password === '') {
      setError('Password is required')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setError('')
    onSubmit?.({
      ...(isRegister && { fullName }),
      email,
      password
    })
  }

  return (
    <form className={`space-y-6 ${className}`} onSubmit={handleSubmit}>
      {isRegister && (
        <label className="block text-sm font-semibold text-gray-700">
          Full Name
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-2 w-full rounded-xl border border-indigo-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </label>
      )}

      <label className="block text-sm font-semibold text-gray-700">
        Email
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-xl border border-indigo-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </label>

      <label className="block text-sm font-semibold text-gray-700">
        Password
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 w-full rounded-xl border border-indigo-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </label>

      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-3 text-sm font-semibold text-white transition hover:from-indigo-700 hover:to-indigo-600 shadow-lg shadow-indigo-600/30"
      >
        {buttonText || (isRegister ? 'Create Free Account' : 'Sign In')}
      </button>

      {isRegister && (
        <p className="text-center text-xs text-gray-600">
          By registering, you agree to our Terms of Service.
        </p>
      )}
    </form>
  )
}

export default AuthForm
