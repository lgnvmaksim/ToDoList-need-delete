import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";


export type FilteredType= 'All'| 'Completed'| 'Active'

function App() {
    const title1 = "What to learn -1"

    // let tasks = [
    //     {id: 1, title: "HTML&CSS", isDone: true},
    //     {id: 2, title: "JS", isDone: true},
    //     {id: 3, title: "ReactJS", isDone: false},
    //     {id: 4, title: "ReactJS", isDone: false}
    // ]


    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS", isDone: false}
    ])


    const removeTask = (taskId: number) => {
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
            />
        </div>
    );
}

export default App;
