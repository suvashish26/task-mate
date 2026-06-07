import { Link } from "react-router-dom";
import Tasks from "./Tasks";
import { Camera, LayoutDashboard, BookOpen, Folder, Settings2, Search, Sparkles } from 'lucide-react';

interface Task {
    id: number;
    category: string;
    status: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}
interface TaskDashboardProps {
    tasks: Task[];
    deleteTask: (id:number) => void; // deleteTask inside same interface  
}

function TaskDashboard({tasks, deleteTask}: TaskDashboardProps) {
    
    return(
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <div className="flex min-h-screen">
                <aside className="w-72 bg-white border-r border-slate-200 px-6 py-8 shadow-sm">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-slate-950">TaskMate</h1>
                            <p className="mt-2 text-sm uppercase tracking-[0.32em] text-slate-500">Mastery framework</p>
                        </div>

                        <Link
                            to="/Task"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-[1.5rem] bg-slate-950 px-4 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-200/40 transition hover:bg-slate-800"
                        >
                            <span className="text-base">+</span> New Task
                        </Link>
                    </div>

                    <nav className="mt-12 space-y-2">
                        <Link to="/Dashboard" className="flex items-center gap-3 rounded-3xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
                            <LayoutDashboard className="h-4 w-4" />
                            Dashboard
                        </Link>
                        <Link to="/Resources" className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                            <BookOpen className="h-4 w-4" />
                            Resources
                        </Link>
                        <Link to="/Projects" className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                            <Folder className="h-4 w-4" />
                            Projects
                        </Link>
                        <Link to="/Settings" className="flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
                            <Settings2 className="h-4 w-4" />
                            Settings
                        </Link>
                    </nav>
                </aside>

                <main className="flex-1 overflow-auto p-6 xl:p-10">
                    <div className="mx-auto max-w-[1500px]">
                        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <div className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-slate-500">
                                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-slate-950"></span>
                                    Current cycle: 04
                                </div>
                                <h1 className="text-5xl font-bold tracking-[-0.04em] text-slate-950">Sprint: Framework Optimization</h1>
                            </div>

                            <div className="flex items-center justify-end gap-3">
                                <div className="flex items-center gap-2 rounded-full bg-slate-200/90 px-3 py-2 text-sm text-slate-700">
                                    <span className="h-2.5 w-2.5 rounded-full bg-slate-950"></span>
                                    <span>+3</span>
                                </div>
                                <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50">
                                    <Sparkles className="h-5 w-5" />
                                </button>
                                <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50">
                                    <Search className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                            <div className="rounded-[2rem] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-700 shadow-sm">
                                TO DO <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-xs font-bold text-slate-900">3</span>
                            </div>
                            <div className="rounded-[2rem] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-700 shadow-sm">
                                IN PROGRESS <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-xs font-bold text-slate-900">1</span>
                            </div>
                            <div className="rounded-[2rem] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-700 shadow-sm">
                                IN REVIEW <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-xs font-bold text-slate-900">2</span>
                            </div>
                            <div className="rounded-[2rem] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-[0.32em] text-slate-700 shadow-sm">
                                COMPLETED <span className="ml-2 rounded-full bg-slate-100 px-2 py-1 text-xs font-bold text-slate-900">12</span>
                            </div>
                        </div>

                        <div className="grid gap-6 xl:grid-cols-4">
                            <section className="space-y-5">
                                <div className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-700">To do</div>
                                <div className="space-y-4">
                                
                                    {tasks.filter(task => task.status === 'To do').map((task) => (
                                       
                                        <Tasks key={task.id} id={task.id} category={task.category} title={task.title} description={task.description} icon={task.icon} deleteTask={deleteTask} />
                                    ))}
                                   
                                </div>
                            </section>

                            <section className="space-y-5">
                                <div className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-700">In progress</div>
                                <div className="space-y-4">
                                  
                                   {tasks.filter(task => task.status === 'In progress').map((task)=> (
                                      
                                    <Tasks key = {task.id} id={task.id} category={task.category} title={task.title} description={task.description} icon={task.icon} deleteTask={deleteTask}/>
))}
                                   </div>
                            </section>

                            <section className="space-y-5">
                                <div className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-700">In review</div>
                                <div className="space-y-4">
                                 {tasks.filter(task=> task.status === 'In review').map ((task)=>(
                                       
                                   <Tasks key = {task.id} id={task.id} category= {task.category} title={task.title} description= {task.description} icon= {task.icon} deleteTask={deleteTask}/>
))}
                                    </div>
                            </section>

                            <section className="space-y-5">
                                <div className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-700">Completed</div>
                                <div className="space-y-4">
                                   {tasks.filter(task=> task.status === 'Completed').map((task)=>(
                                   
                                  <Tasks key={task.id} id={task.id} category={task.category} title= {task.title} description={task.description} icon={task.icon} deleteTask={deleteTask}/>
))}
                                   </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
export default TaskDashboard;