import { useState } from 'react'
import './App.css'
import AddTasks from './addTasks'
import TasksLists from './tasksLists'

function App() {

  const[tasks,setTasks] = useState([])
  
  return (
    <>
      <AddTasks tasks={tasks} setTasks={setTasks} />
      <TasksLists tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
