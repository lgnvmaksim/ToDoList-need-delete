import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";
import {Button} from "./Components/Button";


export type FilteredType= 'All'| 'Completed'| 'Active'

function App() {
    const title1 = "What to learn -1"


    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    const addTask = (newTitle: string) =>{
      const newTask =   {id: v1(), title: newTitle, isDone: false}
        setTasks([newTask,...tasks])
    }

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }

    let[filtered, setFiltered] = useState('All')
    let afterFilterTasks = tasks
    if (filtered === 'Active') {
        afterFilterTasks = tasks.filter(el => !el.isDone)
    }

    if (filtered === 'Completed') {
        afterFilterTasks = tasks.filter(el => el.isDone)
    }

    const filteredTasks = (filterValue: FilteredType) => {
        setFiltered(filterValue)
    }


    return (
        <div className="App">
            <Todolist
                title={title1}
                tasks={afterFilterTasks}
                removeTask={removeTask}
                filteredTasks={filteredTasks}
                addTask = {addTask}
            />
            {/*<Button/>*/}

        </div>
    );
}

export default App;
