import React, { useEffect, useState } from 'react'
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

    const [id, setId] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [isEdit, setIsEdit] = useState(true)

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem('wishlist'));
        if (list && list.length > 0)
            setTaskList(list)
    }, [])


    const saveListToLocalStorage = () => {
        localStorage.setItem("wishlist", JSON.stringify(taskList))
    }

    const addTaskToList = () => {

        const randomId = Math.floor(Math.random() * 100)
        const obj = {
            id: "",
            title: title,
            description: description,
            priority: priority
        }

        const newTaskList = [...taskList, obj]

        setTaskList([...taskList, obj])

        setTitle('');
        setDescription('');
        setPriority('');

        saveListToLocalStorage(newTaskList);
    }


    const removeTaskToList = (id) => {
        let index;

        taskList.forEach((task, i) => {
            if (task.id == id) {
                index = i
            }
        })

        const tempArray = taskList;
        tempArray.splice(index, 1);

        setTaskList([...tempArray]);

        saveListToLocalStorage(tempArray)
    };


    const setTaskEditable = (id) => {
        setIsEdit(true);
        setId(id);
        let currentEditTask;

        taskList.forEach((task) => {
            if (task.id === id) {
                currentEditTask = task;
            }
        })

        setTitle(currentEditTask.title);
        setDescription(currentEditTask.description);
        setPriority(currentEditTask.priority);
    }
    const updateTask = () => {
        let indexToUpdate;

        taskList.forEach((task, i) => {
            if (task.id === id) {
                indexToUpdate = i;
            }
        })

        const tempArray = taskList;
        tempArray[indexToUpdate] = {
            id: id,
            title: title,
            description: description,
            priority: priority
        }
        setTaskList([...tempArray])

        setId(0);
        setTitle('');
        setDescription('');
        setPriority('');
        setIsEdit(false);

        //   saveListToLocalStorage(tempArray);

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
                                    priority={priority}
                                    key={index}
                                    removeTaskToList={removeTaskToList}
                                    setTaskEditable={setTaskEditable}
                                />
                            );
                        })}
                </div>


                <div>
                    <h2 className='text-center'>
                    {isEdit ? `Update Task ${id} ` : "Add Task "}
                    </h2>
                    <div className='add-task-form-container'>
                        <form>

                            <input type="text"
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                                placeholder='Enter title'
                                className='task-input'

                            />


                            <input type="text"
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                                placeholder='Enter Description'
                                className='task-input'
                            />


                            <input type="text"
                                value={priority}
                                onChange={(e) => {
                                    setPriority(e.target.value)
                                }}
                                placeholder='Enter Priority'
                                className='task-input'

                            />


                            <div className="btn-container">
                                <button
                                    type="button"
                                    className="btn-add-task"
                                    onClick={() => {
                                        isEdit ? updateTask() : addTaskToList()
                                    }}>
                                    {isEdit ? 'Update' : 'Add'}
                                </button>
                                </div>



                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home