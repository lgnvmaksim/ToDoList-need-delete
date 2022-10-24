import React from "react";
import {FilteredType} from "./App";


type TodolistPropsType={
    title: string
    tasks: Array<ObjectType>
    removeTask:(taskId:number)=>void
    filteredTasks:(filterValue:FilteredType)=>void
}

type ObjectType={
    id: number
    title: string
    isDone: boolean
}

export const Todolist=(props: TodolistPropsType)=>{
    return(
    <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((el)=>{
                return(
                    <li key={el.id}>
                        <button onClick={()=>props.removeTask(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span></li>
                )})}
        </ul>
        <div>
            <button onClick={()=>{props.filteredTasks('All')}}>All</button>
            <button onClick={()=>{props.filteredTasks('Active')}}>Active</button>
            <button onClick={()=>{props.filteredTasks('Completed')}}>Completed</button>
        </div>
    </div>
    )
}
