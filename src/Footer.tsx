const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-950">TaskMate</p>
          <p className="text-xs text-slate-500">© 2024 TaskMate. Master your workflow.</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#" className="transition hover:text-violet-600">Privacy Policy</a>
          <a href="#" className="transition hover:text-violet-600">Terms of Service</a>
          <a href="#" className="transition hover:text-violet-600">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer