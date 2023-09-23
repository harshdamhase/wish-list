import React, { useState } from 'react'
import './Home.css'

const  Home = () => {

const {taskList, setTaskList} = useState();
{
    id: 1,
    title: 'task',
    description: 'good',
    priority:'high'
}

// function Home() {
//     const [taskList, setTaskList] = useState([
//       { id: 1, title: "Task 1", description: "description 1 ", priority: "high" },
//     ]);
  

  return (
    <div className='container'>
    <h1 className='app-title'>Wishlist💫</h1>

    <div className='todo-flex-container'>
        <div >
            <h2 className='text-center'>show list</h2>
            {
                taskList.map((taskItem, index)=>{
                    const {id, title, description, priority} = taskItem;

                    return <Task id={id} title={title} description={description} priority={priority}/>
                })
                }

        </div>

        <div  className='text-center'> 
            Add list
        </div>
    </div>
    </div>
  )
}

export default Home