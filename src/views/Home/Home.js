import React, { useState } from 'react'
import './Home.css'
import Task from '../../Component/Task/Task'

function Home() {

const Home = () => {
    const [taskList, setTaskList] = useState([
        {
        
            id: 1,
            title: 'go to market',
            description: 'Buy alu and kaju',
            priority: 'medium'
        },
        {
            id: 3,
            title: 'build project',
            description: 'post on linkdin',
            priority: 'very high'
        }
    ])

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('');
}

    return (
        <div className='container'>
            <h1>Wishlist</h1>
            <div>
                <div>
                    <h2>Show List</h2>
                    {
                        taskList.map(taskItem, index)=>{

      const {id, title, description, priority} = taskItem;
             
                    return <Task id={id} title={title} description={description} priority={priority} />

                    })
        }
                </div>

<div>
    <h2 className='text-center'>Add-list</h2>
    <div className='add-task-form-container'>
        <form>

            <input type='text'value={title} 
            onChange={(e)=>{
                setTitle(e.target.value)
            }}
            placeholder='Enter title'
            />

              description: 
            <input type='text'
            value={description}
             onChange={(e)=>{
             setDescription(e.target.value)
            }}
            placeholder='Enter Description'
            />

            <input type='text'
            value={priority} 
             onChange={(e)=>{
            setPriority(e.target.value)
            }}
            placeholder='Enter priority'
            className='task-input'
            />
        </form>

    </div>
</div>
</div>
</div>
    )
}

export default Home