
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
    return(
        <>
        <div className="section">
            <h1>What's new Today?</h1>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Enter your task" value={taskTitle} onChange={(e)=> setTaskTitle(e.target.value)} />
                <textarea placeholder=" Enter the description" value={description} onChange={(e)=> setDescription(e.target.value)} />
                <input type="text" placeholder="Enter the category" value={category} onChange={(e)=> setCategory(e.target.value)} />
                <select value={status} onChange={(e)=> setStatus(e.target.value)}>
                    <option value="">Select status</option>
                    <option value="To do">To do</option>
                    <option value="In progress">In progress</option>
                    <option value="In review">In review</option>
                    <option value="Completed">Completed</option>
                </select>
                <button type="submit">Add Task</button>
            </form>
        </div>
        </>
    )

}
export default AddTask