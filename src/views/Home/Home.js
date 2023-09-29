import React, { useState } from 'react'
import './Home.css'
import Task from "./../../Component/Task/Task";

const Home = () => {
    const [taskList, setTaskList] = useState([
        {
            id: 1,
            title: "Submit Assignment",
            description: "Only in three days",
            priority: "very high",
        },
        {
            id: 2,
            title: "Good Night",
            description: "so jaaoo",
            priority: "high",
        },
    ]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');

    const addTaskToList = () => {

        const randomId = Math.floor(Math.random() * 100)
        const obj = {
            id: "",
            title: title,
            description: description,
            priority: priority
        }
        setTaskList([...taskList, obj])
    }


    return (
        <div className='container'>
            <h1 className='app-title'>Wishlist💫</h1>

            <div className='todo-flex-container'>
                <div >
                    <h2 className='text-center'>Show list</h2>
                    {
                        taskList.map((taskItem, index) => {
                            const { id, title, description, priority } = taskItem;

                            return (
                                <Task
                                    id={id}
                                    title={title}
                                    description={description}
                                    priority={priority} />
                            );
                        })}
                </div>


                <div>
                    <h2 className='text-center'>Add list </h2>
                    <div className='add-task-form-container'>
                        <h3>Show me title: {title}</h3>
                        <form>

                            <input type="text"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                                placeholder='Enter title'
                                className='task-input'

                            />
                            <br />
                            <br />


                            <input type="text"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                placeholder='Enter Description'
                                className='task-input'
                            />
                            <br />
                            <br />


                            <input type="text"
                                value={priority}
                                onChange={(e) => {
                                    setPriority(e.target.value)
                                }}
                                placeholder='Enter Priority'
                                className='task-input'

                            />
                            <br />
                            <br />

                            <button className='add-task'
                                type='button'
                                onClick={addTaskToList}
                            >Add task</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home