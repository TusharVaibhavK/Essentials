import React from 'react'

const TasksLists = ({ tasks,setTasks }) => {

    function DeleteItem(id){
// setTasks(tasks.filter(task=>id!==task.id));
        setTasks(tasks.filter((task)=>id!==task.id));
    }

  return (
    <div>
        <ul>
            {tasks.map((task) => {
            
                return (
                    <li key={task.id}>
                        {task.id} - {task.newtask} 
                        <button onClick={()=>DeleteItem(task.id)}>delete</button>
                    
                     </li>
                );
            })}
        </ul>
    
    </div>
  )
}

export default TasksLists

