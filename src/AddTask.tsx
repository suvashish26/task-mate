
import { useState } from "react";


interface AddTaskProps {
    addTask: (category: string,status: string, title: string, description: string) => void;
   
}
function AddTask({addTask}: AddTaskProps){
    
    const [taskTitle, setTaskTitle]= useState('');
    const [description, setDescription]= useState('')
    const [category, setCategory]= useState('')
    const [status, setStatus]= useState('')
    function handlesubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        // console.log(taskTitle, description, category, status)
        if (!category.trim()) return; // Prevent empty tasks
        if (!status.trim()) return; // Prevent empty tasks
        if (!taskTitle.trim()) return; // Prevent empty tasks
        if (!description.trim()) return; // Prevent empty tasks
        addTask(category, status, taskTitle, description); // Call the function passed down from App
        setTaskTitle("");   // Clear the input
        setDescription("");
        setCategory("");
        setStatus("");
    }
    return (
        <div className="mx-auto max-w-xl rounded-3xl bg-white/90 p-6 shadow-xl ring-1 ring-slate-200 backdrop-blur-sm">
            <h1 className="mb-5 text-3xl font-semibold text-slate-900">What's new today?</h1>
            <form onSubmit={handlesubmit} className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
                <textarea
                    placeholder="Enter the description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[120px] w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
                <input
                    type="text"
                    placeholder="Enter the category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                >
                    <option value="">Select status</option>
                    <option value="To do">To do</option>
                    <option value="In progress">In progress</option>
                    <option value="In review">In review</option>
                    <option value="Completed">Completed</option>
                </select>
                <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:from-violet-600 hover:via-indigo-600 hover:to-sky-600 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
                >
                    Add Task
                </button>
            </form>
        </div>
    )

}
export default AddTask