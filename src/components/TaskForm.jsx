import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        createTask({
            title,
            description
        })
        setTitle('');
        setDescription('');
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
                <h1 className="text-2xl font-bold text-white mb-3">Create your task</h1>
                <input placeholder="Write your homework"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="bg-gray-500 p-3 w-full mb-2"
                autoFocus/>
                <textarea placeholder="Write your description of task"
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-500 p-3 w-full mb-2"
                value={description}></textarea>
                <button className="bg-indigo-500 px-3 py-1 rounded-md text-white hover:bg-indigo-400">Save</button>
            </form>
        </div>
    );
}

export default TaskForm