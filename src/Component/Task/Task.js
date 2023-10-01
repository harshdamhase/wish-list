import React from 'react'
import './Task.css'

const Task = ({id,title,description,priority,removeTaskToList}) => {
return (
    <div className='task-container'>
        <h1 className='task-title'>{title}</h1>

        <p className='task-description'>{description}</p>

        <span className='task-priority'>{priority}</span>
        <span className='task-delete-icon'
        onClick={()=>{
            removeTaskToList(id);
        }}
        
        >
            
            🗑️</span>

    </div>
)}

export default Task;