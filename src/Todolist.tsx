import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilteredType} from "./App";
import {Button} from "./Components/Button";


type TodolistPropsType = {
    title: string
    tasks: Array<ObjectType>
    removeTask: (taskId: string) => void
    filteredTasks: (filterValue: FilteredType) => void
    addTask: (newTitle: string) => void
}

type ObjectType = {
    id: string
    title: string
    isDone: boolean
}

export const Todolist = (props: TodolistPropsType) => {

    let [newTitle, setNewTitle] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }

    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }

    const removeTaskHandler = (e: string) => {
        props.removeTask(e)
    }

    const changeFilterHandler=(filterValue:FilteredType)=>{
        props.filteredTasks(filterValue)
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTitle} onKeyDown={onKeyHandler} onChange={onChangeHandler}/>
                {/*<button onClick={addTaskHandler}>+</button>*/}
                <Button name={'+'} callBack={addTaskHandler}/>
            </div>
            <ul>
                {props.tasks.map((el) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            {/*<button onClick={() => removeTaskHandler(el.id)}>X</button>*/}
                            <Button name={'X'} callBack={()=>{removeTaskHandler(el.id)}}/>
                            </li>
                    )
                })}
            </ul>
            <div>
                {/*<button onClick={()=>changeFilterHandler('All')}>All</button>*/}
                {/*<button onClick={()=>changeFilterHandler('Active')}>Active</button>*/}
                {/*<button onClick={()=>changeFilterHandler('Completed')}>Completed</button>*/}
                <Button name={'All'} callBack={()=>changeFilterHandler('All')}/>
                <Button name={'Active'} callBack={()=>changeFilterHandler('Active')}/>
                <Button name={'Completed'} callBack={()=>changeFilterHandler('Completed')}/>
            </div>
        </div>
    )
}
