import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([])

	function createTask(task) {
		//Add item to the array after the items 
		setTasks([...tasks, {
			id: tasks.length,
			title: task.title,
			description: task.description
		}])
	}

	function deleteTask(taskId) {
		//filter an array and remove the card that the id is selected
		setTasks(tasks.filter(task => task.id !== taskId))
	}

	useEffect(() =>{
		setTasks(data)
	}, [])

	return (
		<TaskContext.Provider value={{
			tasks,
			deleteTask,
			createTask,
		}}>
			{props.children}
		</TaskContext.Provider>
	)
}